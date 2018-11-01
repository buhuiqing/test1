var pcDefault = [],omg = [], convert = [], result, newCommand, resultName;
var storage = window.localStorage;
var entrance = JSON.parse(storage.getItem("enterall"+localast)).entranceType;
var centerurl1,centerurl2,centerurl3,centerurl4,centerurl5,centerurl6,centerurl7,centerurl8,centerurl9,centerurl10,centerurl11,centerurl12;
var circleAuthIcon1;
var circleAuthIcon2;
var circleAuthIcon3;
if(isNull(userinfo)){  //判断是否在主页清除了缓存
  sessionId='';
}else {
  sessionId = userinfo.sessionId;
}
//检测是否为空对象
function checkObj(obj){
  for(key in obj){
    return true
  };
  return false;
}
// 登录页面获取各个不同logo的ajax配置 存储后读取
if(!isNull(JSON.parse(storage.getItem("authentication"+localast)))){
  indexlogo = JSON.parse(storage.getItem("authentication"+localast)).indexlogo;
  $("#indexlogo img").attr("src",indexlogo);
}
// 点击进入链接 判断sessionId是否有效



(function(){
  /*按enter执行搜索*/
  $("#indexBody").keydown(function() {
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
      $("#searchIcon").click();
    }
  }

  //火狐
  function fireFoxKey(evt) {
    if (evt.keyCode == 13) {
      $("#searchIcon").click();
    }
  }

})();
function refresh() {
  window.location.reload();
  storage.setItem("loginconcent", "");
}
function goback() {
  convert = omg;
  loadMenu();
  history.go(-1);
}
function goforward() {
  convert = omg;
  loadMenu();
  history.go(1);
}

