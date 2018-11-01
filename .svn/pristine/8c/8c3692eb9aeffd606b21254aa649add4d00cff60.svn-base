(function(){
	$("#searchLevelText").val(serachParameter("searchText"));

	
	/*第一次进来自动执行*/
	searchAuto();

	$("#fangdajing").click(function(){
		searchAuto();
	});

	function searchAuto() {
		var searchLevelText = $("#searchLevelText").val();
		if(searchLevelText === "") {searchLevelText = "企业家精神";}

		var url = solrService + "/solr/mycore/select?q=name:" + searchLevelText + "&wt=json&indent=true";

		$.ajax({
			url: encodeURI(url),
			timeout: 5000,
			type: "get",
			dataType:"json",
			contentType: "application/x-www-form-urlencoded; charset=utf-8",
			crossDomain: true,
			success:function(msg) {
				var num = msg.response.numFound;
				$("#interDiv").empty();
				if(num === 0) {
					$("#interDiv").append("<div style='margin-left:25px;padding-top:10px;'><span style='color:#999'>没有找到相关信息</span></div>");
				}else {
					$("#interDiv").append("<div style='margin-left:25px;padding-top:10px;'><span style='color:#999;'>为你找到相关结果共" + num + "条</span></div>");
					var hrStyle = "<hr style='border:1px solid #ccc;margin-left:25px;width:95%;margin-right:25px;border-width-left:0;border-width-right:0;border-width-bottom:0;'>";
					for (var i = 0; i < num; i++) {
						$("#interDiv").append(hrStyle);
						var testText = msg.response.docs[i].name;
						$("#interDiv").append("<div style='margin-left:25px;padding-bottom:10px;'>" + testText + "</div>");
					}
				}
			},
			error:function(msg) {
				$("#interDiv").empty();
				$("#interDiv").append("<div style='margin-left:25px;padding-top:10px;'><span style='color:#999'>没有找到相关信息</span></div>");
			}
		});
	}

	/*按enter执行搜索*/
	$("#searchBody").keydown(function() {
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
           $("#fangdajing").click();
       }    
   	}

   	//火狐    
    function fireFoxKey(evt) {    
        if (evt.keyCode == 13) {           
        	$("#fangdajing").click();  
        }    
    }   

	$("#interDiv div").each(function(){
		var $spanWidth = $(this).find('span');
		$(this).addClass("text-center");
		$(this).css("width", $spanWidth.width() + 40);
		$(this).css({"height":"40px","background-color":"#d5dada", "float":"left",
			"line-height":"40px","border-radius":"5px","margin-right":"10px","margin-top":"10px","cursor":"pointer","color":"#3c444b"});

		$(this).click(function() {
			var $others = $(this).siblings('div');
			$(this).css({"background-color":"#068fe4", "color":"#ffffff"});
			$others.css({"background-color":"#d5dada", "color":"#3c444b"});
			$("#searchLevelText").val($spanWidth.text());
		});
	});

	$("#fangzi").click(function() {
		location.href = "viewpoint-view.html";
	});

	$("#searchLevelText").focus(function(){
		$(this).attr('placeholder','');
	});

	$("#searchLevelText").blur(function(){
		$(this).attr('placeholder','企业家精神');
	});

	function serachParameter(name) {
	    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r!=null)return  unescape(r[2]); return null;
	}
})();