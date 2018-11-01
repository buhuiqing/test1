var pcDefault = [],omg = [], learn_center = [],  convert = [], result, newCommand, resultName;
var storage = window.localStorage;
var sendJsonMessage;
var iframeDom = document.getElementById("iframeDom");
var COMPID=1;//公司id
var pointCount = 0;
var centerPoint = "";
var loginurlParam = "?sessionId=" + sessionId + "&mobile=" + userinfo.mobile
  + "&nick=" + userinfo.nick +  "&userName=" + userinfo.userName+"&userId=" + userinfo.userId
  + "&email=" + userinfo.email + "&compId="+COMPID;
var mydlxx = storage.getItem("mydlxx"+localast)
var urlParam= "?" + urlParam;
$.ajax({
  url: "config.json",// "config.json",//,circleService+circleMethod,
  type: "get",
  dataType: "json",
  async: false,
  success: function(response) {
    pcDefault = response.config.pcDefault.buttons;
  },
  error: function(response) {
    Alert.show("网络异常，请刷新重试");
  }
});
(function(){
  $("#title").html("象谱");
  window.addEventListener("message", function(e){
    resultName = e.data.name;
    result = e.data.buttons;
    newCommand = e.data.newCommand;
    storage.setItem("idcomname"+localast,null);
    convert = result;
    loadMenu();
  }, false);
  //点击小圆点
  $("#dropImg").click(function() {
    $("iframe").empty();
    $("#firstMenu").fadeIn(1000);
    var dropIcon = document.getElementById("dropIcon"),
      firstMenu = document.getElementById("firstMenu"),
      clientHeight = document.body.clientHeight;
    var offsetTop = dropIcon.offsetTop,
      offsetLeft = dropIcon.offsetLeft,
      dropIconW = dropIcon.offsetWidth,
      dropIconH = dropIcon.offsetHeight,
      firstMenuW = firstMenu.offsetWidth,
      firstMenuH = firstMenu.offsetHeight,
      offsetRight = screen.width - offsetLeft - dropIconW,
      offsetButtom = screen.height - offsetTop - dropIconH;

    if(offsetTop < 0) {
      dropIcon.style.top =0;
    }
    if(offsetLeft < 0) {
      dropIcon.style.left = 0;
    }
    if(offsetRight <= firstMenuW-dropIconW) {
      firstMenu.style.left = -(firstMenuW-dropIconW) + "px";
    } else {
      firstMenu.style.left = 0;
    }

    if(offsetButtom <= dropIconH+firstMenuH) {
      firstMenu.style.top = -firstMenu.offsetHeight + "px";
    } else {
      firstMenu.style.top = -dropIcon.offsetHeight + "px";
    }

    var parentTitle = document.title;
    $("#parentTitle").html(parentTitle);

    loadMenu();
  });
  $("#firstMenu").mouseleave(function() {
    $(this).fadeOut(1000);
  });

  $("#commandChange").mouseleave(function() {
    $(this).fadeOut(1000);
  });

})();

