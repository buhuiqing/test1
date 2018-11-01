(function(){
  var	nick = userinfo.nick,
    userName = userinfo.userName,
    sex = userinfo.sex,
    signature = userinfo.signature,
    mobile = userinfo.mobile,
    name = userinfo.name,
    address = userinfo.address;
		
	if(isNull(nick)) {nick = "";}
	if(isNull(signature)) {signature = "";}
	if(isNull(address)) { address = "";}
	if(isNull(userName)) {
		userName = "";
	} else {
		userName = userName.substring(0, 4) + " " + userName.substring(4, 8) + " " + userName.substring(8);
	}

	if(isNull(mobile)) {
		mobile = "";
	}else {
		mobile = mobile.substring(0, 3) + " **** " +mobile.substring(7, 11);
	}

	$("#nick-twolevel").val(nick);
	$("#weilianhao-twolevel").val(userName);
	$("#signature-twolevel").val(signature);
	$("#mobile-twolevel").val(mobile);
	$("#address-twolevel").val(address);

	if(sex === true || sex === "true") {
		$("#man").attr("checked",true);
	} 
	if(sex === false || sex === "false") {
		$("#woman").attr("checked",true);
	}

	var isClick = sex;
	$("#man").click(function () { 
		$(this).css({"background-color":"#068fe4","outline":"none","color":"#ffffff"});
		$("#woman").css({"background-color":"#dadede","color":"black"});
		isClick = true, changeFlag = true; 
	});
	$("#woman").click(function () { 
		$(this).css({"background-color":"#068fe4","outline":"none","color":"#ffffff"});
		$("#man").css({"background-color":"#dadede","color":"black"});
		isClick = false, changeFlag = true;
	});
	
	var editPhone = getQueryString("fileName");
	if(!isNull(editPhone)) {
		$("#large-touxiang-id").attr("src", getFileMethod + editPhone);
		changeFlag = true;
	} else {
		editPhone = storage.getItem("photo");
	}

	$('#centerDataBtn').click(function() {
    if(isNull(sessionId)){
			Alert.show("用户信息获取失败，请重新登录");
      storage.clear();
      window.parent.location.href = "login.html";
    }
		if(changeFlag == false) {
			// Alert.show("没有修改信息,请修改信息后再进行保存");
			return;
		}
		var url = updInfoMethod;/*userInfoService + updInfoMethod;*/

		var editNick = $.trim($("#nick-twolevel").val()),
			editSignature = $.trim($("#signature-twolevel").val()),
			editMobile = $.trim($("#mobile-twolevel").val()),
			editAddress = $.trim($("#address-twolevel").val());
		if(editNick.length > 32) {
			Alert.show("昵称长度最长为32位,超过限制");
			return;
		}

		if(editSignature.length > 128) {
			Alert.show("个性签名长度最长为128位,超过限制");
			return;
		}

		if(editAddress.length > 128) {
			Alert.show("地址长度最长为128位,超过限制");
			return;
		}

		var sign = Encrypt(JSON.stringify(parameter()));
		$.ajax({
			url:url,
			type:"post",
			dataType: "json",
			contentType: "application/json; charset=UTF-8",
			data: JSON.stringify({
				address: editAddress,
				encryptCode:encryptCode,
				nick: editNick,
				photo:editPhone,
				sessionId: sessionId,
				sex: isClick,
				sign: sign,
				name: name,
				signature: editSignature
			}),
			success:function(msg) {
				var responseStatus = msg.status,responseMessage = msg.message;
				if (responseStatus == 1 && responseMessage == "处理成功") {
          var datamsg = JSON.parse(storage.getItem("userData"+localast));
          datamsg.user.address = editAddress;
          datamsg.user.nick = editNick;
          datamsg.user.photo = editPhone;
          datamsg.user.signature = editSignature;
          datamsg.user.sex = isClick;
          datamsg.user.mobile = mobile;
          storage.setItem("userData"+localast,JSON.stringify(datamsg));
					Alert.show("修改成功");
					changeFlag = false;
					setTimeout(function() {
						location.href = "personal-center.html";
		            }, 1500);
				} else {
          if(msg.code=="CONNECTION_FAIL"){
						Alert.show("用户已被下线，请重新登录");
						storage.clear();
						window.parent.location.href = "login.html";
					}else if(msg.code=="MOBILE_IN_USE"){
						Alert.show("手机号码已被使用");
					}else if(isNull(msg.code)){
            Alert.show("应用异常，请稍后重试!");
          }else{
						Alert.show(responseMessage);
					}
				}
			},
			error:function(msg) {
				Alert.show("网络异常，请刷新重试");
			}
		});

		function parameter() {
			return {
				address:editAddress,
				encryptCode:encryptCode,
				nick: editNick,
				photo:editPhone,
				sessionId: sessionId,
				sex: isClick,
				signature: editSignature
			};
		}
	});

	//鼠标悬停
	$('#parentDiv').mouseenter(function() {
		$("#large-touxiang-id").css("opacity", "0.4");
		$("#editimgDiv").css("display", "block");
	});

	//鼠标移出
	$('#parentDiv').mouseleave(function() {
		$("#large-touxiang-id").css("opacity", "1");
		$("#editimgDiv").css("display", "none");
	});

	$("#centerDataBody input").change(function() {
		changeFlag = true;
	});
  $("#centerDataBody textarea").change(function() {
    changeFlag = true;
  });
})();