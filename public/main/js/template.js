if ("undefined" == typeof jQuery) throw new Error("template requires jQuery");

function w3_open() {
    document.getElementById("mySidebar").style.display = "block", document.getElementById("myOverlay").style.display = "block"
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none", document.getElementById("myOverlay").style.display = "none"
}
var loader;

function loadNow(t) {
    t <= 0 ? displayContent() : (loader.style.opacity = t, window.setTimeout(function() {
        loadNow(t - .05)
    }, 50))
}

function displayContent() {
    loader.style.display = "none"
}! function(i) {
    "use strict";

    function s(t) {
        this.options = t, this.bindedResize = !1, this.activate()
    }
    var a = "Masteradmin.layout",
        r = {
            slimscroll: !1,
            resetHeight: !0
        },
        l = ".wrapper",
        c = ".content-wrapper",
        d = ".layout-boxed",
        u = ".main-footer",
        h = ".main-header",
        p = ".sidebar",
        f = ".control-sidebar",
        t = ".sidebar-menu",
        e = ".main-header .logo",
        m = "fixed",
        n = "hold-transition";

    function o(o) {
        return this.each(function() {
            var t, e = i(this),
                n = e.data(a);
            if (n || (t = i.extend({}, r, e.data(), "object" == typeof o && o), e.data(a, n = new s(t))), "string" == typeof o) {
                if (void 0 === n[o]) throw new Error("No method named " + o);
                n[o]()
            }
        })
    }
    s.prototype.activate = function() {
        this.fix(), this.fixSidebar(), i("body").removeClass(n), this.options.resetHeight && i("body, html, " + l).css({
            height: "auto",
            "min-height": "100%"
        }), this.bindedResize || (i(window).resize(function() {
            this.fix(), this.fixSidebar(), i(e + ", " + p).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                this.fix(), this.fixSidebar()
            }.bind(this))
        }.bind(this)), this.bindedResize = !0), i(t).on("expanded.tree", function() {
            this.fix(), this.fixSidebar()
        }.bind(this)), i(t).on("collapsed.tree", function() {
            this.fix(), this.fixSidebar()
        }.bind(this))
    }, s.prototype.fix = function() {
        i(d + " > " + l).css("overflow", "hidden");
        var t = i(u).outerHeight() || 0,
            e = i(h).outerHeight() + t,
            n = i(window).height(),
            o = i(p).height() || 0;
        i("body").hasClass(m) ? i(c).css("min-height", n - t) : (e = o <= n ? (i(c).css("min-height", n - e), n - e) : (i(c).css("min-height", o), o), void 0 !== (o = i(f)) && o.height() > e && i(c).css("min-height", o.height()))
    }, s.prototype.fixSidebar = function() {
        i("body").hasClass(m) ? this.options.slimscroll && void 0 !== i.fn.slimScroll && (i(p).slimScroll({
            destroy: !0
        }).height("auto"), i(p).slimScroll({
            height: i(window).height() - i(h).height() + "px",
            color: "rgba(0,0,0,0.2)",
            size: "3px"
        })) : void 0 !== i.fn.slimScroll && i(p).slimScroll({
            destroy: !0
        }).height("auto")
    };
    var g = i.fn.layout;
    i.fn.layout = o, i.fn.layout.Constuctor = s, i.fn.layout.noConflict = function() {
        return i.fn.layout = g, this
    }, i(window).on("load", function() {
        o.call(i("body"))
    })
}(jQuery),
function(i) {
    "use strict";

    function s(t) {
        this.options = t, this.init()
    }
    var a = "Masteradmin.pushmenu",
        r = {
            collapseScreenSize: 767,
            expandOnHover: !1,
            expandTransitionDelay: 200
        },
        t = ".sidebar-collapse",
        e = ".main-sidebar",
        n = ".content-wrapper",
        o = ".sidebar-form .form-control",
        l = '[data-toggle="push-menu"]',
        c = ".sidebar-mini",
        d = "",
        u = "sidebar-collapse",
        h = "sidebar-open",
        p = "",
        f = "expanded.pushMenu",
        m = "collapsed.pushMenu";

    function g(o) {
        return this.each(function() {
            var t, e = i(this),
                n = e.data(a);
            n || (t = i.extend({}, r, e.data(), "object" == typeof o && o), e.data(a, n = new s(t))), "toggle" == o && n.toggle()
        })
    }
    s.prototype.init = function() {
        i(n).on(function() {
            i(window).width() <= this.options.collapseScreenSize && i("body").hasClass(h) && this.close()
        }.bind(this)), i(o).on(function(t) {
            t.stopPropagation()
        })
    }, s.prototype.toggle = function() {
        var t = i(window).width(),
            e = !i("body").hasClass(u);
        t <= this.options.collapseScreenSize && (e = i("body").hasClass(h)), e ? this.close() : this.open()
    }, s.prototype.open = function() {
        (i(window).width() > this.options.collapseScreenSize ? i("body").removeClass(u) : i("body").addClass(h)).trigger(i.Event(f))
    }, s.prototype.close = function() {
        (i(window).width() > this.options.collapseScreenSize ? i("body").addClass(u) : i("body").removeClass(h + " " + u)).trigger(i.Event(m))
    }, s.prototype.expandOnHover = function() {
        i(e).hover(function() {
            i("body").is(c + t) && i(window).width() > this.options.collapseScreenSize && this.expand()
        }.bind(this), function() {
            i("body").is(d) && this.collapse()
        }.bind(this))
    }, s.prototype.collapse = function() {
        setTimeout(function() {
            i("body").removeClass(p).addClass(u)
        }, this.options.expandTransitionDelay)
    };
    var b = i.fn.pushMenu;
    i.fn.pushMenu = g, i.fn.pushMenu.Constructor = s, i.fn.pushMenu.noConflict = function() {
        return i.fn.pushMenu = b, this
    }, i(document).on("click", l, function(t) {
        t.preventDefault(), g.call(i(this), "toggle")
    }), i(window).on("load", function() {
        g.call(i(l))
    })
}(jQuery),
function(s) {
    "use strict";

    function o(t, e) {
        this.element = t, this.options = e, s(this.element).addClass(u), s(r + n, this.element).addClass(d), this._setUpListeners()
    }
    var i = "Masteradmin.tree",
        a = {
            animationSpeed: 500,
            accordion: !0,
            followLink: !1,
            trigger: ".treeview a"
        },
        r = ".treeview",
        l = ".treeview-menu",
        c = ".menu-open, .active",
        t = '[data-widget="tree"]',
        n = ".active",
        d = "menu-open",
        u = "tree",
        h = "collapsed.tree",
        p = "expanded.tree";

    function e(n) {
        return this.each(function() {
            var t, e = s(this);
            e.data(i) || (t = s.extend({}, a, e.data(), "object" == typeof n && n), e.data(i, new o(e, t)))
        })
    }
    o.prototype.toggle = function(t, e) {
        var n = t.next(l),
            o = t.parent(),
            i = o.hasClass(d);
        o.is(r) && (this.options.followLink && "#" != t.attr("href") || e.preventDefault(), i ? this.collapse(n, o) : this.expand(n, o))
    }, o.prototype.expand = function(t, e) {
        var n, o, i = s.Event(p);
        this.options.accordion && (o = (n = e.siblings(c)).children(l), this.collapse(o, n)), e.addClass(d), t.slideDown(this.options.animationSpeed, function() {
            s(this.element).trigger(i)
        }.bind(this))
    }, o.prototype.collapse = function(t, e) {
        var n = s.Event(h);
        t.find(c).removeClass(d), e.removeClass(d), t.slideUp(this.options.animationSpeed, function() {
            t.find(c + " > " + r).slideUp(), s(this.element).trigger(n)
        }.bind(this))
    }, o.prototype._setUpListeners = function() {
        var e = this;
        s(this.element).on("click", this.options.trigger, function(t) {
            e.toggle(s(this), t)
        })
    };
    var f = s.fn.tree;
    s.fn.tree = e, s.fn.tree.Constructor = o, s.fn.tree.noConflict = function() {
        return s.fn.tree = f, this
    }, s(window).on("load", function() {
        s(t).each(function() {
            e.call(s(this))
        })
    })
}(jQuery),
function(i) {
    "use strict";

    function s(t, e) {
        this.element = t, this.options = e, this.hasBindedResize = !1, this.init()
    }
    var a = "Masteradmin.controlsidebar",
        r = {
            slide: !0
        },
        e = ".control-sidebar",
        t = '[data-toggle="control-sidebar"]',
        n = ".control-sidebar-open",
        o = ".control-sidebar-bg",
        l = ".wrapper",
        c = ".layout-boxed",
        d = "control-sidebar-open",
        u = "collapsed.controlsidebar",
        h = "expanded.controlsidebar";

    function p(o) {
        return this.each(function() {
            var t, e = i(this),
                n = e.data(a);
            n || (t = i.extend({}, r, e.data(), "object" == typeof o && o), e.data(a, n = new s(e, t))), "string" == typeof o && n.toggle()
        })
    }
    s.prototype.init = function() {
        i(this.element).is(t) || i(this).on("click", this.toggle), this.fix(), i(window).resize(function() {
            this.fix()
        }.bind(this))
    }, s.prototype.toggle = function(t) {
        t && t.preventDefault(), this.fix(), i(e).is(n) || i("body").is(n) ? this.collapse() : this.expand()
    }, s.prototype.expand = function() {
        (this.options.slide ? i(e) : i("body")).addClass(d), i(this.element).trigger(i.Event(h))
    }, s.prototype.collapse = function() {
        i("body, " + e).removeClass(d), i(this.element).trigger(i.Event(u))
    }, s.prototype.fix = function() {
        i("body").is(c) && this._fixForBoxed(i(o))
    }, s.prototype._fixForBoxed = function(t) {
        t.css({
            position: "absolute",
            height: i(l).height()
        })
    };
    var f = i.fn.controlSidebar;
    i.fn.controlSidebar = p, i.fn.controlSidebar.Constructor = s, i.fn.controlSidebar.noConflict = function() {
        return i.fn.controlSidebar = f, this
    }, i(document).on("click", t, function(t) {
        t && t.preventDefault(), p.call(i(this), "toggle")
    })
}(jQuery),
function(i) {
    "use strict";

    function s(t, e) {
        this.element = t, this.options = e, this._setUpListeners()
    }
    var a = "Masteradmin.boxwidget",
        r = {
            animationSpeed: 500,
            collapseTrigger: '[data-widget="collapse"]',
            removeTrigger: '[data-widget="remove"]',
            collapseIcon: "fa-minus",
            expandIcon: "fa-plus",
            removeIcon: "fa-times"
        },
        t = ".box",
        e = ".collapsed-box",
        o = ".box-body",
        l = ".box-footer",
        c = ".box-tools",
        d = "collapsed-box",
        u = "collapsed.boxwidget",
        h = "expanded.boxwidget",
        n = "removed.boxwidget";

    function p(o) {
        return this.each(function() {
            var t, e = i(this),
                n = e.data(a);
            if (n || (t = i.extend({}, r, e.data(), "object" == typeof o && o), e.data(a, n = new s(e, t))), "string" == typeof o) {
                if (void 0 === n[o]) throw new Error("No method named " + o);
                n[o]()
            }
        })
    }
    s.prototype.toggle = function() {
        !i(this.element).is(e) ? this.collapse() : this.expand()
    }, s.prototype.expand = function() {
        var t = i.Event(h),
            e = this.options.collapseIcon,
            n = this.options.expandIcon;
        i(this.element).removeClass(d), i(this.element).find(c).find("." + n).removeClass(n).addClass(e), i(this.element).find(o + ", " + l).slideDown(this.options.animationSpeed, function() {
            i(this.element).trigger(t)
        }.bind(this))
    }, s.prototype.collapse = function() {
        var t = i.Event(u),
            e = this.options.collapseIcon,
            n = this.options.expandIcon;
        i(this.element).find(c).find("." + e).removeClass(e).addClass(n), i(this.element).find(o + ", " + l).slideUp(this.options.animationSpeed, function() {
            i(this.element).addClass(d), i(this.element).trigger(t)
        }.bind(this))
    }, s.prototype.remove = function() {
        var t = i.Event(n);
        i(this.element).slideUp(this.options.animationSpeed, function() {
            i(this.element).trigger(t), i(this.element).remove()
        }.bind(this))
    }, s.prototype._setUpListeners = function() {
        var e = this;
        i(this.element).on("click", this.options.collapseTrigger, function(t) {
            t && t.preventDefault(), e.toggle()
        }), i(this.element).on("click", this.options.removeTrigger, function(t) {
            t && t.preventDefault(), e.remove()
        })
    };
    var f = i.fn.boxWidget;
    i.fn.boxWidget = p, i.fn.boxWidget.Constructor = s, i.fn.boxWidget.noConflict = function() {
        return i.fn.boxWidget = f, this
    }, i(window).on("load", function() {
        i(t).each(function() {
            p.call(i(this))
        })
    })
}(jQuery),
function(i) {
    "use strict";

    function s(t, e) {
        this.element = t, this.options = e, this._setUpListeners()
    }
    var a = "Masteradmin.todolist",
        r = {
            iCheck: !1,
            onCheck: function() {},
            onUnCheck: function() {}
        },
        e = {
            data: '[data-widget="todo-list"]'
        },
        n = "done";

    function t(o) {
        return this.each(function() {
            var t, e = i(this),
                n = e.data(a);
            if (n || (t = i.extend({}, r, e.data(), "object" == typeof o && o), e.data(a, n = new s(e, t))), "string" == typeof n) {
                if (void 0 === n[o]) throw new Error("No method named " + o);
                n[o]()
            }
        })
    }
    s.prototype.toggle = function(t) {
        t.parents(e.li).first().toggleClass(n), t.prop("checked") ? this.check(t) : this.unCheck(t)
    }, s.prototype.check = function(t) {
        this.options.onCheck.call(t)
    }, s.prototype.unCheck = function(t) {
        this.options.onUnCheck.call(t)
    }, s.prototype._setUpListeners = function() {
        var t = this;
        i(this.element).on("change ifChanged", "input:checkbox", function() {
            t.toggle(i(this))
        })
    };
    var o = i.fn.todoList;
    i.fn.todoList = t, i.fn.todoList.Constructor = s, i.fn.todoList.noConflict = function() {
        return i.fn.todoList = o, this
    }, i(window).on("load", function() {
        i(e.data).each(function() {
            t.call(i(this))
        })
    })
}(jQuery),
function(i) {
    "use strict";

    function o(t) {
        this.element = t
    }
    var s = "Masteradmin.directchat",
        t = '[data-widget="chat-pane-toggle"]',
        e = ".direct-chat",
        n = "direct-chat-contacts-open";

    function a(n) {
        return this.each(function() {
            var t = i(this),
                e = t.data(s);
            e || t.data(s, e = new o(t)), "string" == typeof n && e.toggle(t)
        })
    }
    o.prototype.toggle = function(t) {
        t.parents(e).first().toggleClass(n)
    };
    var r = i.fn.directChat;
    i.fn.directChat = a, i.fn.directChat.Constructor = o, i.fn.directChat.noConflict = function() {
        return i.fn.directChat = r, this
    }, i(document).on("click", t, function(t) {
        t && t.preventDefault(), a.call(i(this), "toggle")
    }), i(".inner-content-div").slimScroll({
        height: "200"
    }), i(".sm-scrol").slimScroll({
        height: "250"
    }), i(".direct-chat-messages").slimScroll({
        height: "420"
    }), i(".chat-box-one").slimScroll({
        height: "550"
    }), i(".chat-box-one2").slimScroll({
        height: "580"
    }), i(".chat-box-one-side").slimScroll({
        height: "650"
    }), i(".chat-box-one-side2").slimScroll({
        height: "500"
    }), i(".chat-box-one-side3").slimScroll({
        height: "685"
    }), i(".notification-side").slimScroll({
        height: "325"
    }), i(".suggestions-side").slimScroll({
        height: "300"
    }), i(".events-side").slimScroll({
        height: "265"
    }), i(".pat-div").slimScroll({
        height: "204"
    }), i(".demo-panel-bx").slimScroll({
        height: "auto"
    }), i(".search-box a, .search-box .app-search .srh-btn").on("click", function() {
        i(".app-search").toggle(200)
    }), i(document).on("click", ".box-btn-close", function() {
        i(this).parents(".box").fadeOut(600, function() {
            (1 == i(this).parent().children().length ? i(this).parent() : i(this)).remove()
        })
    }), i(document).on("click", ".box-btn-slide", function() {
        i(this).toggleClass("rotate-180").parents(".box").find(".box-content, .box-body").slideToggle()
    }), i(document).on("click", ".box-btn-maximize", function() {
        i(this).parents(".box").toggleClass("box-maximize").removeClass("box-fullscreen")
    }), i(document).on("click", ".box-btn-fullscreen", function() {
        i(this).parents(".box").toggleClass("box-fullscreen").removeClass("box-maximize")
    }), i(document).on("click", 'a[href="#"]', function(t) {
        t.preventDefault()
    }), i(".open-left-block").on("click", function() {
        i(".left-block").toggleClass("open-panel"), i(".open-left-block").toggleClass("mdi-menu")
    }), i(document).on("click", ".file-browser", function() {
        var t, e = i(this);
        e.hasClass("form-control") ? setTimeout(function() {
            e.closest(".file-group").find('[type="file"]').trigger("click")
        }, 300) : ((t = e.closest(".file-group").find('[type="file"]')).on("click", function(t) {
            t.stopPropagation()
        }), t.trigger("click"))
    }), i(document).on("change", '.file-group [type="file"]', function() {
        for (var t = i(this)[0], e = t.files.length, n = "", o = 0; o < e; ++o) n += t.files.item(o).name + ", ";
        n = n.substr(0, n.length - 2), i(this).closest(".file-group").find(".file-value").val(n).text(n).focus()
    }), i(document).on("change", ".custom-file-input", function() {
        var t = i(this).val().split("\\").pop();
        i(this).next(".custom-file-control").attr("data-input-value", t)
    }), i(".custom-file-control:not([data-input-value])").attr("data-input-value", "Choose file..."), i(".todo-list").todoList({
        onCheck: function() {
            window.console.log(i(this), "The element has been checked")
        },
        onUnCheck: function() {
            window.console.log(i(this), "The element has been unchecked")
        }
    }), i("#thismonth").sparkline([8, 5, 4, 7, 9, 7, 10, 9], {
        type: "bar",
        height: "35",
        barWidth: "4",
        resize: !0,
        barSpacing: "4",
        barColor: "#843cf7"
    }), i("#lastyear").sparkline([8, 5, 4, 7, 9, 7, 10, 9], {
        type: "bar",
        height: "35",
        barWidth: "4",
        resize: !0,
        barSpacing: "4",
        barColor: "#ec4b71"
    }), i("#chat-circle, #chat-box-toggle, #chat-popup").click(function() {
        i("#chat-box-body").toggleClass("show")
    })
}(jQuery), $(function() {
        "use strict";
        $('[data-provide~="fullscreen"]').on("click", function() {
            screenfull.toggle($("#container")[0])
        })
    }),
    function(t) {
        "use strict";
        t('.sidebar-menu li a[href="' + window.location.pathname.split("/").pop() + '"]').parent().addClass("active"), t(".sidebar-menu li.active").parents("li").addClass("active")
    }(jQuery),
    function(t) {
        "use strict";
        t('.sm li a[href="' + window.location.pathname.split("/").pop() + '"]').parent().addClass("current"), t(".sm li.current").parents("li").addClass("current")
    }(jQuery), $(function() {
        "use strict";
        feather.replace()
    }),
    function(n) {
        "use strict";
        var t = t || {},
            e = document.querySelectorAll.bind(document);

        function r(t) {
            var e, n = "";
            for (e in t) t.hasOwnProperty(e) && (n += e + ":" + t[e] + ";");
            return n
        }
        var l = {
                duration: 750,
                show: function(t, e) {
                    if (2 === t.button) return !1;
                    var n = e || this,
                        o = document.createElement("div");
                    o.className = "waves-ripple", n.appendChild(o);
                    var i, s, s = (s = {
                            top: 0,
                            left: 0
                        }, e = (i = (a = n) && a.ownerDocument).documentElement, void 0 !== a.getBoundingClientRect && (s = a.getBoundingClientRect()), a = null !== (i = a = i) && i === i.window ? a : 9 === a.nodeType && a.defaultView, {
                            top: s.top + a.pageYOffset - e.clientTop,
                            left: s.left + a.pageXOffset - e.clientLeft
                        }),
                        a = t.pageY - s.top,
                        e = t.pageX - s.left,
                        n = "scale(" + n.clientWidth / 100 * 10 + ")";
                    "touches" in t && (a = t.touches[0].pageY - s.top, e = t.touches[0].pageX - s.left), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-scale", n), o.setAttribute("data-x", e), o.setAttribute("data-y", a);
                    e = {
                        top: a + "px",
                        left: e + "px"
                    };
                    o.className = o.className + " waves-notransition", o.setAttribute("style", r(e)), o.className = o.className.replace("waves-notransition", ""), e["-webkit-transform"] = n, e["-moz-transform"] = n, e["-ms-transform"] = n, e["-o-transform"] = n, e.transform = n, e.opacity = "1", e["-webkit-transition-duration"] = l.duration + "ms", e["-moz-transition-duration"] = l.duration + "ms", e["-o-transition-duration"] = l.duration + "ms", e["transition-duration"] = l.duration + "ms", e["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", e["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", e["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", e["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", o.setAttribute("style", r(e))
                },
                hide: function(t) {
                    a.touchup(t);
                    var e = this,
                        n = (e.clientWidth, null),
                        t = e.getElementsByClassName("waves-ripple");
                    if (!(0 < t.length)) return !1;
                    var o = (n = t[t.length - 1]).getAttribute("data-x"),
                        i = n.getAttribute("data-y"),
                        s = n.getAttribute("data-scale"),
                        t = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
                    t < 0 && (t = 0), setTimeout(function() {
                        var t = {
                            top: i + "px",
                            left: o + "px",
                            opacity: "0",
                            "-webkit-transition-duration": l.duration + "ms",
                            "-moz-transition-duration": l.duration + "ms",
                            "-o-transition-duration": l.duration + "ms",
                            "transition-duration": l.duration + "ms",
                            "-webkit-transform": s,
                            "-moz-transform": s,
                            "-ms-transform": s,
                            "-o-transform": s,
                            transform: s
                        };
                        n.setAttribute("style", r(t)), setTimeout(function() {
                            try {
                                e.removeChild(n)
                            } catch (t) {
                                return !1
                            }
                        }, l.duration)
                    }, t)
                },
                wrapInput: function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n, o, i, s = t[e];
                        "input" === s.tagName.toLowerCase() && ("i" === (n = s.parentNode).tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect") || ((o = document.createElement("i")).className = s.className + " waves-input-wrapper", i = (i = s.getAttribute("style")) || "", o.setAttribute("style", i), s.className = "waves-button-input", s.removeAttribute("style"), n.replaceChild(o, s), o.appendChild(s)))
                    }
                }
            },
            a = {
                touches: 0,
                allowEvent: function(t) {
                    var e = !0;
                    return "touchstart" === t.type ? a.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function() {
                        0 < a.touches && --a.touches
                    }, 500) : "mousedown" === t.type && 0 < a.touches && (e = !1), e
                },
                touchup: function(t) {
                    a.allowEvent(t)
                }
            };

        function o(t) {
            var e = function(t) {
                if (!1 === a.allowEvent(t)) return null;
                for (var e = null, n = t.target || t.srcElement; null !== n.parentNode;) {
                    if (!(n instanceof SVGElement) && -1 !== n.className.indexOf("waves-effect")) {
                        e = n;
                        break
                    }
                    n = n.parentNode
                }
                return e
            }(t);
            null !== e && (l.show(t, e), "ontouchstart" in n && (e.addEventListener("touchend", l.hide, !1), e.addEventListener("touchcancel", l.hide, !1)), e.addEventListener("mouseup", l.hide, !1), e.addEventListener("mouseleave", l.hide, !1), e.addEventListener("dragend", l.hide, !1))
        }
        t.displayEffect = function(t) {
            "duration" in (t = t || {}) && (l.duration = t.duration), l.wrapInput(e(".waves-effect")), "ontouchstart" in n && document.body.addEventListener("touchstart", o, !1), document.body.addEventListener("mousedown", o, !1)
        }, t.attach = function(t) {
            "input" === t.tagName.toLowerCase() && (l.wrapInput([t]), t = t.parentNode), "ontouchstart" in n && t.addEventListener("touchstart", o, !1), t.addEventListener("mousedown", o, !1)
        }, n.Waves = t, document.addEventListener("DOMContentLoaded", function() {
            t.displayEffect()
        }, !1)
    }(window), document.addEventListener("DOMContentLoaded", function() {
        loader = document.getElementById("loader"), loadNow(1)
    }), new PerfectScrollbar(".multinav-scroll");
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),
    tooltipList = tooltipTriggerList.map(function(t) {
        return new bootstrap.Tooltip(t)
    });