function loadMenu() {
  $("#ulDefault").empty();
  $("#ulIcon").empty();
  var pcDefaultlength;
  if($("#maincontent-id").css("display")=="block"){
    pcDefaultlength = pcDefault.length;
  }else {
    pcDefaultlength = pcDefault.length-3;
  }
  for(var i = 0; i < pcDefaultlength; i++) {
    /*  if(i==0){
     var entrance = storage.getItem("entranceType");
     if(entrance=="weilianhai"){
     $("#ulDefault").append('<li class="text-center">\
     <a onclick="javascript:controlTapHai()"><img class="center-block" src="images/icon/'+pcDefault[i].icon + '.png"></a>\
     <a onclick="javascript:controlTapHai()">' + pcDefault[i].title + '</a>\
     </li>');
     }
     }else if(i==2){
     var entrance = storage.getItem("entranceType");
     if(entrance=="weilianhai"){
     $("#ulDefault").append('<li class="text-center">\
     <a onclick="javascript:controlTapHai()"><img class="center-block" src="images/icon/'+pcDefault[i].icon + '.png"></a>\
     <a onclick="javascript:controlTapHai()">' + pcDefault[i].title + '</a>\
     </li>');
     }
     }else */
    var enterallsearch = JSON.parse(storage.getItem("enterall"+localast));
    var enterallsearchs=enterallsearch.search;
    if(i==0 && !isNull(enterallsearch)){
      if(enterallsearchs){
        i++;
      }
    }
    if(i==4){
      $("#ulDefault").append('<li class="text-center">\
        <a onclick="javascript:showSeverice()"><img class="center-block" src="images/icon/'+pcDefault[i].icon + '.png"></a>\
        <a onclick="javascript:showSeverice()">' + pcDefault[i].title + '</a>\
        </li>');
    }else if(i==5){
      var dlwelianhai = userData.spatial[0].haspower;
      if(dlwelianhai==1){
        $("#ulDefault").append('<li class="text-center">\
        <a onclick="javascript:controlTapHai()"><img class="center-block" src="images/icon/'+pcDefault[i].icon + '.png"></a>\
        <a onclick="javascript:controlTapHai()">' + pcDefault[i].title + '</a>\
        </li>');
      }
    }
    else if(i==6){
      var dlwelianbao = userData.spatial[1].haspower;;
      if(dlwelianbao==1){
        $("#ulDefault").append('<li class="text-center">\
        <a onclick="javascript:controlTapModules(2)"><img class="center-block" src="images/icon/'+pcDefault[i].icon + '.png"></a>\
        <a onclick="javascript:controlTapModules(2)">' + pcDefault[i].title + '</a>\
        </li>');
      }
    }
    else if(i==7){
      var dlwelianwa = userData.spatial[2].haspower;
      if(dlwelianwa==1){
        $("#ulDefault").append('<li class="text-center">\
        <a onclick="javascript:controlTapModules(3)"><img class="center-block" src="images/icon/'+pcDefault[i].icon + '.png"></a>\
        <a onclick="javascript:controlTapModules(3)">' + pcDefault[i].title + '</a>\
        </li>');
      }
    }
    else if(i==3){
      $("#ulDefault").append('<li class="text-center">\
        <a  href="'+pcDefault[i].sub+'" onclick="javascript:omgIcon()"><img class="center-block" src="images/icon/'+pcDefault[i].icon + '.png"></a>\
        <a  href="'+pcDefault[i].sub+'" onclick="javascript:omgIcon()">' + pcDefault[i].title + '</a>\
        </li>');
    }else {
      $("#ulDefault").append('<li class="text-center">\
        <a target="iframe-name" href="'+pcDefault[i].sub+'" onclick="javascript:omgIcon()"><img class="center-block" src="images/icon/'+pcDefault[i].icon + '.png"></a>\
        <a target="iframe-name" href="'+pcDefault[i].sub+'" onclick="javascript:omgIcon()">' + pcDefault[i].title + '</a>\
        </li>');
    }
  }
  if(isNull(convert)) {return;}
  var pointUrlParam;
  if (pointCount===0){
    pointUrlParam = urlParam + "&commandId=null";
  }else {
    pointUrlParam = urlParam + "&"+ centerPoint;
  }

  for (var i = 0; i < convert.length; i++) {
    if(convert[i].type === "url") {
      if(convert[i].title === "中控室"){
        $("#ulIcon").append('<li class="text-center">\
        <a id="conterPoint" target="iframe-name" href="'+convert[i].sub+pointUrlParam+'" onclick="javascript:showHide(\''+convert[i].title+'\')"><img class="center-block" src="images/icon/'+convert[i].icon + '.png"></a>\
        <a target="iframe-name" href="'+convert[i].sub+pointUrlParam+'" onclick="javascript:showHide()">' + convert[i].title + '</a>\
        </li>');
      }else {
        $("#ulIcon").append('<li class="text-center">\
        <a target="iframe-name" href="'+convert[i].sub+pointUrlParam+'" onclick="javascript:showHide(\''+convert[i].title+'\')"><img class="center-block" src="images/icon/'+convert[i].icon + '.png"></a>\
        <a target="iframe-name" href="'+convert[i].sub+pointUrlParam+'" onclick="javascript:showHide()">' + convert[i].title + '</a>\
        </li>');
      }

    } else if (convert[i].type === "action") {
      $('#ulIcon').append('<li class="text-center">\
        <img style="cursor: pointer;margin-bottom: 8px;" class="center-block" src="images/icon/'+convert[i].icon+'.png" onclick="javascript:sendMessage(\''+convert[i].title+'\''+ ","+i+')">\
        <p style="cursor: pointer; margin-bottom: 8px;" onclick="javascript:sendMessage(\''+convert[i].title+'\''+ ","+i+')">'+convert[i].title+'</p>\
        </li>');
    }
  }

}

