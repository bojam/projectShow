var colorList = ['f4b300', '78ba00', '2673ec', 'ae113d', '632f00', 'b01e00', '4e0038', 'c1004f', '7200ac', '2d004e', '006ac1', '001e4e', '008287', '004d60', '004a00', '00c13f', '15992a', 'ff981d', 'e56c19', 'b81b1b', 'ff1d77', 'b81b6c', 'aa40ff', '691bb8', '1faeff', '1b58b8', '56c5ff', '569ce3', '00d8cc', '00aaaa', '91d100', 'b81b6c', 'e1b700', 'd39d09', 'ff76bc', 'e064b7', '00a4a4', 'ff7d23', '4cafb5', '044d91', '832772', 'd15a44', 'de971b', '017802', '6e2ea0'];
//var colorList = ['lightblue','#FEEECD','lightgreen','yellow','pink','lightgray','wheat','coral','salmon','violet','khaki','thistle','chocolate','sienna','goldenrod','lavender','bisque','darkseagreen','mistyrose','plum','yellowgreen','peru','orange','lemonchiffon','deepskyblue','purple','greenyellow','goldenrod','sienna','skyblue'];
var totalBox = 0;
var myMetro = $("#myMetro")[0];
myMetro.innerHTML = '<div class="MBox"><div class="widgetBox bigBox" style="background:#' + colorList[(colorList.length * Math.random()) >> 0] + '"><div class="innerBox logo">Project.show</div></div></div>';

function createData(n) {
	var spanWrap = document.createElement("div");
	var content = '';
	var color;
	for (i = 0; i < n; i++, totalBox++) {
		width = 200;
		height = 160;
		color = colorList[(colorList.length * Math.random()) >> 0];
		ran = Math.random() * 3 >> 0;
		if (totalBox < project.length && !ran) {
			width = Math.floor(Math.random() * 2+1)*width;
			height = Math.floor(Math.random() * 2+1)*height;
			fontSize = (width*height)/3600 < 20 ? 20 : (width*height)/3600;
			content += '<div class="MBox"><a href="javascript:popWin.showWin(\''+project[i].name+'\',\''+project[i].url+'\')" class="widgetBox bigBox" style="background:#' + color + '"><div style="width:' + width + 'px;height:' + height + 'px;font-size:'+fontSize+'px" class="innerBox">'+project[i].name+'</div></a></div>';
		} else if (totalBox < project.length && ran) {
			content += '<div class="MBox"><a href="javascript:popWin.showWin(\''+project[i].name+'\',\''+project[i].url+'\')" class="widgetBox" style="background:#' + color + '"><div style="width:' + width + 'px;height:' + height + 'px;" class="innerBox">'+project[i].name+'</div></a></div>';
		} else if (totalBox >= project.length && !ran) {
			width = Math.floor(Math.random() * 2+1)*width;
			height = Math.floor(Math.random() * 2+1)*height;
			content += '<div class="MBox"><div class="widgetBox bigBox" style="background:#' + color + '"><div style="width:' + width + 'px;height:' + height + 'px;" class="innerBox"></div></div></div>';
		} else {
			content += '<div class="MBox"><div class="widgetBox" style="background:#' + color + '"><div style="width:' + width + 'px;height:' + height + 'px;" class="innerBox"></div></div></div>';
		}
	};
	spanWrap.innerHTML = content;
	myMetro.appendChild(spanWrap);
	return spanWrap;
}

window.onload = function() {
	createData(40);
	metro.init(myMetro);
	$('a').hover(function(){
		var color = $(this).css('background-color');
		$(this).css({'color':color,'background-color':'#fff'});
	},function(){
		var color = $(this).css('color');
		$(this).css({'background-color':color,'color':'#fff'});
	});
};
window.onresize = function() {
	metro.resort(myMetro);
};
window.onscroll = function() {
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
	windowHeight = document.documentElement.clientHeight,
	documentHeight = document.body.offsetHeight;
	if (windowHeight + scrollTop > documentHeight - 50) {
		metro.putData(createData(15));
	}
}