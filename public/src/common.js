define(['jquery', 'template', 'cookie'], function ($, template) {





    // 通过检测cookie中有没有PHPSESSID来判断用户是否登录
    // 除了登录页面以外都要进行检测

    var pathname = location.pathname;
    if (pathname != '/studyit1/login' && !$.cookie('PHPSESSID')) {
        location.href = '/studyit1/login';
    }

    // 设置用户信息
    var loginfo = $.cookie('loginfo') && JSON.parse($.cookie('loginfo'));

    var source = '<!-- 头像 -->';
    source += '<div class="avatar img-circle">';
    source += '<img src="{{tc_avatar}}">';
    source += '</div>'
    source += '<h4>{{tc_name}}</h4>';

    var render = template.compile(source);
    var html = render(loginfo||{});

    $('.aside .profile').html(html);


    $('.navs a + ul').prev('a').on('click', function () {
        $(this).next('ul').slideToggle();
    });
})
