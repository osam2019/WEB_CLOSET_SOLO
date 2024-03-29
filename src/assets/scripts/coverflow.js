!function (a, b) {
    var c = {}, d = a.coverflow = function (a) {
        if (!a) for (var b in c) a = c[b].id;
        if (a) {
            var d = c[a];
            return d ? d : c[a] = new g(a)
        }
        return null
    };
    "undefined" != typeof jQuery && (jQuery.fn.coverflow = function (a) {
        var b = d(this[0].id);
        return b[a] ? b[a].apply(b, Array.prototype.slice.call(arguments, 1)) : "object" == typeof a ? b.setup.apply(b, arguments) : a ? void $.error("Method " + a + " does not exist on jQuery.coverflow") : b
    });
    var e = 0, f = {
        hasFlash: "undefined" != typeof navigator.plugins && "object" == typeof navigator.plugins["Shockwave Flash"] || a.ActiveXObject && new ActiveXObject("ShockwaveFlash.ShockwaveFlash") !== !1,
        isIE: !!navigator.userAgent.match(/msie/i) || !!navigator.userAgent.match(/Trident\/7\./),
        uniqueId: function (a) {
            var b = e++;
            return a ? a + b : b
        },
        bind: function (a, b) {
            return function () {
                a.apply(b)
            }
        },
        on: function (a, b, c) {
            if (a) for (var d = b.split(" "), e = 0; e < d.length; e++) a.attachEvent ? a.attachEvent("on" + d[e], c) : a.addEventListener(d[e], c, !1)
        },
        off: function (a, b, c) {
            if (a) for (var d = b.split(" "), e = 0; e < d.length; e++) a.detachEvent ? a.detachEvent("on" + d[e], c) : a.removeEventListener(d[e], c, !1)
        },
        extend: function (a, b) {
            for (var c in b) a[c] = b[c];
            return a
        },
        addClass: function (a, b) {
            -1 === a.className.indexOf(b) && (a.className += " " + b)
        },
        css: function (a, b) {
            if (a) for (var c in b) if ("undefined" != typeof b[c]) {
                if ("number" == typeof b[c] && "zIndex" != c && "opacity" != c) {
                    if (isNaN(b[c])) continue;
                    b[c] = Math.ceil(b[c]) + "px"
                }
                try {
                    a.style[c] = b[c]
                } catch (d) {
                }
            }
        },
        hexToRgb: function (a) {
            var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            a = a.replace(b, function (a, b, c, d) {
                return b + b + c + c + d + d
            });
            var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
            return c ? {r: parseInt(c[1], 16), g: parseInt(c[2], 16), b: parseInt(c[3], 16)} : null
        },
        ajax: function (b, c, d) {
            var e;
            e = a.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), e.onreadystatechange = function () {
                4 === e.readyState && (200 === e.status ? c && c(e) : d && d(b))
            };
            try {
                e.open("GET", b, !0), e.send(null)
            } catch (f) {
                d && d(b)
            }
            return e
        },
        jsonp: function (c, d, e) {
            var g = -1 === c.indexOf("?") ? "?" : "&";
            e = e || {};
            for (var h in e) e.hasOwnProperty(h) && (g += encodeURIComponent(h) + "=" + encodeURIComponent(e[h]) + "&");
            var i = f.uniqueId("json_call");
            a[i] = function (b) {
                d(b), a[i] = null
            };
            var j = b.createElement("script");
            -1 !== c.indexOf("callback=?") ? j.src = c.replace("callback=?", "callback=" + i) + g.slice(0, -1) : j.src = c + g + "callback=" + i, j.async = !0, j.onload = j.onreadystatechange = function () {
                this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (j.onload = j.onreadystatechange = null, j && j.parentNode && j.parentNode.removeChild(j))
            };
            var k = b.head || b.getElementsByTagName("head")[0] || b.documentElement;
            k.insertBefore(j, k.firstChild)
        },
        getResizeDimensions: function (a, b, c, d) {
            var e = Math.min(c / a, d / b);
            return {width: a * e, height: b * e, ratio: e}
        },
        getCropOffsets: function (a, b, c, d) {
            var e = [c / a, d / b];
            return e[0] < e[1] ? {left: .5 * (a - c / e[1]), top: 0, ratio: e[1]} : {
                top: .5 * (b - d / e[0]),
                left: 0,
                ratio: e[0]
            }
        },
        getChildIndex: function (a) {
            for (var b = 0; null !== (a = a.previousSibling);) 1 === a.nodeType && ++b;
            return b
        }
    }, g = function (d) {
        function e() {
            i.resize()
        }

        var g, h, i = this;
        this.id = d, this.el = b.getElementById(d), this.config = null, this.setup = function (c) {
            g = null, h = !1;
            var i = {
                mode: "html5",
                flash: "coverflow.swf",
                width: 480,
                height: 270,
                item: 0,
                backgroundcolor: "000000",
                backgroundopacity: 1,
                wmode: "window",
                gradientcolor: void 0,
                coverwidth: 150,
                coverheight: "auto",
                covergap: 40,
                coverangle: 70,
                coverdepth: 170,
                coveroffset: 130,
                fixedsize: !1,
                opacitydecrease: .1,
                reflectionopacity: .3,
                reflectionratio: 155,
                reflectionoffset: 0,
                showtext: !0,
                textstyle: ".coverflow-text{color:#f1f1f1;text-align:center;font-family:Arial Rounded MT Bold,Arial;} .coverflow-text h1{font-size:14px;font-weight:normal;line-height:21px;} .coverflow-text h2{font-size:11px;font-weight:normal;} .coverflow-text a{color:#0000EE;}",
                textoffset: 75,
                tweentime: .8,
                rotatedelay: 0,
                focallength: 250,
                framerate: 60,
                mousewheel: !0,
                x: 0,
                y: 0
            };
            return this.events = {
                ready: new o,
                playlist: new o,
                focus: new o,
                click: new o
            }, this.config = f.extend(i, c), this.config.id = this.id, this.el = b.getElementById(d), this.el.innerHTML = "", this.el.tabIndex = 0, f.addClass(this.el, "coverflow"), -1 !== String(this.config.width).indexOf("%") && (f.off(a, "resize", e), f.on(a, "resize", e)), this.resize(this.config.width, this.config.height), "html5" === this.getMode() ? g = new m(this) : "flash" === this.getMode() && (g = new k(this)), this.left = g.left, this.right = g.right, this.prev = g.prev, this.next = g.next, this.to = g.to, this
        }, this.remove = function () {
            var d = b.createElement("div");
            d.id = this.id, this.el.parentNode.replaceChild(d, this.el), this.el = d, f.off(a, "resize", e), g && g.destroy(), delete c[this.id]
        }, this.resize = function (a, b) {
            f.css(this.el, {
                width: a,
                height: b
            }), this.config.width = this.el.clientWidth, this.config.height = this.el.clientHeight, g && g.resize(this.config.width, this.config.height)
        }, this.getMode = function () {
            return f.hasFlash && "flash" === this.config.mode ? "flash" : !f.isIE && Modernizr.csstransforms3d && Modernizr.csstransitions && Modernizr.canvas ? "html5" : "flash"
        }, this.on = function (a, b) {
            return this.events[a].on(b), h && "ready" === a && this.events.ready.trigger.apply(this), this
        }, this.off = function (a, b) {
            return this.events[a].off(b), this
        }, this.trigger = function (a) {
            h = !0;
            var b = Array.prototype.slice.call(arguments);
            b.shift(), this.events[a].trigger.apply(this, b)
        }
    }, h = function (a, b, c) {
        this.flow = a, this.elem = b, this.config = c, this.currentX = 0, this.currentY = 0, this.transformProp = Modernizr.prefixed("transitionDuration")
    };
    h.prototype.handleEvent = function (a) {
        this[a.type](a)
    }, h.prototype.touchstart = function (b) {
        b.stopImmediatePropagation(), this.startX = b.touches[0].pageX - this.currentX, this.startY = b.touches[0].pageY - this.currentY, this.pageY = b.touches[0].pageY, this.moved = !1, a.addEventListener("touchmove", this, !0), a.addEventListener("touchend", this, !0), this.elem.style[this.transformProp] = "0s"
    }, h.prototype.touchmove = function (b) {
        b.stopImmediatePropagation(), this.lastX = this.currentX, this.lastY = this.currentY, this.currentX = b.touches[0].pageX - this.startX, this.currentY = b.touches[0].pageY - this.startY, Math.abs(this.currentX - this.lastX) > Math.abs(this.currentY - this.lastY) ? (b.preventDefault(), this.moved = !0, this.lastMoveTime = (new Date).getTime(), this.flow.update(this.currentX)) : (a.removeEventListener("touchmove", this, !0), a.removeEventListener("touchend", this, !0))
    }, h.prototype.touchend = function (b) {
        if (b.stopImmediatePropagation(), b.preventDefault(), a.removeEventListener("touchmove", this, !0), a.removeEventListener("touchend", this, !0), this.elem.style[this.transformProp] = this.config.tweentime + "s", this.moved) {
            var c = this.currentX - this.lastX, d = (new Date).getTime() - this.lastMoveTime + 1;
            this.currentX = this.currentX + 50 * c / d, this.flow.updateTouchEnd(this)
        } else this.flow.tap(b, this.currentX)
    }, h.prototype.to = function (a) {
        this.currentX = -a * this.config.covergap, this.flow.update(this.currentX)
    };
    var i = function (a, c, d, e) {
        function g() {
            var b = n.width, c = n.height, d = 0, g = 0;
            if (e.fixedsize) {
                h = Math.round(e.coverwidth), j = Math.round(e.coverheight);
                var o = f.getCropOffsets(b, c, h, j);
                g = Math.round(o.left), d = Math.round(o.top)
            } else {
                var p = f.getResizeDimensions(b, c, e.coverwidth, e.coverheight);
                h = Math.round(p.width), j = Math.round(p.height)
            }
            k.width = h, k.height = j, k.halfHeight = j, l.top = -(.5 * j) + "px", l.left = -(.5 * h) + "px", l.width = h + "px", l.height = j + "px", m.width = h, m.height = 2 * j;
            var q = m.getContext("2d");
            q.drawImage(n, g, d, b - 2 * g, c - 2 * d, 0, 0, h, j), e.reflectionopacity > 0 && (l.height = 2 * j + "px", i.reflect(m, h, j, e.reflectionopacity, e.reflectionratio, e.reflectionoffset)), a.itemComplete(j)
        }

        var h, j, k = this;
        this.index = c, this.halfHeight = 0, this.el = b.createElement("div"), this.el.className = i.getClassName();
        var l = this.el.style;
        1 === e.backgroundopacity && (l.backgroundColor = e.backgroundcolor);
        var m = b.createElement("canvas");
        this.el.appendChild(m);
        var n = new Image;
        n.onload = g, n.src = d, this.setY = function (a) {
            var b = .5 * a - (a - j);
            this.el.style.top = -b + "px"
        }
    };
    i.getClassName = function () {
        return "coverflow-cell"
    }, i.reflect = function (a, b, c, d, e, f) {
        var g = a.getContext("2d");
        g.save(), g.scale(1, -1), g.drawImage(a, 0, 2 * -c - f), g.restore(), g.globalCompositeOperation = "destination-out";
        var h = g.createLinearGradient(0, 0, 0, c);
        h.addColorStop(e / 255, "rgba(255, 255, 255, 1.0)"), h.addColorStop(0, "rgba(255, 255, 255, " + (1 - d) + ")"), g.translate(0, c + f), g.fillStyle = h, g.fillRect(0, 0, b, c)
    };
    var j = function (a, c, d) {
        function e(a) {
            if (0 === a.button) {
                a.stopImmediatePropagation(), a.preventDefault();
                var b = j.hits[f.getChildIndex(a.target)];
                b.index == p ? j.events.click.trigger(b.index) : j.to(b.index)
            }
        }

        function g(a) {
            var b = a.target;
            if ("INPUT" != b.tagName && "SELECT" != b.tagName && "TEXTAREA" != b.tagName && -1 !== [37, 39, 38, 40, 32].indexOf(a.keyCode)) switch (a.preventDefault(), a.keyCode) {
                case 37:
                    j.left();
                    break;
                case 39:
                    j.right();
                    break;
                case 38:
                    j.to(0);
                    break;
                case 40:
                    j.to(k - 1);
                    break;
                case 32:
                    j.events.click.trigger(p)
            }
        }

        var j = this;
        this.config = d;
        var k = c.length, m = 0, n = 0, p = 0;
        this.events = {
            focus: new o,
            click: new o
        }, this.covers = [], this.transforms = [], this.hits = [], this.transforms2 = [], this.prevF = -1, this.transformProp = Modernizr.prefixed("transform"), this.space = d.coveroffset + d.covergap, this._angle = "rotateY(" + -d.coverangle + "deg)", this.angle = "rotateY(" + d.coverangle + "deg)", this.offsetX = 0, this.offsetY = 0, this.el = b.createElement("div"), this.el.className = "coverflow-wrap", this.tray = b.createElement("div"), this.tray.className = "coverflow-tray", this.el.appendChild(this.tray), this.rect = b.createElement("div"), this.rect.className = "coverflow-rect", this.el.appendChild(this.rect), this.el.style[Modernizr.prefixed("perspective")] = d.focallength + "px", this.tray.style[Modernizr.prefixed("transitionDuration")] = this.config.tweentime + "s";
        for (var q = new h(this, this.tray, this.config), r = null, s = null, t = 0; k > t; t++) r = new i(j, t, c[t].image, d), this.tray.appendChild(r.el), r.el.style[Modernizr.prefixed("transitionDuration")] = this.config.tweentime + "s", this.covers[t] = r, s = new l(j, t, d), this.rect.appendChild(s.el), this.hits[t] = s;
        a.addEventListener("touchstart", q, !0), a.addEventListener("keydown", g, !1), this.rect.addEventListener("mousedown", e, !1), this.itemComplete = function (a) {
            if (n = a > n ? a : n, m += 1, m == k) for (var b = 0; k > b; b++) {
                var c = this.covers[b];
                c.setY(n), this.hits[b].resize(c.width, c.height), this.hits[b].setY(n)
            }
        }, this.left = function () {
            p > 0 && j.to(p - 1)
        }, this.right = function () {
            k - 1 > p && j.to(p + 1)
        }, this.prev = function () {
            p > 0 ? j.to(p - 1) : j.to(k - 1)
        }, this.next = function () {
            k - 1 > p ? j.to(p + 1) : j.to(0)
        }, this.to = function (a) {
            var b;
            "string" == typeof a && (b = /^([+-])=(\d)/.exec(a)) && (a = (b[1] + 1) * b[2] + p), a > k - 1 ? a = k - 1 : 0 > a && (a = 0), p = a, q.to(a)
        }, this.on = function (a, b) {
            this.events[a].on(b)
        }, this.destroy = function () {
            a.removeChild(j.el), a.removeEventListener("touchstart", q, !0), a.removeEventListener("keydown", g, !1)
        }, this.resize = function () {
            this.offsetX = .5 * d.width + d.x, this.offsetY = .5 * d.height + d.y, this.setTrayStyle(q.currentX + this.offsetX, this.offsetY), this.setRectStyle(q.currentX + this.offsetX, this.offsetY)
        }
    };
    j.prototype.updateTouchEnd = function (a) {
        var b = this.getFocusedCover(a.currentX);
        a.currentX = -b * this.config.covergap, this.update(a.currentX)
    }, j.prototype.getFocusedCover = function (a) {
        var b = -Math.round(a / this.config.covergap);
        return Math.min(Math.max(b, 0), this.covers.length - 1)
    }, j.prototype.getFocusedCoverOne = function (a) {
        var b = -Math.round(a / this.config.covergap);
        return Math.min(Math.max(b, -1), this.covers.length)
    }, j.prototype.tap = function (a, b) {
        if ("coverflow-hit" == a.target.className) {
            var c = this.getFocusedCover(b), d = this.hits[f.getChildIndex(a.target)];
            d.index == c ? this.events.click.trigger(d.index) : this.to(d.index)
        }
    }, j.prototype.setTrayStyle = function (a, b) {
        this.tray.style[this.transformProp] = "translate3d(" + a + "px, " + b + "px, -" + this.config.coverdepth + "px)"
    }, j.prototype.setRectStyle = function (a, b) {
        this.rect.style[this.transformProp] = "translate3d(" + a + "px, " + b + "px, -" + this.config.coverdepth + "px)"
    }, j.prototype.setHitStyle = function (a, b, c) {
        this.transforms2[b] != c && (a.el.style[this.transformProp] = c, this.transforms2[b] = c)
    }, j.prototype.setCoverStyle = function (a, b, c) {
        this.transforms[b] != c && (a.el.style[this.transformProp] = c, this.transforms[b] = c)
    }, j.prototype.getCoverTransform = function (a, b) {
        var c = b * this.config.covergap;
        return a == b ? "translate3d(" + c + "px, 0, " + this.config.coverdepth + "px)" : b > a ? "translate3d(" + (c + this.space) + "px, 0, 0) " + this._angle : "translate3d(" + (c - this.space) + "px, 0, 0) " + this.angle
    }, j.prototype.update = function (a) {
        var b = this.getFocusedCoverOne(a);
        b != this.prevF && (this.events.focus.trigger(b), this.prevF = b), this.setRectStyle(a + this.offsetX, this.offsetY), this.setTrayStyle(a + this.offsetX, this.offsetY);
        for (var c = 0; c < this.covers.length; c++) this.setHitStyle(this.hits[c], c, this.getCoverTransform(b, c)), this.setCoverStyle(this.covers[c], c, this.getCoverTransform(b, c))
    };
    var k = function (a) {
        function c() {
            var c = '<object id="' + a.id + '-coverflow-flash" data="' + a.config.flash + '" width="100%" height="100%" type="application/x-shockwave-flash"><param name="movie" value="' + a.config.flash + '" /><param name="wmode" value="' + a.config.wmode + '" /><param name="allowscriptaccess" value="always" /><param name="flashvars" value="' + d(a.config) + '" /><a href="http://get.adobe.com/flashplayer/">Get Adobe Flash player</a></object>';
            a.el.innerHTML = c, e = b.getElementById(a.id + "-coverflow-flash")
        }

        function d(a) {
            var b = "";
            for (var c in a) b += "object" == typeof a[c] ? c + "=" + encodeURIComponent("[[JSON]]" + JSON.stringify(a[c])) + "&" : c + "=" + encodeURIComponent(a[c]) + "&";
            return b.slice(0, -1)
        }

        var e;
        this.resize = function (a, b) {
            e.apiResize(a, b)
        }, this.left = function () {
            e.apiLeft()
        }, this.right = function () {
            e.apiRight()
        }, this.prev = function () {
            e.apiPrev()
        }, this.next = function () {
            e.apiNext()
        }, this.to = function (a) {
            e.apiTo(a)
        }, this.destroy = function () {
        }, c()
    }, l = function (a, c, d) {
        this.index = c, this.el = b.createElement("div"), this.el.className = l.getClassName(), this.resize(d.coverwidth, d.coverheight), this.setY = function (a) {
            var b = .5 * a - (a - this.height);
            this.el.style.top = -b + "px"
        }
    };
    l.prototype.resize = function (a, b) {
        this.height = b, f.css(this.el, {backgroundColor: "#00ff00", width: a, height: b, top: .5 * -b, left: .5 * -a})
    }, l.getClassName = function () {
        return "coverflow-hit"
    };
    var m = function (a) {
        function c() {
            var c = b.createElement("style");
            c.type = "text/css", b.getElementsByTagName("head")[0].appendChild(c), c.appendChild(b.createTextNode(r.textstyle));
            var e = f.hexToRgb(r.backgroundcolor);
            r.backgroundcolor = "rgba(" + e.r + "," + e.g + "," + e.b + "," + r.backgroundopacity + ")", q.style.backgroundColor = r.backgroundcolor, void 0 !== r.gradientcolor && (e = f.hexToRgb(r.gradientcolor), r.gradientcolor = "rgba(" + e.r + "," + e.g + "," + e.b + "," + r.backgroundopacity + ")", q.style.background = "-webkit-gradient(linear, left top, left bottom, from(" + r.gradientcolor + "), to(" + r.backgroundcolor + "))"), a.trigger("ready"), a.events.playlist.on(d);
            var g = new n(a);
            g.load(a.config.playlist)
        }

        function d(a) {
            k = a, r.rotatedelay > 0 && (q.addEventListener("touchstart", p.stopRotation, !0), q.addEventListener("mousedown", p.stopRotation, !0), q.addEventListener("keydown", p.stopRotation, !0)), r.coverheight = "auto" == r.coverheight ? r.height : r.coverheight, l && l.destroy(), l = new j(q, k, r), q.appendChild(l.el), m && q.removeChild(m), r.showtext === !0 && (m = b.createElement("div"), f.addClass(m, "coverflow-text"), q.appendChild(m)), l.on("focus", g), l.on("click", h), l.to(r.item), p.resize(r.width, r.height), r.rotatedelay > 0 && (p.stopRotation(), o = setInterval(i, r.rotatedelay)), r.mousewheel && (q.addEventListener("mousewheel", e), q.addEventListener("DOMMouseScroll", e))
        }

        function e(a) {
            a.preventDefault(), p.stopRotation();
            var b = a.detail ? -120 * a.detail : a.wheelDelta, c = Math.ceil(Math.abs(b) / 120);
            if (c > 0) {
                var d = Math.abs(b) / b, e = null;
                if (d > 0 ? e = p.left : 0 > d && (e = p.right), "function" == typeof e) for (var f = 0; c > f; f++) e()
            }
        }

        function g(b) {
            if (r.showtext === !0) {
                var c = k[b];
                c && (m.innerHTML = "<h1>" + (void 0 === c.title ? "" : c.title) + "</h1><h2>" + (void 0 === c.description ? "" : c.description) + "</h2>")
            }
            a.trigger("focus", b, k[b] ? k[b].link : void 0)
        }

        function h(b) {
            p.stopRotation(), a.trigger("click", b, k[b] ? k[b].link : void 0)
        }

        function i() {
            l.next()
        }

        var k, l, m, o, p = this, q = a.el, r = a.config;
        this.stopRotation = function () {
            o && (q.removeEventListener("touchstart", p.stopRotation, !0), q.removeEventListener("mousedown", p.stopRotation, !0), q.removeEventListener("keydown", p.stopRotation, !0), clearInterval(o), o = !1)
        }, this.resize = function (a, b) {
            l && l.resize(a, b), m && (m.style.top = b - r.textoffset + "px")
        }, this.left = function () {
            p.stopRotation(), l.left()
        }, this.right = function () {
            p.stopRotation(), l.right()
        }, this.prev = function () {
            p.stopRotation(), l.prev()
        }, this.next = function () {
            p.stopRotation(), l.next()
        }, this.to = function (a) {
            p.stopRotation(), l.to(a)
        }, this.destroy = function () {
            l && l.destroy()
        }, c()
    };
    a.Modernizr = function (a, b, c) {
        function d(a) {
            r.cssText = a
        }

        function e(a, b) {
            return typeof a === b
        }

        function f(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function g(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!f(e, "-") && r[e] !== c) return "pfx" == b ? e : !0
            }
            return !1
        }

        function h(a, b, d) {
            for (var f in a) {
                var g = b[a[f]];
                if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function i(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1), f = (a + " " + u.join(d + " ") + d).split(" ");
            return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + v.join(d + " ") + d).split(" "), h(f, b, c))
        }

        var j, k, l, m = "2.6.2", n = {}, o = b.documentElement, p = "modernizr", q = b.createElement(p), r = q.style,
            s = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")), t = "Webkit Moz O ms", u = t.split(" "),
            v = t.toLowerCase().split(" "), w = {}, x = [], y = x.slice, z = function (a, c, d, e) {
                var f, g, h, i, j = b.createElement("div"), k = b.body, l = k || b.createElement("body");
                if (parseInt(d, 10)) for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : p + (d + 1), j.appendChild(h);
                return f = ["&#173;", '<style id="s', p, '">', a, "</style>"].join(""), j.id = p, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = o.style.overflow, o.style.overflow = "hidden", o.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), o.style.overflow = i), !!g
            }, A = {}.hasOwnProperty;
        l = e(A, "undefined") || e(A.call, "undefined") ? function (a, b) {
            return b in a && e(a.constructor.prototype[b], "undefined")
        } : function (a, b) {
            return A.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function (a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = y.call(arguments, 1), d = function () {
                if (this instanceof d) {
                    var e = function () {
                    };
                    e.prototype = b.prototype;
                    var f = new e, g = b.apply(f, c.concat(y.call(arguments)));
                    return Object(g) === g ? g : f
                }
                return b.apply(a, c.concat(y.call(arguments)))
            };
            return d
        }), w.canvas = function () {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d")
        }, w.canvastext = function () {
            return !!n.canvas && !!e(b.createElement("canvas").getContext("2d").fillText, "function")
        }, w.csstransforms3d = function () {
            var a = !!i("perspective");
            return a && "webkitPerspective" in o.style && z("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) {
                a = 9 === b.offsetLeft && 3 === b.offsetHeight
            }), a
        }, w.csstransitions = function () {
            return i("transition")
        };
        for (var B in w) l(w, B) && (k = B.toLowerCase(), n[k] = w[B](), x.push((n[k] ? "" : "no-") + k));
        return n.addTest = function (a, b) {
            if ("object" == typeof a) for (var d in a) l(a, d) && n.addTest(d, a[d]); else {
                if (a = a.toLowerCase(), n[a] !== c) return n;
                b = "function" == typeof b ? b() : b, "undefined" != typeof enableClasses && enableClasses && (o.className += " " + (b ? "" : "no-") + a), n[a] = b
            }
            return n
        }, d(""), q = j = null, n._version = m, n._prefixes = s, n._domPrefixes = v, n._cssomPrefixes = u, n.testProp = function (a) {
            return g([a])
        }, n.testAllProps = i, n.testStyles = z, n.prefixed = function (a, b, c) {
            return b ? i(a, b, c) : i(a, "pfx")
        }, n
    }(this, this.document);
    var n = function (a) {
        function b(b) {
            var d = [];
            if (e.hasOwnProperty("route")) {
                e.route.hasOwnProperty("playlist") && (b = b[e.route.playlist]);
                for (var f = 0; f < b.length; f++) d[f] = {
                    image: c(b[f], "image"),
                    title: c(b[f], "title"),
                    description: c(b[f], "description"),
                    link: c(b[f], "link"),
                    duration: c(b[f], "duration")
                }
            }
            a.events.playlist.trigger(d), a.events.playlist.off()
        }

        function c(a, b) {
            if (e.route.hasOwnProperty(b)) {
                for (var c = a, d = e.route[b].split("."), f = 0; f < d.length; f++) c = c[d[f]];
                return c
            }
            return a[b]
        }

        function d(b) {
            var c = JSON.parse(b.responseText);
            a.events.playlist.trigger(c), a.events.playlist.off()
        }

        var e = a.config;
        this.load = function (c) {
            "string" == typeof c ? -1 !== c.indexOf("callback=?") ? f.jsonp(c, b) : f.ajax(c, d) : "object" == typeof c && (a.events.playlist.trigger(c), a.events.playlist.off())
        }
    }, o = function () {
        var a = [];
        this.on = function (b) {
            return a.push(b), this
        }, this.trigger = function () {
            for (var b = Array.prototype.slice.call(arguments), c = 0; c < a.length; c++) "function" == typeof a[c] && a[c].apply(this, b);
            return this
        }, this.off = function (b) {
            if (b) for (var c = 0; c < a.length; c++) a[c] === b && (a.splice(c, 1), c--); else a = [];
            return this
        }
    }
}(window, document);
