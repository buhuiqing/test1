/*全局变量*/
var changeFlag = false,
    storage = window.localStorage,
	//sessionId = storage.getItem("sessionIdn"),
	 encryptCode = "1234567899876543",
    userInfoService = '',solrService = '',fileService = '',personalCenterUrl = '',circleService = '',
    centerurl5 = '',centerurl4 = '',centerurl6 = '',centerurll0 = '',centerurll1 = '',centerurll2='', centerurll3 = '',loginbtnUrl='',
    centerurl7 = '',centerurl8 = '',centerurl9 = '',centerurl1 = '',centerurl2 = '',centerurl3 = ''
    /*loginMethod = "/account_auth_admin_new_test/personal-api.login"; 登录*/
    //loginMethod = "/account_auth_admin/personal-api.login"; /*登录*/
   // loginMethod = "/account_auth_admin/personal-api.loginPower"; /*登录*/
    locaLast = "";
    loginMethod = "/account_auth_admin/personal-api.newloginPower"; /*新登录接口登录2017-10-17*/
    getUserInfo = "/account_auth_admin/personal-api.getUserInfo"; /*獲取用戶信息*/
    outUserInfo = "/account_auth_admin/personal-api.logout"; /*註銷用戶信息*/
    updInfoMethod = "/account_auth_admin/personal-api.updateUserInfo"; /*修改个人信息*/
    updPwdMethod = "/account_auth_admin/personal-api.changePassword"; /*修改密码*/
    //quanXian = "/account_auth_admin/personal-api.checkpower"; /*主页访问权限*/
    quanXian = "/account_auth_admin/personal-api.newcheckpower"; /*新主页访问权限*/
    getFileMethod = "/file-service/file-api.download?useOld=false&domain=user&type=photo&fileName="; /*获取头像*/
    uploadFileMethod = "/file-service/file-api.upload?domain=user&type=photo"; /*上传头像*/
    circleMethod = "/jconfig/config.json";
    Spacecircles = "/disneyOrder/listTodayOrder";
if(window.location.pathname.indexOf('lanhuoyi')>0){
  var locaLast='-lanhuoyi';
}else{
var locaLast='-lanhuoyi';
}
localast=locaLast;
var userData=JSON.parse(storage.getItem("userData"+localast)); ///*用户中心返回来的数据*/
var userinfo='';
if(!isNull(userData)){  //如果数据不为空读取用户信息的数据
  var userinfo=userData.user;
}
var  sessionId = userinfo.sessionId;
/*为null或是undefined判断*/
function isNull(object) {
	if (object === "null" || object === null || object === undefined || object === "undefined") {
		return true;
	}
	return false;
}  

/*获取url参数*/
function getQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}

//aes加密
function Encrypt(word){
 	var key = CryptoJS.enc.Utf8.parse(encryptCode);
    var srcs = CryptoJS.enc.Utf8.parse(word);

    var encrypted = CryptoJS.AES.encrypt(srcs, key, { mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7}); 
	return encrypted.toString();
}

/*取得当前页面名称*/
function getPageName() {
    var a = location.href;
    var b = a.split("/");
    var c = b.slice(b.length-1, b.length).toString(String).split(".");
    return c.slice(0, 1);
    
}
/*正则表达式*/

/*校验邮箱*/
function checkEmail(strEmail) {
   var reg=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/; 
   if(!reg.test(strEmail)){ 
       return false; 
   }
};

//校验手机
function checkPhone(phone) {
	var reg = /^1[3|4|5|7|8|9][0-9]{9}$/;
	 if(!reg.test(phone)){ 
       return false; 
   }
}

/*校验用户中心昵称,个性签名,长度在10位以内*/
function checkNick(strNick) {
	var reg = /\w{0-9}/;
	if(!reg.test(strNick)) {
		return false;
	}
}

/*校验用户中心地址,长度在20位以内*/
function checkAddress(strAddress) {
	var reg = /\w{0-19}/;
	if(!reg.test(strAddress)) {
		return false;
	}
}

//校验登录名：只能输入5-20个以字母开头、可带数字、“_”、“.”的字串 
function isRegisterUserName(s) { 
	var patrn=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/; 
		if (!patrn.exec(s)) return false;
	return true;
}

//校验密码：只能输入6-20个字母、数字、下划线 
function isPasswd(s) { 
	var patrn=/^(\w){6,20}$/; 
	if (!patrn.exec(s)) return false;
	return true; 
}

//校验用户姓名：只能输入1-30个以字母开头的字串 
function isTrueName(s) { 
	var patrn=/^[a-zA-Z]{1,30}$/; 
	if (!patrn.exec(s)) return false;
	return true;
}

(function(){

	/*安全退出*/
  var pageName = getPageName();
  if(!sessionId && pageName != "login" && pageName != "forgotpassword" && pageName != "forgotpassword2" && pageName != "forgotpassword4") {
    storage.clear();
    location.href = "login.html";
  }
	/*获取头像*/
  if(!isNull(userinfo)){
    var  photo = userinfo.photo;
  }else {
    var photo = '';
  }
	if (!isNull(photo)) {
		$("#touxiang-id").attr("src",  getFileMethod + photo);
		$("#large-touxiang-id").attr("src", getFileMethod + photo);
	} else {
		$("#touxiang-id").attr("src", "images/头像@3x.png");
		$("#large-touxiang-id").attr("src", "images/头像@3x.png");
	}

	window.onbeforeunload = function() {
		if(changeFlag == true) {
			return "有信息没有保存,确定离开此页面吗?";
		}
	};
})();