function sendMessage(msg, index) {
  if(resultName === "ucp") {
    hnqSendMessage = result[index].sub;
    iframeDom.contentWindow.postMessage(hnqSendMessage, "*");
  } else if(resultName === "pcCenterRoom") {
    if(msg === "视频锚点") {
      sendJsonMessage = {homeType:'camera'};
    } else if (msg === "数据锚点") {
      sendJsonMessage = {homeType:'chart'};
    } else if (msg === "团队锚点") {
      sendJsonMessage = {homeType:'team'};
    } else if (msg === "指挥切换") {
      $("#firstMenu").css("display","none");
      $("#commandChange").empty();
      $("#commandChange").append('<div style="height:20px;background-color:#ccc;"></div>');

      if(!newCommand) {
        $("#commandChange").append('<div class="text-center" style="width:300px;height:30px;background-color:#ffffff;border:1px solid black;">无指挥</div>');
      }else {

        for (var i = 0; i < newCommand.length; i++) {
          //标题限制字符个数
          var object = newCommand[i];
          var titmaxwidth=18;
          var titobjcon=object.name;
          if(titobjcon.length>titmaxwidth){
            var titobjcon=titobjcon.substring(0,titmaxwidth);
            var titobjcon=titobjcon+"...";
          }
          $("#commandChange").append('<div class="zhswitching text-center" >\
            <a id="comname'+i+'" target="iframe-name" onclick="javascript:changeCommand(\''+newCommand[i].url+'\''+","+i+')">'+titobjcon+'</a>\
          </div>');
        }
      }
      //href="'+newCommand[i].url+'"
      $("#commandChange").append('<div style="height:20px;background-color:#ccc;"></div>');
      idcomobj = storage.getItem("idcomobj"+localast);
      if(isNull(idcomobj)){
        $(".zhswitching").children('a').removeClass('comnameon');
        var firstcommand=newCommand.length-1;
        $("#comname"+firstcommand).addClass('comnameon');
      }else{
        if(idcomobj.length < newCommand.length){
          $(".zhswitching").children('a').removeClass('comnameon');
          var firstcommand=newCommand.length-1;
          $("#comname"+firstcommand).addClass('comnameon');
        }else {
          $(".zhswitching").children('a').removeClass('comnameon');
          $("#comname"+idcomobj.index).addClass('comnameon');
        }

      }
      $("#commandChange").fadeIn(1000);
      return;
    } else {
      sendJsonMessage = {error:'发生异常'};
    }
    iframeDom.contentWindow.postMessage(sendJsonMessage, "*");
  } else if(resultName === "pcSpacetimeCenter") {
    spacetimeSendMessage = result[index].sub;
    iframeDom.contentWindow.postMessage(spacetimeSendMessage, "*");
  } else if(resultName === "pcCommandHall") {  /*指挥大厅*/
    if(msg === "指挥切换") {
      $("#firstMenu").css("display","none");
      $("#commandChange").empty();
      $("#commandChange").append('<div style="height:20px;background-color:#ccc;"></div>');

      if(!newCommand) {
        $("#commandChange").append('<div class="text-center" style="width:300px;height:30px;background-color:#ffffff;border:1px solid black;">无指挥</div>');
      }else {
        var newCommandUrl;
        for (var i = 0; i < newCommand.length; i++) {
          //标题限制字符个数
          var object1 = newCommand[i];
          var titmaxwidth1=18;
          var titobjcon1=object1.name;
          if(titobjcon1.length>titmaxwidth1){
            var titobjcon1=titobjcon1.substring(0,titmaxwidth1);
            var titobjcon1=titobjcon1+"...";
          }
          newCommandUrl = 'compId='+COMPID+"&userId="+storage.getItem('userId'+localast)+"&commandId="+newCommand[i].commandId;
          var comname=i+1;
          $("#commandChange").append('<div class="zhswitching text-center">\
            <a id="comname'+i+'" target="iframe-name" onclick="javascript:changeCommand(\''+newCommandUrl+'\''+","+i+')">'+titobjcon1+'</a>\
          </div>');
        }

      }
      $("#commandChange").append('<div style="height:20px;background-color:#ccc;"></div>');
      idcomobj = storage.getItem("idcomobj"+localast);
      if(isNull(idcomobj)){
        $(".zhswitching").children('a').removeClass('comnameon');
        var firstcommand=newCommand.length-1;
        $("#comname"+firstcommand).addClass('comnameon');
      }else{
        if(idcomobj.length < newCommand.length){
          $(".zhswitching").children('a').removeClass('comnameon');
          var firstcommand=newCommand.length-1;
          $("#comname"+firstcommand).addClass('comnameon');
        }else {
          $(".zhswitching").children('a').removeClass('comnameon');
          $("#comname"+idcomobj.index).addClass('comnameon');
        }

      }
      $("#commandChange").fadeIn(1000);
    }
  }
}

