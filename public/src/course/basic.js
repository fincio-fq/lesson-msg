/**
 * Created by fincio on 2017/1/8.
 */

/*
 ** 课程基本信息
 */

define(['jquery', '../utils', 'template'], function ($, utils, template) {
    // 设置导航
    utils.setMenu('/course/course_add');

    var cs_id = utils.qs('cs_id'),
        basic = $('#basic'),
        html;

    $.ajax({
        url: '/api/course/basic',
        type: 'get',
        data: {cs_id: cs_id},
        success: function (info) {
            console.log(info);

            html = template('basicTpl', info.result);

            basic.html(html);
        }
    });
});