var localast = locaLast;
(function () {/*登录*/
  var enterpriseCode = "LANHUOYI", //企业编码
    appCode = "XIANGPU", //应用系统编码
    orgName = enterpriseCode, //企业编码
    env = "PC2", //系统环境配置 PC1正式环境，PC2测试环境，PC3开发环境
    version = "0.6", //系统版本号
    prefix = "XYXP",//短信前缀标识
    encryptCode = "1234567899876543",
    clientIp = "127.0.0.1";
  if (isNull(JSON.parse(storage.getItem("enterall" + localast)))) {
    window.localStorage.setItem('enterall' + localast, JSON.stringify({
      enterpriseCode: enterpriseCode,
      appCode: appCode,
      orgName: orgName,
      env: env,
      version: version,
      prefix: prefix,
      encryptCode: encryptCode,
      clientIp: clientIp
    }));
  }
  $(document).ready(function () {
    if (window.localStorage.getItem('REMEMBER_ACCOUNT_MSG' + localast)) {
      $("#rmbUser").attr("checked", true);
      var accountMsg = JSON.parse(window.localStorage.getItem('REMEMBER_ACCOUNT_MSG' + localast)) || {};
      $("#account").val(accountMsg.account);
      $("#password").val(accountMsg.password);
    }
  });

  $("#btn").click(function () {
    var url = loginMethod;
    var account = $.trim($("#account").val()), //用户名
      password = $.trim($("#password").val()), //密码
      password = md5(password);//客户端ip
    sign = Encrypt(JSON.stringify(parameter()));
    sessionStorage.setItem('account' + localast, account);
    if (account == "") {
      Alert.show("账号不能为空");
      return false;
    }
    if (password == "") {
      Alert.show("密码不能为空");
      return false;
    }
    if ($("#rmbUser").prop("checked")) {
      window.localStorage.setItem('REMEMBER_ACCOUNT_MSG' + localast, JSON.stringify({
        account: $.trim($("#account").val()),
        password: $.trim($("#password").val())
      }));
    } else {
      window.localStorage.setItem('REMEMBER_ACCOUNT_MSG' + localast, '');
    }
    if (isNull(JSON.parse(storage.getItem("enterall" + localast)))) {
      location.reload();
    } else {
      var entrance = JSON.parse(storage.getItem("enterall" + localast)).entranceType;
    }
    $.ajax({
      url: url, //"config1.json",
      timeout: 5000,
      type: "post", //type:"get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({
        account: account,
        appCode: appCode,
        clientIp: clientIp,
        encryptCode: encryptCode,
        enterpriseCode: enterpriseCode,
        entrance: entrance,
        password: password,
        sign: sign,
      }),
      success: function (msg) {
        var responseStatus = msg.status,
          responseMessage = msg.message;
        var userData;
        if (msg.data !== null) {
          userData = msg.data;/*用户中心返回来的数据*/
        }
        if (responseStatus == 1 && responseMessage == "处理成功") {
          storage.setItem("userData" + localast, JSON.stringify(userData));
          var sessionStorage = window.sessionStorage;
          sessionStorage.setItem("openNum" + localast, "1");
          if (msg.data.spatial != null) {
            var dlwelianhai = msg.data.spatial[0].haspower;
            var dlwelianbao = msg.data.spatial[1].haspower;
            var dlwelianwa = msg.data.spatial[2].haspower;
          }
          if (entrance == "weilianhai") { //点击微连娃的时候 下一步判断它是不是有权限 如果没有权限就提示用户权限  如果能登录存储微连海、微连宝、微连娃的权限在小圆点里面使用
            if (dlwelianhai == 1) {
              var loginconcentmsg = JSON.parse(storage.getItem("enterall" + localast));
              loginconcentmsg.loginconcent = "";
              storage.setItem("enterall" + localast, JSON.stringify(loginconcentmsg));
              location.href = 'index.html';
            } else {
              Alert.show("用户无权限登录");
            }
          } else if (entrance == "weilianbao") { //点击微连娃的时候 下一步判断它是不是有权限 如果没有权限就提示用户权限  如果能登录存储微连海、微连宝、微连娃的权限在小圆点里面使用
            if (dlwelianbao == 1) {
              location.href = 'index.html';
            } else {
              Alert.show("用户无权限登录");
            }
          } else if (entrance == "weilianwa") { //点击微连娃的时候 下一步判断它是不是有权限 如果没有权限就提示用户权限  如果能登录存储微连海、微连宝、微连娃的权限在小圆点里面使用
            if (dlwelianwa == 1) {
              location.href = 'index.html';
            } else {
              Alert.show("用户无权限登录");
            }
          }
        } else {
          if(msg.code=="APP_NO_FIND"){
            Alert.show("系统错误，请联系管理员");
          }else if(msg.code=="UNAUTHORIZED_ACCESS_APP"){
            Alert.show("无法识别用户身份");
          }else if(msg.code=="ENTERPRISE_NOT_ENABLED"){
            Alert.show("系统错误，请联系管理员");
          }else if(msg.code=="NO_EXISTS_ACCOUNT"){
            Alert.show("无法识别用户身份");
          }else if(msg.code=="PLEASE_MOBILE_EMAIL_LOGIN"){
            Alert.show("账号重复，请用手机或邮箱登录");
          }else if(msg.code=="USER_DISABLED"){
            Alert.show("该帐号已禁用，请联系管理员!");
          }else if(isNull(msg.code)){
            Alert.show("应用异常，请稍后重试!");
          }else{
            Alert.show(responseMessage);
          }
          
        }
      },
      error: function (msg) {
        Alert.show("网络异常，请刷新重试");
      }
    });

    //登录参数
    function parameter() {
      if (!isNull(JSON.parse(storage.getItem("enterall" + localast)))) {
        var entrance = JSON.parse(storage.getItem("enterall" + localast)).entranceType;
      }
      return {
        account: account,
        appCode: appCode,
        clientIp: clientIp,
        encryptCode: encryptCode,
        enterpriseCode: enterpriseCode,
        entrance: entrance,
        password: password,
      };
    }
  });

  /*按enter执行登录*/
  $("#login-body-id").keydown(function () {
    //Firefox
    if (document.addEventListener) {
      document.addEventListener("keypress", fireFoxKey, true);
    } else {
      document.attachEvent("onkeypress", ieKey);
    }
  });
  //ie,chrome=
  function ieKey(evt) {
    if (evt.keyCode == 13) {
      $("#btn").click();
    }
  }

  //火狐
  function fireFoxKey(evt) {
    if (evt.keyCode == 13) {
      $("#btn").click();
    }
  }

  $("#register").click(function () { //点击跳转注册页面
    $("#login-body-id").css("display", "none");
    $("#authority").css("display", "none");
    $("#footer").css("display", "none");
    $("#loginDom").css("display", "block");
    if (!isNull(JSON.parse(storage.getItem("enterall" + localast)))) {
      var enterpriseCode = JSON.parse(storage.getItem("enterall" + localast)).enterpriseCode;
      var appCode = JSON.parse(storage.getItem("enterall" + localast)).appCode;
    }
    var loginUrl = window.location.href;
    var loginurlParam = "?enterpriseCode=" + enterpriseCode + "&appCode=" + appCode + "&loginUrl=" + loginUrl + "&prefix=" + prefix;
    $(this).attr("href", registerHref + loginurlParam);
  }); //跳转到注册页面
  $("#forgotpas").click(function () { //点击跳转忘记密码
    $("#login-body-id").css("display", "none");
    $("#authority").css("display", "none");
    $("#footer").css("display", "none");
    $("#loginDom").css("display", "block");
    if (!isNull(JSON.parse(storage.getItem("enterall" + localast)))) {
      var enterpriseCode = JSON.parse(storage.getItem("enterall" + localast)).enterpriseCode;
      var appCode = JSON.parse(storage.getItem("enterall" + localast)).appCode;
    }
    var loginUrl = window.location.href;
    var loginurlParam = "?enterpriseCode=" + enterpriseCode + "&appCode=" + appCode + "&loginUrl=" + loginUrl + "&prefix=" + prefix;
    $(this).attr("href", "forgotpassword.html" + loginurlParam);
  }); //点击跳转忘记密码

  url = Authentication;
  if (!isNull(JSON.parse(storage.getItem("enterall" + localast)))) {
    orgName = JSON.parse(storage.getItem("enterall" + localast)).orgName; 
    version = JSON.parse(storage.getItem("enterall" + localast)).version;
    env = JSON.parse(storage.getItem("enterall" + localast)).env;
  }
  paramsObj = {
    orgName: orgName,
    version: version,
    env: env
  };
  authencmp();
  function authencmp() {
    url = Authentication;
    $.ajax({
      url: url,
      type: "post",
      dataType: "json",
      async: false,
      timeout: 1500,
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(paramsObj),
      success: function (response) {
        //window.localStorage.setItem('AuthConFig', JSON.stringify(response));
        var i = 0;
        if (response.data != null && response.data.length > 0) {
          storage.setItem("offnet" + localast, JSON.stringify({
            AuthConFig: response
          }));
          var webhomeUrl = $.trim(response.data[i].homeUrl) + "?actId=" + Math.ceil(Math.random() * 100 + 10000),
            //官网
            mallUrl = $.trim(response.data[i].mallUrl) + "?actId=" + Math.ceil(Math.random() * 100 + 10000),
            //商城
            weilianlUrl = $.trim(response.data[i].weilianlUrl),
            versionAbout = $.trim(response.data[i].versionAbout);
          $("#authori-img").attr("src", starttestaddress + "/" + response.data[i].authLogoDir);
          var loginlogo = starttestaddress + "/" + response.data[i].loginLogoDir;
          $("#loginlogo").attr("src",loginlogo);
          var indexlogo, aboutlogo;
          indexlogo = starttestaddress + "/" + response.data[i].indexLogoDir;
          aboutlogo = starttestaddress + "/" + response.data[i].aboutLogoDir;
          storage.setItem('authentication' + localast, JSON.stringify({
            webhomeUrl: webhomeUrl,
            mallUrl: mallUrl,
            weilianlUrl: weilianlUrl,
            versionAbout: versionAbout,
            indexlogo: indexlogo,
            loginlogo:loginlogo,
            aboutlogo: aboutlogo
          }));
        }else{
          if(isNull(response.code)){
            Alert.show("应用异常，请稍后重试!");
          }else{
            Alert.show(response.message);
          }
        }
      },
      error: function (responseErr) {
        if (!JSON.parse(storage.getItem("offnet" + localast)).AuthConFig) {
          Alert.show("网络异常，请刷新重试");
        } else {
          var response = JSON.parse(storage.getItem("offnet" + localast)).AuthConFig;
          var i = 0;
          if (response.data.length > 0) {
            var webhomeUrl = $.trim(response.data[i].homeUrl) + "?actId=" + Math.ceil(Math.random() * 100 + 10000),
              //官网
              mallUrl = $.trim(response.data[i].mallUrl) + "?actId=" + Math.ceil(Math.random() * 100 + 10000),
              //商城
              weilianlUrl = $.trim(response.data[i].weilianlUrl),
              versionAbout = $.trim(response.data[i].versionAbout);
            $("#authori-img").attr("src", starttestaddress + "/" + response.data[i].authLogoDir);
            var loginlogo = starttestaddress + "/" + response.data[i].loginLogoDir;
            $("#loginlogo").attr("src",loginlogo);
            var indexlogo, aboutlogo;
            indexlogo = starttestaddress + "/" + response.data[i].indexLogoDir;
            aboutlogo = starttestaddress + "/" + response.data[i].aboutLogoDir;
            storage.setItem('authentication' + localast, JSON.stringify({
              webhomeUrl: webhomeUrl,
              mallUrl: mallUrl,
              weilianlUrl: weilianlUrl,
              versionAbout: versionAbout,
              indexlogo: indexlogo,
              loginlogo:loginlogo,
              aboutlogo: aboutlogo
            }));
          }
        }
      }
    });
  }//鉴权连接图片获取
  $("#officialwebsite").click(function () {
    if (isNull(JSON.parse(storage.getItem("authentication" + localast)))) {
      location.reload();
    } else {
      var webhomeUrl = JSON.parse(storage.getItem("authentication" + localast)).webhomeUrl; //从登录页面传用户类型过来
      var starwebhomeUrl=webhomeUrl.substring(0,webhomeUrl.indexOf("?"));
      if(!starwebhomeUrl){
        Alert.show("此功能未开放");
        return;
      }
    } //从登录页面传用户类型过来
    if (isNull(JSON.parse(storage.getItem("userData" + localast)))) {
      losessionIdn = '';
    } else {
      var losessionIdn = JSON.parse(storage.getItem("userData" + localast)).user.sessionId;
    }
    if (losessionIdn) {
      $("#login-body-id").css("display", "none");
      $("#authority").css("display", "none");
      $("#footer").css("display", "none");
      $("#loginDom").css("display", "block");
      if ((typeof external != 'undefined') && (typeof external.OpenShopUrl != 'undefined')) {
        external.OpenShopUrl(webhomeUrl + "aaaaa");
        $("#dropIcon").css('display', 'block');
      } else {
        $("#loginDom").attr("src", webhomeUrl + "&sessionId=" + losessionIdn);
        $("#dropIcon").css('display', 'block');
        // $("#officialwebsite").attr("href",webhomeUrl+"?sessionId="+losessionIdn);
      }
    } else {
      $("#login-body-id").css("display", "none");
      $("#authority").css("display", "none");
      $("#footer").css("display", "none");
      $("#loginDom").css("display", "block");
      if ((typeof external != 'undefined') && (typeof external.OpenShopUrl != 'undefined')) {
        external.OpenShopUrl(webhomeUrl + "aaaaa");
        $("#dropIcon").css('display', 'block');
      } else {
        $("#loginDom").attr("src", webhomeUrl);
        // $("#officialwebsite").attr("href",webhomeUrl)
        $("#dropIcon").css('display', 'block');;
      }
    }
  }); //官网点击链接
  $("#shoppingmall").click(function () {
    if (isNull(JSON.parse(storage.getItem("authentication" + localast)))) {
      location.reload();
    } else {
      var mallUrl = JSON.parse(storage.getItem("authentication" + localast)).mallUrl; //从登录页面传用户类型过来
      var starmallUrl=mallUrl.substring(0,mallUrl.indexOf("?"));
      if(!starmallUrl){
        Alert.show("此功能未开放");
        return;
      }
    }
    if (isNull(JSON.parse(storage.getItem("userData" + localast)))) {
      losessionIdn = '';
    } else {
      var losessionIdn = JSON.parse(storage.getItem("userData" + localast)).user.sessionId;
    }
    if (losessionIdn) {
      $("#login-body-id").css("display", "none");
      $("#authority").css("display", "none");
      $("#footer").css("display", "none");
      $("#loginDom").css("display", "block");
      if ((typeof external != 'undefined') && (typeof external.OpenShopUrl != 'undefined')) {
        external.OpenShopUrl(mallUrl + "aaaaa");
        $("#dropIcon").css('display', 'block');
      } else {
        //$(this).attr("href",mallUrl+"&sessionId="+losessionIdn);
        $("#loginDom").attr("src", mallUrl + "&sessionId=" + losessionIdn);
        //$("#loginDom").attr('src',mallUrl+"?sessionId="+losessionIdn);
        $("#dropIcon").css('display', 'block');
      }
    } else {
      $("#login-body-id").css("display", "none");
      $("#authority").css("display", "none");
      $("#footer").css("display", "none");
      $("#loginDom").css("display", "block");
      if ((typeof external != 'undefined') && (typeof external.OpenShopUrl != 'undefined')) {
        external.OpenShopUrl(mallUrl + "aaaaa");
        $("#dropIcon").css('display', 'block');
      } else {
        $("#loginDom").attr("src", mallUrl);
        //$(this).attr("href",mallUrl);
        $("#dropIcon").css('display', 'block');
      }
    }
  }); //商城点击链接
  $("#microchain").click(function () {
    if (isNull(JSON.parse(storage.getItem("authentication" + localast)))) {
      location.reload();
    } else {
      var weilianlUrl = JSON.parse(storage.getItem("authentication" + localast)).weilianlUrl; //从登录页面传用户类型过来
    }
    if (weilianlUrl) {
      if ((typeof external != 'undefined') && (typeof external.OpenShopUrl != 'undefined')) {
        external.OpenShopUrl(weilianlUrl + "aaaaa");
      } else {
        $(this).attr("href", "#");
      }
    } else {
      event.preventDefault();
      $(this).attr("href", "#");
    }

  });

})();