function qianxian(qxcompcode){
  var entrancenull=JSON.parse(storage.getItem("enterall"+localast)).entranceType;
  if(isNull(window.sessionStorage.getItem("account"+localast)) || entrancenull==null){ //判断是否退出浏览器 退出就要从新登陆
    if(isNull(sessionId)){
      Alert.show("用户信息获取失败，请重新登录");
    }
    var accountMsg;
    if (window.localStorage.getItem('REMEMBER_ACCOUNT_MSG'+localast)) {
      accountMsg= window.localStorage.getItem('REMEMBER_ACCOUNT_MSG'+localast)|| '';
    }
    storage.clear();
    window.localStorage.setItem('REMEMBER_ACCOUNT_MSG'+localast,accountMsg || '')
    window.location.href = "login.html";
  }
  var pcJuanqian;
  var urljq = quanXian;
  enterpriseCode = qxcompcode;
  sign = Encrypt(JSON.stringify(qxparameter()));
  quanxianbj = {
    enterpriseCode:enterpriseCode,
    entrance:entrancenull,
    sessionId:sessionId,
    sign:sign,
  };
  $.ajax({
    url: urljq,// "config.json",//,circleService+circleMethod,
    timeout: 5000,
    type:"post",
    dataType: "json",
    async: false,
    contentType: "application/json; charset=UTF-8",
    data: JSON.stringify(quanxianbj),
    success: function(response) {
      if(response !=null && response.data != null){
        pcJuanqian = response.data.dataPower;
        circleAuthIcon1 = pcJuanqian[12].haspower;
        circleAuthIcon2 = pcJuanqian[13].haspower;
        circleAuthIcon3 = pcJuanqian[4].haspower;
/*        storage.setItem('onejdq1', pcJuanqian[12].haspower);//设置  企业编码
        storage.setItem('onejdq2', pcJuanqian[13].haspower);//设置  企业编码
        storage.setItem('onejdq3', pcJuanqian[4].haspower);//设置  企业编码*/

        ///////////////////
        /*视点观*/
        $("#learnCenter").click(function() {
          search('');
          var inumber = pcJuanqian[0].id-1;
          if(centerurl4 && centerurl4!="Empty"){
            if(pcJuanqian[inumber].haspower==1){
              if(!sessionId){
                $(document.getElementById('iframeDom')).attr('src',centerurl4);
              }else{
                $(document.getElementById('iframeDom')).attr('src',centerurl4 + "?sessionId=" + sessionId);
              }
              $("#title").html("视点观");
              showHide("视点观");
            }else{
              return $('.nopermission').stop().fadeIn(500).delay(1500).fadeOut(500);
            }
          }else{
            return $('.uncultivated').stop().fadeIn(500).delay(1500).fadeOut(500);
          }
        });
        /*场景观*/
        $("#spacetimeCenter").click(function() {
          search('');
          var inumber = pcJuanqian[1].id-1;
          if(centerurl6 && centerurl6!="Empty"){
            if(pcJuanqian[inumber].haspower==1){
              if(!sessionId){
                $(document.getElementById('iframeDom')).attr('src',centerurl6);
              }else{
                $(document.getElementById('iframeDom')).attr('src',centerurl6 + "?sessionId=" + sessionId);
              }
              $("#title").html("场景观");
              showHide("场景观");
            }else{
              return $('.nopermission').stop().fadeIn(500).delay(1500).fadeOut(500);
            }
          }else{
            return $('.uncultivated').stop().fadeIn(500).delay(1500).fadeOut(500);
          }
        });
        /*活流观*/
        $("#commandCentre").click(function() {
          search('');
          var inumber = pcJuanqian[2].id-1;
          if(centerurl5 && centerurl5!="Empty"){
            if(pcJuanqian[inumber].haspower==1){
              if(!sessionId){
                $(document.getElementById('iframeDom')).attr('src',centerurl5);
              }else{
                $(document.getElementById('iframeDom')).attr('src',centerurl5 + "?sessionId=" + sessionId);
              }
              $("#title").html("活流观");
              showHide("活流观");
            }else{
              return $('.nopermission').stop().fadeIn(500).delay(1500).fadeOut(500);
            }
          }else{
            return $('.uncultivated').stop().fadeIn(500).delay(1500).fadeOut(500);
          }
        });
        /*商业中心*/
        $("#business").click(function() {
          search('');
          var inumber = pcJuanqian[3].id-1;
          if(centerurl1 && centerurl1!="Empty"){
            if(pcJuanqian[inumber].haspower==1){
              if(!sessionId){
                $(document.getElementById('iframeDom')).attr('src',centerurl1);
              }else{
                $(document.getElementById('iframeDom')).attr('src',centerurl1 + "?sessionId=" + sessionId);
              }
              $("#title").html("商业中心");
              showHide("商业中心");
            }else{
              return $('.nopermission').stop().fadeIn(500).delay(1500).fadeOut(500);
            }
          }else{
            return $('.uncultivated').stop().fadeIn(500).delay(1500).fadeOut(500);
          }

        });
        /*定子链*/
        $("#col2line1").click(function() {
          search('search');
          var inumber = pcJuanqian[5].id-1;
          if(centerurl7 && centerurl7!="Empty"){
            if(pcJuanqian[inumber].haspower==1){
              if(!sessionId){
                $(document.getElementById('iframeDom')).attr('src',centerurl7);
              }else{
                if(centerurl7.indexOf('?') > -1){
                  $(document.getElementById('iframeDom')).attr('src',centerurl7 + "&sessionId=" + sessionId);
                }else{
                  $(document.getElementById('iframeDom')).attr('src',centerurl7 + "?sessionId=" + sessionId);
                }
              }
              $("#title").html("定子链");
              showHide("定子链");
            }else{
              return $('.nopermission').stop().fadeIn(500).delay(1500).fadeOut(500);
            }
          }else{
            return $('.uncultivated').stop().fadeIn(500).delay(1500).fadeOut(500);
          }
        });
        /*转子链*/
        $("#col2line2").click(function() {
          search('search');
          var inumber = pcJuanqian[6].id-1;
          if(centerurl8 && centerurl8!="Empty"){
            if(pcJuanqian[inumber].haspower==1){
              if(!sessionId){
                $(document.getElementById('iframeDom')).attr('src',centerurl8);
              }else{
                if(centerurl8.indexOf('?') > -1){
                  $(document.getElementById('iframeDom')).attr('src',centerurl8 + "&sessionId=" + sessionId);
                }else{
                  $(document.getElementById('iframeDom')).attr('src',centerurl8 + "?sessionId=" + sessionId);
                }
              }
              $("#title").html("转子链");
              showHide("转子链");
            }else{
              return $('.nopermission').stop().fadeIn(500).delay(1500).fadeOut(500);
            }
          }else{
            return $('.uncultivated').stop().fadeIn(500).delay(1500).fadeOut(500);
          }
        });
        /*时空中心*/
        $("#space-time").click(function() {
          search('');
          var inumber = pcJuanqian[8].id-1;
          if(centerurl3 && centerurl3!="Empty"){
            if(pcJuanqian[inumber].haspower==1){
              if(!sessionId){
                $(document.getElementById('iframeDom')).attr('src',centerurl3);
              }else{
                $(document.getElementById('iframeDom')).attr('src',centerurl3 + "?sessionId=" + sessionId);
              }
              $("#title").html("时空中心");
              showHide("时空中心");
            }else{
              return $('.nopermission').stop().fadeIn(500).delay(1500).fadeOut(500);
            }
          }else{
            return $('.uncultivated').stop().fadeIn(500).delay(1500).fadeOut(500);
          }
        });
        /*汇能器*/
        $("#huinengqi").click(function() {
          search('');
          var inumber = pcJuanqian[9].id-1;
          if(centerurl10 && centerurl10!="Empty"){
            if(pcJuanqian[inumber].haspower==1){
              if(!sessionId){
                $(document.getElementById('iframeDom')).attr('src',centerurl10);
              }else{
                $(document.getElementById('iframeDom')).attr('src',centerurl10 + "?sessionId=" + sessionId);
              }
              $("#title").html("汇能器");
              showHide("汇能器");
            }else{
              return $('.nopermission').stop().fadeIn(500).delay(1500).fadeOut(500);
            }
          }else{
            return $('.uncultivated').stop().fadeIn(500).delay(1500).fadeOut(500);
          }
        });
        /*聚能器*/
        $("#junengqi").click(function() {
          search('');
          var inumber = pcJuanqian[10].id-1;
          if(centerurl11 && centerurl11!="Empty"){
            if(pcJuanqian[inumber].haspower==1){
              if(!sessionId){
                $(document.getElementById('iframeDom')).attr('src',centerurl11);
              }else{
                $(document.getElementById('iframeDom')).attr('src',centerurl11 + "?sessionId=" + sessionId);
              }
              $("#title").html("聚能器");
              showHide("聚能器");
            }else{
              return $('.nopermission').stop().fadeIn(500).delay(1500).fadeOut(500);
            }
          }else{
            return $('.uncultivated').stop().fadeIn(500).delay(1500).fadeOut(500);
          }
        });
        /*赋能器*/
        $("#funengqi").click(function() {
          search('');
          var inumber = pcJuanqian[11].id-1;
          if(centerurl12 && centerurl12!="Empty"){
            if(pcJuanqian[inumber].haspower==1){
              if(!sessionId){
                $(document.getElementById('iframeDom')).attr('src',centerurl12);
              }else{
                $(document.getElementById('iframeDom')).attr('src',centerurl12 + "?sessionId=" + sessionId);
              }
              $("#title").html("赋能器");
              showHide("赋能器");
            }else{
              return $('.nopermission').stop().fadeIn(500).delay(1500).fadeOut(500);
            }
          }else{
            return $('.uncultivated').stop().fadeIn(500).delay(1500).fadeOut(500);
          }
          /*    if(centerurl13){
           if(!sessionId){
           $(this).attr("href", centerurl13);

           }else{
           $(this).attr("href", centerurl13 + "?sessionId=" + sessionId);
           }
           $("#title").html("学习中心");
           showHide("学习中心");
           }else{
           return Alert.show("没有权限")
           }*/
        });
        /*粒子链*/
        $("#col2line3").click(function() {
          search('search');
          var inumber = pcJuanqian[14].id-1;
          if(centerurl9 && centerurl9!="Empty"){
            if(pcJuanqian[inumber].haspower==1){
              if(!sessionId){
                $(document.getElementById('iframeDom')).attr('src',centerurl9);
              }else{
                $(document.getElementById('iframeDom')).attr('src',centerurl9 + "?sessionId=" + sessionId);
              }
              $("#title").html("粒子链");
              showHide("粒子链");
            }else{
              return $('.nopermission').stop().fadeIn(500).delay(1500).fadeOut(500);
            }
          }else{
            return $('.uncultivated').stop().fadeIn(500).delay(1500).fadeOut(500);
          }
        });
        /*指挥中心*/
        $("#totalcontrol").click(function() {
          search('');
          var inumber = pcJuanqian[15].id-2;
          if(centerurl2 && centerurl2!="Empty"){
            if(pcJuanqian[inumber].haspower==1){
              if(!sessionId){
                $(document.getElementById('iframeDom')).attr('src',centerurl2);
              }else{
                $(document.getElementById('iframeDom')).attr('src',centerurl2 + "?sessionId=" + sessionId);
              }
              $("#title").html("指挥中心");
              showHide("指挥中心");
            }else{
              return $('.nopermission').stop().fadeIn(500).delay(1500).fadeOut(500);
            }
          }else{
            return $('.uncultivated').stop().fadeIn(500).delay(1500).fadeOut(500);
          }
        });
        //////////////////
        function search(search){   //判断那个实验室用到小圆点的搜索
          var enterallmsg = JSON.parse(storage.getItem("enterall"+localast));
          enterallmsg.search = search;
          storage.setItem("enterall"+localast,JSON.stringify(enterallmsg));
        }
      }else{
        if(response.code=="CONNECTION_FAIL"){
          Alert.show("用户已被下线，请重新登录");
          storage.clear();
          window.parent.location.href = "login.html";
        }else if(response.code=="USER_DISABLED"){
          Alert.show("该帐号已禁用，请联系管理员!");
        }else if(isNull(response.code)){
          Alert.show("应用异常，请稍后重试!");
        }else{
          Alert.show(response.message);
        }
      }
    },
    error: function(response) {
      Alert.show("网络异常，请刷新重试");
    }
  });
  function qxparameter() {
    var entrance = JSON.parse(storage.getItem("enterall"+localast)).entranceType;
    return {
      enterpriseCode:enterpriseCode,
      entrance:entrance,
      sessionId:sessionId,
    };
  }
}

