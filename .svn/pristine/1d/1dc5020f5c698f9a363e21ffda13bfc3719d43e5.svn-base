(function(){
	$("#centerSecurityBtn").click(function(){
    if(isNull(sessionId)){
			Alert.show("用户信息获取失败，请重新登录");
      storage.clear();
      window.parent.location.href = "login.html";
    }
		var oldPassword = $("#oldPassword").val(),
			newPassword = $("#newPassword").val(),
			enterNewPassword = $("#enterNewPassword").val(),
			sign = md5(JSON.stringify(parameter()));
    if(oldPassword==""){
      Alert.show("原始密码不能为空");
      return;
    }
    if(enterNewPassword=="" || newPassword==""){
      Alert.show("新密码不能为空");
      return;
    }
    if(newPassword !== enterNewPassword) {
      Alert.show("两次密码输入不一致");
      return;
    }
		var url =updPwdMethod;

		$.ajax({
			url: url,
			dataType: "json",
			type: "post",
			contentType: "application/json; charset=UTF-8",
			data: JSON.stringify({
				newPassword: newPassword,
				oldPassword: oldPassword,
				sessionId: sessionId,
				sign:sign
			}),
			success:function(msg) {
				changeFlag = true;
				var responseStatus = msg.status, responseMessage = msg.message;
				if (responseStatus == 1 && responseMessage == "处理成功") {
					Alert.show("修改密码成功");
					changeFlag = false;
					setTimeout(function() {
            storage.clear();
            window.location.href = "login.html";
					}, 1500);
				} else {
          if(msg.code=="CONNECTION_FAIL"){
						Alert.show("用户已被下线，请重新登录");
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
				newPassword: newPassword,
				oldPassword: oldPassword,
				sessionId: sessionId
			};
		}
	});

	$("#centerSecurityBody input").change(function() {
		changeFlag = true;
	});
})();
