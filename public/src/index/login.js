/**
 * Created by fincio on 2017/1/5.
 */
define(['jquery'], function ($) {
    // 登录功能需要后端做验证
    // 前端需要将用户输入的用户名和密码发送到服务端
    // 发送方式可以使用传统表单，此种方式会造成页面刷新
    // 所以用户体验不好
    // 也可以是xmlhttprequest方式，可以不刷新也将数据传递过去
    // 采用此种方式

    $('#loginForm').on('submit', function () {

        var formData = $(this).serialize();

        $.ajax({
            url: '/api/login',
            type: 'post',
            data: formData,
            success: function (info) {
                if (info.code == 200) {
                    alert(info.msg);

                    // cookie 只能字符串类型
                    $.cookie('loginfo', JSON.stringify(info.result), {path: '/'});

                    location.href = '/studyit1/index';
                }
            }
        });

        return false;
    });


})