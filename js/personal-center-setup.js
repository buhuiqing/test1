(function(){
	var soundClick = storage.getItem("soundClick");
	if (isNull(soundClick)) {
		soundClick = true;
	}

	if(soundClick === true || soundClick === "true") {
		$("#soundOpen").css({"background-color":"#068fe4","color":"#ffffff"});
	} 
	if(soundClick === false || soundClick === "false") {
		$("#soundClose").css({"background-color":"#068fe4","color":"#ffffff"});
	}

	$("#soundOpen").click(function () { 
		$(this).css({"background-color":"#068fe4","color":"#ffffff","outline":"none"});
		$("#soundClose").css({"background-color":"#dadede","color":"#656c73"});
		changeFlag = true;
		storage.setItem("soundClick", true);
	});
	$("#soundClose").click(function () { 
		$(this).css({"background-color":"#068fe4","outline":"none","color":"#ffffff"});
		$("#soundOpen").css({"background-color":"#dadede","color":"#656c73"});
		changeFlag = true;
		storage.setItem("soundClick", false);
	});

	$("#setupBtn").click(function() {
		if(changeFlag == false) {
			// Alert.show("没有修改信息,请修改信息后再进行保存.");
			return;
		}
		Alert.show("保存成功!");
		changeFlag = false;
		setTimeout(function() {
			location.href = "personal-center.html";
        }, 1500);
	});
})();
