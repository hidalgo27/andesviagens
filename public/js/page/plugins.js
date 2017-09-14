/** HTML5 LightBox - jQuery Image and Video LightBox Plugin
 * Copyright 2014 Magic Hills Pty Ltd All Rights Reserved
 * Website: http://html5box.com
 * Version 4.8 
 */
(function() {
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i = 0; i < scripts.length; i++)
        if (scripts[i].src && scripts[i].src.match(/viedolightbox\.js/i)) jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    var loadjQuery = false;
    if (typeof jQuery == "undefined") loadjQuery = true;
    else {
        var jVersion = jQuery.fn.jquery.split(".");
        if (jVersion[0] < 1 || jVersion[0] == 1 && jVersion[1] < 6) loadjQuery = true
    }
    if (loadjQuery) {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        if (script.readyState) script.onreadystatechange = function() {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                loadHtml5LightBox(jsFolder)
            }
        };
        else script.onload = function() {
            loadHtml5LightBox(jsFolder)
        };
        script.setAttribute("src", jsFolder + "jquery.js");
        head.appendChild(script)
    } else loadHtml5LightBox(jsFolder)
})();

function loadHtml5LightBox(jsFolder) {
    (function($) {
        $.fn.html5lightbox = function(options) {
            var inst = this;
            inst.options = jQuery.extend({
                freelink: false,
                autoplay: true,
                html5player: true,
                responsive: true,
                nativehtml5controls: false,
                videohidecontrols: false,
                useflashonie9: true,
                useflashonie10: false,
                useflashonie11: false,
                googleanalyticsaccount: "",
                arrowloop: true,
                shownavigation: true,
                thumbwidth: 96,
                thumbheight: 72,
                thumbgap: 4,
                thumbtopmargin: 12,
                thumbbottommargin: 12,
                thumbborder: 1,
                thumbbordercolor: "transparent",
                thumbhighlightbordercolor: "#fff",
                thumbopacity: 1,
                navbuttonwidth: 32,
                overlaybgcolor: "#000",
                overlayopacity: 0.8,
                bgcolor: "#fff",
                bordersize: 8,
                borderradius: 0,
                bordermargin: 16,
                barautoheight: true,
                barheight: 48,
                loadingwidth: 64,
                loadingheight: 64,
                resizespeed: 400,
                fadespeed: 400,
                jsfolder: jsFolder,
                skinsfoldername: "skins/default/",
                loadingimage: "lightbox-loading.gif",
                nextimage: "lightbox-next.png",
                previmage: "lightbox-prev.png",
                closeimage: "lightbox-close.png",
                playvideoimage: "lightbox-playvideo.png",
                titlebgimage: "lightbox-titlebg.png",
                navarrowsprevimage: "nav-arrows-prev.png",
                navarrowsnextimage: "nav-arrows-next.png",
                showtitle: true,
                titlestyle: "bottom",
                titleinsidecss: "{color:#fff; font-size:14px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left;}",
                titlebottomcss: "{color:#333; font-size:14px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left;}",
                showdescription: true,
                descriptioninsidecss: "{color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
                descriptionbottomcss: "{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
                errorwidth: 280,
                errorheight: 48,
                errorcss: "{text-align:center; color:#ff0000; font-size:14px; font-family:Arial, sans-serif;}",
                supportesckey: true,
                supportarrowkeys: true,
                version: "3.3",
                stamp: true,
                freemark: "",
                watermark: false,
                watermarklink: ""
            }, options);
            if (typeof html5lightbox_options !=
                "undefined" && html5lightbox_options) jQuery.extend(inst.options, html5lightbox_options);
            if ($("div#html5lightbox_options").length) $.each($("div#html5lightbox_options").data(), function(key, value) {
                inst.options[key.toLowerCase()] = value
            });
            inst.options.htmlfolder = window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1);
            inst.options.skinsfolder = inst.options.skinsfoldername;
            if (inst.options.skinsfolder.length > 0 && inst.options.skinsfolder[inst.options.skinsfolder.length - 1] != "/") inst.options.skinsfolder +=
                "/";
            if (inst.options.skinsfolder.charAt(0) != "/" && inst.options.skinsfolder.substring(0, 5) != "http:" && inst.options.skinsfolder.substring(0, 6) != "https:") inst.options.skinsfolder = inst.options.jsfolder + inst.options.skinsfolder;
            var i;
            var l;
            var mark = "";
            var bytes = inst.options.freemark.split(",");
            for (i = 0; i < bytes.length; i++) mark += String.fromCharCode(bytes[i]);
            inst.options.freemark = mark;
            var d0 = "hmtamgli5cboxh.iclolms";
            for (i = 1; i <= 5; i++) d0 = d0.slice(0, i) + d0.slice(i + 1);
            l = d0.length;
            for (i = 0; i < 5; i++) d0 = d0.slice(0, l -
                9 + i) + d0.slice(l - 8 + i);
            if (inst.options.htmlfolder.indexOf(d0) != -1) inst.options.stamp = false;
            inst.options.navheight = 0;
            inst.options.thumbgap += 2 * inst.options.thumbborder;
            inst.options.types = ["IMAGE", "FLASH", "VIDEO", "YOUTUBE", "VIMEO", "PDF", "MP3", "WEB", "FLV", "DAILYMOTION"];
            inst.elemArray = new Array;
            inst.options.curElem = -1;
            inst.options.flashInstalled = false;
            try {
                if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) inst.options.flashInstalled = true
            } catch (e) {
                if (navigator.mimeTypes["application/x-shockwave-flash"]) inst.options.flashInstalled =
                    true
            }
            inst.options.html5VideoSupported = !!document.createElement("video").canPlayType;
            inst.options.isChrome = navigator.userAgent.match(/Chrome/i) != null;
            inst.options.isFirefox = navigator.userAgent.match(/Firefox/i) != null;
            inst.options.isOpera = navigator.userAgent.match(/Opera/i) != null || navigator.userAgent.match(/OPR\//i) != null;
            inst.options.isSafari = navigator.userAgent.match(/Safari/i) != null;
            inst.options.isIE11 = navigator.userAgent.match(/Trident\/7/) != null && navigator.userAgent.match(/rv:11/) != null;
            inst.options.isIE =
                navigator.userAgent.match(/MSIE/i) != null && !inst.options.isOpera;
            inst.options.isIE10 = navigator.userAgent.match(/MSIE 10/i) != null && !this.options.isOpera;
            inst.options.isIE9 = navigator.userAgent.match(/MSIE 9/i) != null && !inst.options.isOpera;
            inst.options.isIE8 = navigator.userAgent.match(/MSIE 8/i) != null && !inst.options.isOpera;
            inst.options.isIE7 = navigator.userAgent.match(/MSIE 7/i) != null && !inst.options.isOpera;
            inst.options.isIE6 = navigator.userAgent.match(/MSIE 6/i) != null && !inst.options.isOpera;
            inst.options.isIE678 =
                inst.options.isIE6 || inst.options.isIE7 || inst.options.isIE8;
            inst.options.isIE6789 = inst.options.isIE6 || inst.options.isIE7 || inst.options.isIE8 || inst.options.isIE9;
            inst.options.isAndroid = navigator.userAgent.match(/Android/i) != null;
            inst.options.isIPad = navigator.userAgent.match(/iPad/i) != null;
            inst.options.isIPhone = navigator.userAgent.match(/iPod/i) != null || navigator.userAgent.match(/iPhone/i) != null;
            inst.options.isIOS = inst.options.isIPad || inst.options.isIPhone;
            inst.options.isMobile = inst.options.isAndroid ||
                inst.options.isIPad || inst.options.isIPhone;
            inst.options.isIOSLess5 = inst.options.isIPad && inst.options.isIPhone && (navigator.userAgent.match(/OS 4/i) != null || navigator.userAgent.match(/OS 3/i) != null);
            inst.options.supportCSSPositionFixed = !inst.options.isIE6 && !inst.options.isIOSLess5;
            inst.options.iequirksmode = inst.options.isIE6789 && !jQuery.support.boxModel;
            inst.options.resizeTimeout = -1;
            if (inst.options.isMobile) inst.options.autoplay = false;
            if (inst.options.googleanalyticsaccount && !window._gaq) {
                window._gaq =
                    window._gaq || [];
                window._gaq.push(["_setAccount", inst.options.googleanalyticsaccount]);
                window._gaq.push(["_trackPageview"]);
                $.getScript(("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js")
            }
            inst.init = function() {
                inst.showing = false;
                inst.readData();
                inst.createMarkup();
                inst.supportKeyboard()
            };
            var ELEM_TYPE = 0,
                ELEM_HREF = 1,
                ELEM_TITLE = 2,
                ELEM_GROUP = 3,
                ELEM_WIDTH = 4,
                ELEM_HEIGHT = 5,
                ELEM_HREF_WEBM = 6,
                ELEM_HREF_OGG = 7,
                ELEM_THUMBNAIL = 8,
                ELEM_DESCRIPTION = 9;
            inst.readData = function() {
                inst.each(function() {
                    if (this.nodeName.toLowerCase() !=
                        "a" && this.nodeName.toLowerCase() != "area") return;
                    var $this = $(this);
                    var fileType = inst.checkType($this.attr("href"));
                    if (fileType < 0) return;
                    for (var i = 0; i < inst.elemArray.length; i++)
                        if ($this.attr("href") == inst.elemArray[i][ELEM_HREF]) return;
                    inst.elemArray.push(new Array(fileType, $this.attr("href"), $this.attr("title"), $this.data("group"), $this.data("width"), $this.data("height"), $this.data("webm"), $this.data("ogg"), $this.data("thumbnail"), $this.data("description")))
                })
            };
            inst.createMarkup = function() {
                if (inst.options.titlestyle ==
                    "inside") {
                    inst.options.titlecss = inst.options.titleinsidecss;
                    inst.options.descriptioncss = inst.options.descriptioninsidecss
                } else if (inst.options.titlestyle == "bottom") {
                    inst.options.titlecss = inst.options.titlebottomcss;
                    inst.options.descriptioncss = inst.options.descriptionbottomcss
                }
                var styleCss = "#html5-text " + inst.options.titlecss;
                styleCss += ".html5-description " + inst.options.descriptioncss;
                styleCss += ".html5-error " + inst.options.errorcss;
                $("head").append("<style type='text/css'>" + styleCss + "</style>");
                inst.$lightbox =
                    jQuery("<div id='html5-lightbox' style='display:none;top:0px;left:0px;width:100%;height:100%;z-index:9999998;text-align:center;'>" + "<div id='html5-lightbox-overlay' style='display:block;position:absolute;top:0px;left:0px;width:100%;min-height:100%;background-color:" + inst.options.overlaybgcolor + ";opacity:" + inst.options.overlayopacity + ";filter:alpha(opacity=" + Math.round(inst.options.overlayopacity * 100) + ");'></div>" + "<div id='html5-lightbox-box' style='display:block;position:relative;margin:0px auto;'>" +
                        "<div id='html5-elem-box' style='display:block;position:relative;margin:0px auto;text-align:center;overflow:hidden;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;'>" + "<div id='html5-elem-wrap' style='display:block;position:relative;margin:0px auto;text-align:center;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;background-color:" + inst.options.bgcolor + ";'>" + "<div id='html5-loading' style='display:none;position:absolute;top:0px;left:0px;text-align:center;width:100%;height:100%;background:url(\"" +
                        inst.options.skinsfolder + inst.options.loadingimage + "\") no-repeat center center;'></div>" + "<div id='html5-error' class='html5-error' style='display:none;position:absolute;padding:" + inst.options.bordersize + "px;text-align:center;width:" + inst.options.errorwidth + "px;height:" + inst.options.errorheight + "px;'>" + "The requested content cannot be loaded.<br />Please try again later." + "</div>" + "<div id='html5-image' style='display:none;position:absolute;top:0px;left:0px;" + (inst.options.iequirksmode ? "margin" :
                            "padding") + ":" + inst.options.bordersize + "px;text-align:center;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;'></div>" + "<div id='html5-next' style='display:none;cursor:pointer;position:absolute;right:" + inst.options.bordersize + "px;top:50%;margin-top:-16px;'><img src='" + inst.options.skinsfolder + inst.options.nextimage + "'></div>" + "<div id='html5-prev' style='display:none;cursor:pointer;position:absolute;left:" + inst.options.bordersize + "px;top:50%;margin-top:-16px;'><img src='" +
                        inst.options.skinsfolder + inst.options.previmage + "'></div>" + "</div>" + "</div>" + "<div id='html5-watermark' style='display:none;position:absolute;left:" + String(inst.options.bordersize + 2) + "px;top:" + String(inst.options.bordersize + 2) + "px;'></div>" + "</div>" + "</div>");
                inst.$lightbox.css({
                    position: inst.options.supportCSSPositionFixed && inst.options.responsive && !inst.options.iequirksmode ? "fixed" : "absolute"
                });
                inst.$lightbox.appendTo("body");
                inst.$lightboxBox = $("#html5-lightbox-box", inst.$lightbox);
                inst.$elem =
                    $("#html5-elem-box", inst.$lightbox);
                inst.$elemWrap = $("#html5-elem-wrap", inst.$lightbox);
                inst.$loading = $("#html5-loading", inst.$lightbox);
                inst.$error = $("#html5-error", inst.$lightbox);
                inst.$image = $("#html5-image", inst.$lightbox);
                inst.$next = $("#html5-next", inst.$lightbox);
                inst.$prev = $("#html5-prev", inst.$lightbox);
                var elemText = "<div id='html5-elem-data-box' style='display:none;'><div id='html5-text' style='display:block;overflow:hidden;'></div></div>";
                inst.$elem.append(elemText);
                inst.$elemData = $("#html5-elem-data-box",
                    inst.$lightbox);
                inst.$text = $("#html5-text", inst.$lightbox);
                if (inst.options.borderradius > 0) {
                    inst.$elem.css({
                        "border-radius": inst.options.borderradius + "px",
                        "-moz-border-radius": inst.options.borderradius + "px",
                        "-webkit-border-radius": inst.options.borderradius + "px"
                    });
                    if (inst.options.titlestyle == "inside") inst.$elemWrap.css({
                        "border-radius": inst.options.borderradius + "px",
                        "-moz-border-radius": inst.options.borderradius + "px",
                        "-webkit-border-radius": inst.options.borderradius + "px"
                    });
                    else {
                        inst.$elemWrap.css({
                            "border-top-left-radius": inst.options.borderradius +
                                "px",
                            "-moz-top-left-border-radius": inst.options.borderradius + "px",
                            "-webkit-top-left-border-radius": inst.options.borderradius + "px",
                            "border-top-right-radius": inst.options.borderradius + "px",
                            "-moz-top-right-border-radius": inst.options.borderradius + "px",
                            "-webkit-top-right-border-radius": inst.options.borderradius + "px"
                        });
                        inst.$elemData.css({
                            "border-bottom-left-radius": inst.options.borderradius + "px",
                            "-moz-top-bottom-border-radius": inst.options.borderradius + "px",
                            "-webkit-bottom-left-border-radius": inst.options.borderradius +
                                "px",
                            "border-bottom-right-radius": inst.options.borderradius + "px",
                            "-moz-bottom-right-border-radius": inst.options.borderradius + "px",
                            "-webkit-bottom-right-border-radius": inst.options.borderradius + "px"
                        })
                    }
                }
                if (inst.options.titlestyle == "inside") {
                    inst.$elemData.css({
                        position: "absolute",
                        margin: inst.options.bordersize + "px",
                        bottom: 0,
                        left: 0,
                        "background-color": "#333",
                        "background-color": "rgba(51, 51, 51, 0.6)"
                    });
                    inst.$text.css({
                        padding: inst.options.bordersize + "px " + 2 * inst.options.bordersize + "px"
                    })
                } else {
                    inst.$elemData.css({
                        position: "relative",
                        width: "100%",
                        height: inst.options.barautoheight ? "auto" : inst.options.barheight + "px",
                        "padding": "0 0 " + inst.options.bordersize + "px" + " 0",
                        "background-color": inst.options.bgcolor,
                        "text-align": "left"
                    });
                    inst.$text.css({
                        "margin": "0 " + inst.options.bordersize + "px"
                    })
                }
                inst.$lightboxBox.append("<div id='html5-close' style='display:none;cursor:pointer;position:absolute;top:0;right:0;margin-top:-16px;margin-right:-16px;'><img src='" + inst.options.skinsfolder + inst.options.closeimage + "'></div>");
                inst.$close = $("#html5-close",
                    inst.$lightbox);
                inst.$watermark = $("#html5-watermark", inst.$lightbox);
                if (inst.options.stamp) inst.$watermark.html("<a href='" + inst.options.freelink + "' style='text-decoration:none;' title='jQuery Lightbox'><div style='display:block;width:170px;height:20px;text-align:center;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;background-color:#fff;color:#333;font:12px Arial,sans-serif;'><div style='line-height:20px;'>" + inst.options.freemark + "</div></div></a>");
                else if (inst.options.watermark) {
                    var html =
                        "<img src='" + inst.options.watermark + "' style='border:none;' />";
                    if (inst.options.watermarklink) html = "<a href='" + inst.options.watermarklink + "' target='_blank'>" + html + "</a>";
                    inst.$watermark.html(html)
                }
                $("#html5-lightbox-overlay", inst.$lightbox).click(inst.finish);
                inst.$close.click(inst.finish);
                inst.$next.click(function() {
                    if (inst.options.nextElem <= inst.options.curElem)
                        if (inst.options.onlastarrowclicked && window[inst.options.onlastarrowclicked] && typeof window[inst.options.onlastarrowclicked] == "function") window[inst.options.onlastarrowclicked]();
                    inst.gotoSlide(-1)
                });
                inst.$prev.click(function() {
                    if (inst.options.prevElem >= inst.options.curElem)
                        if (inst.options.onfirstarrowclicked && window[inst.options.onfirstarrowclicked] && typeof window[inst.options.onfirstarrowclicked] == "function") window[inst.options.onfirstarrowclicked]();
                    inst.gotoSlide(-2)
                });
                $(window).resize(function() {
                    if (!inst.options.isMobile) {
                        clearTimeout(inst.options.resizeTimeout);
                        inst.options.resizeTimeout = setTimeout(function() {
                            inst.resizeWindow()
                        }, 500)
                    }
                });
                $(window).scroll(function() {
                    inst.scrollBox()
                });
                $(window).bind("orientationchange", function(e) {
                    if (inst.options.isMobile) inst.resizeWindow()
                });
                if (inst.options.isIPhone) {
                    inst.options.windowInnerHeight = window.innerHeight;
                    setInterval(function() {
                        if (inst.options.windowInnerHeight != window.innerHeight) {
                            inst.options.windowInnerHeight = window.innerHeight;
                            inst.resizeWindow()
                        }
                    }, 500)
                }
                inst.enableSwipe()
            };
            inst.calcNextPrevElem = function() {
                inst.options.nextElem = -1;
                inst.options.prevElem = -1;
                var j, curGroup = inst.elemArray[inst.options.curElem][ELEM_GROUP];
                if (curGroup !=
                    undefined && curGroup != null) {
                    for (j = inst.options.curElem + 1; j < inst.elemArray.length; j++)
                        if (inst.elemArray[j][ELEM_GROUP] == curGroup) {
                            inst.options.nextElem = j;
                            break
                        }
                    if (inst.options.nextElem < 0)
                        for (j = 0; j < inst.options.curElem; j++)
                            if (inst.elemArray[j][ELEM_GROUP] == curGroup) {
                                inst.options.nextElem = j;
                                break
                            }
                    if (inst.options.nextElem >= 0) {
                        for (j = inst.options.curElem - 1; j >= 0; j--)
                            if (inst.elemArray[j][ELEM_GROUP] == curGroup) {
                                inst.options.prevElem = j;
                                break
                            }
                        if (inst.options.prevElem < 0)
                            for (j = inst.elemArray.length - 1; j > inst.options.curElem; j--)
                                if (inst.elemArray[j][ELEM_GROUP] ==
                                    curGroup) {
                                    inst.options.prevElem = j;
                                    break
                                }
                    }
                }
            };
            inst.clickHandler = function() {
                if (inst.elemArray.length <= 0) return true;
                var $this = $(this);
                inst.hideObjects();
                for (var i = 0; i < inst.elemArray.length; i++)
                    if (inst.elemArray[i][ELEM_HREF] == $this.attr("href")) break;
                if (i == inst.elemArray.length) return true;
                inst.options.curElem = i;
                inst.options.nextElem = -1;
                inst.options.prevElem = -1;
                inst.calcNextPrevElem();
                inst.$next.hide();
                inst.$prev.hide();
                inst.reset();
                inst.$lightbox.show();
                if (!inst.options.supportCSSPositionFixed) inst.$lightbox.css("top",
                    $(window).scrollTop());
                var boxW = inst.options.loadingwidth + 2 * inst.options.bordersize;
                var boxH = inst.options.loadingheight + 2 * inst.options.bordersize;
                var winH = window.innerHeight ? window.innerHeight : $(window).height();
                var boxT = Math.round(winH / 2 - boxH / 2);
                if (inst.options.titlestyle != "inside") boxT -= Math.round(inst.options.barheight / 2);
                if (boxT < 16) boxT = 16;
                if (inst.options.iequirksmode) inst.$lightboxBox.css({
                    "top": boxT
                });
                else inst.$lightboxBox.css({
                    "margin-top": boxT
                });
                inst.$lightboxBox.css({
                    "width": boxW,
                    "height": boxH
                });
                inst.$elemWrap.css({
                    "width": boxW,
                    "height": boxH
                });
                inst.loadCurElem();
                return false
            };
            inst.loadThumbnail = function(src, index) {
                var imgLoader = new Image;
                $(imgLoader).load(function() {
                    var style;
                    if (this.width / this.height <= inst.options.thumbwidth / inst.options.thumbheight) style = "width:100%;";
                    else style = "height:100%;";
                    $(".html5-nav-thumb").eq(index).html("<img style='" + style + "' src='" + src + "' />")
                });
                imgLoader.src = src
            };
            inst.showNavigation = function() {
                if (!inst.options.shownavigation) return;
                if (!inst.currentElem || !inst.currentElem[ELEM_GROUP]) return;
                var i;
                var showNav = false;
                var group = inst.currentElem[ELEM_GROUP];
                for (i = 0; i < inst.elemArray.length; i++)
                    if (group == inst.elemArray[i][ELEM_GROUP])
                        if (inst.elemArray[i][ELEM_THUMBNAIL] && inst.elemArray[i][ELEM_THUMBNAIL].length > 0) {
                            showNav = true;
                            break
                        }
                if (!showNav) return;
                inst.options.navheight = inst.options.thumbheight + inst.options.thumbtopmargin + inst.options.thumbbottommargin;
                if ($(".html5-nav").length > 0) return;
                $("body").append("<div class='html5-nav' style='display:block;position:fixed;bottom:0;left:0;width:100%;height:" +
                    inst.options.navheight + "px;z-index:9999999;'>" + "<div class='html5-nav-container' style='position:relative;margin:" + inst.options.thumbtopmargin + "px auto " + inst.options.thumbbottommargin + "px;'>" + "<div class='html5-nav-prev' style='display:block;position:absolute;cursor:pointer;width:" + inst.options.navbuttonwidth + 'px;height:100%;left:0;top:0;background:url("' + inst.options.skinsfolder + inst.options.navarrowsprevimage + "\") no-repeat left center;'></div>" + "<div class='html5-nav-mask' style='display:block;position:relative;margin:0 auto;overflow:hidden;'>" +
                    "<div class='html5-nav-list'></div>" + "</div>" + "<div class='html5-nav-next' style='display:block;position:absolute;cursor:pointer;width:" + inst.options.navbuttonwidth + 'px;height:100%;right:0;top:0;background:url("' + inst.options.skinsfolder + inst.options.navarrowsnextimage + "\") no-repeat right center;'></div>" + "</div>" + "</div>");
                var index = 0;
                for (i = 0; i < inst.elemArray.length; i++)
                    if (group == inst.elemArray[i][ELEM_GROUP])
                        if (inst.elemArray[i][ELEM_THUMBNAIL] && inst.elemArray[i][ELEM_THUMBNAIL].length > 0) {
                            $(".html5-nav-list").append("<div class='html5-nav-thumb' data-arrayindex='" +
                                i + "' style='float:left;overflow:hidden;cursor:pointer;opacity:" + inst.options.thumbopacity + ";margin: 0 " + inst.options.thumbgap / 2 + "px;width:" + inst.options.thumbwidth + "px;height:" + inst.options.thumbheight + "px;border:" + inst.options.thumbborder + "px solid " + inst.options.thumbbordercolor + ";'></div>");
                            this.loadThumbnail(inst.elemArray[i][ELEM_THUMBNAIL], index);
                            index++
                        }
                $(".html5-nav-thumb").hover(function() {
                        $(this).css({
                            opacity: 1
                        });
                        $(this).css({
                            border: inst.options.thumbborder + "px solid " + inst.options.thumbhighlightbordercolor
                        })
                    },
                    function() {
                        $(this).css({
                            opacity: inst.options.thumbopacity
                        });
                        $(this).css({
                            border: inst.options.thumbborder + "px solid " + inst.options.thumbbordercolor
                        })
                    });
                $(".html5-nav-thumb").click(function() {
                    var index = $(this).data("arrayindex");
                    if (index >= 0) inst.gotoSlide(index)
                });
                inst.options.totalwidth = index * (inst.options.thumbgap + inst.options.thumbwidth + 2 * inst.options.thumbborder);
                $(".html5-nav-list").css({
                    display: "block",
                    position: "relative",
                    "margin-left": 0,
                    width: inst.options.totalwidth + "px"
                }).append("<div style='clear:both;'></div>");
                var $navMask = $(".html5-nav-mask");
                var $navPrev = $(".html5-nav-prev");
                var $navNext = $(".html5-nav-next");
                $navPrev.click(function() {
                    var $navList = $(".html5-nav-list");
                    var $navNext = $(".html5-nav-next");
                    var winWidth = inst.options.isMobile ? Math.max($(window).width(), $(document).width()) : $(window).width();
                    var maskWidth = winWidth - 2 * inst.options.navbuttonwidth;
                    var marginLeft = parseInt($navList.css("margin-left")) + maskWidth;
                    if (marginLeft >= 0) {
                        marginLeft = 0;
                        $(this).css({
                            "background-position": "center left"
                        })
                    } else $(this).css({
                        "background-position": "center right"
                    });
                    if (marginLeft <= maskWidth - inst.options.totalwidth) $navNext.css({
                        "background-position": "center left"
                    });
                    else $navNext.css({
                        "background-position": "center right"
                    });
                    $navList.animate({
                        "margin-left": marginLeft
                    })
                });
                $navNext.click(function() {
                    var $navList = $(".html5-nav-list");
                    var $navPrev = $(".html5-nav-prev");
                    var winWidth = inst.options.isMobile ? Math.max($(window).width(), $(document).width()) : $(window).width();
                    var maskWidth = winWidth - 2 * inst.options.navbuttonwidth;
                    var marginLeft = parseInt($navList.css("margin-left")) -
                        maskWidth;
                    if (marginLeft <= maskWidth - inst.options.totalwidth) {
                        marginLeft = maskWidth - inst.options.totalwidth;
                        $(this).css({
                            "background-position": "center left"
                        })
                    } else $(this).css({
                        "background-position": "center right"
                    });
                    if (marginLeft >= 0) $navPrev.css({
                        "background-position": "center left"
                    });
                    else $navPrev.css({
                        "background-position": "center right"
                    });
                    $navList.animate({
                        "margin-left": marginLeft
                    })
                });
                var winWidth = inst.options.isMobile ? Math.max($(window).width(), $(document).width()) : $(window).width();
                if (inst.options.totalwidth <=
                    winWidth) {
                    $navMask.css({
                        width: inst.options.totalwidth + "px"
                    });
                    $navPrev.hide();
                    $navNext.hide()
                } else {
                    $navMask.css({
                        width: winWidth - 2 * inst.options.navbuttonwidth + "px"
                    });
                    $navPrev.show();
                    $navNext.show()
                }
            };
            inst.loadElem = function(elem) {
                inst.currentElem = elem;
                inst.showing = true;
                inst.showNavigation();
                inst.$elem.unbind("mouseenter").unbind("mouseleave").unbind("mousemove");
                inst.$loading.show();
                if (inst.options.onshowitem && window[inst.options.onshowitem] && typeof window[inst.options.onshowitem] == "function") window[inst.options.onshowitem](elem);
                switch (elem[ELEM_TYPE]) {
                    case 0:
                        var imgLoader = new Image;
                        $(imgLoader).load(function() {
                            inst.showImage(elem, imgLoader.width, imgLoader.height)
                        });
                        $(imgLoader).error(function() {
                            inst.showError()
                        });
                        imgLoader.src = elem[ELEM_HREF];
                        break;
                    case 1:
                        inst.showSWF(elem);
                        break;
                    case 2:
                    case 8:
                        inst.showVideo(elem);
                        break;
                    case 3:
                    case 4:
                    case 9:
                        inst.showYoutubeVimeo(elem);
                        break;
                    case 5:
                        inst.showPDF(elem);
                        break;
                    case 6:
                        inst.showMP3(elem);
                        break;
                    case 7:
                        inst.showWeb(elem);
                        break
                }
                if (inst.options.googleanalyticsaccount && window._gaq) window._gaq.push(["_trackEvent",
                    "Lightbox", "Open", elem[ELEM_HREF]
                ])
            };
            inst.loadCurElem = function() {
                inst.loadElem(inst.elemArray[inst.options.curElem])
            };
            inst.showError = function() {
                inst.$loading.hide();
                inst.resizeLightbox(inst.options.errorwidth, inst.options.errorheight, true, function() {
                    inst.$error.show();
                    inst.$elem.fadeIn(inst.options.fadespeed, function() {
                        inst.showData()
                    })
                })
            };
            inst.calcTextWidth = function(objW) {
                return objW - 36
            };
            inst.showTitle = function(w, t, description) {
                if (inst.options.titlestyle == "inside") inst.$elemData.css({
                    width: w + "px"
                });
                var text = "";
                if (inst.options.showtitle && t && t.length > 0) text += t;
                if (inst.options.showdescription && description && description.length > 0) text += '<p class="html5-description">' + description + "</p>";
                inst.$text.html(text)
            }, inst.showImage = function(elem, imgW, imgH) {
                var elemW, elemH;
                if (elem[ELEM_WIDTH]) elemW = elem[ELEM_WIDTH];
                else {
                    elemW = imgW;
                    elem[ELEM_WIDTH] = imgW
                }
                if (elem[ELEM_HEIGHT]) elemH = elem[ELEM_HEIGHT];
                else {
                    elemH = imgH;
                    elem[ELEM_HEIGHT] = imgH
                }
                var sizeObj = inst.calcElemSize({
                    w: elemW,
                    h: elemH
                });
                inst.resizeLightbox(sizeObj.w,
                    sizeObj.h, true,
                    function() {
                        inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                        inst.$image.css({
                            width: sizeObj.w,
                            height: sizeObj.h
                        }).show();
                        inst.$image.html("<img src='" + elem[ELEM_HREF] + "' width='100%' height='100%' />");
                        inst.$elem.fadeIn(inst.options.fadespeed, function() {
                            inst.showData()
                        })
                    })
            };
            inst.showSWF = function(elem) {
                var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : 960;
                var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] : 540;
                var sizeObj = inst.calcElemSize({
                    w: dataW,
                    h: dataH
                });
                dataW = sizeObj.w;
                dataH =
                    sizeObj.h;
                inst.resizeLightbox(dataW, dataH, true, function() {
                    inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                    inst.$image.css({
                        width: sizeObj.w,
                        height: sizeObj.h
                    }).html("<div id='html5lightbox-swf' style='display:block;width:100%;height:100%;'></div>").show();
                    inst.embedFlash($("#html5lightbox-swf"), elem[ELEM_HREF], "window", {
                        width: dataW,
                        height: dataH
                    });
                    inst.$elem.show();
                    inst.showData()
                })
            };
            inst.showVideo = function(elem) {
                var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : 960;
                var dataH = elem[ELEM_HEIGHT] ?
                    elem[ELEM_HEIGHT] : 540;
                var sizeObj = inst.calcElemSize({
                    w: dataW,
                    h: dataH
                });
                dataW = sizeObj.w;
                dataH = sizeObj.h;
                inst.resizeLightbox(dataW, dataH, true, function() {
                    inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                    inst.$image.css({
                        width: sizeObj.w,
                        height: sizeObj.h
                    }).html("<div id='html5lightbox-video' style='display:block;width:100%;height:100%;background-color:#000;'></div>").show();
                    var isHTML5 = false;
                    if (inst.options.isIE678 || elem[ELEM_TYPE] == 8 || inst.options.isIE9 && inst.options.useflashonie9 || inst.options.isIE10 &&
                        inst.options.useflashonie10 || inst.options.isIE11 && inst.options.useflashonie11) isHTML5 = false;
                    else if (inst.options.isMobile) isHTML5 = true;
                    else if ((inst.options.html5player || !inst.options.flashInstalled) && inst.options.html5VideoSupported)
                        if (!inst.options.isFirefox && !inst.options.isOpera || (inst.options.isFirefox || inst.options.isOpera) && (elem[ELEM_HREF_OGG] || elem[ELEM_HREF_WEBM])) isHTML5 = true;
                    if (isHTML5) {
                        var videoSrc = elem[ELEM_HREF];
                        if (inst.options.isFirefox || inst.options.isOpera || !videoSrc) videoSrc = elem[ELEM_HREF_WEBM] ?
                            elem[ELEM_HREF_WEBM] : elem[ELEM_HREF_OGG];
                        inst.embedHTML5Video($("#html5lightbox-video"), videoSrc, inst.options.autoplay)
                    } else {
                        var videoFile = elem[ELEM_HREF];
                        if (videoFile.charAt(0) != "/" && videoFile.substring(0, 5) != "http:" && videoFile.substring(0, 6) != "https:") videoFile = inst.options.htmlfolder + videoFile;
                        inst.embedFlash($("#html5lightbox-video"), inst.options.jsfolder + "html5boxplayer.swf", "transparent", {
                            width: dataW,
                            height: dataH,
                            hidecontrols: inst.options.videohidecontrols ? "1" : "0",
                            hideplaybutton: "0",
                            videofile: videoFile,
                            hdfile: "",
                            ishd: "0",
                            autoplay: inst.options.autoplay ? "1" : "0",
                            errorcss: ".html5box-error" + inst.options.errorcss,
                            id: 0
                        })
                    }
                    inst.$elem.show();
                    inst.showData()
                })
            };
            inst.getYoutubeParams = function(href) {
                var result = {};
                if (href.indexOf("?") < 0) return result;
                var params = href.substring(href.indexOf("?") + 1).split("&");
                for (var i = 0; i < params.length; i++) {
                    var value = params[i].split("=");
                    if (value && value.length == 2 && value[0].toLowerCase() != "v") result[value[0].toLowerCase()] = value[1]
                }
                return result
            };
            inst.prepareYoutubeHref = function(href) {
                var youtubeId =
                    "";
                var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\??v?=?))([^#\&\?]*).*/;
                var match = href.match(regExp);
                if (match && match[7] && match[7].length == 11) youtubeId = match[7];
                var protocol = window.location.protocol == "https:" ? "https:" : "http:";
                var result = protocol + "//www.youtube.com/embed/" + youtubeId;
                var params = this.getYoutubeParams(href);
                var first = true;
                for (var key in params) {
                    if (first) {
                        result += "?";
                        first = false
                    } else result += "&";
                    result += key + "=" + params[key]
                }
                return result
            };
            inst.prepareDailymotionHref = function(href) {
                if (href.match(/\:\/\/.*(dai\.ly)/i)) {
                    var protocol =
                        window.location.protocol == "https:" ? "https:" : "http:";
                    var id = href.match(/(dai\.ly\/)([a-zA-Z0-9\-\_]+)/)[2];
                    href = protocol + "//www.dailymotion.com/embed/video/" + id
                }
                return href
            };
            inst.showYoutubeVimeo = function(elem) {
                var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : 960;
                var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] : 540;
                var sizeObj = inst.calcElemSize({
                    w: dataW,
                    h: dataH
                });
                dataW = sizeObj.w;
                dataH = sizeObj.h;
                inst.resizeLightbox(dataW, dataH, true, function() {
                    inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                    inst.$image.css({
                        width: sizeObj.w,
                        height: sizeObj.h
                    }).html("<div id='html5lightbox-video' style='display:block;width:100%;height:100%;'></div>").show();
                    var href = elem[ELEM_HREF];
                    if (elem[ELEM_TYPE] == 3) href = inst.prepareYoutubeHref(href);
                    if (elem[ELEM_TYPE] == 9) href = inst.prepareDailymotionHref(href);
                    if (inst.options.autoplay)
                        if (href.indexOf("?") < 0) href += "?autoplay=1";
                        else href += "&autoplay=1";
                    if (elem[ELEM_TYPE] == 3) {
                        if (href.indexOf("?") < 0) href += "?wmode=transparent&rel=0";
                        else href += "&wmode=transparent&rel=0";
                        if (inst.options.videohidecontrols) href += "&controls=0&showinfo=0"
                    }
                    $("#html5lightbox-video").html("<iframe width='100%' height='100%' src='" + href + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
                    inst.$elem.show();
                    inst.showData()
                })
            };
            inst.showPDF = function(elem) {};
            inst.showMP3 = function(elem) {};
            inst.showWeb = function(elem) {
                var winWidth = inst.options.isMobile ? Math.max($(window).width(), $(document).width()) : $(window).width();
                var winH = window.innerHeight ? window.innerHeight :
                    $(window).height();
                var dataW = elem[ELEM_WIDTH] ? elem[ELEM_WIDTH] : winWidth;
                var dataH = elem[ELEM_HEIGHT] ? elem[ELEM_HEIGHT] : winH - inst.options.navheight;
                var sizeObj = inst.calcElemSize({
                    w: dataW,
                    h: dataH
                });
                dataW = sizeObj.w;
                dataH = sizeObj.h;
                inst.resizeLightbox(dataW, dataH, true, function() {
                    inst.$loading.hide();
                    inst.showTitle(sizeObj.w, elem[ELEM_TITLE], elem[ELEM_DESCRIPTION]);
                    inst.$image.css({
                        width: sizeObj.w,
                        height: sizeObj.h
                    }).html("<div id='html5lightbox-web' style='display:block;width:100%;height:100%;'></div>").show();
                    $("#html5lightbox-web").html("<iframe width='100%' height='100%' src='" + elem[ELEM_HREF] + "' frameborder='0'></iframe>");
                    inst.$elem.show();
                    inst.showData()
                })
            };
            inst.scrollBox = function() {
                if (!inst.options.supportCSSPositionFixed) inst.$lightbox.css("top", $(window).scrollTop())
            };
            inst.resizeWindow = function() {
                if (!inst.currentElem) return;
                if (!inst.options.responsive) return;
                var elemW = inst.currentElem[ELEM_WIDTH] ? inst.currentElem[ELEM_WIDTH] : 960;
                var elemH = inst.currentElem[ELEM_HEIGHT] ? inst.currentElem[ELEM_HEIGHT] :
                    540;
                var sizeObj = inst.calcElemSize({
                    w: elemW,
                    h: elemH
                });
                var winH = window.innerHeight ? window.innerHeight : $(window).height();
                var boxW = sizeObj.w + 2 * inst.options.bordersize;
                var boxH = sizeObj.h + 2 * inst.options.bordersize;
                var boxT = Math.round((winH - inst.options.navheight) / 2 - boxH / 2);
                if (inst.options.titlestyle != "inside") boxT -= Math.round(inst.options.barheight / 2);
                if (boxT < 16) boxT = 16;
                inst.$lightboxBox.css({
                    "margin-top": boxT
                });
                inst.$lightboxBox.css({
                    "width": boxW,
                    "height": boxH
                });
                inst.$elemWrap.css({
                    width: boxW,
                    height: boxH
                });
                inst.$image.css({
                    width: sizeObj.w,
                    height: sizeObj.h
                });
                if ($(".html5-nav").length <= 0) return;
                $(".html5-nav-list").css({
                    "margin-left": 0
                });
                var $navMask = $(".html5-nav-mask");
                var $navPrev = $(".html5-nav-prev");
                var $navNext = $(".html5-nav-next");
                var winWidth = inst.options.isMobile ? Math.max($(window).width(), $(document).width()) : $(window).width();
                if (inst.options.totalwidth <= winWidth) {
                    $navMask.css({
                        width: inst.options.totalwidth + "px"
                    });
                    $navPrev.hide();
                    $navNext.hide()
                } else {
                    $navMask.css({
                        width: winWidth - 2 * inst.options.navbuttonwidth +
                            "px"
                    });
                    $navPrev.show();
                    $navNext.show()
                }
            };
            inst.calcElemSize = function(sizeObj) {
                if (!inst.options.responsive) return sizeObj;
                var winH = window.innerHeight ? window.innerHeight : $(window).height();
                winH = winH ? winH : $(document).height();
                var h0 = winH - inst.options.navheight - 2 * inst.options.bordersize - 2 * inst.options.bordermargin;
                if (inst.options.titlestyle != "inside") h0 -= inst.options.barheight;
                if (sizeObj.h > h0) {
                    sizeObj.w = Math.round(sizeObj.w * h0 / sizeObj.h);
                    sizeObj.h = h0
                }
                var winWidth = inst.options.isMobile ? Math.max($(window).width(),
                    $(document).width()) : $(window).width();
                winWidth = winWidth ? winWidth : $(document).width();
                var w0 = winWidth - 2 * inst.options.bordersize - 2 * inst.options.bordermargin;
                if (sizeObj.w > w0) {
                    sizeObj.h = Math.round(sizeObj.h * w0 / sizeObj.w);
                    sizeObj.w = w0
                }
                return sizeObj
            };
            inst.showData = function() {
                if (inst.$text.text().length > 0) inst.$elemData.show();
                if (inst.$text.text().length > 0 && inst.options.titlestyle != "inside") inst.$lightboxBox.css({
                    height: String(inst.$lightboxBox.height() + inst.options.barheight) + "px"
                });
                $("#html5-lightbox-overlay",
                    inst.$lightbox).css({
                    height: Math.max($(window).height(), $(document).height())
                })
            };
            inst.resizeLightbox = function(elemW, elemH, bAnimate, onFinish) {
                var winH = window.innerHeight ? window.innerHeight : $(window).height();
                var speed = bAnimate ? inst.options.resizespeed : 0;
                var boxW = elemW + 2 * inst.options.bordersize;
                var boxH = elemH + 2 * inst.options.bordersize;
                var boxT = Math.round((winH - inst.options.navheight) / 2 - boxH / 2);
                if (inst.options.titlestyle != "inside") boxT -= Math.round(inst.options.barheight / 2);
                if (boxT < 16) boxT = 16;
                if (boxW ==
                    inst.$elemWrap.width() && boxH == inst.$elemWrap.height()) speed = 0;
                inst.$loading.hide();
                inst.$watermark.hide();
                if (!inst.options.arrowloop) {
                    if (inst.options.prevElem >= inst.options.curElem) inst.$prev.hide();
                    if (inst.options.nextElem <= inst.options.curElem) inst.$next.hide()
                }
                if (inst.options.nextElem <= inst.options.curElem)
                    if (inst.options.onlastitem && window[inst.options.onlastitem] && typeof window[inst.options.onlastitem] == "function") window[inst.options.onlastitem](inst.currentElem);
                if (inst.options.prevElem >= inst.options.curElem)
                    if (inst.options.onfirstitem &&
                        window[inst.options.onfirstitem] && typeof window[inst.options.onfirstitem] == "function") window[inst.options.onfirstitem](inst.currentElem);
                inst.$elem.bind("mouseenter mousemove", function() {
                    if (inst.options.arrowloop && inst.options.prevElem >= 0 || !inst.options.arrowloop && inst.options.prevElem >= 0 && inst.options.prevElem < inst.options.curElem) inst.$prev.fadeIn();
                    if (inst.options.arrowloop && inst.options.nextElem >= 0 || !inst.options.arrowloop && inst.options.nextElem >= 0 && inst.options.nextElem > inst.options.curElem) inst.$next.fadeIn()
                });
                inst.$elem.bind("mouseleave", function() {
                    inst.$next.fadeOut();
                    inst.$prev.fadeOut()
                });
                inst.$lightboxBox.css({
                    "margin-top": boxT
                });
                inst.$lightboxBox.css({
                    "width": boxW,
                    "height": boxH
                });
                inst.$elemWrap.animate({
                    width: boxW
                }, speed).animate({
                    height: boxH
                }, speed, function() {
                    inst.$loading.show();
                    inst.$watermark.show();
                    inst.$close.show();
                    inst.$elem.css({
                        "background-color": inst.options.bgcolor
                    });
                    onFinish()
                })
            };
            inst.reset = function() {
                if (inst.options.stamp) inst.$watermark.hide();
                inst.showing = false;
                inst.$image.empty();
                inst.$text.empty();
                inst.$error.hide();
                inst.$loading.hide();
                inst.$image.hide();
                inst.$elemData.hide();
                inst.$close.hide();
                inst.$elem.css({
                    "background-color": ""
                })
            };
            inst.resetNavigation = function() {
                inst.options.navheight = 0;
                $(".html5-nav").remove()
            };
            inst.finish = function() {
                inst.reset();
                inst.resetNavigation();
                inst.$lightbox.hide();
                inst.showObjects();
                if (inst.options.oncloselightbox && window[inst.options.oncloselightbox] && typeof window[inst.options.oncloselightbox] == "function") window[inst.options.oncloselightbox](inst.currentElem)
            };
            inst.pauseSlide = function() {};
            inst.playSlide = function() {};
            inst.gotoSlide = function(slide) {
                if (slide == -1) {
                    if (inst.options.nextElem < 0) return;
                    inst.options.curElem = inst.options.nextElem
                } else if (slide == -2) {
                    if (inst.options.prevElem < 0) return;
                    inst.options.curElem = inst.options.prevElem
                } else if (slide >= 0) inst.options.curElem = slide;
                inst.calcNextPrevElem();
                inst.reset();
                inst.loadCurElem()
            };
            inst.supportKeyboard = function() {
                $(document).keyup(function(e) {
                    if (!inst.showing) return;
                    if (inst.options.supportesckey && e.keyCode ==
                        27) inst.finish();
                    else if (inst.options.supportarrowkeys)
                        if (e.keyCode == 39) inst.gotoSlide(-1);
                        else if (e.keyCode == 37) inst.gotoSlide(-2)
                })
            };
            inst.enableSwipe = function() {
                inst.$elem.touchSwipe({
                    preventWebBrowser: true,
                    swipeLeft: function() {
                        inst.gotoSlide(-1)
                    },
                    swipeRight: function() {
                        inst.gotoSlide(-2)
                    }
                })
            };
            inst.hideObjects = function() {
                $("select, embed, object").css({
                    "visibility": "hidden"
                })
            };
            inst.showObjects = function() {
                $("select, embed, object").css({
                    "visibility": "visible"
                })
            };
            inst.embedHTML5Video = function($container,
                src, autoplay) {
                $container.html("<div style='display:block;width:100%;height:100%;position:relative;'><video id='html5-lightbox-video' width='100%' height='100%'" + (autoplay ? " autoplay" : "") + (inst.options.nativehtml5controls && !inst.options.videohidecontrols ? " controls='controls'" : "") + " src='" + src + "'></div>");
                if (!inst.options.nativehtml5controls) {
                    $("video", $container).data("src", src);
                    $("video", $container).lightboxHTML5VideoControls(inst.options.skinsfolder, inst, inst.options.videohidecontrols, false)
                }
            };
            inst.embedFlash = function($container, src, wmode, flashVars) {
                if (inst.options.flashInstalled) {
                    var htmlOptions = {
                        pluginspage: "http://www.adobe.com/go/getflashplayer",
                        quality: "high",
                        allowFullScreen: "true",
                        allowScriptAccess: "always",
                        type: "application/x-shockwave-flash"
                    };
                    htmlOptions.width = "100%";
                    htmlOptions.height = "100%";
                    htmlOptions.src = src;
                    htmlOptions.flashVars = $.param(flashVars);
                    htmlOptions.wmode = wmode;
                    var htmlString = "";
                    for (var key in htmlOptions) htmlString += key + "=" + htmlOptions[key] + " ";
                    $container.html("<embed " +
                        htmlString + "/>")
                } else $container.html("<div class='html5lightbox-flash-error' style='display:block; position:relative;text-align:center; width:100%; left:0px; top:40%;'><div class='html5-error'><div>The required Adobe Flash Player plugin is not installed</div><br /><div style='display:block;position:relative;text-align:center;width:112px;height:33px;margin:0px auto;'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' width='112' height='33'></img></a></div></div>")
            };
            inst.checkType = function(href) {
                if (!href) return -1;
                if (href.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)) return 0;
                if (href.match(/[^\.]\.(swf)\s*$/i)) return 1;
                if (href.match(/\.(mp4|m4v|ogv|ogg|webm)(.*)?$/i)) return 2;
                if (href.match(/\:\/\/.*(youtube\.com)/i) || href.match(/\:\/\/.*(youtu\.be)/i)) return 3;
                if (href.match(/\:\/\/.*(vimeo\.com)/i)) return 4;
                if (href.match(/\:\/\/.*(dailymotion\.com)/i) || href.match(/\:\/\/.*(dai\.ly)/i)) return 9;
                if (href.match(/[^\.]\.(pdf)\s*$/i)) return 5;
                if (href.match(/[^\.]\.(mp3)\s*$/i)) return 6;
                if (href.match(/[^\.]\.(flv)\s*$/i)) return 8;
                return 7
            };
            inst.showLightbox = function(type, href, title, width, height, webm, ogg, thumbnail, description) {
                inst.$next.hide();
                inst.$prev.hide();
                inst.reset();
                inst.$lightbox.show();
                if (!inst.options.supportCSSPositionFixed) inst.$lightbox.css("top", $(window).scrollTop());
                var winH = window.innerHeight ? window.innerHeight : $(window).height();
                var boxW = inst.options.loadingwidth + 2 * inst.options.bordersize;
                var boxH = inst.options.loadingheight + 2 * inst.options.bordersize;
                var boxT = Math.round(winH /
                    2 - boxH / 2);
                if (inst.options.titlestyle != "inside") boxT -= Math.round(inst.options.barheight / 2);
                if (boxT < 16) boxT = 16;
                inst.$lightboxBox.css({
                    "margin-top": boxT,
                    "width": boxW,
                    "height": boxH
                });
                inst.$elemWrap.css({
                    "width": boxW,
                    "height": boxH
                });
                inst.loadElem(new Array(type, href, title, null, width, height, webm, ogg, thumbnail, description))
            };
            inst.addItem = function(href, title, group, width, height, webm, ogg, thumbnail, description) {
                type = inst.checkType(href);
                inst.elemArray.push(new Array(type, href, title, group, width, height, webm, ogg,
                    thumbnail, description))
            };
            inst.showItem = function(href) {
                if (inst.elemArray.length <= 0) return true;
                inst.hideObjects();
                for (var i = 0; i < inst.elemArray.length; i++)
                    if (inst.elemArray[i][ELEM_HREF] == href) break;
                if (i == inst.elemArray.length) return true;
                inst.options.curElem = i;
                inst.options.nextElem = -1;
                inst.options.prevElem = -1;
                inst.calcNextPrevElem();
                inst.$next.hide();
                inst.$prev.hide();
                inst.reset();
                inst.$lightbox.show();
                if (!inst.options.supportCSSPositionFixed) inst.$lightbox.css("top", $(window).scrollTop());
                var winH =
                    window.innerHeight ? window.innerHeight : $(window).height();
                var boxW = inst.options.loadingwidth + 2 * inst.options.bordersize;
                var boxH = inst.options.loadingheight + 2 * inst.options.bordersize;
                var boxT = Math.round(winH / 2 - boxH / 2);
                if (inst.options.titlestyle != "inside") boxT -= Math.round(inst.options.barheight / 2);
                if (boxT < 16) boxT = 16;
                inst.$lightboxBox.css({
                    "margin-top": boxT,
                    "width": boxW,
                    "height": boxH
                });
                inst.$elemWrap.css({
                    "width": boxW,
                    "height": boxH
                });
                inst.loadCurElem();
                return false
            };
            inst.init();
            return inst.unbind("click").click(inst.clickHandler)
        }
    })(jQuery);
    (function($) {
        $.fn.touchSwipe = function(options) {
            var defaults = {
                preventWebBrowser: false,
                swipeLeft: null,
                swipeRight: null,
                swipeTop: null,
                swipeBottom: null
            };
            if (options) $.extend(defaults, options);
            return this.each(function() {
                var startX = -1,
                    startY = -1;
                var curX = -1,
                    curY = -1;

                function touchStart(event) {
                    var e = event.originalEvent;
                    if (e.targetTouches.length >= 1) {
                        startX = e.targetTouches[0].pageX;
                        startY = e.targetTouches[0].pageY
                    } else touchCancel(event)
                }

                function touchMove(event) {
                    if (defaults.preventWebBrowser) event.preventDefault();
                    var e = event.originalEvent;
                    if (e.targetTouches.length >= 1) {
                        curX = e.targetTouches[0].pageX;
                        curY = e.targetTouches[0].pageY
                    } else touchCancel(event)
                }

                function touchEnd(event) {
                    if (curX > 0 || curY > 0) {
                        triggerHandler();
                        touchCancel(event)
                    } else touchCancel(event)
                }

                function touchCancel(event) {
                    startX = -1;
                    startY = -1;
                    curX = -1;
                    curY = -1
                }

                function triggerHandler() {
                    if (curX > startX) {
                        if (defaults.swipeRight) defaults.swipeRight.call()
                    } else if (defaults.swipeLeft) defaults.swipeLeft.call();
                    if (curY > startY) {
                        if (defaults.swipeBottom) defaults.swipeBottom.call()
                    } else if (defaults.swipeTop) defaults.swipeTop.call()
                }
                try {
                    $(this).bind("touchstart", touchStart);
                    $(this).bind("touchmove", touchMove);
                    $(this).bind("touchend", touchEnd);
                    $(this).bind("touchcancel", touchCancel)
                } catch (e) {}
            })
        }
    })(jQuery);
    (function($) {
        $.fn.lightboxHTML5VideoControls = function(skinFolder, parentInst, hidecontrols, hideplaybutton) {
            var isTouch = "ontouchstart" in window;
            var eStart = isTouch ? "touchstart" : "mousedown";
            var eMove = isTouch ? "touchmove" : "mousemove";
            var eCancel = isTouch ? "touchcancel" : "mouseup";
            var eClick = isTouch ? "touchstart" : "click";
            var BUTTON_SIZE =
                32;
            var BAR_HEIGHT = isTouch ? 48 : 36;
            var hideControlsTimerId = null;
            var hideVolumeBarTimeoutId = null;
            var sliderDragging = false;
            var isFullscreen = false;
            var userActive = true;
            var isIPhone = navigator.userAgent.match(/iPod/i) != null || navigator.userAgent.match(/iPhone/i) != null;
            var isHd = $(this).data("ishd");
            var hd = $(this).data("hd");
            var src = $(this).data("src");
            var $videoObj = $(this);
            $videoObj.get(0).removeAttribute("controls");
            if (isIPhone) {
                var h = $videoObj.height() - BAR_HEIGHT;
                $videoObj.css({
                    height: h
                })
            }
            var $videoPlay = $("<div class='html5boxVideoPlay'></div>");
            if (!isIPhone) {
                $videoObj.after($videoPlay);
                $videoPlay.css({
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    display: "block",
                    cursor: "pointer",
                    width: 64,
                    height: 64,
                    "margin-left": -32,
                    "margin-top": -32,
                    "background-image": "url('" + skinFolder + "html5boxplayer_playvideo.png" + "')",
                    "background-position": "center center",
                    "background-repeat": "no-repeat"
                }).bind(eClick, function() {
                    $videoObj.get(0).play()
                })
            }
            var $videoFullscreenBg = $("<div class='html5boxVideoFullscreenBg'></div>");
            var $videoControls = $("<div class='html5boxVideoControls'>" +
                "<div class='html5boxVideoControlsBg'></div>" + "<div class='html5boxPlayPause'>" + "<div class='html5boxPlay'></div>" + "<div class='html5boxPause'></div>" + "</div>" + "<div class='html5boxTimeCurrent'>--:--</div>" + "<div class='html5boxFullscreen'></div>" + "<div class='html5boxHD'></div>" + "<div class='html5boxVolume'>" + "<div class='html5boxVolumeButton'></div>" + "<div class='html5boxVolumeBar'>" + "<div class='html5boxVolumeBarBg'>" + "<div class='html5boxVolumeBarActive'></div>" + "</div>" + "</div>" + "</div>" + "<div class='html5boxTimeTotal'>--:--</div>" +
                "<div class='html5boxSeeker'>" + "<div class='html5boxSeekerBuffer'></div>" + "<div class='html5boxSeekerPlay'></div>" + "<div class='html5boxSeekerHandler'></div>" + "</div>" + "<div style='clear:both;'></div>" + "</div>");
            $videoObj.after($videoControls);
            $videoObj.after($videoFullscreenBg);
            $videoFullscreenBg.css({
                display: "none",
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                "z-index": 2147483647
            });
            $videoControls.css({
                display: "block",
                position: "absolute",
                width: "100%",
                height: BAR_HEIGHT,
                left: 0,
                bottom: 0,
                right: 0,
                "max-width": "640px",
                margin: "0 auto"
            });
            var userActivate = function() {
                userActive = true
            };
            $videoObj.bind(eClick, function() {
                userActive = true
            }).hover(function() {
                userActive = true
            }, function() {
                userActive = false
            });
            if (!hidecontrols) setInterval(function() {
                if (userActive) {
                    $videoControls.show();
                    userActive = false;
                    clearTimeout(hideControlsTimerId);
                    hideControlsTimerId = setTimeout(function() {
                        if (!$videoObj.get(0).paused) $videoControls.fadeOut()
                    }, 5E3)
                }
            }, 250);
            $(".html5boxVideoControlsBg", $videoControls).css({
                display: "block",
                position: "absolute",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                "background-color": "#000000",
                opacity: 0.7,
                filter: "alpha(opacity=70)"
            });
            $(".html5boxPlayPause", $videoControls).css({
                display: "block",
                position: "relative",
                width: BUTTON_SIZE + "px",
                height: BUTTON_SIZE + "px",
                margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                "float": "left"
            });
            var $videoBtnPlay = $(".html5boxPlay", $videoControls);
            var $videoBtnPause = $(".html5boxPause", $videoControls);
            $videoBtnPlay.css({
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                width: BUTTON_SIZE + "px",
                height: BUTTON_SIZE +
                    "px",
                cursor: "pointer",
                "background-image": "url('" + skinFolder + "html5boxplayer_playpause.png" + "')",
                "background-position": "top left"
            }).hover(function() {
                $(this).css({
                    "background-position": "bottom left"
                })
            }, function() {
                $(this).css({
                    "background-position": "top left"
                })
            }).bind(eClick, function() {
                $videoObj.get(0).play()
            });
            $videoBtnPause.css({
                display: "none",
                position: "absolute",
                top: 0,
                left: 0,
                width: BUTTON_SIZE + "px",
                height: BUTTON_SIZE + "px",
                cursor: "pointer",
                "background-image": "url('" + skinFolder + "html5boxplayer_playpause.png" +
                    "')",
                "background-position": "top right"
            }).hover(function() {
                $(this).css({
                    "background-position": "bottom right"
                })
            }, function() {
                $(this).css({
                    "background-position": "top right"
                })
            }).bind(eClick, function() {
                $videoObj.get(0).pause()
            });
            var $videoTimeCurrent = $(".html5boxTimeCurrent", $videoControls);
            var $videoTimeTotal = $(".html5boxTimeTotal", $videoControls);
            var $videoSeeker = $(".html5boxSeeker", $videoControls);
            var $videoSeekerPlay = $(".html5boxSeekerPlay", $videoControls);
            var $videoSeekerBuffer = $(".html5boxSeekerBuffer",
                $videoControls);
            var $videoSeekerHandler = $(".html5boxSeekerHandler", $videoControls);
            $videoTimeCurrent.css({
                display: "block",
                position: "relative",
                "float": "left",
                "line-height": BAR_HEIGHT + "px",
                "font-weight": "normal",
                "font-size": "12px",
                margin: "0 8px",
                "font-family": "Arial, Helvetica, sans-serif",
                color: "#fff"
            });
            $videoTimeTotal.css({
                display: "block",
                position: "relative",
                "float": "right",
                "line-height": BAR_HEIGHT + "px",
                "font-weight": "normal",
                "font-size": "12px",
                margin: "0 8px",
                "font-family": "Arial, Helvetica, sans-serif",
                color: "#fff"
            });
            $videoSeeker.css({
                display: "block",
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
                height: "10px",
                "background-color": "#222",
                margin: Math.floor((BAR_HEIGHT - 10) / 2) + "px 4px"
            }).bind(eStart, function(e) {
                var e0 = isTouch ? e.originalEvent.touches[0] : e;
                var pos = e0.pageX - $videoSeeker.offset().left;
                $videoSeekerPlay.css({
                    width: pos
                });
                $videoObj.get(0).currentTime = pos * $videoObj.get(0).duration / $videoSeeker.width();
                $videoSeeker.bind(eMove, function(e) {
                    var e0 = isTouch ? e.originalEvent.touches[0] : e;
                    var pos =
                        e0.pageX - $videoSeeker.offset().left;
                    $videoSeekerPlay.css({
                        width: pos
                    });
                    $videoObj.get(0).currentTime = pos * $videoObj.get(0).duration / $videoSeeker.width()
                })
            }).bind(eCancel, function() {
                $videoSeeker.unbind(eMove)
            });
            $videoSeekerBuffer.css({
                display: "block",
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                "background-color": "#444"
            });
            $videoSeekerPlay.css({
                display: "block",
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                "background-color": "#fcc500"
            });
            if (!isIPhone && ($videoObj.get(0).requestFullscreen || $videoObj.get(0).webkitRequestFullScreen ||
                    $videoObj.get(0).mozRequestFullScreen || $videoObj.get(0).webkitEnterFullScreen || $videoObj.get(0).msRequestFullscreen)) {
                var switchScreen = function(fullscreen) {
                    if (fullscreen) {
                        if ($videoObj.get(0).requestFullscreen) $videoObj.get(0).requestFullscreen();
                        else if ($videoObj.get(0).webkitRequestFullScreen) $videoObj.get(0).webkitRequestFullScreen();
                        else if ($videoObj.get(0).mozRequestFullScreen) $videoObj.get(0).mozRequestFullScreen();
                        else if ($videoObj.get(0).webkitEnterFullScreen) $videoObj.get(0).webkitEnterFullScreen();
                        if ($videoObj.get(0).msRequestFullscreen) $videoObj.get(0).msRequestFullscreen()
                    } else if (document.cancelFullScreen) document.cancelFullScreen();
                    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
                    else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
                    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
                    else if (document.msExitFullscreen) document.msExitFullscreen()
                };
                var switchScreenCSS = function(fullscreen) {
                    $videoControls.css({
                        position: fullscreen ? "fixed" : "absolute"
                    });
                    var backgroundPosY = $videoFullscreen.css("background-position") ? $videoFullscreen.css("background-position").split(" ")[1] : $videoFullscreen.css("background-position-y");
                    $videoFullscreen.css({
                        "background-position": (fullscreen ? "right" : "left") + " " + backgroundPosY
                    });
                    $videoFullscreenBg.css({
                        display: fullscreen ? "block" : "none"
                    });
                    if (fullscreen) {
                        $(document).bind("mousemove", userActivate);
                        $videoControls.css({
                            "z-index": 2147483647
                        })
                    } else {
                        $(document).unbind("mousemove", userActivate);
                        $videoControls.css({
                            "z-index": ""
                        })
                    }
                };
                document.addEventListener("fullscreenchange", function() {
                    isFullscreen = document.fullscreen;
                    switchScreenCSS(document.fullscreen)
                }, false);
                document.addEventListener("mozfullscreenchange", function() {
                    isFullscreen = document.mozFullScreen;
                    switchScreenCSS(document.mozFullScreen)
                }, false);
                document.addEventListener("webkitfullscreenchange", function() {
                    isFullscreen = document.webkitIsFullScreen;
                    switchScreenCSS(document.webkitIsFullScreen)
                }, false);
                $videoObj.get(0).addEventListener("webkitbeginfullscreen", function() {
                    isFullscreen =
                        true
                }, false);
                $videoObj.get(0).addEventListener("webkitendfullscreen", function() {
                    isFullscreen = false
                }, false);
                $("head").append("<style type='text/css'>video::-webkit-media-controls { display:none !important; }</style>");
                var $videoFullscreen = $(".html5boxFullscreen", $videoControls);
                $videoFullscreen.css({
                    display: "block",
                    position: "relative",
                    "float": "right",
                    width: BUTTON_SIZE + "px",
                    height: BUTTON_SIZE + "px",
                    margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                    cursor: "pointer",
                    "background-image": "url('" + skinFolder + "html5boxplayer_fullscreen.png" +
                        "')",
                    "background-position": "left top"
                }).hover(function() {
                    var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                    $(this).css({
                        "background-position": backgroundPosX + " bottom"
                    })
                }, function() {
                    var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                    $(this).css({
                        "background-position": backgroundPosX + " top"
                    })
                }).bind(eClick, function() {
                    isFullscreen = !isFullscreen;
                    switchScreen(isFullscreen)
                })
            }
            if (hd) {
                var $videoHD = $(".html5boxHD", $videoControls);
                $videoHD.css({
                    display: "block",
                    position: "relative",
                    "float": "right",
                    width: BUTTON_SIZE + "px",
                    height: BUTTON_SIZE + "px",
                    margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                    cursor: "pointer",
                    "background-image": "url('" + skinFolder + "html5boxplayer_hd.png" + "')",
                    "background-position": (isHd ? "right" : "left") + " center"
                }).bind(eClick, function() {
                    isHd = !isHd;
                    $(this).css({
                        "background-position": (isHd ? "right" : "left") + " center"
                    });
                    parentInst.isHd =
                        isHd;
                    var isPaused = $videoObj.get(0).isPaused;
                    $videoObj.get(0).setAttribute("src", (isHd ? hd : src) + "#t=" + $videoObj.get(0).currentTime);
                    if (!isPaused) $videoObj.get(0).play();
                    else if (!isIPhone) $videoObj.get(0).pause()
                })
            }
            var volume = $videoObj.get(0).volume;
            $videoObj.get(0).volume = volume / 2 + 0.1;
            if ($videoObj.get(0).volume === volume / 2 + 0.1) {
                $videoObj.get(0).volume = volume;
                var $videoVolume = $(".html5boxVolume", $videoControls);
                var $videoVolumeButton = $(".html5boxVolumeButton", $videoControls);
                var $videoVolumeBar = $(".html5boxVolumeBar",
                    $videoControls);
                var $videoVolumeBarBg = $(".html5boxVolumeBarBg", $videoControls);
                var $videoVolumeBarActive = $(".html5boxVolumeBarActive", $videoControls);
                $videoVolume.css({
                    display: "block",
                    position: "relative",
                    "float": "right",
                    width: BUTTON_SIZE + "px",
                    height: BUTTON_SIZE + "px",
                    margin: Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2)
                }).hover(function() {
                    clearTimeout(hideVolumeBarTimeoutId);
                    var volume = $videoObj.get(0).volume;
                    $videoVolumeBarActive.css({
                        height: Math.round(volume * 100) + "%"
                    });
                    $videoVolumeBar.show()
                }, function() {
                    clearTimeout(hideVolumeBarTimeoutId);
                    hideVolumeBarTimeoutId = setTimeout(function() {
                        $videoVolumeBar.hide()
                    }, 1E3)
                });
                $videoVolumeButton.css({
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: BUTTON_SIZE + "px",
                    height: BUTTON_SIZE + "px",
                    cursor: "pointer",
                    "background-image": "url('" + skinFolder + "html5boxplayer_volume.png" + "')",
                    "background-position": "top left"
                }).hover(function() {
                    var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                    $(this).css({
                        "background-position": backgroundPosX +
                            " bottom"
                    })
                }, function() {
                    var backgroundPosX = $(this).css("background-position") ? $(this).css("background-position").split(" ")[0] : $(this).css("background-position-x");
                    $(this).css({
                        "background-position": backgroundPosX + " top"
                    })
                }).bind(eClick, function() {
                    var volume = $videoObj.get(0).volume;
                    if (volume > 0) {
                        volumeSaved = volume;
                        volume = 0
                    } else volume = volumeSaved;
                    var backgroundPosY = $(this).css("background-position") ? $(this).css("background-position").split(" ")[1] : $(this).css("background-position-y");
                    $videoVolumeButton.css({
                        "background-position": (volume >
                            0 ? "left" : "right") + " " + backgroundPosY
                    });
                    $videoObj.get(0).volume = volume;
                    $videoVolumeBarActive.css({
                        height: Math.round(volume * 100) + "%"
                    })
                });
                $videoVolumeBar.css({
                    display: "none",
                    position: "absolute",
                    left: 4,
                    bottom: "100%",
                    width: 24,
                    height: 80,
                    "margin-bottom": Math.floor((BAR_HEIGHT - BUTTON_SIZE) / 2),
                    "background-color": "#000000",
                    opacity: 0.7,
                    filter: "alpha(opacity=70)"
                });
                $videoVolumeBarBg.css({
                    display: "block",
                    position: "relative",
                    width: 10,
                    height: 68,
                    margin: 7,
                    cursor: "pointer",
                    "background-color": "#222"
                });
                $videoVolumeBarActive.css({
                    display: "block",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    "background-color": "#fcc500"
                });
                $videoVolumeBarBg.bind(eStart, function(e) {
                    var e0 = isTouch ? e.originalEvent.touches[0] : e;
                    var vol = 1 - (e0.pageY - $videoVolumeBarBg.offset().top) / $videoVolumeBarBg.height();
                    vol = vol > 1 ? 1 : vol < 0 ? 0 : vol;
                    $videoVolumeBarActive.css({
                        height: Math.round(vol * 100) + "%"
                    });
                    $videoVolumeButton.css({
                        "background-position": "left " + (vol > 0 ? "top" : "bottom")
                    });
                    $videoObj.get(0).volume = vol;
                    $videoVolumeBarBg.bind(eMove, function(e) {
                        var e0 = isTouch ?
                            e.originalEvent.touches[0] : e;
                        var vol = 1 - (e0.pageY - $videoVolumeBarBg.offset().top) / $videoVolumeBarBg.height();
                        vol = vol > 1 ? 1 : vol < 0 ? 0 : vol;
                        $videoVolumeBarActive.css({
                            height: Math.round(vol * 100) + "%"
                        });
                        $videoVolumeButton.css({
                            "background-position": "left " + (vol > 0 ? "top" : "bottom")
                        });
                        $videoObj.get(0).volume = vol
                    })
                }).bind(eCancel, function() {
                    $videoVolumeBarBg.unbind(eMove)
                })
            }
            var calcTimeFormat = function(seconds) {
                var h0 = Math.floor(seconds / 3600);
                var h = h0 < 10 ? "0" + h0 : h0;
                var m0 = Math.floor((seconds - h0 * 60) / 60);
                var m = m0 < 10 ?
                    "0" + m0 : m0;
                var s0 = Math.floor(seconds - (h0 * 3600 + m0 * 60));
                var s = s0 < 10 ? "0" + s0 : s0;
                var r = m + ":" + s;
                if (h0 > 0) r = h + ":" + r;
                return r
            };
            if (hideplaybutton) $videoPlay.hide();
            if (hidecontrols) $videoControls.hide();
            var onVideoPlay = function() {
                if (!hideplaybutton) $videoPlay.hide();
                if (!hidecontrols) {
                    $videoBtnPlay.hide();
                    $videoBtnPause.show()
                }
            };
            var onVideoPause = function() {
                if (!hideplaybutton) $videoPlay.show();
                if (!hidecontrols) {
                    $videoControls.show();
                    clearTimeout(hideControlsTimerId);
                    $videoBtnPlay.show();
                    $videoBtnPause.hide()
                }
            };
            var onVideoEnded = function() {
                $(window).trigger("html5lightbox.videoended");
                if (!hideplaybutton) $videoPlay.show();
                if (!hidecontrols) {
                    $videoControls.show();
                    clearTimeout(hideControlsTimerId);
                    $videoBtnPlay.show();
                    $videoBtnPause.hide()
                }
            };
            var onVideoUpdate = function() {
                var curTime = $videoObj.get(0).currentTime;
                if (curTime) {
                    $videoTimeCurrent.text(calcTimeFormat(curTime));
                    var duration = $videoObj.get(0).duration;
                    if (duration) {
                        $videoTimeTotal.text(calcTimeFormat(duration));
                        if (!sliderDragging) {
                            var sliderW = $videoSeeker.width();
                            var pos = Math.round(sliderW * curTime / duration);
                            $videoSeekerPlay.css({
                                width: pos
                            });
                            $videoSeekerHandler.css({
                                left: pos
                            })
                        }
                    }
                }
            };
            var onVideoProgress = function() {
                if ($videoObj.get(0).buffered && $videoObj.get(0).buffered.length > 0 && !isNaN($videoObj.get(0).buffered.end(0)) && !isNaN($videoObj.get(0).duration)) {
                    var sliderW = $videoSeeker.width();
                    $videoSeekerBuffer.css({
                        width: Math.round(sliderW * $videoObj.get(0).buffered.end(0) / $videoObj.get(0).duration)
                    })
                }
            };
            try {
                $videoObj.bind("play", onVideoPlay);
                $videoObj.bind("pause",
                    onVideoPause);
                $videoObj.bind("ended", onVideoEnded);
                $videoObj.bind("timeupdate", onVideoUpdate);
                $videoObj.bind("progress", onVideoProgress)
            } catch (e) {}
        }
    })(jQuery);
    jQuery(document).ready(function() {
        if (typeof html5Lightbox === "undefined") html5Lightbox = jQuery(".html5lightbox").html5lightbox()
    })
};
/**
 * Owl Carousel v2.2.0
 * Copyright 2013-2016 David Deutsch
 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat--) {
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(':visible')) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(':visible')) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			reciprocalItemsWidth = this._items[--iterator].width();
			elementWidth = this.$element.width();
			while (iterator--) {
				reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
				if (reciprocalItemsWidth > elementWidth) {
					break;
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(':visible')) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();

		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout.
		 * @type {Timeout}
		 */
		this._timeout = null;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position') {
					//console.log('play?', e);
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		this._paused = false;

		if (this._core.is('rotating')) {
			return;
		}

		this._core.enter('rotating');

		this._setAutoPlayInterval();
	};

	/**
	 * Gets a new timeout
	 * @private
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 * @return {Timeout}
	 */
	Autoplay.prototype._getNextTimeout = function(timeout, speed) {
		if ( this._timeout ) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function() {
			if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
	 * Sets autoplay in motion.
	 * @private
	 */
	Autoplay.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout();
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		window.clearTimeout(this._timeout);
		this._core.leave('rotating');
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		this._paused = true;
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<div>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);

// makes the parallax elements
function parallaxIt() {

    // create variables
    var $fwindow = $(window);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // on window scroll event
    $fwindow.on('scroll resize', function() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    });

    // for each of content parallax element
    // $('[data-type="content"]').each(function (index, e) {
    //     var $contentObj = $(this);
    //     var fgOffset = parseInt($contentObj.offset().top);
    //     var yPos;
    //     var speed = ($contentObj.data('speed') || 1 );
    //
    //     $fwindow.on('scroll resize', function (){
    //         yPos = fgOffset - scrollTop / speed;
    //
    //         $contentObj.css('top', yPos);
    //     });
    // });

    // for each of background parallax element
    $('[data-type="background"]').each(function(){
        var $backgroundObj = $(this);
        var bgOffset = parseInt($backgroundObj.offset().top);
        var yPos;
        var coords;
        var speed = ($backgroundObj.data('speed') || 0 );

        $fwindow.on('scroll resize', function() {
            yPos = - ((scrollTop - bgOffset) / speed);
            coords = '40% '+ yPos + 'px';

            $backgroundObj.css({ backgroundPosition: coords });
        });
    });

    // triggers winodw scroll for refresh
    $fwindow.trigger('scroll');
};

parallaxIt();

$(function(){
    var $refreshButton = $('#refresh');
    var $results = $('#css_result');

    function refresh(){
        var css = $('style.cp-pen-styles').text();
        $results.html(css);
    }

    refresh();
    $refreshButton.click(refresh);

    // Select all the contents when clicked
    $results.click(function(){
        $(this).select();
    });
});


/*
	Load more content with jQuery - May 21, 2013
	(c) 2013 @ElmahdiMahmoud
*/

$(function () {
    $(".box-more").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".box-more:hidden").slice(0, 4).slideDown();
        if ($(".box-more:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});


