var path = 'http://xpj.zheok.com';
// 文件下载
var wordPath ='http://xpj.zheok.com/web/pub/downloadDocument/';
var photoPath = 'http://xpj.zheok.com/upload/images/';
var downPath = 'http://xpj.zheok.com/upload/pack/'
var keJian = 'http://zheok-xpj.oss-cn-beijing.aliyuncs.com/';
// 点击发送验证码
function sendText(tableText){
	$(tableText).click(function () {
	    var time = 60;
	    var timer = setInterval(function(){
	        time--;
	       $(tableText).html(time+"秒重发");
			$(tableText).css({'background':'#ccc','pointer-events':'none'});
			if(time==0){
	            clearInterval(timer);
				$(tableText).html("获取验证码");
				$(tableText).css({'background':'#6aaff7','pointer-events':'auto'});
			}
	    },1000);
	});
};
// 退出
function logout() {
	delCookie(tk);
	// console.log(getCookie(tk))
	window.location.href = 'login.html';
}