$(".backstarts").click(function(event) {  //点击按钮进入七星页面
  window.location.href = "index.html";
});
if(entrance=="weilianhai"){  //入口是微连海，获取判断要不要停留七星页childenterpriseCode不为空的时候不停留 为空停留
  childenterpriseCode = JSON.parse(storage.getItem("enterall"+localast)).orgName;
  if(childenterpriseCode!== ""){
    $("#servenstars").css("display","block");
    $("#dropImg").css("display","none");
    $("#maincontent-id").css("display","none");
    $("#indexBody").css("background-color","#0a0e13");
    setTimeout(function(){
      //controlTapModules("weilianhai");
      //storage.setItem('entranceType',"weilianhai");
      var entranceTypemsg = JSON.parse(storage.getItem("enterall"+localast));
      entranceTypemsg.entranceType = "weilianhai";
      storage.setItem("enterall"+localast,JSON.stringify(entranceTypemsg));
      $(".text-center li:eq(1)").show();
      $(".backstarts").show();
      var qxcompcode = JSON.parse(storage.getItem("enterall"+localast)).orgName;
      qianxian(qxcompcode); //获取权限函数
      incompcode(qxcompcode);//获取主页函数
      $("#servenstars").css("display","none");
      $("#dropImg").css("display","block");
      $("#maincontent-id").css("display","block");
      $(".index-body .content-one").css("background-color","#1f5186");
    },1000);
  }else{
    $("#maincontent-id").css("display","none");
    $("#servenstars").css("display","block");
  }
}else if(entrance=="weilianbao"){//入口是微连宝，没七星页，直接进入主页
  controlTapModules("weilianbao");
}else if(entrance=="weilianwa"){//入口是微连娃，没七星页，直接进入主页
  //var baowa = "weilianwa";
  controlTapModules("weilianwa");
}
function controlTapHai(){
  var changehai="weilianhai";
  var childenterpriseCode = JSON.parse(storage.getItem("enterall"+localast)).orgName;
  if(childenterpriseCode){
    $("#servenstars").css("display","block");
    $("#dropImg").css("display","none");
    $("#maincontent-id").css("display","none");
    $("#indexBody").css("background-color","#0a0e13");
    setTimeout(function(){
      //storage.setItem('entranceType',"weilianhai");
      var entranceTypemsg = JSON.parse(storage.getItem("enterall"+localast));
      entranceTypemsg.entranceType = "weilianhai";
      storage.setItem("enterall"+localast,JSON.stringify(entranceTypemsg));
      $(".text-center li:eq(1)").show();
      $(".backstarts").show();
      var qxcompcode = JSON.parse(storage.getItem("enterall"+localast)).orgName;
      qianxian(qxcompcode); //获取权限函数
      incompcode(qxcompcode);//获取主页函数
      $("#servenstars").css("display","none");
      $("#dropImg").css("display","block");
      $("#maincontent-id").css("display","block");
      $(".index-body .content-one").css("background-color","#1f5186");
    },1000);
  }else{
    $(".text-center li:eq(1)").show();
    $(".backstarts").show();
    //storage.setItem('entranceType',"weilianhai");
    var entranceTypemsg = JSON.parse(storage.getItem("enterall"+localast));
    entranceTypemsg.entranceType = "weilianhai";
    storage.setItem("enterall"+localast,JSON.stringify(entranceTypemsg));
    $(".index-body .content-one").css("background-color","#1f5186");
    $("#maincontent-id").css("display","none");
    $("#dropImg").css("display","none");
    $("#servenstars").css("display","block");
    $("#indexBody").css("background-color","#0a0e13");
  }
}
function controlTapModules(baowa){
  var temp;
  if(baowa=="weilianhai"){
    //storage.setItem('entranceType',"weilianhai");
    var entranceTypemsg = JSON.parse(storage.getItem("enterall"+localast));
    entranceTypemsg.entranceType = "weilianhai";
    storage.setItem("enterall"+localast,JSON.stringify(entranceTypemsg));
    temp ="weilianhai"
    $(".text-center li:eq(1)").show();
    $(".backstarts").show();
  }
  if(baowa==2 || baowa=="weilianbao"){
    //storage.setItem('entranceType',"weilianbao");
    var entranceTypemsg = JSON.parse(storage.getItem("enterall"+localast));
    entranceTypemsg.entranceType = "weilianbao";
    storage.setItem("enterall"+localast,JSON.stringify(entranceTypemsg));
    temp ="weilianbao"
    $(".text-center li:eq(1)").hide();
    $(".backstarts").hide();
  }
  if(baowa==3 || baowa=="weilianwa"){
    //storage.setItem('entranceType',"weilianwa");
    var entranceTypemsg = JSON.parse(storage.getItem("enterall"+localast));
    entranceTypemsg.entranceType = "weilianwa";
    storage.setItem("enterall"+localast,JSON.stringify(entranceTypemsg));
    temp ="weilianwa"
    $(".text-center li:eq(1)").hide();
    $(".backstarts").hide();
  }
  var bgcolor;
  if(temp=="weilianhai"){
    bgcolor="#1f5186";
  }
  if(temp=="weilianbao"){
    bgcolor="#001f4d";
  }
  if(temp=="weilianwa"){
    bgcolor="#c66713";
  }
  var qxcompcode = JSON.parse(storage.getItem("enterall"+localast)).enterpriseCode;
  qianxian(qxcompcode); //获取权限函数
  incompcode('');//获取主页函数
/*  var noinformation=storage.getItem('noinformation');
  if(noinformation!="noinformation"){
    $("#servenstars").css("display","none");
    $("#dropImg").css("display","block");
    $("#maincontent-id").css("display","block");
    $(".index-body .content-one").css("background-color",bgcolor);
  }*/
/*  var childenterpriseCode = storage.getItem("childenterpriseCode");
  console.log("集团C用户  子公司B用户",childenterpriseCode)
  if(childenterpriseCode){

  }*/
  $("#servenstars").css("display","none");
  $("#dropImg").css("display","block");
  $("#maincontent-id").css("display","block");
  $(".index-body .content-one").css("background-color",bgcolor);

}
/*获取七星页的ajax配置*/
var CompCode;
var tempObj;
var configSevenResult = [];
$(function () {
  var url = StarController;  //设置获取ajax连接地址
  orgName = JSON.parse(storage.getItem("enterall"+localast)).orgName;  //获取企业编码
  version = JSON.parse(storage.getItem("enterall"+localast)).version;//获取系统版本号
  env = JSON.parse(storage.getItem("enterall"+localast)).env;//获取系统环境配置 PC1正式环境，PC2测试环境，PC3开发环境
  paramsObj = {
    orgName:orgName,
    version:version,
    env:env
  };
  $.ajax({
    url:url/*'./configSevenStar.json'*/,
    type:'post',
    async: false,
    timeout: 5000,
    contentType: "application/json; charset=UTF-8",
    data: JSON.stringify(paramsObj),
    success:function (result) {
      if(result.code!==1){

      }else{
        tempObj = result;
        var sevenmsg = JSON.parse(storage.getItem("offnet"+localast));
        sevenmsg.SevenConfig = result;
        storage.setItem("offnet"+localast,JSON.stringify(sevenmsg));
      }
    },
    error: function(response) {
      if(!JSON.parse(storage.getItem("offnet"+localast)).SevenConfig){
      }else {
        tempObj = JSON.parse(storage.getItem("offnet"+localast)).SevenConfig;
      }
    }
  });

  for(var i = 0;i<$('.starsall').length;i++){
    (function (i) {
      $('.starsall').eq(i).on('mouseenter',function(){
        if(document.querySelectorAll('.starsall')[i].querySelector('.sevenStarsBg')){
          $(this).children('.sevenStarsBg').stop().fadeIn(300);
          return;
        }
        var div = document.createElement('div');
        div.classList.add('sevenStarsBg');
        var ol = document.createElement('ol');

        if(tempObj !=null && tempObj.data != null &&tempObj.data.length>0){
          for(var j=0;j<tempObj.data.length;j++){

            if((tempObj.data[j].industryId==(i+1)) && tempObj.data[j].confType=="Label"){
              var company = tempObj.data[j].popName;
            }
            else if((tempObj.data[j].industryId==(i+1)) && tempObj.data[j].confType=="Company"){
              var li = document.createElement('li');
              var span  = document.createElement('span');
              span.innerHTML = tempObj.data[j].subCompName;
              var subCompName = tempObj.data[j].subCompName;
              $(span).attr('data-index',j);
              var CompCode = tempObj.data[j].subCompCode;
              $(span).on('click',function(){
                if(tempObj.data[$(this).attr('data-index')].subCompCode)
                  var CompCode = tempObj.data[$(this).attr('data-index')].subCompCode;
                var enterallmsg = JSON.parse(storage.getItem("enterall"+localast));
                enterallmsg.CompCode = CompCode;
                storage.setItem("enterall"+localast,JSON.stringify(enterallmsg));
                var qxcompcode = CompCode;
                qianxian(qxcompcode);
                incompcode(CompCode);
              });
              li.appendChild(span);
              ol.appendChild(li);
            }

          }
        }else{
          return;
        }
        if(company || (subCompName)){
          if(company==undefined){
            company="请输入标题！";
          }
          $(div)
          //.append('<h3 class="bgTitle">'+company+'</h3>')
            .append(ol);
          $('.starsall').eq(i).append(div);
          $(div).stop().hide().fadeIn(300);
        }

      });
      $('.starsall').eq(i).on('mouseleave',function(){
        var that = $(this);
        document.querySelectorAll('.starsall')[i].timerOut = setTimeout(function () {
          that.children('.sevenStarsBg').fadeOut(300);
        },500)
      });
      $('.starsall').eq(i).on('mouseenter',$('.starsall > img').eq(i).next(),function () {
        if($('.starsall').eq(i).attr('data-no')==0){
          return;
        }
        clearTimeout(document.querySelectorAll('.starsall')[i].timerOut);
      });
      $('.starsall > img').eq(i).next().on('mouseleave',function(){
        var that = $(this);
        document.querySelectorAll('.starsall')[i].timerOut = setTimeout(function () {
          that.fadeOut(300);
        },500)
      });
    })(i);
  }

});

