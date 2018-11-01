(function(){
  var nick = userinfo.nick,
    signature = userinfo.signature,
    userName = userinfo.userName,
    name = userinfo.name,
		defaultText = "--";

	if(isNull(nick) || nick == "") { nick = name;}
	if(isNull(signature) || signature == "") {signature = defaultText;}
	if(isNull(userName) || userName == "") {
		userName = defaultText;
	}else {
		userName = userName.substring(0, 4) + "  " + userName.substring(4,8) + "  " + userName.substring(8);
	}

	$("#nick").text(nick);
	$("#signature").text(signature);
	$("#weilianhao").text(userName);
	$("#loginout").click(function() {
    if(isNull(sessionId)){
      storage.clear();
      window.parent.location.href = "login.html";
    }else{
      var sessdata={
        "sessionId":sessionId,
        "syn": true
      };
      $.ajax({
        type: "POST",
        data:JSON.stringify(sessdata),
        url: outUserInfo,
        contentType: 'application/json; charset=utf-8',
        dataType: "json",
        success:function(data){
          if(data.status==1){
            var accountMsg;
            if (window.localStorage.getItem('REMEMBER_ACCOUNT_MSG'+localast)) {
              accountMsg= window.localStorage.getItem('REMEMBER_ACCOUNT_MSG'+localast)|| '';
            }
            storage.clear();
            window.localStorage.setItem('REMEMBER_ACCOUNT_MSG'+localast,accountMsg || '')
            window.parent.location.href = "login.html";
          }else{
            if(data.code=="CONNECTION_FAIL"){  //表示当前session已经失效，当作退出成功处理，跳转到登录界面，不提示
              var accountMsg;
              if (window.localStorage.getItem('REMEMBER_ACCOUNT_MSG'+localast)) {
                accountMsg= window.localStorage.getItem('REMEMBER_ACCOUNT_MSG'+localast)|| '';
              }
              storage.clear();
              window.localStorage.setItem('REMEMBER_ACCOUNT_MSG'+localast,accountMsg || '')
              window.parent.location.href = "login.html";

            }else if(isNull(data.code)){
              Alert.show("应用异常，请稍后重试");
            }else{
              Alert.show(data.message);
            }
          }
        },
        error: function(msg) {
          Alert.show("网络异常，请刷新重试");
        }
      });
    }
	});

})();