//小圆点
$.ajax({ //小圆点数据请求
  url: "loginconfig.json",
  // "config.json",//,circleService+circleMethod,
  type: "get",
  dataType: "json",
  async: false,
  success: function (response) {
    //pcCommandCenterName = response.config.pcCommandCenter.name,
    pcfcDefault = response.config.pcDefault.buttons;
    //omg = response.config.pcOmg.buttons,
    //command_center = response.config.pcCommandCenter.buttons,
    //convert = omg;
  },
  error: function (response) {
    Alert.show("网络异常，请刷新重试");
  }
});
function loginhome() {
  if (isNull(JSON.parse(storage.getItem("userData" + localast)))) {
    losessionIdn = '';
  } else {
    var losessionIdn = JSON.parse(storage.getItem("userData" + localast)).user.sessionId;
  }
  if (losessionIdn) {
    var loginconcentmsg = JSON.parse(storage.getItem("enterall" + localast));
    loginconcentmsg.loginconcent = "loginconcent";
    storage.setItem("enterall" + localast, JSON.stringify(loginconcentmsg));
    location.href = 'index.html';
  } else {
    $("#footer").css("display", "none");
    $("#loginDom").css("display", "none");
    $("#loginDom").attr('src', '');
    $("#authority").css("display", "block");
    $("#login-body-id").css("display", "none");
    $("#dropIcon").css('display', 'none');
  }
} //小圆点主页
function loginsearch(data) {
  if (isNull(JSON.parse(storage.getItem("userData" + localast)))) {
    losessionIdn = '';
  } else {
    var losessionIdn = JSON.parse(storage.getItem("userData" + localast)).user.sessionId;
  }
  if (losessionIdn) {
    $("#authority").css("display", "none");
    $("#loginDom").css("display", "block");
    $("#login-body-id").css("display", "none");
    $("#loginBody").css({
      "background-color": "#fff"
    });
    $("#footer").css("display", "none");
    $("#loginDom").attr('src', pcfcDefault[data].sub);
  } else {
    $("#footer").css("display", "none");
    $("#loginDom").css("display", "none");
    $("#loginDom").attr('src', '');
    $("#authority").css("display", "block");
    $("#login-body-id").css("display", "none");
    $("#dropIcon").css('display', 'none');
  }
} //小圆点搜索、我的、消息
function loginlogin() {
  //$("#loginDom").attr('src',pcfcDefault[1].sub);
  $("#loginDom").css("display", "none");
  $("#loginDom").attr('src', '');
  $("#authority").css("display", "block");
  $("#login-body-id").css("display", "none");
  $("#footer").css("display", "block");
  $("#dropIcon").css('display', 'none');
} //登录
function logingoback() {
  /* if($("#loginDom").body==''){
   alert("null");
   }*/
  var kk = $(window.parent.document).find("#loginDom").attr("src");
  var mallUrl = JSON.parse(storage.getItem("authentication" + localast)).mallUrl;
  var webhomeUrl = JSON.parse(storage.getItem("authentication" + localast)).webhomeUrl;
  if (isNull(JSON.parse(storage.getItem("userData" + localast)))) {
    losessionIdn = '';
  } else {
    var losessionIdn = JSON.parse(storage.getItem("userData" + localast)).user.sessionId;
  }
  window.history.back(- 1);
  if (losessionIdn) { //当sessionId为空的时候，商城连接后面加sessionId
    var mallUrl = storage.getItem("mallUrl") + "&sessionId=" + losessionIdn;
    var webhomeUrl = storage.getItem("webhomeUrl") + "&sessionId=" + losessionIdn;
  }
  if (kk == mallUrl || kk == webhomeUrl) { //判断如果是商城后退直接后退都鉴权页 ，因商城都是从鉴权页进入
    $("#loginDom").css("display", "none");
    $("#loginDom").attr('src', '');
    $("#authority").css("display", "block");
    $("#login-body-id").css("display", "none");
    $("#footer").css("display", "block");
    $("#dropIcon").css('display', 'none');
  }
} //小圆点返回
function logingoforward() {
  history.go(1);
} //小圆点前进
$(".bank-authentication").click(function () {
  location.href = 'login.html';
})