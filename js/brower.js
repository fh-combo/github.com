
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie11 = s[1] :
            (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
                (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
                    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
                        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    if (Sys.ie || Sys.ie11) {
        document.write(Sys.ie);
        var obj = document.createElement("div");
        obj.setAttribute("id", "ietips");
        obj.style.position = "fixed";
        obj.style.textAlign = "center";
        obj.style.zIndex = "9999";
        obj.style.display = "inline-block";
        obj.style.width = "100% ";
        obj.style.top = 0 + "px";
        obj.style.left = 0 + "px";
        obj.style.backgroundColor = "RGB(242,222,222)";
        obj.style.paddingTop = "20px";
        obj.style.paddingBottom = "20px";
        obj.style.color = "RGB(169,68,66)";
        $("body").append(obj);
        $("<span><span class='broswertips'>您的浏览器实在<b style='font-weight:bold;'>太太太太太太旧了</b>，放学别走，升级完浏览器再说 <b style='font-weight:bold;'><a style='color:RGB(169,68,66)' href='http://browsehappy.com/'>立即升级</a></b>" +
            "</a></span><span class='browser'>" +
            "</span></span><a style='font-size:20px;margin-left:20px;cursor: pointer;' class='ietips-del'>&times</a>").appendTo(obj);
        $(".ietips-del").click(function () {
            $(this).parent().remove()
        })
    }


/*if (Sys.firefox) document.write('Firefox: ' + Sys.firefox);
 if (Sys.chrome) document.write('Chrome: ' + Sys.chrome);
 if (Sys.opera) document.write('Opera: ' + Sys.opera);
 if (Sys.safari) document.write('Safari: ' + Sys.safari);*/