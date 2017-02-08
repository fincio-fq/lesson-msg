/**
 * Created by fincio on 2017/1/8.
 */

define(['jquery','../utils','validate','form'], function ($,utils) {
    utils.setMenu('/course/course_add')

    $("#addForm").validate({
        sendform:false,
        valid: function () {
            $(this).ajaxSubmit({
                url:'/api/course/create',
                type:'post',
                success: function (info) {
                    if(info.code==200){
                        location.href="'/studyit1/course/course_add_step1?cs_id=' + info.result.cs_id"
                    }
                }
            })
        }
    })

})
