(function() {

    var Alert = {
        doc: $('body'),
        currentAlert: null,
        /**
         * 显示警告信息
         * @param {String} content 内容
         * @param {Number} type    类型 1-danger,2-success,3-warning, default-1
         */
        show: function(content, /*{Optional}*/type) {
            // 定义样式
            var cls = 'alert-danger';

            switch (type) {
                case 2:
                    cls = 'alert-success';
                    break;
                case 3:
                    cls = 'alert-warning';
                    break;
            }

            // 创建元素
            var el = $('<div style="position:fixed;top:0;;opacity:0.9;width:100%;z-index:9999;" class="alert alert-dismissible ' + cls + '">\
        <button type="button" class="close"><span aria-hidden="true">&times;</span></button>\
            <p>' + content + '</p></div>');

            // 绑定手动关闭
            el.find('.close').on('click', function() {
                $(this).parent().removeClass('in');
            });

            if (this.currentAlert) {
                // 移除上一条信息
                this.currentAlert.removeClass('in');
            }

            this.currentAlert = el;

            // 添加到页面并显示信息
            this.doc.append(el);
            setTimeout(function() {
                el.addClass('in');
            }, 1);

            // 定时关闭信息
            setTimeout(function() {
                if (el.hasClass('in')) {
                    el.removeClass('in');
                }

                setTimeout(function() {
                    el.remove();
                }, 500);
            }, 3000);
        }
    };

    window.Alert = Alert;
})();
