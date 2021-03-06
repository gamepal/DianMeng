$(function(){
    $('#captcha-img').click(function (event) {
        var self = $(this);
        var src = self.attr('src');
        var newsrc = zlparam.setParam(src,'xx',Math.random());
        self.attr('src',newsrc);
    });
});


$(function () {
    $("#sms-captcha-btn").click(function (event) {

        event.preventDefault();
        var self = $(this);
        var email = $("input[name='email']").val();

        if (!email)
        {
            zlalert.alertInfoToast('请输入邮箱');
            return;
        }
        // if(!(/^1[345879]\d{9}$/.test(telephone))){
        //     zlalert.alertInfoToast('Cellphone number is invalid！');
        //     return;
        // }

        var timestamp = (new Date).getTime();
        var sign = md5(timestamp+email+"tewtweyuudssujk#&%ss");

        zlajax.post({
            'url': '/c/sms_captcha/',
            'data':{
                'email': email,
                'timestamp': timestamp,
                'sign': sign
            },
            'success': function (data) {
                if(data['code'] == 200){
                    zlalert.alertSuccessToast('Sent successful！');
                    self.attr("disabled",'disabled');
                    var timeCount = 10;
                    var timer = setInterval(function () {
                        timeCount--;
                        self.text(timeCount);
                        if(timeCount <= 0){
                            self.removeAttr('disabled');
                            clearInterval(timer);
                            self.text('发送验证');
                        }
                    },1000);
                }else{
                    zlalert.alertInfoToast(data['message']);
                }
            }
        });
    });
});

$(function(){
    $("#submit-btn").click(function(event){
        event.preventDefault();
        var email_input = $("input[name='email']");
        var sms_captcha_input = $("input[name='sms_captcha']");
        var username_input = $("input[name='username']");
        var password1_input = $("input[name='password1']");
        var password2_input = $("input[name='password2']");
        var graph_captcha_input = $("input[name='graph_captcha']");

        if (!email_input)
        {
            zlalert.alertInfoToast('请输入邮箱');
            return;
        }
        if (!sms_captcha_input)
        {
            zlalert.alertInfoToast('输入不能为空');
            return;
        }
        if (!username_input)
        {
            zlalert.alertInfoToast('输入不能为空');
            return;
        }
        if (!password1_input)
        {
            zlalert.alertInfoToast('输入不能为空');
            return;
        }
        if (!password2_input)
        {
            zlalert.alertInfoToast('输入不能为空');
            return;
        }
        if (!graph_captcha_input)
        {
            zlalert.alertInfoToast('输入不能为空');
            return;
        }


        var email = email_input.val();
        var sms_captcha = sms_captcha_input.val();
        var username = username_input.val();
        var password1 = password1_input.val();
        var password2 = password2_input.val();
        var graph_captcha = graph_captcha_input.val();

        zlajax.post({
            'url': '/signup/',
            'data': {
                'email': email,
                'sms_captcha': sms_captcha,
                'username': username,
                'password1': password1,
                'password2': password2,
                'graph_captcha': graph_captcha
            },
            'success': function(data){
                if(data['code'] == 200){
                    var return_to = $("#return-to-span").text();
                    if(return_to){
                        window.location = return_to;
                    }else{
                        window.location = '/';
                    }
                }else{
                    zlalert.alertInfo(data['message']);
                }
            },
            'fail': function(){
                zlalert.alertNetworkError();
            }
        });
    });
});