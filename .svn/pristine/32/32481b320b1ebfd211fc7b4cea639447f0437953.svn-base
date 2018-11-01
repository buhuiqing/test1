(function () {
	var result = false;
	//阻止浏览器默认行为
	document.addEventListener("dragleave", function (e) {
		e.preventDefault();
	}, false);
	document.addEventListener("drop", function (e) {
		e.preventDefault();
	}, false);
	document.addEventListener("dragenter", function (e) {
		e.preventDefault();
	}, false);
	document.addEventListener("dragover", function (e) {
		e.preventDefault();
	}, false);

	/*实现拖拽图片预览功能*/
	box.addEventListener("drop", function (e) {
		var fileList = e.dataTransfer.files; //获取文件对象
		//检测是否是拖拽文件到页面的操作
		if (fileList.length == 0) {
			return false;
		}

		if (fileList[0].size >= 5000000) {
			Alert.show("最大只能上传5MB的图片");
			return false;
		}


		for (var i = 0; i < fileList.length; i++) {
			if (fileList[i].type.indexOf('image') != -1) {   //利用返回的type属性值字符串包含image来判断文件类型

				var fd = new FileReader();   //读取文件信息
				fd.onload = function () {     //当读取文件成功完成的时候触onload事件
					　　　　　　　　　　var oImg = document.createElement('img');
					oImg.src = this.result;   //获取文件的数据，当文件是图片，返回base64的图片数据
					$("#editImg").attr("src", oImg.src);
					$("#largeImage").attr("src", oImg.src);
					$("#middleImage").attr("src", oImg.src);
					$("#smallImage").attr("src", oImg.src);
				};

				fd.readAsDataURL(fileList[i]);    //参数为读取的文件对象，将文件读取为DataURL
				result = true;
				changeFlag = true;
				fd.onerror = function (e) {
					Alert.show('目前只能上传文件');
				};
			} else {
				Alert.show('请上传图片类型！');
			}
		}
	}, false);

	/*input图片预览功能*/
	/*$("#editImg").click(function(e){
		$("#browse").click();
		result = true;
        changeFlag=true;
	});*/

	/*var url = "/file-service/file-api.upload?domain=user&type=photo";*/
	var url = uploadFileMethod;
	var uploader = new plupload.Uploader({
		runtimes: 'html5,flash,silverlight,html4',
		browse_button: browse, //一个触发的元素，写一个隐藏的元素就行
		url: url,
		flash_swf_url: 'libs/plupload/Moxie.swf',
		silverlight_xap_url: 'libs/plupload/Moxie.xap',
		multiple_queues: false,
		multi_selection: false,
		filters: {
			mime_types: [ //只允许上传图片和zip文件
				{
					title: "Image files",
					extensions: "jpg,gif,png"
				}, {
					title: "Zip files",
					extensions: "zip"
				}],
			max_file_size: '5mb', //最大只能上传文件大小
			prevent_duplicates: true
			//不允许选取重复文件
		},
		resize: {
			width: 160,
			height: 160,
			crop: false, //是否裁剪
			quality: 60, //压缩后图片的质量，只对jpg格式的图片有效，默认为90
			preserve_headers: false
		},
		drop_element: "box" //支持拖拽上传方式
	});

	//在实例对象上调用init()方法进行初始化
	uploader.init();

	//绑定各种事件，并在事件监听函数中做你想做的事
	uploader.bind('FilesAdded', function (uploader, files) {
		//看完保留最后一次上传的
		$.each(uploader.files, function (i, files) {
			if (uploader.files.length <= 1) {
				return;
			}

			uploader.removeFile(files);
		});
	});
	//文件上传完成发生的事
	uploader.bind('FileUploaded', function (uploader, file, responseObject) {
		var result = $.parseJSON(responseObject.response || "null");
		if (result && result.data) {
			$("#editImg").attr("src", uploadFileMethod + result.data.fileName);
			Alert.show("上传成功");
			changeFlag = false;
			setTimeout(function () {
				location.href = "personal-center-data.html?fileName=" + result.data.fileName;
			}, 0);
		} else {
			Alert.show("文件上传失败");
		}
	});

	$("#start_upload").click(function () {
		if (changeFlag == false) {
			// Alert.show("没有修改信息,请修改信息后再进行保存.");
			return;
		}
		uploader.start();
	});
})();