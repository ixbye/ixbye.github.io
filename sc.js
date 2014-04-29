/**
 *
 * @authors Your Name (you@example.org)
 * @date    2014-03-25 00:44:59
 * @version $Id$
 */
function o() {
	var kw = document.getElementById("kw");
	var k = kw.value;
	window.open("http://www.amazon.cn/s/ref=nb_sb_noss_2?__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&url=search-alias%3Daps&field-keywords=" + k, "_blank");
	window.open("http://search.jd.com/Search?keyword=" + k + "&enc=utf-8");
	window.open("http://s.taobao.com/search?q=" + k);
}

function s() {
	var kww = document.getElementById("kww");
	var k = kww.value;
	window.open("http://www.baidu.com/baidu?wd=" + k);
	window.open("https://www.google.com.hk/#newwindow=1&q=" + k);
	window.open("http://baike.baidu.com/search?word=" + k);
}

function Enterpress(e,eve) {
	var e = e || window.event;
	if (e.keyCode == 13) {
		if (eve=="eve1")
		{
			s();
		}
		else if (eve=="eve2") 
		{
			o();
		}

	}
}