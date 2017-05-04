$(document).ready(function(){
	/*隐藏加入我们弹出层*/
	$("div,img,p,ul[class!='ul2']").click(function(){
		hideHRInfo();
	});
	/*设置选中菜单项样式*/
	var href = location.href;
	var id = href.substring(href.lastIndexOf('/') + 1,href.lastIndexOf('.'));
	$("#"+id).css({"color":"#5cca5c"});
});

function hideHRInfo(){
	if($('#hrinfo').is(':visible')){
		$('#hrinfo').fadeOut(500);
	}
}