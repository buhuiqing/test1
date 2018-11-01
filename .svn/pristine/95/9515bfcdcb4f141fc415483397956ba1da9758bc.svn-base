
$(function(){
    var storage = window.localStorage;
    var loginLogo = JSON.parse(storage.getItem("authentication"+localast)).loginlogo;
    $("#loginlogo").attr("src",loginLogo);
    $("#errorbtn").click(function () {
    $(".wuqianximg").css("display","none");
    $(".wuqianx").css("display","none");
  })
    $("#banklogin").click(function(){
    //window.location.href="login.html";
    $(window.parent.document.getElementById('loginDom')).css("display", "none");
    $(window.parent.document.getElementById('authority')).css("display", "block");
  })
    $(".goTwo").click(function() {  //点击跳转忘记密码
    $("#login-body-id").css("display","none");
    $("#authority").css("display","none");
    $("#footer").css("display","none");
    $("#loginDom").css("display","block");
    if($(this).hasClass('phone')){
        var pl = 'phone'
    }
    else if($(this).hasClass('mailbox')){
        var pl = 'mail'
    }
    $(this).attr("href","forgotpassword2.html?type="+pl);
  });
    $("#next1").click(function() {  //点击跳转忘记密码
        var self = $(this);
        $("#login-body-id").css("display","none");
        $("#authority").css("display","none");
        $("#footer").css("display","none");
        $("#loginDom").css("display","block");
        var enterpriseCode = JSON.parse(storage.getItem("enterall"+localast)).enterpriseCode;
        var appCode = JSON.parse(storage.getItem("enterall"+localast)).appCode;
        var prefix = JSON.parse(storage.getItem("enterall"+localast)).prefix;
        // var loginUrl = LoginUrl;
        //先校验格式
        var regPhone = /^1[34578][0-9]{9}$/;
        var regMail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/; ;
        var checkStr = $('.checkPhoneEmail').val().trim();

        if(!checkStr){
            if(params.type==='phone'){
                //phone
                $(".wuqianx p").html('手机号码不能为空');
            }else if (params.type==='mail'){
                $(".wuqianx p").html('邮箱账号不能为空');
            }
            $(".wuqianximg").css("display","block");
            $(".wuqianx").css("display","block");
            return false;
        }
        if(checkStr.indexOf('@')<=-1 && !regPhone.test(checkStr)){
            //return alert('手机号格式不在正确')
          $(".wuqianx p").html('手机号格式不正确');
          $(".wuqianximg").css("display","block");
          $(".wuqianx").css("display","block");
          return false;
        }
        if(checkStr.indexOf('@')>-1 && !regMail.test(checkStr)){
            //return alert('邮箱格式不正确')
          $(".wuqianx p").html('邮箱格式不正确');
          $(".wuqianximg").css("display","block");
          $(".wuqianx").css("display","block");
          return false;
        }
        //verificationcode
        if(!$('.verificationcode').val().trim()){
            $(".wuqianx p").html('验证码不能为空');
            $(".wuqianximg").css("display","block");
            $(".wuqianx").css("display","block");
            return;
        }
        var res = verifyCode.validate(document.getElementById("code_input").value);
        if(res){
            // return alert("验证码正确");
        // var loginurlParam = "?enterpriseCode=" + enterpriseCode + "&appCode=" + appCode+"&MobileMail="+checkStr;
            if(checkStr.indexOf('@')> -1 ){
                var urlMinddle = "/account_auth_admin/personal-api.findPasswordStepOneCode"; /*修改密码*/
                var sendData = {
                    email:checkStr,
                    enterpriseCode:enterpriseCode,
                    clientIp:'127.0.0.1',
                    appCode:appCode,
                    prefix:prefix
                };
            }
            else {
                var urlMinddle = "/account_auth_admin/personal-api.findPasswordStepOne"; /*修改密码*/
                var sendData = {
                    mobile:checkStr,
                    enterpriseCode:enterpriseCode,
                    clientIp:'127.0.0.1',
                    appCode:appCode,
                    prefix:prefix
                };
            }
            $.ajax({
                type: "POST",
                data: JSON.stringify(sendData),
                url: urlMinddle,
                async: false,
                contentType: 'application/json; charset=utf-8',
                dataType: "json",
                success: function (data) {
                    if(data.status == 2 ){
                        //  return alert(data.message);
                        $(".wuqianx p").html(data.message);
                        $(".wuqianximg").css("display","block");
                        $(".wuqianx").css("display","block");
                    }
                    else if(data.status == 1 ){
                        // var loginurlParam = "?data="+data.data+'&phoneEmail='+$('#forgot-account').val()+'&enterpriseCode='+params.enterpriseCode+'&clientIp='+'127.0.0.1'+'&appCode='+params.appCode;
                        var loginurlParam = "?data="+data.data+'&phoneEmail='+checkStr+'&enterpriseCode='+enterpriseCode+'&clientIp='+'127.0.0.1'+'&appCode='+appCode+'&prefix='+prefix;
                        self.attr("href","forgotpassword4.html"+loginurlParam);
                    }
                }
            })
        }else{
            //return alert("验证码错误");
          $(".wuqianx p").html('验证码错误');
          $(".wuqianximg").css("display","block");
          $(".wuqianx").css("display","block");
          return;
        }

    });

    $("#forgotnext2").click(function() {  //点击跳转忘记密码
      var self = $(this);
    $("#login-body-id").css("display","none");
    $("#authority").css("display","none");
    $("#footer").css("display","none");
    $("#loginDom").css("display","block");
    var enterpriseCode = JSON.parse(storage.getItem("enterall"+localast)).enterpriseCode;
    var appCode = JSON.parse(storage.getItem("enterall"+localast)).appCode;
    // var loginUrl = LoginUrl;
    if(params.MobileMail.indexOf('@')> -1 ){
        var urlMinddle = "/account_auth_admin/personal-api.findPasswordStepOneCode"; /*修改密码*/
        var sendData = {
            email:$('#forgot-account').val(),
            enterpriseCode:params.enterpriseCode,
            clientIp:'127.0.0.1',
            appCode:params.appCode
        };
    }else {
        var urlMinddle = "/account_auth_admin/personal-api.findPasswordStepOne"; /*修改密码*/
        var sendData = {
            mobile:$('#forgot-account').val(),
            enterpriseCode:params.enterpriseCode,
            clientIp:'127.0.0.1',
            appCode:params.appCode
        };
    }


      $.ajax({
          type: "POST",
          data: JSON.stringify(sendData),
          url: urlMinddle,
          async: false,
          contentType: 'application/json; charset=utf-8',
          dataType: "json",
          success: function (data) {
              if(data.status == 2 ){
                  //  return alert(data.message);
                $(".wuqianx p").html(data.message);
                $(".wuqianximg").css("display","block");
                $(".wuqianx").css("display","block");
              }else if(data.status == 1 ){
                  var loginurlParam = "?data="+data.data+'&phoneEmail='+$('#forgot-account').val()+'&enterpriseCode='+params.enterpriseCode+'&clientIp='+'127.0.0.1'+'&appCode='+params.appCode;
                  self.attr("href","forgotpassword4.html"+loginurlParam);
              }
          }
      })
    // $(this).attr("href","forgotpassword4.html"+loginurlParam);
    //location.href = "./forgotpassword4.html"
  });
})