function changeCommand(commandUrl,i) {
  centerPoint = commandUrl;
  centerPoint = "userId="+centerPoint.split("userId=")[1];
  iframeDom.contentWindow.postMessage({"commandUrl":commandUrl}, "*");
  pointCount++;
  $(".zhswitching").children('a').removeClass('comnameon');
  $("#comname"+i).addClass('comnameon');
  var storage = window.localStorage;
  storage.setItem("idcomobj"+localast,{'index':i,'length':newCommand.length});
}

function omgIcon() {
  convert = omg;
  loadMenu();
  $("#iframeDom").css("display", "block");
  $("#maincontent-id").css("display", "none");
}

function showHide(systemName) {
  if(systemName === "学习中心") {
    convert = learn_center;
  } else if(systemName === "指挥中心") {

  } else if(systemName === "新建指挥" || systemName === "删除内容" || systemName === "新增内容" ||
    systemName === "指挥管理" || systemName === "历史查询" || systemName === "中控室") {
  }
  loadMenu();
  $("#iframeDom").css("display", "block");
  $("#maincontent-id").css("display", "none");
  $("#servenstars").css("display", "none");
  $("#infooter").css("display", "none");

}
//客满的方法
function showSeverice(){
  if($('#serviceJS')[0]){
    if( !$('.i_cusiframe')[0]){
      opCustom();
    }
  }else {
    var Customerservice = pcDefault[4].sub;
    window.transferVary = Customerservice+'/command-web';
    window.SESSIONID_COMMAND_WEB = JSON.parse(storage.getItem("userData"+localast)).user.sessionId;
    var script =document.createElement('script');
    script.type = 'text/javascript';
    script.src=Customerservice+'/command-web/static/js/cusPage.js';
    //script.src=Customerservice+'/static/js/cusPage.js';
    script.setAttribute('id','serviceJS');
    document.body.appendChild(script);
  }
} //客满的方法