/*  不点击七星页子公司按钮 直接点击七星页下面的按钮  */
$("#indexbtn").click(function(event) {
  if(isNull(JSON.parse(storage.getItem("userData"+localast)))){
    storage.clear();
    location.href = "login.html";
  }else{
    var enterallmsg = JSON.parse(storage.getItem("enterall"+localast));   //当点击七星页面首页时CompCode负值为空（是集团时子公司为空）
    enterallmsg.CompCode = '';
    storage.setItem("enterall"+localast,JSON.stringify(enterallmsg));
    var qxcompcode = JSON.parse(storage.getItem("enterall"+localast)).enterpriseCode;
    qianxian(qxcompcode);
    incompcode('');
  }
});

var loginconcent = JSON.parse(storage.getItem("enterall"+localast)).loginconcent;  //登录页面点击小圆点主页存储标识
if(loginconcent){
  concent();
} //登录页面点击判断
function concent(){
  if(isNull(JSON.parse(storage.getItem("userData"+localast)))){
    storage.clear();
    location.href = "login.html";
  }else{
    var enterallmsg = JSON.parse(storage.getItem("enterall"+localast));
    enterallmsg.search = '';
    storage.setItem("enterall"+localast,JSON.stringify(enterallmsg));
    $(document.getElementById('iframeDom')).attr('src','');
    convert = omg;
    loadMenu();
    CompCode = JSON.parse(storage.getItem("enterall"+localast)).CompCode;
    var childenterpriseCode = JSON.parse(storage.getItem("userData"+localast)).childenterpriseCode;
    if(CompCode){
      var qxcompcode = CompCode;
      qianxian(qxcompcode);
      incompcode(CompCode);
    }else if(childenterpriseCode){
      //storage.setItem('entranceType',"weilianhai");
      var entranceTypemsg = JSON.parse(storage.getItem("enterall"+localast));
      entranceTypemsg.entranceType = "weilianhai";
      storage.setItem("enterall"+localast,JSON.stringify(entranceTypemsg));
      $(".text-center li:eq(1)").show();
      $(".backstarts").show();
      var qxcompcode = JSON.parse(storage.getItem("userData"+localast)).childenterpriseCode;
      qianxian(qxcompcode); //获取权限函数
      incompcode(qxcompcode);//获取主页函数
      $("#servenstars").css("display","none");
      $("#dropImg").css("display","block");
      $("#maincontent-id").css("display","block");
      $(".index-body .content-one").css("background-color","#1f5186");
    }else{
      var qxcompcode = JSON.parse(storage.getItem("enterall"+localast)).enterpriseCode;
      qianxian(qxcompcode);
      incompcode('');
    }
  }
}   //主页点击小圆点主页
/*  读取主页配置文件  */
function  incompcode(CompCode){
  var url2 = PCController;
  var col1line1desc,col1line1text,col1line2desc,col1line2text,col1line3desc,col1line3text,
    col2line1desc,col2line2text,col2line2desc,col2line2text,col2line3desc,col2line3text,
    col3line1desc,col3line1text,col3line2desc,col3line2text,col3line3desc,col3line3text;
  var arrText =[];
  var titText =[];
  var urlText = [];
  var circleTask = [];
  $('.layoutcon').find('.title').empty();
  $('.layoutcon').find('.trade-i').empty();
  $('.layoutcon').find('.order-i').empty();
  $('.indicatorContainer').empty();
  orgName = "SUNEEE"; //获取企业编码
  version = JSON.parse(storage.getItem("enterall"+localast)).version;//获取系统版本号
  env = JSON.parse(storage.getItem("enterall"+localast)).env;//获取系统环境配置 PC1正式环境，PC2测试环境，PC3开发环境
  entrance = JSON.parse(storage.getItem("enterall"+localast)).entranceType; //从哪个空间进的（微连海、微连宝、微连娃）
  var paramsObj ={};
  CompCode = JSON.parse(storage.getItem("enterall"+localast)).orgName;
  if(!isNull(CompCode)){
    paramsObj = {
      compCode:orgName,
      subCompCode:CompCode,
      appVersion:version,
      appEnvName:env,
      isActived:1,
      entrance:entrance,
    };
  }
  else{
    paramsObj = {
      compCode:orgName,
      appVersion:version,
      appEnvName:env,
      isActived:1,
      entrance:entrance,
    };
  }
  $.ajax({
    url: url2,
    type: "post",
    dataType: "json",
    async: false,
    timeout: 1500,
    contentType: "application/json; charset=UTF-8",
    beforeSend:function(){
      /*console.log(CompCode,'我的beforeAjax');*/
    },
    data: JSON.stringify(paramsObj),
    success: function(responseHomePage) {
      if(responseHomePage.data == null){  //判断是否填有后台数据，没填有不给点击直接返回
        Alert.show("公司信息为空！");
      }
      else{
        var homepagemsg = JSON.parse(storage.getItem("offnet"+localast));
        homepagemsg.homePage = responseHomePage;
        storage.setItem("offnet"+localast,JSON.stringify(homepagemsg));
        mainzu(responseHomePage);
      }
    },
    error: function(responseErr) {
      if(!JSON.parse(storage.getItem("offnet"+localast)).homePage){
        Alert.show("网络异常，请刷新重试");
      }else {
        var responseHomePage = JSON.parse(storage.getItem("offnet"+localast)).homePage;
        mainzu(responseHomePage);
      }

    }
  });
}
function mainzu(responseHomePage){
  if(responseHomePage.data.length<12){  //判断填的后台数据是否完整，没填有填写完整不给点击直接返回
    Alert.show("公司信息不全，请补充完整！");
    storage.setItem('noinformation',"noinformation");
    return;
  }
  else{   //后台信息填写完整后 显示主页 显示小圆点
    $("#title").html("象谱");
    $("#dropImg").css("display","block");
    $("#iframeDom").css("display", "none");
    $("#maincontent-id").css("display", "block");
    $("#servenstars").css("display", "none");
    $("#infooter").css("display", "none");
    $("#indexBody").css("background-color","#2f3843");
    var alldata = responseHomePage.data;
    var centerurl=[];
    var pdurluser=[];
    for(var i=0; i<12; i++){    // 用循环把所有的信息罗列出来
      /*console.log(alldata[i].btnPosId);*/
      if((i+1)==alldata[i].btnPosId){  //判断如果i+1==对应的btnPosId的值 执行以下代码
        /*console.log(i);*/
        if(i<3){  //如果i<3时 现在的内容是在前3个圈圈里
          var circles1 = Transcircles;
          //var circles2 = Beijingcircles;
          //console.log("circles2",circles2+"?type=5&sessionId="+sessionId)
          if(i==0){
            $.ajax({
              url: circles1,
              type: "post",
              dataType: "json",
              async: false,
              timeout: 2000,
              data:JSON.stringify({
                type:1
              }),
              contentType: "application/json; charset=UTF-8",
              success: function(response) {
                var OneCirClemsg = JSON.parse(storage.getItem("offnet"+localast));
                OneCirClemsg.OneCirCle = response;
                storage.setItem("offnet"+localast,JSON.stringify(OneCirClemsg));
                //因为这里已经去请求了数据返回了结果；无论是否判断更新没，都要重新去渲染数据，所以没必要再做操作
                var alldatath = $.parseJSON(response.data.jsonData).data;
                onecircles(alldatath,i,alldata);
              },
              error: function(response) {

                //当数据断网时，
                if(!JSON.parse(storage.getItem("offnet"+localast)).OneCirCle){
                }else {
                  var res = JSON.parse(storage.getItem("offnet"+localast)).OneCirCle;
                  var alldatath = $.parseJSON(res.data.jsonData).data;
                  onecircles(alldatath,i,alldata);
                }
              }
            })
          }
          if(i==1){
            $.ajax({
              url: circles1,
              type: "post",
              dataType: "json",
              async: false,
              timeout: 2000,
              data:JSON.stringify({
                type:2
              }),
              contentType: "application/json; charset=UTF-8",
              success: function(response) {
                var TwoCirClemsg = JSON.parse(storage.getItem("offnet"+localast));
                TwoCirClemsg.TwoCirCle = response;
                storage.setItem("offnet"+localast,JSON.stringify(TwoCirClemsg));
                var alldatath = $.parseJSON(response.data.jsonData).data;
                twocircles(alldatath,i,alldata);
              },
              error: function(response) {
                if(!JSON.parse(storage.getItem("offnet"+localast)).TwoCirCle){
                }else {
                  var res= JSON.parse(storage.getItem("offnet"+localast)).TwoCirCle;
                  var alldatath = $.parseJSON(res.data.jsonData).data;
                  twocircles(alldatath,i,alldata);
                }
              }
            })
          }
          if(i==2){
            $.ajax({
              url: circles1,
              type: "post",
              dataType: "json",
              async: false,
              timeout: 2000,
              data:JSON.stringify({
                type:3
              }),
              contentType: "application/json; charset=UTF-8",
              success: function(response) {
                var ThreeCirClemsg = JSON.parse(storage.getItem("offnet"+localast));
                ThreeCirClemsg.ThreeCirCle = response;
                storage.setItem("offnet"+localast,JSON.stringify(ThreeCirClemsg));
                var alldatath = $.parseJSON(response.data.jsonData).data;
                therecircles(alldatath,i,alldata);
              },
              error: function(response) {
                if(!JSON.parse(storage.getItem("offnet"+localast)).ThreeCirCle){
                }else {
                  var res = JSON.parse(storage.getItem("offnet"+localast)).ThreeCirCle;
                  var alldatath = $.parseJSON(res.data.jsonData).data;
                  therecircles(alldatath,i,alldata);
                }
              }
            })
          }
        }
        if(i>=3 && i<12){  //如果i>=3 && i<12时 显示活流观...
          $('.titText').eq(i-3).html(alldata[i].btnPosDes);
          var attr = alldata[i].otherParam;
          attr = attr.split(" ");
          $('.arrText').eq(i-3).children('i').html(attr[1]);
          $('.parent-div img').eq(i-3).attr("src",starttestaddress +"/"+ alldata[i].btnIconDir);
        }
        centerurl.push(alldata[i].redirUrl);
        pdurluser.push(alldata[i].userAuth);

      }
      userType = userData.userType; //从登录页面传用户类型过来
      centerurl1 =  $.trim(centerurl[0]);
      centerurl2 =  $.trim(centerurl[1]);
      centerurl3 =  $.trim(centerurl[2]);
      centerurl4 =  $.trim(centerurl[3]);
      centerurl5 =  $.trim(centerurl[4]);
      centerurl6 =  $.trim(centerurl[5]);
      centerurl7 =  $.trim(centerurl[6]);
      centerurl8 =  $.trim(centerurl[7]);
      centerurl9 =  $.trim(centerurl[8]);
      centerurl10 =  $.trim(centerurl[9]);
      centerurl11 =  $.trim(centerurl[10]);
      centerurl12 =  $.trim(centerurl[11]);
    }
  }
}
function onecircles(alldatath,i,alldata){    //主页商业中心第一个圈数据的方法
  //var alldatath = response.data;
  var finish = alldatath[2].value;
  var topeq = $('.layoutcon').eq(i);
  topeq.find('.title').html(alldata[i].btnPosDes);
  // var onejdq1 = storage.getItem("onejdq1");
  if(circleAuthIcon1==1){
    topeq.find('.trade-name').html(alldatath[0].item+":");
    topeq.find('.order-name').html(alldatath[1].item+":");
    topeq.find('.finish-name').html(alldatath[2].item+":");
    topeq.find('.trade-i').html(alldatath[0].value);
    topeq.find('.finish-i').html(finish);
    var num = parseFloat(alldatath[1].value);
    num = num.toFixed(2);
    topeq.find('.order-i').html(num);
  }else {
    topeq.find('.trade-name').html("&nbsp;");
    topeq.find('.order-name').html("&nbsp;");
    topeq.find('.finish-name').html("&nbsp;");
    topeq.find('.trade-i').html("&nbsp;");
    topeq.find('.finish-i').html("&nbsp;");
    var num = parseFloat(alldatath[1].value);
    num = num.toFixed(2);
    topeq.find('.order-i').html("&nbsp;");
  }
  if(checkObj($('.indicatorContainer')[i])){
    if(entrance=="weilianhai"){
      $('.indicatorContainer').eq(i)
      var circcolor="#ff8500",
        circbgcolor="#858585";
      animates = 75;
      circlecolor(circcolor,circbgcolor,i,animates);
    }else if(entrance=="weilianbao"){
      $('.indicatorContainer').eq(i)
      var circcolor="#e5e5e5",
        circbgcolor="#767676";
        animates = 75;
      circlecolor(circcolor,circbgcolor,i,animates);
    }else if(entrance=="weilianwa"){
      $('.indicatorContainer').eq(i)
      var circcolor="#646464",
        circbgcolor="#e9c2a1";
      animates = 75;
      circlecolor(circcolor,circbgcolor,i,animates);
    }

  }
}
function twocircles(alldatath,i,alldata){  //主页指挥中心第二个圈数据的方法
  var finish = alldatath[2].percen;
  finish = finish.split("%");
  var topeq = $('.layoutcon').eq(i);
  topeq.find('.title').html(alldata[i].btnPosDes);
/*  var onejdq2 = storage.getItem("onejdq2");
  console.log("onejdq2===",onejdq2);*/
  if(circleAuthIcon2==1){
    topeq.find('.trade-i').html(alldatath[0].num);
    topeq.find('.order-i').html(alldatath[1].num);
    topeq.find('.trade-name').html(alldatath[0].name+":");
    topeq.find('.order-name').html(alldatath[1].name+":");
    topeq.find('.finish-name').html("完成率:");
    topeq.find('.finish-i').html(finish[0]);
  }else{
    topeq.find('.trade-name').html("&nbsp;");
    topeq.find('.order-name').html("&nbsp;");
    topeq.find('.finish-name').html("&nbsp;");
    topeq.find('.trade-i').html("&nbsp;");
    topeq.find('.finish-i').html("&nbsp;");
    topeq.find('.order-i').html("&nbsp;");
  }
  if(checkObj($('.indicatorContainer')[i])){
    if(entrance=="weilianhai"){
      $('.indicatorContainer').eq(i)
      var circcolor="#ff8500",
        circbgcolor="#858585";
      animates = finish[0];
      circlecolor(circcolor,circbgcolor,i,animates);
    }else if(entrance=="weilianbao"){
      $('.indicatorContainer').eq(i)
      var circcolor="#e5e5e5",
        circbgcolor="#767676";
      animates = finish[0];
      circlecolor(circcolor,circbgcolor,i,animates);
    }else if(entrance=="weilianwa"){
      $('.indicatorContainer').eq(i)
      var circcolor="#646464",
        circbgcolor="#e9c2a1";
      animates = finish[0];
      circlecolor(circcolor,circbgcolor,i,animates);
    }
  }
}
function therecircles(alldatath,i,alldata){  //主页时空中心第三个圈数据的方法
  //console.log("fsdjflsdjfld",$.parseJSON(response.data.jsonData).data)
  var topeq = $('.layoutcon').eq(i);
  topeq.find('.title').html(alldata[i].btnPosDes);
/*  var onejdq3 = storage.getItem("onejdq3");*/
  if(circleAuthIcon3==1){
    topeq.find('.trade-name').html(alldatath[0].item+":");
    topeq.find('.order-name').html(alldatath[1].item+":");
    topeq.find('.finish-name').html(alldatath[2].item+":");
    topeq.find('.trade-i').html(alldatath[0].value);
    topeq.find('.order-i').html(alldatath[1].value);
    topeq.find('.finish-i').html(alldatath[2].value);
  }else {
    topeq.find('.trade-name').html("&nbsp;");
    topeq.find('.order-name').html("&nbsp;");
    topeq.find('.finish-name').html("&nbsp;");
    topeq.find('.trade-i').html("&nbsp;");
    topeq.find('.order-i').html("&nbsp;");
    topeq.find('.finish-i').html("&nbsp;");
  }
  if(checkObj( $('.indicatorContainer')[i] ) ){
    if(entrance=="weilianhai"){
      $('.indicatorContainer').eq(i)
      var circcolor="#ff8500",
        circbgcolor="#858585";
      animates = 75;
      circlecolor(circcolor,circbgcolor,i,animates);
    }else if(entrance=="weilianbao"){
      $('.indicatorContainer').eq(i)
      var circcolor="#e5e5e5",
        circbgcolor="#767676";
      animates = 75;
      circlecolor(circcolor,circbgcolor,i,animates);
    }else if(entrance=="weilianwa"){
      $('.indicatorContainer').eq(i)
      var circcolor="#646464",
        circbgcolor="#e9c2a1";
      animates = 75;
      circlecolor(circcolor,circbgcolor,i,animates);
    }
  }
}
function circlecolor(circcolor,circbgcolor,i,animates){
  $('.indicatorContainer').eq(i)
    .radialIndicator({
      barColor: {
        0: circcolor,
        33: circcolor,
        66: circcolor,
        100: circcolor
      },
      barBgColor:circbgcolor,
      radius: 90,
      percentage: true,
      initValue: 0,
      barWidth : 10,
    })
    .data('radialIndicator').animate(animates);
}