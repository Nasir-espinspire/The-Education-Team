// page init
jQuery(function () {
  initCarousel();
  initSlideShow();
});
$(window).on("load", function () {
  //initAnchors();
  initTouchNav();
  initDropDownClasses();
  initMobileNav();
  initSlickCarousel();
  //initParallaxBg();
  //initIsotopeFilter();
  initAddOpener();
  initHeadersticky();
  initSearchForm();
  //initTabjumb();
  jQuery("input, textarea").placeholder();
});

// scroll gallery init
function initCarousel() {
  jQuery(".main-carousel").scrollGallery({
    mask: "div.mask",
    slider: "div.slideset",
    slides: "div.slide",
    btnPrev: "a.btn-prev",
    btnNext: "a.btn-next",
    pagerLinks: ".pagination li",
    pauseOnHover: false,
    circularRotation: true,
    autoRotation: true,
    switchTime: 5000,
    animSpeed: 1500,
    //vertical: true,
    //stretchSlideToMask: true,
    step: 1,
  });
}

// fade gallery init
function initSlideShow() {
  jQuery(".slideshow").fadeGallery({
    slides: ".slide",
    btnPrev: "a.btn-prev",
    btnNext: "a.btn-next",
    pagerLinks: ".pagination li",
    pauseOnHover: false,
    //circularRotation: true,
    autoHeight: true,
    event: "click",
    autoRotation: true,
    generatePagination: ".pagination",
    switchTime: 5000,
    animSpeed: 500,
  });
}

// smooth anchor links
function initAnchors() {
  if ($(window).width() > 767) {
    /* global SmoothScroll */
    new SmoothScroll({
      extraOffset: $(".header").height() + 50 || 0,
      anchorLinks: ".header .nav-link, .scroll",
      animDuration: 800,
    });
  }
  if ($(window).width() < 767) {
    /* global SmoothScroll */
    new SmoothScroll({
      extraOffset: $(".header").height() + 20 || 0,
      anchorLinks: ".header .nav-link, .scroll",
      animDuration: 800,
    });
  }
}

// mobile menu init
function initMobileNav() {
  outer = $("#main,#footer,.slideshow, .banner");
  jQuery("html").mobileNav({
    hideOnClickOutside: true,
    menuActiveClass: "nav-open",
    menuOpener: ".navbar-toggler, .btn-close",
  });
  jQuery("#nav li").mobileNav({
    hideOnClickOutside: true,
    menuActiveClass: "hover",
    menuOpener: ">.opener",
    menuDrop: ">ul",
  });

  jQuery(".tab-content .tab-pane").mobileNav({
    hideOnClickOutside: true,
    menuActiveClass: "open",
    menuOpener: ".opener",
    menuDrop: ".data",
  });
}

// handle dropdowns on mobile devices
function initTouchNav() {
  if ($(window).width() > 767) {
    jQuery("#nav").each(function () {
      new TouchNav({
        navBlock: this,
      });
    });
  }
}

function TouchNav(t) {
  for (var e in ((this.options = {
    hoverClass: "hover",
    menuItems: "li",
    menuOpener: "a",
    menuDrop: "ul",
    navBlock: null,
  }),
  t))
    t.hasOwnProperty(e) && (this.options[e] = t[e]);
  this.init();
}
function initDropDownClasses() {
  jQuery("#nav li").each(function () {
    var t = jQuery(this),
      e = t.find("ul"),
      i = t.find("a").eq(0);
    e.length &&
      (t.addClass("has-drop-down"), i.length && i.addClass("has-drop-down-a"));
  });
}
function initParallaxBg() {
  jQuery(".bg-holder").parallaxBG({
    parent: ".bg-frame",
    image: "img",
    parallaxOffset: 100,
    fallbackFunc: initBgStretch,
  });
}
function initBgStretch() {
  jQuery(".bg-frame").each(function () {
    var t = jQuery(this),
      e = t.find("img");
    jQuery(window).bind("load resize", function () {
      var i,
        s,
        n = (function (t) {
          var e = t.ratio || t.elementWidth / t.elementHeight,
            i = t.maskWidth,
            s = i / e;
          s < t.maskHeight && ((s = t.maskHeight), (i = s * e));
          return {
            width: i,
            height: s,
            top: (t.maskHeight - s) / 2,
            left: (t.maskWidth - i) / 2,
          };
        })(
          ((s = t),
          (i = e).css({ height: "", left: "", top: "", width: "" }),
          {
            ratio: i.width() / i.height(),
            maskWidth: s.width(),
            maskHeight: s.outerHeight(!0),
          })
        );
      !(function (t, e) {
        t.css({ height: e.height, left: e.left, top: e.top, width: e.width });
      })(e, n);
    });
  });
}
function initIsotopeFilter() {
  jQuery(".isotope-filter").each(function () {
    var t = jQuery(this),
      e = t.find(".filter-list a"),
      i = t.find(".show-all"),
      s = t.find(".items"),
      n = s.children();
    s.isotope({ itemSelector: ".box" }),
      jQuery.support.opacity ||
        s.isotope({ animationOptions: { duration: 0 } }),
      n.each(function () {
        var t = this.getAttribute("title");
        this.removeAttribute("title"), this.setAttribute("rel", t);
      }),
      e.click(function (t) {
        var e = jQuery(this),
          i = e.attr("rel");
        t.preventDefault(), o(e), s.isotope({ filter: '[rel="' + i + '"]' });
      }),
      i.click(function (t) {
        t.preventDefault(), o(i), s.isotope({ filter: "[rel]" });
      });
    var o = function (t) {
      e.add(i).removeClass("active"), t.addClass("active");
    };
  });
}
!(function (t, e) {
  var i,
    s,
    n,
    o = t(window),
    a =
      "onwheel" in document || document.documentMode >= 9
        ? "wheel"
        : "mousewheel DOMMouseScroll";
  function r(e, o, r) {
    var h;
    document.body &&
      ((o = "number" == typeof o ? { duration: o } : o || {}),
      (i = i || t("html, body")),
      (h = o.container || i),
      "number" == typeof e && (e = { top: e }),
      s && n && s.off(a, n),
      o.wheelBehavior &&
        "none" !== o.wheelBehavior &&
        ((n = function (t) {
          "stop" === o.wheelBehavior
            ? (h.off(a, n), h.stop())
            : "ignore" === o.wheelBehavior && t.preventDefault();
        }),
        (s = h.on(a, n))),
      h
        .stop()
        .animate(
          { scrollLeft: e.left, scrollTop: e.top },
          o.duration,
          function () {
            n && h.off(a, n), t.isFunction(r) && r();
          }
        ));
  }
  function h(e) {
    (this.options = t.extend(
      {
        anchorLinks: 'a[href^="#"]',
        container: null,
        extraOffset: null,
        activeClasses: null,
        easing: "swing",
        animMode: "duration",
        animDuration: 800,
        animSpeed: 1500,
        anchorActiveClass: "anchor-active",
        sectionActiveClass: "section-active",
        wheelBehavior: "stop",
        useNativeAnchorScrolling: !1,
      },
      e
    )),
      this.init();
  }
  (h.prototype = {
    init: function () {
      this.initStructure(), this.attachEvents();
    },
    initStructure: function () {
      (this.container = this.options.container
        ? t(this.options.container)
        : t("html,body")),
        (this.scrollContainer = this.options.container ? this.container : o),
        (this.anchorLinks = t(this.options.anchorLinks));
    },
    getAnchorTarget: function (e) {
      var i = t(e).attr("href");
      return t(i.length > 1 ? i : "html");
    },
    getTargetOffset: function (t) {
      var e = t.offset().top;
      return (
        this.options.container &&
          (e -= this.container.offset().top - this.container.prop("scrollTop")),
        "number" == typeof this.options.extraOffset
          ? (e -= this.options.extraOffset)
          : "function" == typeof this.options.extraOffset &&
            (e -= this.options.extraOffset(t)),
        { top: e }
      );
    },
    attachEvents: function () {
      var e = this;
      this.options.activeClasses &&
        ((this.anchorData = []),
        this.anchorLinks.each(function () {
          var i,
            s = jQuery(this),
            n = e.getAnchorTarget(s);
          t.each(e.anchorData, function (t, e) {
            e.block[0] === n[0] && (i = e);
          }),
            i
              ? (i.link = i.link.add(s))
              : e.anchorData.push({ link: s, block: n });
        }),
        (this.resizeHandler = function () {
          e.recalculateOffsets();
        }),
        (this.scrollHandler = function () {
          e.refreshActiveClass();
        }),
        this.recalculateOffsets(),
        this.scrollContainer.on("scroll", this.scrollHandler),
        o.on("resize", this.resizeHandler)),
        (this.clickHandler = function (t) {
          e.onClick(t);
        }),
        this.options.useNativeAnchorScrolling ||
          this.anchorLinks.on("click", this.clickHandler);
    },
    recalculateOffsets: function () {
      var e = this;
      t.each(this.anchorData, function (t, i) {
        (i.offset = e.getTargetOffset(i.block)),
          (i.height = i.block.outerHeight());
      }),
        this.refreshActiveClass();
    },
    refreshActiveClass: function () {
      var e = this,
        i = !1,
        s = this.container.prop("scrollHeight"),
        n = this.scrollContainer.height(),
        a = this.options.container
          ? this.container.prop("scrollTop")
          : o.scrollTop();
      function r(t, i, s) {
        t.toggleClass(e.options.anchorActiveClass, s),
          i.toggleClass(e.options.sectionActiveClass, s);
      }
      this.options.customScrollHandler
        ? this.options.customScrollHandler.call(this, a, this.anchorData)
        : (this.anchorData.sort(function (t, e) {
            return t.offset.top - e.offset.top;
          }),
          t.each(this.anchorData, function (t) {
            var o = e.anchorData.length - t - 1,
              h = e.anchorData[o],
              l =
                "parent" === e.options.activeClasses ? h.link.parent() : h.link;
            a >= s - n
              ? o === e.anchorData.length - 1
                ? r(l, h.block, !0)
                : r(l, h.block, !1)
              : !i && (a >= h.offset.top - 1 || 0 === o)
              ? ((i = !0), r(l, h.block, !0))
              : r(l, h.block, !1);
          }));
    },
    calculateScrollDuration: function (t) {
      return "speed" === this.options.animMode
        ? (Math.abs(this.scrollContainer.scrollTop() - t.top) /
            this.options.animSpeed) *
            1e3
        : this.options.animDuration;
    },
    onClick: function (t) {
      var e = this.getAnchorTarget(t.currentTarget),
        i = this.getTargetOffset(e);
      t.preventDefault(),
        r(i, {
          container: this.container,
          wheelBehavior: this.options.wheelBehavior,
          duration: this.calculateScrollDuration(i),
        });
    },
    destroy: function () {
      this.options.activeClasses &&
        (o.off("resize", this.resizeHandler),
        this.scrollContainer.off("scroll", this.scrollHandler)),
        this.anchorLinks.off("click", this.clickHandler);
    },
  }),
    t.extend(h, {
      scrollTo: function (t, e, i) {
        r(t, e, i);
      },
    }),
    (e.SmoothScroll = h);
})(jQuery, this),
  (function (t) {
    function e(e) {
      (this.options = t.extend(
        {
          mask: "div.mask",
          slider: ">*",
          slides: ">*",
          activeClass: "active",
          disabledClass: "disabled",
          btnPrev: "a.btn-prev",
          btnNext: "a.btn-next",
          generatePagination: !1,
          pagerList: "<ul>",
          pagerListItem: '<li><a href="#"></a></li>',
          pagerListItemText: "a",
          pagerLinks: ".pagination li",
          currentNumber: "span.current-num",
          totalNumber: "span.total-num",
          btnPlay: ".btn-play",
          btnPause: ".btn-pause",
          btnPlayPause: ".btn-play-pause",
          galleryReadyClass: "gallery-js-ready",
          autorotationActiveClass: "autorotation-active",
          autorotationDisabledClass: "autorotation-disabled",
          stretchSlideToMask: !1,
          circularRotation: !0,
          disableWhileAnimating: !1,
          autoRotation: !1,
          pauseOnHover: !i,
          maskAutoSize: !1,
          switchTime: 4e3,
          animSpeed: 600,
          event: "click",
          swipeThreshold: 15,
          handleTouch: !0,
          vertical: !1,
          useTranslate3D: !1,
          step: !1,
        },
        e
      )),
        this.init();
    }
    e.prototype = {
      init: function () {
        this.options.holder &&
          (this.findElements(),
          this.attachEvents(),
          this.refreshPosition(),
          this.refreshState(!0),
          this.resumeRotation(),
          this.makeCallback("onInit", this));
      },
      findElements: function () {
        if (
          ((this.fullSizeFunction = this.options.vertical
            ? "outerHeight"
            : "outerWidth"),
          (this.innerSizeFunction = this.options.vertical ? "height" : "width"),
          (this.slideSizeFunction = "outerHeight"),
          (this.maskSizeProperty = "height"),
          (this.animProperty = this.options.vertical
            ? "marginTop"
            : "marginLeft"),
          (this.gallery = t(this.options.holder).addClass(
            this.options.galleryReadyClass
          )),
          (this.mask = this.gallery.find(this.options.mask)),
          (this.slider = this.mask.find(this.options.slider)),
          (this.slides = this.slider.find(this.options.slides)),
          (this.btnPrev = this.gallery.find(this.options.btnPrev)),
          (this.btnNext = this.gallery.find(this.options.btnNext)),
          (this.currentStep = 0),
          (this.stepsCount = 0),
          !1 === this.options.step)
        ) {
          var e = this.slides.filter("." + this.options.activeClass);
          e.length && (this.currentStep = this.slides.index(e));
        }
        this.calculateOffsets(),
          "string" == typeof this.options.generatePagination
            ? ((this.pagerLinks = t()), this.buildPagination())
            : ((this.pagerLinks = this.gallery.find(this.options.pagerLinks)),
              this.attachPaginationEvents()),
          (this.btnPlay = this.gallery.find(this.options.btnPlay)),
          (this.btnPause = this.gallery.find(this.options.btnPause)),
          (this.btnPlayPause = this.gallery.find(this.options.btnPlayPause)),
          (this.curNum = this.gallery.find(this.options.currentNumber)),
          (this.allNum = this.gallery.find(this.options.totalNumber));
      },
      attachEvents: function () {
        var e = this;
        this.bindHandlers(["onWindowResize"]),
          t(window).bind("load resize orientationchange", this.onWindowResize),
          this.btnPrev.length &&
            ((this.prevSlideHandler = function (t) {
              t.preventDefault(), e.prevSlide();
            }),
            this.btnPrev.bind(this.options.event, this.prevSlideHandler)),
          this.btnNext.length &&
            ((this.nextSlideHandler = function (t) {
              t.preventDefault(), e.nextSlide();
            }),
            this.btnNext.bind(this.options.event, this.nextSlideHandler)),
          this.options.pauseOnHover &&
            !i &&
            ((this.hoverHandler = function () {
              e.options.autoRotation &&
                ((e.galleryHover = !0), e.pauseRotation());
            }),
            (this.leaveHandler = function () {
              e.options.autoRotation &&
                ((e.galleryHover = !1), e.resumeRotation());
            }),
            this.gallery.bind({
              mouseenter: this.hoverHandler,
              mouseleave: this.leaveHandler,
            })),
          this.btnPlay.length &&
            ((this.btnPlayHandler = function (t) {
              t.preventDefault(), e.startRotation();
            }),
            this.btnPlay.bind(this.options.event, this.btnPlayHandler)),
          this.btnPause.length &&
            ((this.btnPauseHandler = function (t) {
              t.preventDefault(), e.stopRotation();
            }),
            this.btnPause.bind(this.options.event, this.btnPauseHandler)),
          this.btnPlayPause.length &&
            ((this.btnPlayPauseHandler = function (t) {
              t.preventDefault(),
                e.gallery.hasClass(e.options.autorotationActiveClass)
                  ? e.stopRotation()
                  : e.startRotation();
            }),
            this.btnPlayPause.bind(
              this.options.event,
              this.btnPlayPauseHandler
            )),
          i &&
            this.options.useTranslate3D &&
            this.slider.css({
              "-webkit-transform": "translate3d(0px, 0px, 0px)",
            }),
          i &&
            this.options.handleTouch &&
            window.Hammer &&
            this.mask.length &&
            ((this.swipeHandler = new Hammer.Manager(this.mask[0])),
            this.swipeHandler.add(
              new Hammer.Pan({
                direction: e.options.vertical
                  ? Hammer.DIRECTION_VERTICAL
                  : Hammer.DIRECTION_HORIZONTAL,
                threshold: e.options.swipeThreshold,
              })
            ),
            this.swipeHandler
              .on("panstart", function () {
                e.galleryAnimating
                  ? e.swipeHandler.stop()
                  : (e.pauseRotation(),
                    (e.originalOffset = parseFloat(
                      e.slider.css(e.animProperty)
                    )));
              })
              .on("panmove", function (t) {
                var i =
                  e.originalOffset +
                  t[e.options.vertical ? "deltaY" : "deltaX"];
                (i = Math.max(Math.min(0, i), e.maxOffset)),
                  e.slider.css(e.animProperty, i);
              })
              .on("panend", function (t) {
                e.resumeRotation(),
                  t.distance > e.options.swipeThreshold
                    ? t.offsetDirection === Hammer.DIRECTION_RIGHT ||
                      t.offsetDirection === Hammer.DIRECTION_DOWN
                      ? e.nextSlide()
                      : e.prevSlide()
                    : e.switchSlide();
              }));
      },
      onWindowResize: function () {
        this.galleryAnimating
          ? (this.resizeQueue = !0)
          : (this.calculateOffsets(),
            this.refreshPosition(),
            this.buildPagination(),
            this.refreshState(),
            (this.resizeQueue = !1));
      },
      refreshPosition: function () {
        (this.currentStep = Math.min(this.currentStep, this.stepsCount - 1)),
          (this.tmpProps = {}),
          (this.tmpProps[this.animProperty] = this.getStepOffset()),
          this.slider.stop().css(this.tmpProps);
      },
      calculateOffsets: function () {
        var e,
          i,
          s = this;
        if (this.options.stretchSlideToMask) {
          var n = {};
          (n[this.innerSizeFunction] = this.mask[this.innerSizeFunction]()),
            this.slides.css(n);
        }
        if (
          ((this.maskSize = this.mask[this.innerSizeFunction]()),
          (this.sumSize = this.getSumSize()),
          (this.maxOffset = this.maskSize - this.sumSize),
          this.options.vertical && this.options.maskAutoSize)
        ) {
          (this.options.step = 1),
            (this.stepsCount = this.slides.length),
            (this.stepOffsets = [0]),
            (e = 0);
          for (var o = 0; o < this.slides.length; o++)
            (e -= t(this.slides[o])[this.fullSizeFunction](!0)),
              this.stepOffsets.push(e);
          this.maxOffset = e;
        } else if (
          "number" == typeof this.options.step &&
          this.options.step > 0
        )
          for (
            this.slideDimensions = [],
              this.slides.each(
                t.proxy(function (e, i) {
                  s.slideDimensions.push(t(i)[s.fullSizeFunction](!0));
                }, this)
              ),
              this.stepOffsets = [0],
              this.stepsCount = 1,
              e = i = 0;
            e > this.maxOffset;

          )
            (e -= this.getSlideSize(i, i + this.options.step)),
              (i += this.options.step),
              this.stepOffsets.push(Math.max(e, this.maxOffset)),
              this.stepsCount++;
        else
          for (
            this.stepSize = this.maskSize, this.stepsCount = 1, e = 0;
            e > this.maxOffset;

          )
            (e -= this.stepSize), this.stepsCount++;
      },
      getSumSize: function () {
        var e = 0;
        return (
          this.slides.each(
            t.proxy(function (i, s) {
              e += t(s)[this.fullSizeFunction](!0);
            }, this)
          ),
          this.slider.css(this.innerSizeFunction, e),
          e
        );
      },
      getStepOffset: function (t) {
        return (
          (t = t || this.currentStep),
          "number" == typeof this.options.step
            ? this.stepOffsets[this.currentStep]
            : Math.min(
                0,
                Math.max(-this.currentStep * this.stepSize, this.maxOffset)
              )
        );
      },
      getSlideSize: function (t, e) {
        for (
          var i = 0, s = t;
          s < Math.min(e, this.slideDimensions.length);
          s++
        )
          i += this.slideDimensions[s];
        return i;
      },
      buildPagination: function () {
        if (
          "string" == typeof this.options.generatePagination &&
          (this.pagerHolder ||
            (this.pagerHolder = this.gallery.find(
              this.options.generatePagination
            )),
          this.pagerHolder.length && this.oldStepsCount != this.stepsCount)
        ) {
          (this.oldStepsCount = this.stepsCount),
            this.pagerHolder.empty(),
            (this.pagerList = t(this.options.pagerList).appendTo(
              this.pagerHolder
            ));
          for (var e = 0; e < this.stepsCount; e++)
            t(this.options.pagerListItem)
              .appendTo(this.pagerList)
              .find(this.options.pagerListItemText)
              .text(e + 1);
          (this.pagerLinks = this.pagerList.children()),
            this.attachPaginationEvents();
        }
      },
      attachPaginationEvents: function () {
        var t = this;
        (this.pagerLinksHandler = function (e) {
          e.preventDefault(), t.numSlide(t.pagerLinks.index(e.currentTarget));
        }),
          this.pagerLinks.bind(this.options.event, this.pagerLinksHandler);
      },
      prevSlide: function () {
        (this.options.disableWhileAnimating && this.galleryAnimating) ||
          (this.currentStep > 0
            ? (this.currentStep--, this.switchSlide())
            : this.options.circularRotation &&
              ((this.currentStep = this.stepsCount - 1), this.switchSlide()));
      },
      nextSlide: function (t) {
        (this.options.disableWhileAnimating && this.galleryAnimating) ||
          (this.currentStep < this.stepsCount - 1
            ? (this.currentStep++, this.switchSlide())
            : (this.options.circularRotation || !0 === t) &&
              ((this.currentStep = 0), this.switchSlide()));
      },
      numSlide: function (t) {
        this.currentStep != t && ((this.currentStep = t), this.switchSlide());
      },
      switchSlide: function () {
        var t = this;
        (this.galleryAnimating = !0),
          (this.tmpProps = {}),
          (this.tmpProps[this.animProperty] = this.getStepOffset()),
          this.slider.stop().animate(this.tmpProps, {
            duration: this.options.animSpeed,
            complete: function () {
              (t.galleryAnimating = !1),
                t.resizeQueue && t.onWindowResize(),
                t.makeCallback("onChange", t),
                t.autoRotate();
            },
          }),
          this.refreshState(),
          this.makeCallback("onBeforeChange", this);
      },
      refreshState: function (t) {
        (1 !== this.options.step && this.stepsCount !== this.slides.length) ||
          this.slides
            .removeClass(this.options.activeClass)
            .eq(this.currentStep)
            .addClass(this.options.activeClass),
          this.pagerLinks
            .removeClass(this.options.activeClass)
            .eq(this.currentStep)
            .addClass(this.options.activeClass),
          this.curNum.html(this.currentStep + 1),
          this.allNum.html(this.stepsCount),
          this.options.maskAutoSize &&
            "number" == typeof this.options.step &&
            ((this.tmpProps = {}),
            (this.tmpProps[this.maskSizeProperty] = this.slides
              .eq(Math.min(this.currentStep, this.slides.length - 1))
              [this.slideSizeFunction](!0)),
            this.mask.stop()[t ? "css" : "animate"](this.tmpProps)),
          this.options.circularRotation ||
            (this.btnPrev
              .add(this.btnNext)
              .removeClass(this.options.disabledClass),
            0 === this.currentStep &&
              this.btnPrev.addClass(this.options.disabledClass),
            this.currentStep === this.stepsCount - 1 &&
              this.btnNext.addClass(this.options.disabledClass)),
          this.gallery.toggleClass(
            "not-enough-slides",
            this.sumSize <= this.maskSize
          );
      },
      startRotation: function () {
        (this.options.autoRotation = !0),
          (this.galleryHover = !1),
          (this.autoRotationStopped = !1),
          this.resumeRotation();
      },
      stopRotation: function () {
        (this.galleryHover = !0),
          (this.autoRotationStopped = !0),
          this.pauseRotation();
      },
      pauseRotation: function () {
        this.gallery.addClass(this.options.autorotationDisabledClass),
          this.gallery.removeClass(this.options.autorotationActiveClass),
          clearTimeout(this.timer);
      },
      resumeRotation: function () {
        this.autoRotationStopped ||
          (this.gallery.addClass(this.options.autorotationActiveClass),
          this.gallery.removeClass(this.options.autorotationDisabledClass),
          this.autoRotate());
      },
      autoRotate: function () {
        var t = this;
        clearTimeout(this.timer),
          !this.options.autoRotation ||
          this.galleryHover ||
          this.autoRotationStopped
            ? this.pauseRotation()
            : (this.timer = setTimeout(function () {
                t.nextSlide(!0);
              }, this.options.switchTime));
      },
      bindHandlers: function (e) {
        var i = this;
        t.each(e, function (t, e) {
          var s = i[e];
          i[e] = function () {
            return s.apply(i, arguments);
          };
        });
      },
      makeCallback: function (t) {
        if ("function" == typeof this.options[t]) {
          var e = Array.prototype.slice.call(arguments);
          e.shift(), this.options[t].apply(this, e);
        }
      },
      destroy: function () {
        t(window).unbind("load resize orientationchange", this.onWindowResize),
          this.btnPrev.unbind(this.options.event, this.prevSlideHandler),
          this.btnNext.unbind(this.options.event, this.nextSlideHandler),
          this.pagerLinks.unbind(this.options.event, this.pagerLinksHandler),
          this.gallery.unbind("mouseenter", this.hoverHandler),
          this.gallery.unbind("mouseleave", this.leaveHandler),
          this.stopRotation(),
          this.btnPlay.unbind(this.options.event, this.btnPlayHandler),
          this.btnPause.unbind(this.options.event, this.btnPauseHandler),
          this.btnPlayPause.unbind(
            this.options.event,
            this.btnPlayPauseHandler
          ),
          this.swipeHandler && this.swipeHandler.destroy();
        var e = [
          this.options.galleryReadyClass,
          this.options.autorotationActiveClass,
          this.options.autorotationDisabledClass,
        ];
        this.gallery.removeClass(e.join(" ")),
          this.slider.add(this.slides).removeAttr("style"),
          "string" == typeof this.options.generatePagination &&
            this.pagerHolder.empty();
      },
    };
    var i =
      /Windows Phone/.test(navigator.userAgent) ||
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch);
    t.fn.scrollGallery = function (i) {
      return this.each(function () {
        t(this).data("ScrollGallery", new e(t.extend(i, { holder: this })));
      });
    };
  })(jQuery),
  (function (t) {
    function e(e) {
      (this.options = t.extend(
        {
          slides: "ul.slideset > li",
          activeClass: "active",
          disabledClass: "disabled",
          btnPrev: "a.btn-prev",
          btnNext: "a.btn-next",
          generatePagination: !1,
          pagerList: "<ul>",
          pagerListItem: '<li><a href="#"></a></li>',
          pagerListItemText: "a",
          pagerLinks: ".pagination li",
          currentNumber: "span.current-num",
          totalNumber: "span.total-num",
          btnPlay: ".btn-play",
          btnPause: ".btn-pause",
          btnPlayPause: ".btn-play-pause",
          galleryReadyClass: "gallery-js-ready",
          autorotationActiveClass: "autorotation-active",
          autorotationDisabledClass: "autorotation-disabled",
          autorotationStopAfterClick: !1,
          circularRotation: !0,
          switchSimultaneously: !0,
          disableWhileAnimating: !1,
          disableFadeIE: !1,
          autoRotation: !1,
          pauseOnHover: !0,
          autoHeight: !1,
          useSwipe: !1,
          swipeThreshold: 15,
          switchTime: 4e3,
          animSpeed: 600,
          event: "click",
        },
        e
      )),
        this.init();
    }
    e.prototype = {
      init: function () {
        this.options.holder &&
          (this.findElements(),
          this.attachEvents(),
          this.refreshState(!0),
          this.autoRotate(),
          this.makeCallback("onInit", this));
      },
      findElements: function () {
        if (
          ((this.gallery = t(this.options.holder).addClass(
            this.options.galleryReadyClass
          )),
          (this.slides = this.gallery.find(this.options.slides)),
          (this.slidesHolder = this.slides.eq(0).parent()),
          (this.stepsCount = this.slides.length),
          (this.btnPrev = this.gallery.find(this.options.btnPrev)),
          (this.btnNext = this.gallery.find(this.options.btnNext)),
          (this.currentIndex = 0),
          this.options.disableFadeIE &&
            !t.support.opacity &&
            (this.options.animSpeed = 0),
          "string" == typeof this.options.generatePagination)
        ) {
          (this.pagerHolder = this.gallery
            .find(this.options.generatePagination)
            .empty()),
            (this.pagerList = t(this.options.pagerList).appendTo(
              this.pagerHolder
            ));
          for (var e = 0; e < this.stepsCount; e++)
            t(this.options.pagerListItem)
              .appendTo(this.pagerList)
              .find(this.options.pagerListItemText)
              .text(e + 1);
          this.pagerLinks = this.pagerList.children();
        } else this.pagerLinks = this.gallery.find(this.options.pagerLinks);
        var i = this.slides.filter("." + this.options.activeClass);
        i.length && (this.currentIndex = this.slides.index(i)),
          (this.prevIndex = this.currentIndex),
          (this.btnPlay = this.gallery.find(this.options.btnPlay)),
          (this.btnPause = this.gallery.find(this.options.btnPause)),
          (this.btnPlayPause = this.gallery.find(this.options.btnPlayPause)),
          (this.curNum = this.gallery.find(this.options.currentNumber)),
          (this.allNum = this.gallery.find(this.options.totalNumber)),
          this.slides
            .css({ display: "block", opacity: 0 })
            .eq(this.currentIndex)
            .css({ opacity: "" });
      },
      attachEvents: function () {
        var e = this;
        (this.resizeHandler = function () {
          e.onWindowResize();
        }),
          t(window).bind("load resize orientationchange", this.resizeHandler),
          this.btnPrev.length &&
            ((this.btnPrevHandler = function (t) {
              t.preventDefault(),
                e.prevSlide(),
                e.options.autorotationStopAfterClick && e.stopRotation();
            }),
            this.btnPrev.bind(this.options.event, this.btnPrevHandler)),
          this.btnNext.length &&
            ((this.btnNextHandler = function (t) {
              t.preventDefault(),
                e.nextSlide(),
                e.options.autorotationStopAfterClick && e.stopRotation();
            }),
            this.btnNext.bind(this.options.event, this.btnNextHandler)),
          this.pagerLinks.length &&
            ((this.pagerLinksHandler = function (t) {
              t.preventDefault(),
                e.numSlide(e.pagerLinks.index(t.currentTarget)),
                e.options.autorotationStopAfterClick && e.stopRotation();
            }),
            this.pagerLinks.bind(e.options.event, this.pagerLinksHandler)),
          this.btnPlay.length &&
            ((this.btnPlayHandler = function (t) {
              t.preventDefault(), e.startRotation();
            }),
            this.btnPlay.bind(this.options.event, this.btnPlayHandler)),
          this.btnPause.length &&
            ((this.btnPauseHandler = function (t) {
              t.preventDefault(), e.stopRotation();
            }),
            this.btnPause.bind(this.options.event, this.btnPauseHandler)),
          this.btnPlayPause.length &&
            ((this.btnPlayPauseHandler = function (t) {
              t.preventDefault(),
                e.gallery.hasClass(e.options.autorotationActiveClass)
                  ? e.stopRotation()
                  : e.startRotation();
            }),
            this.btnPlayPause.bind(
              this.options.event,
              this.btnPlayPauseHandler
            )),
          this.options.useSwipe &&
            window.Hammer &&
            i &&
            ((this.swipeHandler = new Hammer.Manager(this.gallery[0])),
            this.swipeHandler.add(
              new Hammer.Swipe({
                direction: Hammer.DIRECTION_HORIZONTAL,
                threshold: e.options.swipeThreshold,
              })
            ),
            this.swipeHandler
              .on("swipeleft", function () {
                e.nextSlide();
              })
              .on("swiperight", function () {
                e.prevSlide();
              })),
          this.options.pauseOnHover &&
            ((this.hoverHandler = function () {
              e.options.autoRotation &&
                ((e.galleryHover = !0), e.pauseRotation());
            }),
            (this.leaveHandler = function () {
              e.options.autoRotation &&
                ((e.galleryHover = !1), e.resumeRotation());
            }),
            this.gallery.bind({
              mouseenter: this.hoverHandler,
              mouseleave: this.leaveHandler,
            }));
      },
      onWindowResize: function () {
        this.options.autoHeight &&
          this.slidesHolder.css({
            height: this.slides.eq(this.currentIndex).outerHeight(!0),
          });
      },
      prevSlide: function () {
        (this.options.disableWhileAnimating && this.galleryAnimating) ||
          ((this.prevIndex = this.currentIndex),
          this.currentIndex > 0
            ? (this.currentIndex--, this.switchSlide())
            : this.options.circularRotation &&
              ((this.currentIndex = this.stepsCount - 1), this.switchSlide()));
      },
      nextSlide: function (t) {
        (this.options.disableWhileAnimating && this.galleryAnimating) ||
          ((this.prevIndex = this.currentIndex),
          this.currentIndex < this.stepsCount - 1
            ? (this.currentIndex++, this.switchSlide())
            : (this.options.circularRotation || !0 === t) &&
              ((this.currentIndex = 0), this.switchSlide()));
      },
      numSlide: function (t) {
        this.currentIndex != t &&
          ((this.prevIndex = this.currentIndex),
          (this.currentIndex = t),
          this.switchSlide());
      },
      switchSlide: function () {
        var t = this;
        this.slides.length > 1 &&
          ((this.galleryAnimating = !0),
          this.options.animSpeed
            ? this.slides
                .eq(this.prevIndex)
                .stop()
                .animate({ opacity: 0 }, { duration: this.options.animSpeed })
            : this.slides.eq(this.prevIndex).css({ opacity: 0 }),
          (this.switchNext = function () {
            t.options.animSpeed
              ? t.slides
                  .eq(t.currentIndex)
                  .stop()
                  .animate({ opacity: 1 }, { duration: t.options.animSpeed })
              : t.slides.eq(t.currentIndex).css({ opacity: "" }),
              clearTimeout(this.nextTimer),
              (this.nextTimer = setTimeout(function () {
                t.slides.eq(t.currentIndex).css({ opacity: "" }),
                  (t.galleryAnimating = !1),
                  t.autoRotate(),
                  t.makeCallback("onChange", t);
              }, t.options.animSpeed));
          }),
          this.options.switchSimultaneously
            ? t.switchNext()
            : (clearTimeout(this.switchTimer),
              (this.switchTimer = setTimeout(function () {
                t.switchNext();
              }, this.options.animSpeed))),
          this.refreshState(),
          this.makeCallback("onBeforeChange", this));
      },
      refreshState: function (t) {
        this.slides
          .removeClass(this.options.activeClass)
          .eq(this.currentIndex)
          .addClass(this.options.activeClass),
          this.pagerLinks
            .removeClass(this.options.activeClass)
            .eq(this.currentIndex)
            .addClass(this.options.activeClass),
          this.curNum.html(this.currentIndex + 1),
          this.allNum.html(this.stepsCount),
          this.options.autoHeight &&
            (t
              ? this.slidesHolder.css({
                  height: this.slides.eq(this.currentIndex).outerHeight(!0),
                })
              : this.slidesHolder.stop().animate(
                  {
                    height: this.slides.eq(this.currentIndex).outerHeight(!0),
                  },
                  { duration: this.options.animSpeed }
                )),
          this.options.circularRotation ||
            (this.btnPrev
              .add(this.btnNext)
              .removeClass(this.options.disabledClass),
            0 === this.currentIndex &&
              this.btnPrev.addClass(this.options.disabledClass),
            this.currentIndex === this.stepsCount - 1 &&
              this.btnNext.addClass(this.options.disabledClass)),
          this.gallery.toggleClass("not-enough-slides", 1 === this.stepsCount);
      },
      startRotation: function () {
        (this.options.autoRotation = !0),
          (this.galleryHover = !1),
          (this.autoRotationStopped = !1),
          this.resumeRotation();
      },
      stopRotation: function () {
        (this.galleryHover = !0),
          (this.autoRotationStopped = !0),
          this.pauseRotation();
      },
      pauseRotation: function () {
        this.gallery.addClass(this.options.autorotationDisabledClass),
          this.gallery.removeClass(this.options.autorotationActiveClass),
          clearTimeout(this.timer);
      },
      resumeRotation: function () {
        this.autoRotationStopped ||
          (this.gallery.addClass(this.options.autorotationActiveClass),
          this.gallery.removeClass(this.options.autorotationDisabledClass),
          this.autoRotate());
      },
      autoRotate: function () {
        var t = this;
        clearTimeout(this.timer),
          !this.options.autoRotation ||
          this.galleryHover ||
          this.autoRotationStopped
            ? this.pauseRotation()
            : (this.gallery.addClass(this.options.autorotationActiveClass),
              (this.timer = setTimeout(function () {
                t.nextSlide(!0);
              }, this.options.switchTime)));
      },
      makeCallback: function (t) {
        if ("function" == typeof this.options[t]) {
          var e = Array.prototype.slice.call(arguments);
          e.shift(), this.options[t].apply(this, e);
        }
      },
      destroy: function () {
        this.btnPrev.unbind(this.options.event, this.btnPrevHandler),
          this.btnNext.unbind(this.options.event, this.btnNextHandler),
          this.pagerLinks.unbind(this.options.event, this.pagerLinksHandler),
          t(window).unbind("load resize orientationchange", this.resizeHandler),
          this.stopRotation(),
          this.btnPlay.unbind(this.options.event, this.btnPlayHandler),
          this.btnPause.unbind(this.options.event, this.btnPauseHandler),
          this.btnPlayPause.unbind(
            this.options.event,
            this.btnPlayPauseHandler
          ),
          this.gallery.unbind("mouseenter", this.hoverHandler),
          this.gallery.unbind("mouseleave", this.leaveHandler),
          this.swipeHandler && this.swipeHandler.destroy(),
          "string" == typeof this.options.generatePagination &&
            this.pagerHolder.empty();
        var e = [
          this.options.galleryReadyClass,
          this.options.autorotationActiveClass,
          this.options.autorotationDisabledClass,
        ];
        this.gallery.removeClass(e.join(" ")),
          this.slidesHolder.add(this.slides).removeAttr("style");
      },
    };
    var i =
      /Windows Phone/.test(navigator.userAgent) ||
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch);
    t.fn.fadeGallery = function (i) {
      return this.each(function () {
        t(this).data("FadeGallery", new e(t.extend(i, { holder: this })));
      });
    };
  })(jQuery),
  (function (t) {
    function e(e) {
      (this.options = t.extend(
        {
          container: null,
          hideOnClickOutside: !1,
          menuActiveClass: "nav-active",
          menuOpener: ".nav-opener",
          menuDrop: ".nav-drop",
          toggleEvent: "click",
          outsideClickEvent: "click touchstart pointerdown MSPointerDown",
        },
        e
      )),
        this.initStructure(),
        this.attachEvents();
    }
    e.prototype = {
      initStructure: function () {
        (this.page = outer),
          (this.container = t(this.options.container)),
          (this.opener = this.container.find(this.options.menuOpener)),
          (this.drop = this.container.find(this.options.menuDrop));
      },
      attachEvents: function () {
        var e = this;
        i && (i(), (i = null)),
          (this.outsideClickHandler = function (i) {
            if (e.isOpened()) {
              var s = t(i.target);
              s.closest(e.opener).length ||
                s.closest(e.drop).length ||
                e.hide();
            }
          }),
          (this.openerClickHandler = function (t) {
            t.preventDefault(), e.toggle();
          }),
          this.opener.on(this.options.toggleEvent, this.openerClickHandler);
      },
      isOpened: function () {
        return this.container.hasClass(this.options.menuActiveClass);
      },
      show: function () {
        this.container.addClass(this.options.menuActiveClass),
          this.options.hideOnClickOutside &&
            this.page.on(
              this.options.outsideClickEvent,
              this.outsideClickHandler
            );
      },
      hide: function () {
        this.container.removeClass(this.options.menuActiveClass),
          this.options.hideOnClickOutside &&
            this.page.off(
              this.options.outsideClickEvent,
              this.outsideClickHandler
            );
      },
      toggle: function () {
        this.isOpened() ? this.hide() : this.show();
      },
      destroy: function () {
        this.container.removeClass(this.options.menuActiveClass),
          this.opener.off(this.options.toggleEvent, this.clickHandler),
          this.page.off(
            this.options.outsideClickEvent,
            this.outsideClickHandler
          );
      },
    };
    var i = function () {
      var e,
        i,
        s = t(window),
        n = t("html"),
        o = function () {
          (e = !1), n.removeClass("resize-active");
        };
      s.on("resize orientationchange", function () {
        e || ((e = !0), n.addClass("resize-active")),
          clearTimeout(i),
          (i = setTimeout(o, 500));
      });
    };
    t.fn.mobileNav = function (i) {
      return this.each(function () {
        var s = new e(t.extend({}, i, { container: this }));
        t.data(this, "MobileNav", s);
      });
    };
  })(jQuery),
  (function (t, e, i) {
    var s,
      n,
      o = "[object OperaMini]" == Object.prototype.toString.call(t.operamini),
      a = "placeholder" in e.createElement("input") && !o,
      r = "placeholder" in e.createElement("textarea") && !o,
      h = i.fn,
      l = i.valHooks,
      u = i.propHooks;
    function c(t, e) {
      var s = i(this);
      if (this.value == s.attr("placeholder") && s.hasClass("placeholder"))
        if (s.data("placeholder-password")) {
          if (
            ((s = s
              .hide()
              .next()
              .show()
              .attr("id", s.removeAttr("id").data("placeholder-id"))),
            !0 === t)
          )
            return (s[0].value = e);
          s.focus();
        } else
          (this.value = ""),
            s.removeClass("placeholder"),
            this == p() && this.select();
    }
    function d() {
      var t,
        e,
        s,
        n,
        o = i(this),
        a = this.id;
      if ("" == this.value) {
        if ("password" == this.type) {
          if (!o.data("placeholder-textinput")) {
            try {
              t = o.clone().attr({ type: "text" });
            } catch (o) {
              t = i("<input>").attr(
                i.extend(
                  ((e = this),
                  (s = {}),
                  (n = /^jQuery\d+$/),
                  i.each(e.attributes, function (t, e) {
                    e.specified && !n.test(e.name) && (s[e.name] = e.value);
                  }),
                  s),
                  { type: "text" }
                )
              );
            }
            t
              .removeAttr("name")
              .data({ "placeholder-password": o, "placeholder-id": a })
              .bind("focus.placeholder", c),
              o
                .data({ "placeholder-textinput": t, "placeholder-id": a })
                .before(t);
          }
          o = o.removeAttr("id").hide().prev().attr("id", a).show();
        }
        o.addClass("placeholder"), (o[0].value = o.attr("placeholder"));
      } else o.removeClass("placeholder");
    }
    function p() {
      try {
        return e.activeElement;
      } catch (t) {}
    }
    a && r
      ? ((n = h.placeholder =
          function () {
            return this;
          }).input = n.textarea =
          !0)
      : (((n = h.placeholder =
          function () {
            return (
              this.filter((a ? "textarea" : ":input") + "[placeholder]")
                .not(".placeholder")
                .bind({ "focus.placeholder": c, "blur.placeholder": d })
                .data("placeholder-enabled", !0)
                .trigger("blur.placeholder"),
              this
            );
          }).input = a),
        (n.textarea = r),
        (s = {
          get: function (t) {
            var e = i(t),
              s = e.data("placeholder-password");
            return s
              ? s[0].value
              : e.data("placeholder-enabled") && e.hasClass("placeholder")
              ? ""
              : t.value;
          },
          set: function (t, e) {
            var s = i(t),
              n = s.data("placeholder-password");
            return n
              ? (n[0].value = e)
              : s.data("placeholder-enabled")
              ? ("" == e
                  ? ((t.value = e), t != p() && d.call(t))
                  : (s.hasClass("placeholder") && c.call(t, !0, e)) ||
                    (t.value = e),
                s)
              : (t.value = e);
          },
        }),
        a || ((l.input = s), (u.value = s)),
        r || ((l.textarea = s), (u.value = s)),
        i(function () {
          i(e).delegate("form", "submit.placeholder", function () {
            var t = i(".placeholder", this).each(c);
            setTimeout(function () {
              t.each(d);
            }, 10);
          });
        }),
        i(t).bind("beforeunload.placeholder", function () {
          i(".placeholder").each(function () {
            this.value = "";
          });
        }));
  })(this, document, jQuery),
  (TouchNav.isActiveOn = function (t) {
    return t && t.touchNavActive;
  }),
  (TouchNav.prototype = {
    init: function () {
      "string" == typeof this.options.navBlock
        ? (this.menu = document.getElementById(this.options.navBlock))
        : "object" == typeof this.options.navBlock &&
          (this.menu = this.options.navBlock),
        this.menu && this.addEvents();
    },
    addEvents: function () {
      var t = this,
        e =
          (navigator.pointerEnabled
            ? "pointerdown"
            : navigator.msPointerEnabled && "MSPointerDown") ||
          (this.isTouchDevice && "touchstart");
      this.menuItems = lib.queryElementsBySelector(
        this.options.menuItems,
        this.menu
      );
      for (
        var i = function (i) {
            var s = lib.queryElementsBySelector(t.options.menuDrop, i)[0],
              n = lib.queryElementsBySelector(t.options.menuOpener, i)[0];
            s &&
              n &&
              (t.isTouchDevice || t.isPointerDevice) &&
              (lib.event.add(n, "click", lib.bind(t.clickHandler, t)),
              lib.event.add(n, "mousedown", lib.bind(t.mousedownHandler, t)),
              lib.event.add(n, e, function (e) {
                t.isTouchPointerEvent(e)
                  ? ((t.touchFlag = !0),
                    (t.currentItem = i),
                    (t.currentLink = n),
                    t.pressHandler.apply(t, arguments))
                  : (t.preventCurrentClick = !1);
              })),
              jQuery(i).bind("mouseenter", function () {
                t.touchFlag || ((t.currentItem = i), t.mouseoverHandler());
              }),
              jQuery(i).bind("mouseleave", function () {
                t.touchFlag || ((t.currentItem = i), t.mouseoutHandler());
              }),
              (i.touchNavActive = !0);
          },
          s = 0;
        s < this.menuItems.length;
        s++
      )
        i(t.menuItems[s]);
      (this.isTouchDevice || this.isPointerDevice) &&
        (lib.event.add(
          document.documentElement,
          "mousedown",
          lib.bind(this.clickOutsideHandler, this)
        ),
        lib.event.add(
          document.documentElement,
          e,
          lib.bind(this.clickOutsideHandler, this)
        ));
    },
    mousedownHandler: function (t) {
      this.touchFlag &&
        (t.preventDefault(),
        (this.touchFlag = !1),
        (this.preventCurrentClick = !1));
    },
    mouseoverHandler: function () {
      lib.addClass(this.currentItem, this.options.hoverClass),
        jQuery(this.currentItem).trigger("itemhover");
    },
    mouseoutHandler: function () {
      lib.removeClass(this.currentItem, this.options.hoverClass),
        jQuery(this.currentItem).trigger("itemleave");
    },
    hideActiveDropdown: function () {
      for (var t = 0; t < this.menuItems.length; t++)
        lib.hasClass(this.menuItems[t], this.options.hoverClass) &&
          (lib.removeClass(this.menuItems[t], this.options.hoverClass),
          jQuery(this.menuItems[t]).trigger("itemleave"));
      this.activeParent = null;
    },
    pressHandler: function (t) {
      this.currentItem !== this.activeParent &&
        (this.activeParent &&
        this.currentItem.parentNode === this.activeParent.parentNode
          ? lib.removeClass(this.activeParent, this.options.hoverClass)
          : this.isParent(this.activeParent, this.currentLink) ||
            this.hideActiveDropdown()),
        (this.activeParent = this.currentItem),
        lib.hasClass(this.currentItem, this.options.hoverClass)
          ? (this.preventCurrentClick = !1)
          : (t.preventDefault(),
            (this.preventCurrentClick = !0),
            lib.addClass(this.currentItem, this.options.hoverClass),
            jQuery(this.currentItem).trigger("itemhover"));
    },
    clickHandler: function (t) {
      this.preventCurrentClick && t.preventDefault();
    },
    clickOutsideHandler: function (t) {
      var e = t.changedTouches ? t.changedTouches[0] : t;
      this.activeParent &&
        !this.isParent(this.menu, e.target) &&
        (this.hideActiveDropdown(), (this.touchFlag = !1));
    },
    isParent: function (t, e) {
      for (; e.parentNode; ) {
        if (e.parentNode == t) return !0;
        e = e.parentNode;
      }
      return !1;
    },
    isTouchPointerEvent: function (t) {
      return (
        t.type.indexOf("touch") > -1 ||
        (navigator.pointerEnabled && "touch" === t.pointerType) ||
        (navigator.msPointerEnabled && t.pointerType == t.MSPOINTER_TYPE_TOUCH)
      );
    },
    isPointerDevice: !(
      !navigator.pointerEnabled && !navigator.msPointerEnabled
    ),
    isTouchDevice: !!(
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
    ),
  }),
  (lib = {
    hasClass: function (t, e) {
      return (
        !(!t || !t.className) &&
        t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
      );
    },
    addClass: function (t, e) {
      t && !this.hasClass(t, e) && (t.className += " " + e);
    },
    removeClass: function (t, e) {
      t &&
        this.hasClass(t, e) &&
        (t.className = t.className.replace(
          new RegExp("(\\s|^)" + e + "(\\s|$)"),
          " "
        ));
    },
    extend: function (t) {
      for (var e = 1; e < arguments.length; e++)
        for (var i in arguments[e])
          arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
      return t;
    },
    each: function (t, e) {
      var i, s;
      if ("number" == typeof t.length)
        for (i = 0, s = t.length; i < s && !1 !== e.call(t[i], i, t[i]); i++);
      else
        for (i in t)
          if (t.hasOwnProperty(i) && !1 === e.call(t[i], i, t[i])) break;
    },
    event: {
      add: function (t, e, i) {
        t.events ||
          ((t.events = {}),
          (t.handle = function (e) {
            var i = t.events[e.type];
            e = (function (t) {
              return (t = t || window.event).isFixed
                ? t
                : ((t.isFixed = !0),
                  t.target || (t.target = t.srcElement),
                  (t.preventDefault =
                    t.preventDefault ||
                    function () {
                      this.returnValue = !1;
                    }),
                  (t.stopPropagation =
                    t.stopPropagation ||
                    function () {
                      this.cancelBubble = !0;
                    }),
                  t);
            })(e);
            for (var s = 0, n = i.length; s < n; s++)
              i[s] &&
                !1 === i[s].call(t, e) &&
                (e.preventDefault(), e.stopPropagation());
          })),
          t.events[e] ||
            ((t.events[e] = []),
            t.addEventListener
              ? t.addEventListener(e, t.handle, !1)
              : t.attachEvent && t.attachEvent("on" + e, t.handle)),
          t.events[e].push(i);
      },
      remove: function (t, e, i) {
        for (var s = t.events[e], n = s.length - 1; n >= 0; n--)
          s[n] === i && s.splice(n, 1);
        s.length ||
          (delete t.events[e],
          t.removeEventListener
            ? t.removeEventListener(e, t.handle, !1)
            : t.detachEvent && t.detachEvent("on" + e, t.handle));
      },
    },
    queryElementsBySelector: function (t, e) {
      if (((e = e || document), !t)) return [];
      if (">*" === t) return e.children;
      if ("function" == typeof document.querySelectorAll)
        return e.querySelectorAll(t);
      for (var i = t.split(","), s = [], n = 0; n < i.length; n++) {
        for (
          var o = [e || document],
            a = i[n].replace(/^\s+/, "").replace(/\s+$/, "").split(" "),
            r = 0;
          r < a.length;
          r++
        )
          if (
            ((token = a[r].replace(/^\s+/, "").replace(/\s+$/, "")),
            token.indexOf("#") > -1)
          ) {
            var h = (c = token.split("#"))[0],
              l = c[1],
              u = document.getElementById(l);
            if (u && h && u.nodeName.toLowerCase() != h) return [];
            o = u ? [u] : [];
          } else if (token.indexOf(".") > -1) {
            h = (c = token.split("."))[0] || "*";
            for (var c, d = c[1], p = [], f = 0, g = 0; g < o.length; g++) {
              S =
                "*" == h
                  ? o[g].getElementsByTagName("*")
                  : o[g].getElementsByTagName(h);
              for (var m = 0; m < S.length; m++) p[f++] = S[m];
            }
            o = [];
            for (var v = 0, b = 0; b < p.length; b++)
              p[b].className &&
                p[b].className.match(new RegExp("(\\s|^)" + d + "(\\s|$)")) &&
                (o[v++] = p[b]);
          } else if (
            token.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/)
          ) {
            h = RegExp.$1 || "*";
            var y = RegExp.$2,
              C = RegExp.$3,
              w = RegExp.$4;
            "for" == y.toLowerCase() &&
              this.browser.msie &&
              this.browser.version < 8 &&
              (y = "htmlFor");
            for (p = [], f = 0, g = 0; g < o.length; g++) {
              S =
                "*" == h
                  ? o[g].getElementsByTagName("*")
                  : o[g].getElementsByTagName(h);
              for (m = 0; S[m]; m++) p[f++] = S[m];
            }
            o = [];
            var H;
            v = 0;
            switch (C) {
              case "=":
                H = function (t) {
                  return t.getAttribute(y) == w;
                };
                break;
              case "~":
                H = function (t) {
                  return t
                    .getAttribute(y)
                    .match(new RegExp("(\\s|^)" + w + "(\\s|$)"));
                };
                break;
              case "|":
                H = function (t) {
                  return t.getAttribute(y).match(new RegExp("^" + w + "-?"));
                };
                break;
              case "^":
                H = function (t) {
                  return 0 == t.getAttribute(y).indexOf(w);
                };
                break;
              case "$":
                H = function (t) {
                  return (
                    t.getAttribute(y).lastIndexOf(w) ==
                    t.getAttribute(y).length - w.length
                  );
                };
                break;
              case "*":
                H = function (t) {
                  return t.getAttribute(y).indexOf(w) > -1;
                };
                break;
              default:
                H = function (t) {
                  return t.getAttribute(y);
                };
            }
            o = [];
            for (v = 0, b = 0; b < p.length; b++) H(p[b]) && (o[v++] = p[b]);
          } else {
            h = token;
            for (p = [], f = 0, g = 0; g < o.length; g++) {
              var S = o[g].getElementsByTagName(h);
              for (m = 0; m < S.length; m++) p[f++] = S[m];
            }
            o = p;
          }
        s = [].concat(s, o);
      }
      return s;
    },
    trim: function (t) {
      return t.replace(/^\s+/, "").replace(/\s+$/, "");
    },
    bind: function (t, e, i) {
      return function () {
        return t.apply(e, void 0 !== i ? [i] : arguments);
      };
    },
  }),
  (function (t) {
    function e(e) {
      (this.options = t.extend(
        {
          parent: ".bg-frame",
          image: "img",
          parallaxOffset: 100,
          fallbackFunc: function () {},
        },
        e
      )),
        this.init();
    }
    e.prototype = {
      init: function () {
        if (this.options.holder) {
          if ("function" == typeof this.options.fallbackFunc && (s || i))
            return void this.options.fallbackFunc();
          this.getStructure(), this.attachEvents();
        }
      },
      getStructure: function () {
        (this.holder = t(this.options.holder)),
          (this.parent = this.holder.find(this.options.parent)),
          (this.holderHeight = this.holder.height()),
          (this.holderOffset = this.holder.offset().top),
          (this.image = this.parent
            .find(this.options.image)
            .eq(0)
            .css({ visibility: "hidden" })),
          (this.imageRatio =
            this.image.attr("width") / this.image.attr("height") ||
            this.image.width() / this.image.height()),
          this.parent.css({
            backgroundImage: "url(" + this.image.attr("src") + ")",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }),
          (this.win = t(window)),
          (this.winHeight = this.win.height()),
          (this.winWidth = this.win.width()),
          (this.winScroll = this.win.scrollTop()),
          (this.bgHeight = this.winHeight + this.options.parallaxOffset);
      },
      attachEvents: function () {
        var t = this;
        this.bindHandlers(["scrollLayout"]),
          this.bindHandlers(["resizeLayout"]),
          this.win
            .bind("scroll", this.scrollLayout)
            .bind("resize load", this.resizeLayout),
          setTimeout(function () {
            t.resizeLayout(), t.win.trigger("scroll");
          }, 500);
      },
      resizeLayout: function () {
        (this.winHeight = this.win.height()),
          (this.winWidth = this.win.width()),
          (this.holderHeight = this.holder.height()),
          (this.holderOffset = this.holder.offset().top),
          (this.blockHeight = this.winHeight + this.options.parallaxOffset),
          (this.currentTop = Math.max(0, this.blockHeight - this.holderHeight)),
          (this.parallaxRatio =
            this.win.width() / (this.winHeight + this.options.parallaxOffset)),
          (this.ratioState = this.imageRatio <= this.parallaxRatio),
          this.ratioState
            ? ((this.bgWidth = this.winWidth),
              (this.bgHeight = this.bgWidth / this.imageRatio))
            : ((this.bgWidth = "auto"),
              (this.bgHeight = this.winHeight + this.options.parallaxOffset)),
          this.parent.css({
            paddingBottom: this.currentTop,
            backgroundSize:
              "auto" != this.bgWidth
                ? this.bgWidth + "px " + this.bgHeight + "px"
                : this.bgWidth + " " + this.bgHeight + "px",
          }),
          this.scrollLayout();
      },
      scrollLayout: function () {
        if (
          ((this.winScroll = this.win.scrollTop()),
          (this.offsetPercentage = Math.max(
            0,
            Math.min(
              (this.winScroll + this.winHeight - this.holderOffset) /
                (this.winHeight + this.holderHeight),
              1
            )
          ).toFixed(4)),
          this.ratioState)
        )
          var t =
            "50% " +
            (-parseFloat(this.offsetPercentage) * this.options.parallaxOffset -
              (this.bgHeight - this.winHeight) / 2) +
            "px";
        else
          t =
            "50% " +
            -parseFloat(this.offsetPercentage) * this.options.parallaxOffset +
            "px";
        this.parent.css({ backgroundPosition: t });
      },
      bindHandlers: function (e) {
        var i = this;
        t.each(e, function (t, e) {
          var s = i[e];
          i[e] = function () {
            return s.apply(i, arguments);
          };
        });
      },
    };
    var i =
        /MSIE 10.*Touch/.test(navigator.userAgent) ||
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof DocumentTouch),
      s = window.attachEvent && !window.addEventListener;
    t.fn.parallaxBG = function (i) {
      return this.each(function () {
        new e(t.extend(i, { holder: this }));
      });
    };
  })(jQuery);
// slick init
function initSlickCarousel() {
  jQuery(".slick-slider").slick({
    slidesToScroll: 1,
    rows: 0,
    slidesToShow: 4,
    arrows: true,
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  });

  /*jQuery('.products-slider').slick({
		slidesToScroll: 4,
		rows: 0,
		arrows: false,
		dots: true,
		dotsClass: 'slick-dots',
		adaptiveHeight: true
	});*/
}

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/
 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  (e = (function () {
    function e(e, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(e),
        appendDots: i(e),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(e)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(e).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        "undefined" != typeof document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : "undefined" != typeof document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = t++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    }
    var t = 0;
    return e;
  })()),
    (e.prototype.activateADA = function () {
      var i = this;
      i.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : o === !0
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        i.options.adaptiveHeight === !0 &&
        i.options.vertical === !1
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        s.options.rtl === !0 && s.options.vertical === !1 && (e = -e),
        s.transformsEnabled === !1
          ? s.options.vertical === !1
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : s.cssTransitions === !1
          ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    s.options.vertical === !1
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            s.options.vertical === !1
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this,
        o = t.getNavTarget();
      null !== o &&
        "object" == typeof o &&
        o.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      e.options.fade === !1
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (i.options.infinite === !1 &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 === 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      e.options.arrows === !0 &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            e.options.infinite !== !0 &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (e.options.centerMode !== !0 && e.options.swipeToSlide !== !0) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.options.draggable === !0 && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 0)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (r.originalSettings.mobileFirst === !1
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            e === !0 && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || l === !1 || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll !== 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e,
        t,
        o = this;
      if (((e = o.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var s in e) {
          if (i < e[s]) {
            i = t;
            break;
          }
          t = e[s];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        e.options.accessibility === !0 &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          e.options.accessibility === !0 &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        e.options.accessibility === !0 &&
          e.$list.off("keydown.slick", e.keyHandler),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 0 &&
        ((i = e.$slides.children().children()),
        i.removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      var e = this;
      e.shouldClick === !1 &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      t.cssTransitions === !1
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      e.cssTransitions === !1
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick", "*", function (t) {
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              o.is(":focus") &&
              ((e.focussed = !0), e.autoPlay());
          }, 0);
        })
        .on("blur.slick", "*", function (t) {
          i(this);
          e.options.pauseOnFocus && ((e.focussed = !1), e.autoPlay());
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        var i = this;
        return i.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (i.options.infinite === !0)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (i.options.centerMode === !0) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        n.options.infinite === !0
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              n.options.vertical === !0 &&
                n.options.centerMode === !0 &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll !== 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : n.options.centerMode === !0 && n.options.infinite === !0
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : n.options.centerMode === !0 &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          n.options.vertical === !1
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        n.options.variableWidth === !0 &&
          ((o =
            n.slideCount <= n.options.slidesToShow || n.options.infinite === !1
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            n.options.rtl === !0
              ? o[0]
                ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1
                : 0
              : o[0]
              ? o[0].offsetLeft * -1
              : 0),
          n.options.centerMode === !0 &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              n.options.infinite === !1
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              n.options.rtl === !0
                ? o[0]
                  ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1
                  : 0
                : o[0]
                ? o[0].offsetLeft * -1
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        var e = this;
        return e.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        e.options.infinite === !1
          ? (i = e.slideCount)
          : ((t = e.options.slidesToScroll * -1),
            (o = e.options.slidesToScroll * -1),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o,
        s,
        n = this;
      return (
        (s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0),
        (o = n.swipeLeft * -1 + s),
        n.options.swipeToSlide === !0
          ? (n.$slideTrack.find(".slick-slide").each(function (e, s) {
              var r, l, d;
              if (
                ((r = i(s).outerWidth()),
                (l = s.offsetLeft),
                n.options.centerMode !== !0 && (l += r / 2),
                (d = l + r),
                o < d)
              )
                return (t = s), !1;
            }),
            (e = Math.abs(i(t).attr("data-slick-index") - n.currentSlide) || 1))
          : n.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        var t = this;
        t.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        t.options.accessibility === !0 && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              if (
                (i(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + e.instanceUid + t,
                  tabindex: -1,
                }),
                s !== -1)
              ) {
                var n = "slick-slide-control" + e.instanceUid + s;
                i("#" + n).length && i(this).attr({ "aria-describedby": n });
              }
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.options.focusOnChange
          ? e.$slides.eq(s).attr({ tabindex: "0" })
          : e.$slides.eq(s).removeAttr("tabindex");
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        i.options.accessibility === !0 &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      e.options.dots === !0 &&
        e.slideCount > e.options.slidesToShow &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        e.options.accessibility === !0 &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        e.options.dots === !0 &&
          e.options.pauseOnDotsHover === !0 &&
          e.slideCount > e.options.slidesToShow &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        e.options.accessibility === !0 &&
          e.$list.on("keydown.slick", e.keyHandler),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        i.options.dots === !0 &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && e.options.accessibility === !0
          ? e.changeSlide({
              data: { message: e.options.rtl === !0 ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            e.options.accessibility === !0 &&
            e.changeSlide({
              data: { message: e.options.rtl === !0 ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
            n = document.createElement("img");
          (n.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                r.$slider.trigger("lazyLoaded", [r, e, t]);
            });
          }),
            (n.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                r.$slider.trigger("lazyLoadError", [r, e, t]);
            }),
            (n.src = t);
        });
      }
      var t,
        o,
        s,
        n,
        r = this;
      if (
        (r.options.centerMode === !0
          ? r.options.infinite === !0
            ? ((s = r.currentSlide + (r.options.slidesToShow / 2 + 1)),
              (n = s + r.options.slidesToShow + 2))
            : ((s = Math.max(
                0,
                r.currentSlide - (r.options.slidesToShow / 2 + 1)
              )),
              (n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide))
          : ((s = r.options.infinite
              ? r.options.slidesToShow + r.currentSlide
              : r.currentSlide),
            (n = Math.ceil(s + r.options.slidesToShow)),
            r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)),
        (t = r.$slider.find(".slick-slide").slice(s, n)),
        "anticipated" === r.options.lazyLoad)
      )
        for (
          var l = s - 1, d = n, a = r.$slider.find(".slick-slide"), c = 0;
          c < r.options.slidesToScroll;
          c++
        )
          l < 0 && (l = r.slideCount - 1),
            (t = t.add(a.eq(l))),
            (t = t.add(a.eq(d))),
            l--,
            d++;
      e(t),
        r.slideCount <= r.options.slidesToShow
          ? ((o = r.$slider.find(".slick-slide")), e(o))
          : r.currentSlide >= r.slideCount - r.options.slidesToShow
          ? ((o = r.$slider
              .find(".slick-cloned")
              .slice(0, r.options.slidesToShow)),
            e(o))
          : 0 === r.currentSlide &&
            ((o = r.$slider
              .find(".slick-cloned")
              .slice(r.options.slidesToShow * -1)),
            e(o));
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        var i = this;
        i.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      if (
        !t.unslicked &&
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        t.options.accessibility === !0 &&
          (t.initADA(), t.options.focusOnChange))
      ) {
        var o = i(t.$slides.get(t.currentSlide));
        o.attr("tabindex", 0).focus();
      }
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        var i = this;
        i.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          (r = document.createElement("img")),
          (r.onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              l.options.adaptiveHeight === !0 && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        return (
          "boolean" == typeof i
            ? ((e = i), (i = e === !0 ? 0 : o.slideCount - 1))
            : (i = e === !0 ? --i : i),
          !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) &&
            (o.unload(),
            t === !0
              ? o.$slideTrack.children().remove()
              : o.$slideTrack.children(this.options.slide).eq(i).remove(),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            (o.$slidesCache = o.$slides),
            void o.reinit())
        );
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      o.options.rtl === !0 && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        o.transformsEnabled === !1
          ? o.$slideTrack.css(s)
          : ((s = {}),
            o.cssTransitions === !1
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      i.options.vertical === !1
        ? i.options.centerMode === !0 &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          i.options.centerMode === !0 &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        i.options.vertical === !1 && i.options.variableWidth === !1
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : i.options.variableWidth === !0
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      i.options.variableWidth === !1 &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          t.options.rtl === !0
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        i.options.adaptiveHeight === !0 &&
        i.options.vertical === !1
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : "undefined" != typeof arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        i.options.fade === !1
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = i.options.vertical === !0 ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (i.options.useCSS === !0 && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          i.animType !== !1 &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && i.animType !== !1);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        n.options.centerMode === !0)
      ) {
        var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          n.options.infinite === !0 &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = n.options.infinite === !0 ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (s.options.fade === !0 && (s.options.centerMode = !1),
        s.options.infinite === !0 &&
          s.options.fade === !1 &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            s.options.centerMode === !0
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      return (
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? void t.slideHandler(s, !1, !0)
          : void t.slideHandler(s)
      );
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (a.animating === !0 && a.options.waitForAnimate === !0) ||
          (a.options.fade === !0 && a.currentSlide === i)
        ))
      )
        return (
          e === !1 && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          a.options.infinite === !1 &&
          a.options.centerMode === !1 &&
          (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)
            ? void (
                a.options.fade === !1 &&
                ((o = a.currentSlide),
                t !== !0 && a.slideCount > a.options.slidesToShow
                  ? a.animateSlide(r, function () {
                      a.postSlide(o);
                    })
                  : a.postSlide(o))
              )
            : a.options.infinite === !1 &&
              a.options.centerMode === !0 &&
              (i < 0 || i > a.slideCount - a.options.slidesToScroll)
            ? void (
                a.options.fade === !1 &&
                ((o = a.currentSlide),
                t !== !0 && a.slideCount > a.options.slidesToShow
                  ? a.animateSlide(r, function () {
                      a.postSlide(o);
                    })
                  : a.postSlide(o))
              )
            : (a.options.autoplay && clearInterval(a.autoPlayTimer),
              (s =
                o < 0
                  ? a.slideCount % a.options.slidesToScroll !== 0
                    ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                    : a.slideCount + o
                  : o >= a.slideCount
                  ? a.slideCount % a.options.slidesToScroll !== 0
                    ? 0
                    : o - a.slideCount
                  : o),
              (a.animating = !0),
              a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
              (n = a.currentSlide),
              (a.currentSlide = s),
              a.setSlideClasses(a.currentSlide),
              a.options.asNavFor &&
                ((l = a.getNavTarget()),
                (l = l.slick("getSlick")),
                l.slideCount <= l.options.slidesToShow &&
                  l.setSlideClasses(a.currentSlide)),
              a.updateDots(),
              a.updateArrows(),
              a.options.fade === !0
                ? (t !== !0
                    ? (a.fadeSlideOut(n),
                      a.fadeSlide(s, function () {
                        a.postSlide(s);
                      }))
                    : a.postSlide(s),
                  void a.animateHeight())
                : void (t !== !0 && a.slideCount > a.options.slidesToShow
                    ? a.animateSlide(d, function () {
                        a.postSlide(s);
                      })
                    : a.postSlide(s)))
        );
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        i.options.dots === !0 &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)),
        o < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? s.options.rtl === !1
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? s.options.rtl === !1
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? s.options.rtl === !1
            ? "right"
            : "left"
          : s.options.verticalSwiping === !0
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (o.touchObject.edgeHit === !0 &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          e.options.swipe === !1 ||
          ("ontouchend" in document && e.options.swipe === !1) ||
          (e.options.draggable === !1 && i.type.indexOf("mouse") !== -1)
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          e.options.verticalSwiping === !0 &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (l.options.verticalSwiping === !0 &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (l.options.rtl === !1 ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              l.options.verticalSwiping === !0 &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              l.options.infinite === !1 &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              l.options.vertical === !1
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s),
              l.options.fade !== !0 &&
                l.options.touchMove !== !1 &&
                (l.animating === !0
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      return (
        (t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
        t.slideCount <= t.options.slidesToShow
          ? ((t.touchObject = {}), !1)
          : (void 0 !== i.originalEvent &&
              void 0 !== i.originalEvent.touches &&
              (e = i.originalEvent.touches[0]),
            (t.touchObject.startX = t.touchObject.curX =
              void 0 !== e ? e.pageX : i.clientX),
            (t.touchObject.startY = t.touchObject.curY =
              void 0 !== e ? e.pageY : i.clientY),
            void (t.dragging = !0))
      );
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i,
        e = this;
      (i = Math.floor(e.options.slidesToShow / 2)),
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          !e.options.infinite &&
          (e.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          e.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === e.currentSlide
            ? (e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
              e.options.centerMode === !1
            ? (e.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : e.currentSlide >= e.slideCount - 1 &&
              e.options.centerMode === !0 &&
              (e.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || "undefined" == typeof s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          "undefined" != typeof t)
        )
          return t;
      return o;
    });
});
function TouchNav(t) {
  for (var e in ((this.options = {
    hoverClass: "hover",
    menuItems: "li",
    menuOpener: "a",
    menuDrop: "ul",
    navBlock: null,
  }),
  t))
    t.hasOwnProperty(e) && (this.options[e] = t[e]);
  this.init();
}
function initDropDownClasses() {
  jQuery("#nav li").each(function () {
    var t = jQuery(this),
      e = t.find("ul"),
      i = t.find("a").eq(0);
    e.length &&
      (t.addClass("has-drop-down"), i.length && i.addClass("has-drop-down-a"));
  });
}
function initParallaxBg() {
  jQuery(".bg-holder").parallaxBG({
    parent: ".bg-frame",
    image: "img",
    parallaxOffset: 100,
    fallbackFunc: initBgStretch,
  });
}
function initBgStretch() {
  jQuery(".bg-frame").each(function () {
    var t = jQuery(this),
      e = t.find("img");
    jQuery(window).bind("load resize", function () {
      var i,
        s,
        n = (function (t) {
          var e = t.ratio || t.elementWidth / t.elementHeight,
            i = t.maskWidth,
            s = i / e;
          s < t.maskHeight && ((s = t.maskHeight), (i = s * e));
          return {
            width: i,
            height: s,
            top: (t.maskHeight - s) / 2,
            left: (t.maskWidth - i) / 2,
          };
        })(
          ((s = t),
          (i = e).css({ height: "", left: "", top: "", width: "" }),
          {
            ratio: i.width() / i.height(),
            maskWidth: s.width(),
            maskHeight: s.outerHeight(!0),
          })
        );
      !(function (t, e) {
        t.css({ height: e.height, left: e.left, top: e.top, width: e.width });
      })(e, n);
    });
  });
}
function initIsotopeFilter() {
  jQuery(".isotope-filter").each(function () {
    var t = jQuery(this),
      e = t.find(".filter-list a"),
      i = t.find(".show-all"),
      s = t.find(".items"),
      n = s.children();
    s.isotope({ itemSelector: ".box" }),
      jQuery.support.opacity ||
        s.isotope({ animationOptions: { duration: 0 } }),
      n.each(function () {
        var t = this.getAttribute("title");
        this.removeAttribute("title"), this.setAttribute("rel", t);
      }),
      e.click(function (t) {
        var e = jQuery(this),
          i = e.attr("rel");
        t.preventDefault(), o(e), s.isotope({ filter: '[rel="' + i + '"]' });
      }),
      i.click(function (t) {
        t.preventDefault(), o(i), s.isotope({ filter: "[rel]" });
      });
    var o = function (t) {
      e.add(i).removeClass("active"), t.addClass("active");
    };
  });
}
!(function (t, e) {
  var i,
    s,
    n,
    o = t(window),
    a =
      "onwheel" in document || document.documentMode >= 9
        ? "wheel"
        : "mousewheel DOMMouseScroll";
  function r(e, o, r) {
    var h;
    document.body &&
      ((o = "number" == typeof o ? { duration: o } : o || {}),
      (i = i || t("html, body")),
      (h = o.container || i),
      "number" == typeof e && (e = { top: e }),
      s && n && s.off(a, n),
      o.wheelBehavior &&
        "none" !== o.wheelBehavior &&
        ((n = function (t) {
          "stop" === o.wheelBehavior
            ? (h.off(a, n), h.stop())
            : "ignore" === o.wheelBehavior && t.preventDefault();
        }),
        (s = h.on(a, n))),
      h
        .stop()
        .animate(
          { scrollLeft: e.left, scrollTop: e.top },
          o.duration,
          function () {
            n && h.off(a, n), t.isFunction(r) && r();
          }
        ));
  }
  function h(e) {
    (this.options = t.extend(
      {
        anchorLinks: 'a[href^="#"]',
        container: null,
        extraOffset: null,
        activeClasses: null,
        easing: "swing",
        animMode: "duration",
        animDuration: 800,
        animSpeed: 1500,
        anchorActiveClass: "anchor-active",
        sectionActiveClass: "section-active",
        wheelBehavior: "stop",
        useNativeAnchorScrolling: !1,
      },
      e
    )),
      this.init();
  }
  (h.prototype = {
    init: function () {
      this.initStructure(), this.attachEvents();
    },
    initStructure: function () {
      (this.container = this.options.container
        ? t(this.options.container)
        : t("html,body")),
        (this.scrollContainer = this.options.container ? this.container : o),
        (this.anchorLinks = t(this.options.anchorLinks));
    },
    getAnchorTarget: function (e) {
      var i = t(e).attr("href");
      return t(i.length > 1 ? i : "html");
    },
    getTargetOffset: function (t) {
      var e = t.offset().top;
      return (
        this.options.container &&
          (e -= this.container.offset().top - this.container.prop("scrollTop")),
        "number" == typeof this.options.extraOffset
          ? (e -= this.options.extraOffset)
          : "function" == typeof this.options.extraOffset &&
            (e -= this.options.extraOffset(t)),
        { top: e }
      );
    },
    attachEvents: function () {
      var e = this;
      this.options.activeClasses &&
        ((this.anchorData = []),
        this.anchorLinks.each(function () {
          var i,
            s = jQuery(this),
            n = e.getAnchorTarget(s);
          t.each(e.anchorData, function (t, e) {
            e.block[0] === n[0] && (i = e);
          }),
            i
              ? (i.link = i.link.add(s))
              : e.anchorData.push({ link: s, block: n });
        }),
        (this.resizeHandler = function () {
          e.recalculateOffsets();
        }),
        (this.scrollHandler = function () {
          e.refreshActiveClass();
        }),
        this.recalculateOffsets(),
        this.scrollContainer.on("scroll", this.scrollHandler),
        o.on("resize", this.resizeHandler)),
        (this.clickHandler = function (t) {
          e.onClick(t);
        }),
        this.options.useNativeAnchorScrolling ||
          this.anchorLinks.on("click", this.clickHandler);
    },
    recalculateOffsets: function () {
      var e = this;
      t.each(this.anchorData, function (t, i) {
        (i.offset = e.getTargetOffset(i.block)),
          (i.height = i.block.outerHeight());
      }),
        this.refreshActiveClass();
    },
    refreshActiveClass: function () {
      var e = this,
        i = !1,
        s = this.container.prop("scrollHeight"),
        n = this.scrollContainer.height(),
        a = this.options.container
          ? this.container.prop("scrollTop")
          : o.scrollTop();
      function r(t, i, s) {
        t.toggleClass(e.options.anchorActiveClass, s),
          i.toggleClass(e.options.sectionActiveClass, s);
      }
      this.options.customScrollHandler
        ? this.options.customScrollHandler.call(this, a, this.anchorData)
        : (this.anchorData.sort(function (t, e) {
            return t.offset.top - e.offset.top;
          }),
          t.each(this.anchorData, function (t) {
            var o = e.anchorData.length - t - 1,
              h = e.anchorData[o],
              l =
                "parent" === e.options.activeClasses ? h.link.parent() : h.link;
            a >= s - n
              ? o === e.anchorData.length - 1
                ? r(l, h.block, !0)
                : r(l, h.block, !1)
              : !i && (a >= h.offset.top - 1 || 0 === o)
              ? ((i = !0), r(l, h.block, !0))
              : r(l, h.block, !1);
          }));
    },
    calculateScrollDuration: function (t) {
      return "speed" === this.options.animMode
        ? (Math.abs(this.scrollContainer.scrollTop() - t.top) /
            this.options.animSpeed) *
            1e3
        : this.options.animDuration;
    },
    onClick: function (t) {
      var e = this.getAnchorTarget(t.currentTarget),
        i = this.getTargetOffset(e);
      t.preventDefault(),
        r(i, {
          container: this.container,
          wheelBehavior: this.options.wheelBehavior,
          duration: this.calculateScrollDuration(i),
        });
    },
    destroy: function () {
      this.options.activeClasses &&
        (o.off("resize", this.resizeHandler),
        this.scrollContainer.off("scroll", this.scrollHandler)),
        this.anchorLinks.off("click", this.clickHandler);
    },
  }),
    t.extend(h, {
      scrollTo: function (t, e, i) {
        r(t, e, i);
      },
    }),
    (e.SmoothScroll = h);
})(jQuery, this),
  (function (t) {
    function e(e) {
      (this.options = t.extend(
        {
          mask: "div.mask",
          slider: ">*",
          slides: ">*",
          activeClass: "active",
          disabledClass: "disabled",
          btnPrev: "a.btn-prev",
          btnNext: "a.btn-next",
          generatePagination: !1,
          pagerList: "<ul>",
          pagerListItem: '<li><a href="#"></a></li>',
          pagerListItemText: "a",
          pagerLinks: ".pagination li",
          currentNumber: "span.current-num",
          totalNumber: "span.total-num",
          btnPlay: ".btn-play",
          btnPause: ".btn-pause",
          btnPlayPause: ".btn-play-pause",
          galleryReadyClass: "gallery-js-ready",
          autorotationActiveClass: "autorotation-active",
          autorotationDisabledClass: "autorotation-disabled",
          stretchSlideToMask: !1,
          circularRotation: !0,
          disableWhileAnimating: !1,
          autoRotation: !1,
          pauseOnHover: !i,
          maskAutoSize: !1,
          switchTime: 4e3,
          animSpeed: 600,
          event: "click",
          swipeThreshold: 15,
          handleTouch: !0,
          vertical: !1,
          useTranslate3D: !1,
          step: !1,
        },
        e
      )),
        this.init();
    }
    e.prototype = {
      init: function () {
        this.options.holder &&
          (this.findElements(),
          this.attachEvents(),
          this.refreshPosition(),
          this.refreshState(!0),
          this.resumeRotation(),
          this.makeCallback("onInit", this));
      },
      findElements: function () {
        if (
          ((this.fullSizeFunction = this.options.vertical
            ? "outerHeight"
            : "outerWidth"),
          (this.innerSizeFunction = this.options.vertical ? "height" : "width"),
          (this.slideSizeFunction = "outerHeight"),
          (this.maskSizeProperty = "height"),
          (this.animProperty = this.options.vertical
            ? "marginTop"
            : "marginLeft"),
          (this.gallery = t(this.options.holder).addClass(
            this.options.galleryReadyClass
          )),
          (this.mask = this.gallery.find(this.options.mask)),
          (this.slider = this.mask.find(this.options.slider)),
          (this.slides = this.slider.find(this.options.slides)),
          (this.btnPrev = this.gallery.find(this.options.btnPrev)),
          (this.btnNext = this.gallery.find(this.options.btnNext)),
          (this.currentStep = 0),
          (this.stepsCount = 0),
          !1 === this.options.step)
        ) {
          var e = this.slides.filter("." + this.options.activeClass);
          e.length && (this.currentStep = this.slides.index(e));
        }
        this.calculateOffsets(),
          "string" == typeof this.options.generatePagination
            ? ((this.pagerLinks = t()), this.buildPagination())
            : ((this.pagerLinks = this.gallery.find(this.options.pagerLinks)),
              this.attachPaginationEvents()),
          (this.btnPlay = this.gallery.find(this.options.btnPlay)),
          (this.btnPause = this.gallery.find(this.options.btnPause)),
          (this.btnPlayPause = this.gallery.find(this.options.btnPlayPause)),
          (this.curNum = this.gallery.find(this.options.currentNumber)),
          (this.allNum = this.gallery.find(this.options.totalNumber));
      },
      attachEvents: function () {
        var e = this;
        this.bindHandlers(["onWindowResize"]),
          t(window).bind("load resize orientationchange", this.onWindowResize),
          this.btnPrev.length &&
            ((this.prevSlideHandler = function (t) {
              t.preventDefault(), e.prevSlide();
            }),
            this.btnPrev.bind(this.options.event, this.prevSlideHandler)),
          this.btnNext.length &&
            ((this.nextSlideHandler = function (t) {
              t.preventDefault(), e.nextSlide();
            }),
            this.btnNext.bind(this.options.event, this.nextSlideHandler)),
          this.options.pauseOnHover &&
            !i &&
            ((this.hoverHandler = function () {
              e.options.autoRotation &&
                ((e.galleryHover = !0), e.pauseRotation());
            }),
            (this.leaveHandler = function () {
              e.options.autoRotation &&
                ((e.galleryHover = !1), e.resumeRotation());
            }),
            this.gallery.bind({
              mouseenter: this.hoverHandler,
              mouseleave: this.leaveHandler,
            })),
          this.btnPlay.length &&
            ((this.btnPlayHandler = function (t) {
              t.preventDefault(), e.startRotation();
            }),
            this.btnPlay.bind(this.options.event, this.btnPlayHandler)),
          this.btnPause.length &&
            ((this.btnPauseHandler = function (t) {
              t.preventDefault(), e.stopRotation();
            }),
            this.btnPause.bind(this.options.event, this.btnPauseHandler)),
          this.btnPlayPause.length &&
            ((this.btnPlayPauseHandler = function (t) {
              t.preventDefault(),
                e.gallery.hasClass(e.options.autorotationActiveClass)
                  ? e.stopRotation()
                  : e.startRotation();
            }),
            this.btnPlayPause.bind(
              this.options.event,
              this.btnPlayPauseHandler
            )),
          i &&
            this.options.useTranslate3D &&
            this.slider.css({
              "-webkit-transform": "translate3d(0px, 0px, 0px)",
            }),
          i &&
            this.options.handleTouch &&
            window.Hammer &&
            this.mask.length &&
            ((this.swipeHandler = new Hammer.Manager(this.mask[0])),
            this.swipeHandler.add(
              new Hammer.Pan({
                direction: e.options.vertical
                  ? Hammer.DIRECTION_VERTICAL
                  : Hammer.DIRECTION_HORIZONTAL,
                threshold: e.options.swipeThreshold,
              })
            ),
            this.swipeHandler
              .on("panstart", function () {
                e.galleryAnimating
                  ? e.swipeHandler.stop()
                  : (e.pauseRotation(),
                    (e.originalOffset = parseFloat(
                      e.slider.css(e.animProperty)
                    )));
              })
              .on("panmove", function (t) {
                var i =
                  e.originalOffset +
                  t[e.options.vertical ? "deltaY" : "deltaX"];
                (i = Math.max(Math.min(0, i), e.maxOffset)),
                  e.slider.css(e.animProperty, i);
              })
              .on("panend", function (t) {
                e.resumeRotation(),
                  t.distance > e.options.swipeThreshold
                    ? t.offsetDirection === Hammer.DIRECTION_RIGHT ||
                      t.offsetDirection === Hammer.DIRECTION_DOWN
                      ? e.nextSlide()
                      : e.prevSlide()
                    : e.switchSlide();
              }));
      },
      onWindowResize: function () {
        this.galleryAnimating
          ? (this.resizeQueue = !0)
          : (this.calculateOffsets(),
            this.refreshPosition(),
            this.buildPagination(),
            this.refreshState(),
            (this.resizeQueue = !1));
      },
      refreshPosition: function () {
        (this.currentStep = Math.min(this.currentStep, this.stepsCount - 1)),
          (this.tmpProps = {}),
          (this.tmpProps[this.animProperty] = this.getStepOffset()),
          this.slider.stop().css(this.tmpProps);
      },
      calculateOffsets: function () {
        var e,
          i,
          s = this;
        if (this.options.stretchSlideToMask) {
          var n = {};
          (n[this.innerSizeFunction] = this.mask[this.innerSizeFunction]()),
            this.slides.css(n);
        }
        if (
          ((this.maskSize = this.mask[this.innerSizeFunction]()),
          (this.sumSize = this.getSumSize()),
          (this.maxOffset = this.maskSize - this.sumSize),
          this.options.vertical && this.options.maskAutoSize)
        ) {
          (this.options.step = 1),
            (this.stepsCount = this.slides.length),
            (this.stepOffsets = [0]),
            (e = 0);
          for (var o = 0; o < this.slides.length; o++)
            (e -= t(this.slides[o])[this.fullSizeFunction](!0)),
              this.stepOffsets.push(e);
          this.maxOffset = e;
        } else if (
          "number" == typeof this.options.step &&
          this.options.step > 0
        )
          for (
            this.slideDimensions = [],
              this.slides.each(
                t.proxy(function (e, i) {
                  s.slideDimensions.push(t(i)[s.fullSizeFunction](!0));
                }, this)
              ),
              this.stepOffsets = [0],
              this.stepsCount = 1,
              e = i = 0;
            e > this.maxOffset;

          )
            (e -= this.getSlideSize(i, i + this.options.step)),
              (i += this.options.step),
              this.stepOffsets.push(Math.max(e, this.maxOffset)),
              this.stepsCount++;
        else
          for (
            this.stepSize = this.maskSize, this.stepsCount = 1, e = 0;
            e > this.maxOffset;

          )
            (e -= this.stepSize), this.stepsCount++;
      },
      getSumSize: function () {
        var e = 0;
        return (
          this.slides.each(
            t.proxy(function (i, s) {
              e += t(s)[this.fullSizeFunction](!0);
            }, this)
          ),
          this.slider.css(this.innerSizeFunction, e),
          e
        );
      },
      getStepOffset: function (t) {
        return (
          (t = t || this.currentStep),
          "number" == typeof this.options.step
            ? this.stepOffsets[this.currentStep]
            : Math.min(
                0,
                Math.max(-this.currentStep * this.stepSize, this.maxOffset)
              )
        );
      },
      getSlideSize: function (t, e) {
        for (
          var i = 0, s = t;
          s < Math.min(e, this.slideDimensions.length);
          s++
        )
          i += this.slideDimensions[s];
        return i;
      },
      buildPagination: function () {
        if (
          "string" == typeof this.options.generatePagination &&
          (this.pagerHolder ||
            (this.pagerHolder = this.gallery.find(
              this.options.generatePagination
            )),
          this.pagerHolder.length && this.oldStepsCount != this.stepsCount)
        ) {
          (this.oldStepsCount = this.stepsCount),
            this.pagerHolder.empty(),
            (this.pagerList = t(this.options.pagerList).appendTo(
              this.pagerHolder
            ));
          for (var e = 0; e < this.stepsCount; e++)
            t(this.options.pagerListItem)
              .appendTo(this.pagerList)
              .find(this.options.pagerListItemText)
              .text(e + 1);
          (this.pagerLinks = this.pagerList.children()),
            this.attachPaginationEvents();
        }
      },
      attachPaginationEvents: function () {
        var t = this;
        (this.pagerLinksHandler = function (e) {
          e.preventDefault(), t.numSlide(t.pagerLinks.index(e.currentTarget));
        }),
          this.pagerLinks.bind(this.options.event, this.pagerLinksHandler);
      },
      prevSlide: function () {
        (this.options.disableWhileAnimating && this.galleryAnimating) ||
          (this.currentStep > 0
            ? (this.currentStep--, this.switchSlide())
            : this.options.circularRotation &&
              ((this.currentStep = this.stepsCount - 1), this.switchSlide()));
      },
      nextSlide: function (t) {
        (this.options.disableWhileAnimating && this.galleryAnimating) ||
          (this.currentStep < this.stepsCount - 1
            ? (this.currentStep++, this.switchSlide())
            : (this.options.circularRotation || !0 === t) &&
              ((this.currentStep = 0), this.switchSlide()));
      },
      numSlide: function (t) {
        this.currentStep != t && ((this.currentStep = t), this.switchSlide());
      },
      switchSlide: function () {
        var t = this;
        (this.galleryAnimating = !0),
          (this.tmpProps = {}),
          (this.tmpProps[this.animProperty] = this.getStepOffset()),
          this.slider.stop().animate(this.tmpProps, {
            duration: this.options.animSpeed,
            complete: function () {
              (t.galleryAnimating = !1),
                t.resizeQueue && t.onWindowResize(),
                t.makeCallback("onChange", t),
                t.autoRotate();
            },
          }),
          this.refreshState(),
          this.makeCallback("onBeforeChange", this);
      },
      refreshState: function (t) {
        (1 !== this.options.step && this.stepsCount !== this.slides.length) ||
          this.slides
            .removeClass(this.options.activeClass)
            .eq(this.currentStep)
            .addClass(this.options.activeClass),
          this.pagerLinks
            .removeClass(this.options.activeClass)
            .eq(this.currentStep)
            .addClass(this.options.activeClass),
          this.curNum.html(this.currentStep + 1),
          this.allNum.html(this.stepsCount),
          this.options.maskAutoSize &&
            "number" == typeof this.options.step &&
            ((this.tmpProps = {}),
            (this.tmpProps[this.maskSizeProperty] = this.slides
              .eq(Math.min(this.currentStep, this.slides.length - 1))
              [this.slideSizeFunction](!0)),
            this.mask.stop()[t ? "css" : "animate"](this.tmpProps)),
          this.options.circularRotation ||
            (this.btnPrev
              .add(this.btnNext)
              .removeClass(this.options.disabledClass),
            0 === this.currentStep &&
              this.btnPrev.addClass(this.options.disabledClass),
            this.currentStep === this.stepsCount - 1 &&
              this.btnNext.addClass(this.options.disabledClass)),
          this.gallery.toggleClass(
            "not-enough-slides",
            this.sumSize <= this.maskSize
          );
      },
      startRotation: function () {
        (this.options.autoRotation = !0),
          (this.galleryHover = !1),
          (this.autoRotationStopped = !1),
          this.resumeRotation();
      },
      stopRotation: function () {
        (this.galleryHover = !0),
          (this.autoRotationStopped = !0),
          this.pauseRotation();
      },
      pauseRotation: function () {
        this.gallery.addClass(this.options.autorotationDisabledClass),
          this.gallery.removeClass(this.options.autorotationActiveClass),
          clearTimeout(this.timer);
      },
      resumeRotation: function () {
        this.autoRotationStopped ||
          (this.gallery.addClass(this.options.autorotationActiveClass),
          this.gallery.removeClass(this.options.autorotationDisabledClass),
          this.autoRotate());
      },
      autoRotate: function () {
        var t = this;
        clearTimeout(this.timer),
          !this.options.autoRotation ||
          this.galleryHover ||
          this.autoRotationStopped
            ? this.pauseRotation()
            : (this.timer = setTimeout(function () {
                t.nextSlide(!0);
              }, this.options.switchTime));
      },
      bindHandlers: function (e) {
        var i = this;
        t.each(e, function (t, e) {
          var s = i[e];
          i[e] = function () {
            return s.apply(i, arguments);
          };
        });
      },
      makeCallback: function (t) {
        if ("function" == typeof this.options[t]) {
          var e = Array.prototype.slice.call(arguments);
          e.shift(), this.options[t].apply(this, e);
        }
      },
      destroy: function () {
        t(window).unbind("load resize orientationchange", this.onWindowResize),
          this.btnPrev.unbind(this.options.event, this.prevSlideHandler),
          this.btnNext.unbind(this.options.event, this.nextSlideHandler),
          this.pagerLinks.unbind(this.options.event, this.pagerLinksHandler),
          this.gallery.unbind("mouseenter", this.hoverHandler),
          this.gallery.unbind("mouseleave", this.leaveHandler),
          this.stopRotation(),
          this.btnPlay.unbind(this.options.event, this.btnPlayHandler),
          this.btnPause.unbind(this.options.event, this.btnPauseHandler),
          this.btnPlayPause.unbind(
            this.options.event,
            this.btnPlayPauseHandler
          ),
          this.swipeHandler && this.swipeHandler.destroy();
        var e = [
          this.options.galleryReadyClass,
          this.options.autorotationActiveClass,
          this.options.autorotationDisabledClass,
        ];
        this.gallery.removeClass(e.join(" ")),
          this.slider.add(this.slides).removeAttr("style"),
          "string" == typeof this.options.generatePagination &&
            this.pagerHolder.empty();
      },
    };
    var i =
      /Windows Phone/.test(navigator.userAgent) ||
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch);
    t.fn.scrollGallery = function (i) {
      return this.each(function () {
        t(this).data("ScrollGallery", new e(t.extend(i, { holder: this })));
      });
    };
  })(jQuery),
  (function (t) {
    function e(e) {
      (this.options = t.extend(
        {
          slides: "ul.slideset > li",
          activeClass: "active",
          disabledClass: "disabled",
          btnPrev: "a.btn-prev",
          btnNext: "a.btn-next",
          generatePagination: !1,
          pagerList: "<ul>",
          pagerListItem: '<li><a href="#"></a></li>',
          pagerListItemText: "a",
          pagerLinks: ".pagination li",
          currentNumber: "span.current-num",
          totalNumber: "span.total-num",
          btnPlay: ".btn-play",
          btnPause: ".btn-pause",
          btnPlayPause: ".btn-play-pause",
          galleryReadyClass: "gallery-js-ready",
          autorotationActiveClass: "autorotation-active",
          autorotationDisabledClass: "autorotation-disabled",
          autorotationStopAfterClick: !1,
          circularRotation: !0,
          switchSimultaneously: !0,
          disableWhileAnimating: !1,
          disableFadeIE: !1,
          autoRotation: !1,
          pauseOnHover: !0,
          autoHeight: !1,
          useSwipe: !1,
          swipeThreshold: 15,
          switchTime: 4e3,
          animSpeed: 600,
          event: "click",
        },
        e
      )),
        this.init();
    }
    e.prototype = {
      init: function () {
        this.options.holder &&
          (this.findElements(),
          this.attachEvents(),
          this.refreshState(!0),
          this.autoRotate(),
          this.makeCallback("onInit", this));
      },
      findElements: function () {
        if (
          ((this.gallery = t(this.options.holder).addClass(
            this.options.galleryReadyClass
          )),
          (this.slides = this.gallery.find(this.options.slides)),
          (this.slidesHolder = this.slides.eq(0).parent()),
          (this.stepsCount = this.slides.length),
          (this.btnPrev = this.gallery.find(this.options.btnPrev)),
          (this.btnNext = this.gallery.find(this.options.btnNext)),
          (this.currentIndex = 0),
          this.options.disableFadeIE &&
            !t.support.opacity &&
            (this.options.animSpeed = 0),
          "string" == typeof this.options.generatePagination)
        ) {
          (this.pagerHolder = this.gallery
            .find(this.options.generatePagination)
            .empty()),
            (this.pagerList = t(this.options.pagerList).appendTo(
              this.pagerHolder
            ));
          for (var e = 0; e < this.stepsCount; e++)
            t(this.options.pagerListItem)
              .appendTo(this.pagerList)
              .find(this.options.pagerListItemText)
              .text(e + 1);
          this.pagerLinks = this.pagerList.children();
        } else this.pagerLinks = this.gallery.find(this.options.pagerLinks);
        var i = this.slides.filter("." + this.options.activeClass);
        i.length && (this.currentIndex = this.slides.index(i)),
          (this.prevIndex = this.currentIndex),
          (this.btnPlay = this.gallery.find(this.options.btnPlay)),
          (this.btnPause = this.gallery.find(this.options.btnPause)),
          (this.btnPlayPause = this.gallery.find(this.options.btnPlayPause)),
          (this.curNum = this.gallery.find(this.options.currentNumber)),
          (this.allNum = this.gallery.find(this.options.totalNumber)),
          this.slides
            .css({ display: "block", opacity: 0 })
            .eq(this.currentIndex)
            .css({ opacity: "" });
      },
      attachEvents: function () {
        var e = this;
        (this.resizeHandler = function () {
          e.onWindowResize();
        }),
          t(window).bind("load resize orientationchange", this.resizeHandler),
          this.btnPrev.length &&
            ((this.btnPrevHandler = function (t) {
              t.preventDefault(),
                e.prevSlide(),
                e.options.autorotationStopAfterClick && e.stopRotation();
            }),
            this.btnPrev.bind(this.options.event, this.btnPrevHandler)),
          this.btnNext.length &&
            ((this.btnNextHandler = function (t) {
              t.preventDefault(),
                e.nextSlide(),
                e.options.autorotationStopAfterClick && e.stopRotation();
            }),
            this.btnNext.bind(this.options.event, this.btnNextHandler)),
          this.pagerLinks.length &&
            ((this.pagerLinksHandler = function (t) {
              t.preventDefault(),
                e.numSlide(e.pagerLinks.index(t.currentTarget)),
                e.options.autorotationStopAfterClick && e.stopRotation();
            }),
            this.pagerLinks.bind(e.options.event, this.pagerLinksHandler)),
          this.btnPlay.length &&
            ((this.btnPlayHandler = function (t) {
              t.preventDefault(), e.startRotation();
            }),
            this.btnPlay.bind(this.options.event, this.btnPlayHandler)),
          this.btnPause.length &&
            ((this.btnPauseHandler = function (t) {
              t.preventDefault(), e.stopRotation();
            }),
            this.btnPause.bind(this.options.event, this.btnPauseHandler)),
          this.btnPlayPause.length &&
            ((this.btnPlayPauseHandler = function (t) {
              t.preventDefault(),
                e.gallery.hasClass(e.options.autorotationActiveClass)
                  ? e.stopRotation()
                  : e.startRotation();
            }),
            this.btnPlayPause.bind(
              this.options.event,
              this.btnPlayPauseHandler
            )),
          this.options.useSwipe &&
            window.Hammer &&
            i &&
            ((this.swipeHandler = new Hammer.Manager(this.gallery[0])),
            this.swipeHandler.add(
              new Hammer.Swipe({
                direction: Hammer.DIRECTION_HORIZONTAL,
                threshold: e.options.swipeThreshold,
              })
            ),
            this.swipeHandler
              .on("swipeleft", function () {
                e.nextSlide();
              })
              .on("swiperight", function () {
                e.prevSlide();
              })),
          this.options.pauseOnHover &&
            ((this.hoverHandler = function () {
              e.options.autoRotation &&
                ((e.galleryHover = !0), e.pauseRotation());
            }),
            (this.leaveHandler = function () {
              e.options.autoRotation &&
                ((e.galleryHover = !1), e.resumeRotation());
            }),
            this.gallery.bind({
              mouseenter: this.hoverHandler,
              mouseleave: this.leaveHandler,
            }));
      },
      onWindowResize: function () {
        this.options.autoHeight &&
          this.slidesHolder.css({
            height: this.slides.eq(this.currentIndex).outerHeight(!0),
          });
      },
      prevSlide: function () {
        (this.options.disableWhileAnimating && this.galleryAnimating) ||
          ((this.prevIndex = this.currentIndex),
          this.currentIndex > 0
            ? (this.currentIndex--, this.switchSlide())
            : this.options.circularRotation &&
              ((this.currentIndex = this.stepsCount - 1), this.switchSlide()));
      },
      nextSlide: function (t) {
        (this.options.disableWhileAnimating && this.galleryAnimating) ||
          ((this.prevIndex = this.currentIndex),
          this.currentIndex < this.stepsCount - 1
            ? (this.currentIndex++, this.switchSlide())
            : (this.options.circularRotation || !0 === t) &&
              ((this.currentIndex = 0), this.switchSlide()));
      },
      numSlide: function (t) {
        this.currentIndex != t &&
          ((this.prevIndex = this.currentIndex),
          (this.currentIndex = t),
          this.switchSlide());
      },
      switchSlide: function () {
        var t = this;
        this.slides.length > 1 &&
          ((this.galleryAnimating = !0),
          this.options.animSpeed
            ? this.slides
                .eq(this.prevIndex)
                .stop()
                .animate({ opacity: 0 }, { duration: this.options.animSpeed })
            : this.slides.eq(this.prevIndex).css({ opacity: 0 }),
          (this.switchNext = function () {
            t.options.animSpeed
              ? t.slides
                  .eq(t.currentIndex)
                  .stop()
                  .animate({ opacity: 1 }, { duration: t.options.animSpeed })
              : t.slides.eq(t.currentIndex).css({ opacity: "" }),
              clearTimeout(this.nextTimer),
              (this.nextTimer = setTimeout(function () {
                t.slides.eq(t.currentIndex).css({ opacity: "" }),
                  (t.galleryAnimating = !1),
                  t.autoRotate(),
                  t.makeCallback("onChange", t);
              }, t.options.animSpeed));
          }),
          this.options.switchSimultaneously
            ? t.switchNext()
            : (clearTimeout(this.switchTimer),
              (this.switchTimer = setTimeout(function () {
                t.switchNext();
              }, this.options.animSpeed))),
          this.refreshState(),
          this.makeCallback("onBeforeChange", this));
      },
      refreshState: function (t) {
        this.slides
          .removeClass(this.options.activeClass)
          .eq(this.currentIndex)
          .addClass(this.options.activeClass),
          this.pagerLinks
            .removeClass(this.options.activeClass)
            .eq(this.currentIndex)
            .addClass(this.options.activeClass),
          this.curNum.html(this.currentIndex + 1),
          this.allNum.html(this.stepsCount),
          this.options.autoHeight &&
            (t
              ? this.slidesHolder.css({
                  height: this.slides.eq(this.currentIndex).outerHeight(!0),
                })
              : this.slidesHolder.stop().animate(
                  {
                    height: this.slides.eq(this.currentIndex).outerHeight(!0),
                  },
                  { duration: this.options.animSpeed }
                )),
          this.options.circularRotation ||
            (this.btnPrev
              .add(this.btnNext)
              .removeClass(this.options.disabledClass),
            0 === this.currentIndex &&
              this.btnPrev.addClass(this.options.disabledClass),
            this.currentIndex === this.stepsCount - 1 &&
              this.btnNext.addClass(this.options.disabledClass)),
          this.gallery.toggleClass("not-enough-slides", 1 === this.stepsCount);
      },
      startRotation: function () {
        (this.options.autoRotation = !0),
          (this.galleryHover = !1),
          (this.autoRotationStopped = !1),
          this.resumeRotation();
      },
      stopRotation: function () {
        (this.galleryHover = !0),
          (this.autoRotationStopped = !0),
          this.pauseRotation();
      },
      pauseRotation: function () {
        this.gallery.addClass(this.options.autorotationDisabledClass),
          this.gallery.removeClass(this.options.autorotationActiveClass),
          clearTimeout(this.timer);
      },
      resumeRotation: function () {
        this.autoRotationStopped ||
          (this.gallery.addClass(this.options.autorotationActiveClass),
          this.gallery.removeClass(this.options.autorotationDisabledClass),
          this.autoRotate());
      },
      autoRotate: function () {
        var t = this;
        clearTimeout(this.timer),
          !this.options.autoRotation ||
          this.galleryHover ||
          this.autoRotationStopped
            ? this.pauseRotation()
            : (this.gallery.addClass(this.options.autorotationActiveClass),
              (this.timer = setTimeout(function () {
                t.nextSlide(!0);
              }, this.options.switchTime)));
      },
      makeCallback: function (t) {
        if ("function" == typeof this.options[t]) {
          var e = Array.prototype.slice.call(arguments);
          e.shift(), this.options[t].apply(this, e);
        }
      },
      destroy: function () {
        this.btnPrev.unbind(this.options.event, this.btnPrevHandler),
          this.btnNext.unbind(this.options.event, this.btnNextHandler),
          this.pagerLinks.unbind(this.options.event, this.pagerLinksHandler),
          t(window).unbind("load resize orientationchange", this.resizeHandler),
          this.stopRotation(),
          this.btnPlay.unbind(this.options.event, this.btnPlayHandler),
          this.btnPause.unbind(this.options.event, this.btnPauseHandler),
          this.btnPlayPause.unbind(
            this.options.event,
            this.btnPlayPauseHandler
          ),
          this.gallery.unbind("mouseenter", this.hoverHandler),
          this.gallery.unbind("mouseleave", this.leaveHandler),
          this.swipeHandler && this.swipeHandler.destroy(),
          "string" == typeof this.options.generatePagination &&
            this.pagerHolder.empty();
        var e = [
          this.options.galleryReadyClass,
          this.options.autorotationActiveClass,
          this.options.autorotationDisabledClass,
        ];
        this.gallery.removeClass(e.join(" ")),
          this.slidesHolder.add(this.slides).removeAttr("style");
      },
    };
    var i =
      /Windows Phone/.test(navigator.userAgent) ||
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch);
    t.fn.fadeGallery = function (i) {
      return this.each(function () {
        t(this).data("FadeGallery", new e(t.extend(i, { holder: this })));
      });
    };
  })(jQuery),
  (function (t) {
    function e(e) {
      (this.options = t.extend(
        {
          container: null,
          hideOnClickOutside: !1,
          menuActiveClass: "nav-active",
          menuOpener: ".nav-opener",
          menuDrop: ".nav-drop",
          toggleEvent: "click",
          outsideClickEvent: "click touchstart pointerdown MSPointerDown",
        },
        e
      )),
        this.initStructure(),
        this.attachEvents();
    }
    e.prototype = {
      initStructure: function () {
        (this.page = outer),
          (this.container = t(this.options.container)),
          (this.opener = this.container.find(this.options.menuOpener)),
          (this.drop = this.container.find(this.options.menuDrop));
      },
      attachEvents: function () {
        var e = this;
        i && (i(), (i = null)),
          (this.outsideClickHandler = function (i) {
            if (e.isOpened()) {
              var s = t(i.target);
              s.closest(e.opener).length ||
                s.closest(e.drop).length ||
                e.hide();
            }
          }),
          (this.openerClickHandler = function (t) {
            t.preventDefault(), e.toggle();
          }),
          this.opener.on(this.options.toggleEvent, this.openerClickHandler);
      },
      isOpened: function () {
        return this.container.hasClass(this.options.menuActiveClass);
      },
      show: function () {
        this.container.addClass(this.options.menuActiveClass),
          this.options.hideOnClickOutside &&
            this.page.on(
              this.options.outsideClickEvent,
              this.outsideClickHandler
            );
      },
      hide: function () {
        this.container.removeClass(this.options.menuActiveClass),
          this.options.hideOnClickOutside &&
            this.page.off(
              this.options.outsideClickEvent,
              this.outsideClickHandler
            );
      },
      toggle: function () {
        this.isOpened() ? this.hide() : this.show();
      },
      destroy: function () {
        this.container.removeClass(this.options.menuActiveClass),
          this.opener.off(this.options.toggleEvent, this.clickHandler),
          this.page.off(
            this.options.outsideClickEvent,
            this.outsideClickHandler
          );
      },
    };
    var i = function () {
      var e,
        i,
        s = t(window),
        n = t("html"),
        o = function () {
          (e = !1), n.removeClass("resize-active");
        };
      s.on("resize orientationchange", function () {
        e || ((e = !0), n.addClass("resize-active")),
          clearTimeout(i),
          (i = setTimeout(o, 500));
      });
    };
    t.fn.mobileNav = function (i) {
      return this.each(function () {
        var s = new e(t.extend({}, i, { container: this }));
        t.data(this, "MobileNav", s);
      });
    };
  })(jQuery),
  (function (t, e, i) {
    var s,
      n,
      o = "[object OperaMini]" == Object.prototype.toString.call(t.operamini),
      a = "placeholder" in e.createElement("input") && !o,
      r = "placeholder" in e.createElement("textarea") && !o,
      h = i.fn,
      l = i.valHooks,
      u = i.propHooks;
    function c(t, e) {
      var s = i(this);
      if (this.value == s.attr("placeholder") && s.hasClass("placeholder"))
        if (s.data("placeholder-password")) {
          if (
            ((s = s
              .hide()
              .next()
              .show()
              .attr("id", s.removeAttr("id").data("placeholder-id"))),
            !0 === t)
          )
            return (s[0].value = e);
          s.focus();
        } else
          (this.value = ""),
            s.removeClass("placeholder"),
            this == p() && this.select();
    }
    function d() {
      var t,
        e,
        s,
        n,
        o = i(this),
        a = this.id;
      if ("" == this.value) {
        if ("password" == this.type) {
          if (!o.data("placeholder-textinput")) {
            try {
              t = o.clone().attr({ type: "text" });
            } catch (o) {
              t = i("<input>").attr(
                i.extend(
                  ((e = this),
                  (s = {}),
                  (n = /^jQuery\d+$/),
                  i.each(e.attributes, function (t, e) {
                    e.specified && !n.test(e.name) && (s[e.name] = e.value);
                  }),
                  s),
                  { type: "text" }
                )
              );
            }
            t
              .removeAttr("name")
              .data({ "placeholder-password": o, "placeholder-id": a })
              .bind("focus.placeholder", c),
              o
                .data({ "placeholder-textinput": t, "placeholder-id": a })
                .before(t);
          }
          o = o.removeAttr("id").hide().prev().attr("id", a).show();
        }
        o.addClass("placeholder"), (o[0].value = o.attr("placeholder"));
      } else o.removeClass("placeholder");
    }
    function p() {
      try {
        return e.activeElement;
      } catch (t) {}
    }
    a && r
      ? ((n = h.placeholder =
          function () {
            return this;
          }).input = n.textarea =
          !0)
      : (((n = h.placeholder =
          function () {
            return (
              this.filter((a ? "textarea" : ":input") + "[placeholder]")
                .not(".placeholder")
                .bind({ "focus.placeholder": c, "blur.placeholder": d })
                .data("placeholder-enabled", !0)
                .trigger("blur.placeholder"),
              this
            );
          }).input = a),
        (n.textarea = r),
        (s = {
          get: function (t) {
            var e = i(t),
              s = e.data("placeholder-password");
            return s
              ? s[0].value
              : e.data("placeholder-enabled") && e.hasClass("placeholder")
              ? ""
              : t.value;
          },
          set: function (t, e) {
            var s = i(t),
              n = s.data("placeholder-password");
            return n
              ? (n[0].value = e)
              : s.data("placeholder-enabled")
              ? ("" == e
                  ? ((t.value = e), t != p() && d.call(t))
                  : (s.hasClass("placeholder") && c.call(t, !0, e)) ||
                    (t.value = e),
                s)
              : (t.value = e);
          },
        }),
        a || ((l.input = s), (u.value = s)),
        r || ((l.textarea = s), (u.value = s)),
        i(function () {
          i(e).delegate("form", "submit.placeholder", function () {
            var t = i(".placeholder", this).each(c);
            setTimeout(function () {
              t.each(d);
            }, 10);
          });
        }),
        i(t).bind("beforeunload.placeholder", function () {
          i(".placeholder").each(function () {
            this.value = "";
          });
        }));
  })(this, document, jQuery),
  (TouchNav.isActiveOn = function (t) {
    return t && t.touchNavActive;
  }),
  (TouchNav.prototype = {
    init: function () {
      "string" == typeof this.options.navBlock
        ? (this.menu = document.getElementById(this.options.navBlock))
        : "object" == typeof this.options.navBlock &&
          (this.menu = this.options.navBlock),
        this.menu && this.addEvents();
    },
    addEvents: function () {
      var t = this,
        e =
          (navigator.pointerEnabled
            ? "pointerdown"
            : navigator.msPointerEnabled && "MSPointerDown") ||
          (this.isTouchDevice && "touchstart");
      this.menuItems = lib.queryElementsBySelector(
        this.options.menuItems,
        this.menu
      );
      for (
        var i = function (i) {
            var s = lib.queryElementsBySelector(t.options.menuDrop, i)[0],
              n = lib.queryElementsBySelector(t.options.menuOpener, i)[0];
            s &&
              n &&
              (t.isTouchDevice || t.isPointerDevice) &&
              (lib.event.add(n, "click", lib.bind(t.clickHandler, t)),
              lib.event.add(n, "mousedown", lib.bind(t.mousedownHandler, t)),
              lib.event.add(n, e, function (e) {
                t.isTouchPointerEvent(e)
                  ? ((t.touchFlag = !0),
                    (t.currentItem = i),
                    (t.currentLink = n),
                    t.pressHandler.apply(t, arguments))
                  : (t.preventCurrentClick = !1);
              })),
              jQuery(i).bind("mouseenter", function () {
                t.touchFlag || ((t.currentItem = i), t.mouseoverHandler());
              }),
              jQuery(i).bind("mouseleave", function () {
                t.touchFlag || ((t.currentItem = i), t.mouseoutHandler());
              }),
              (i.touchNavActive = !0);
          },
          s = 0;
        s < this.menuItems.length;
        s++
      )
        i(t.menuItems[s]);
      (this.isTouchDevice || this.isPointerDevice) &&
        (lib.event.add(
          document.documentElement,
          "mousedown",
          lib.bind(this.clickOutsideHandler, this)
        ),
        lib.event.add(
          document.documentElement,
          e,
          lib.bind(this.clickOutsideHandler, this)
        ));
    },
    mousedownHandler: function (t) {
      this.touchFlag &&
        (t.preventDefault(),
        (this.touchFlag = !1),
        (this.preventCurrentClick = !1));
    },
    mouseoverHandler: function () {
      lib.addClass(this.currentItem, this.options.hoverClass),
        jQuery(this.currentItem).trigger("itemhover");
    },
    mouseoutHandler: function () {
      lib.removeClass(this.currentItem, this.options.hoverClass),
        jQuery(this.currentItem).trigger("itemleave");
    },
    hideActiveDropdown: function () {
      for (var t = 0; t < this.menuItems.length; t++)
        lib.hasClass(this.menuItems[t], this.options.hoverClass) &&
          (lib.removeClass(this.menuItems[t], this.options.hoverClass),
          jQuery(this.menuItems[t]).trigger("itemleave"));
      this.activeParent = null;
    },
    pressHandler: function (t) {
      this.currentItem !== this.activeParent &&
        (this.activeParent &&
        this.currentItem.parentNode === this.activeParent.parentNode
          ? lib.removeClass(this.activeParent, this.options.hoverClass)
          : this.isParent(this.activeParent, this.currentLink) ||
            this.hideActiveDropdown()),
        (this.activeParent = this.currentItem),
        lib.hasClass(this.currentItem, this.options.hoverClass)
          ? (this.preventCurrentClick = !1)
          : (t.preventDefault(),
            (this.preventCurrentClick = !0),
            lib.addClass(this.currentItem, this.options.hoverClass),
            jQuery(this.currentItem).trigger("itemhover"));
    },
    clickHandler: function (t) {
      this.preventCurrentClick && t.preventDefault();
    },
    clickOutsideHandler: function (t) {
      var e = t.changedTouches ? t.changedTouches[0] : t;
      this.activeParent &&
        !this.isParent(this.menu, e.target) &&
        (this.hideActiveDropdown(), (this.touchFlag = !1));
    },
    isParent: function (t, e) {
      for (; e.parentNode; ) {
        if (e.parentNode == t) return !0;
        e = e.parentNode;
      }
      return !1;
    },
    isTouchPointerEvent: function (t) {
      return (
        t.type.indexOf("touch") > -1 ||
        (navigator.pointerEnabled && "touch" === t.pointerType) ||
        (navigator.msPointerEnabled && t.pointerType == t.MSPOINTER_TYPE_TOUCH)
      );
    },
    isPointerDevice: !(
      !navigator.pointerEnabled && !navigator.msPointerEnabled
    ),
    isTouchDevice: !!(
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
    ),
  }),
  (lib = {
    hasClass: function (t, e) {
      return (
        !(!t || !t.className) &&
        t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
      );
    },
    addClass: function (t, e) {
      t && !this.hasClass(t, e) && (t.className += " " + e);
    },
    removeClass: function (t, e) {
      t &&
        this.hasClass(t, e) &&
        (t.className = t.className.replace(
          new RegExp("(\\s|^)" + e + "(\\s|$)"),
          " "
        ));
    },
    extend: function (t) {
      for (var e = 1; e < arguments.length; e++)
        for (var i in arguments[e])
          arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
      return t;
    },
    each: function (t, e) {
      var i, s;
      if ("number" == typeof t.length)
        for (i = 0, s = t.length; i < s && !1 !== e.call(t[i], i, t[i]); i++);
      else
        for (i in t)
          if (t.hasOwnProperty(i) && !1 === e.call(t[i], i, t[i])) break;
    },
    event: {
      add: function (t, e, i) {
        t.events ||
          ((t.events = {}),
          (t.handle = function (e) {
            var i = t.events[e.type];
            e = (function (t) {
              return (t = t || window.event).isFixed
                ? t
                : ((t.isFixed = !0),
                  t.target || (t.target = t.srcElement),
                  (t.preventDefault =
                    t.preventDefault ||
                    function () {
                      this.returnValue = !1;
                    }),
                  (t.stopPropagation =
                    t.stopPropagation ||
                    function () {
                      this.cancelBubble = !0;
                    }),
                  t);
            })(e);
            for (var s = 0, n = i.length; s < n; s++)
              i[s] &&
                !1 === i[s].call(t, e) &&
                (e.preventDefault(), e.stopPropagation());
          })),
          t.events[e] ||
            ((t.events[e] = []),
            t.addEventListener
              ? t.addEventListener(e, t.handle, !1)
              : t.attachEvent && t.attachEvent("on" + e, t.handle)),
          t.events[e].push(i);
      },
      remove: function (t, e, i) {
        for (var s = t.events[e], n = s.length - 1; n >= 0; n--)
          s[n] === i && s.splice(n, 1);
        s.length ||
          (delete t.events[e],
          t.removeEventListener
            ? t.removeEventListener(e, t.handle, !1)
            : t.detachEvent && t.detachEvent("on" + e, t.handle));
      },
    },
    queryElementsBySelector: function (t, e) {
      if (((e = e || document), !t)) return [];
      if (">*" === t) return e.children;
      if ("function" == typeof document.querySelectorAll)
        return e.querySelectorAll(t);
      for (var i = t.split(","), s = [], n = 0; n < i.length; n++) {
        for (
          var o = [e || document],
            a = i[n].replace(/^\s+/, "").replace(/\s+$/, "").split(" "),
            r = 0;
          r < a.length;
          r++
        )
          if (
            ((token = a[r].replace(/^\s+/, "").replace(/\s+$/, "")),
            token.indexOf("#") > -1)
          ) {
            var h = (c = token.split("#"))[0],
              l = c[1],
              u = document.getElementById(l);
            if (u && h && u.nodeName.toLowerCase() != h) return [];
            o = u ? [u] : [];
          } else if (token.indexOf(".") > -1) {
            h = (c = token.split("."))[0] || "*";
            for (var c, d = c[1], p = [], f = 0, g = 0; g < o.length; g++) {
              S =
                "*" == h
                  ? o[g].getElementsByTagName("*")
                  : o[g].getElementsByTagName(h);
              for (var m = 0; m < S.length; m++) p[f++] = S[m];
            }
            o = [];
            for (var v = 0, b = 0; b < p.length; b++)
              p[b].className &&
                p[b].className.match(new RegExp("(\\s|^)" + d + "(\\s|$)")) &&
                (o[v++] = p[b]);
          } else if (
            token.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/)
          ) {
            h = RegExp.$1 || "*";
            var y = RegExp.$2,
              C = RegExp.$3,
              w = RegExp.$4;
            "for" == y.toLowerCase() &&
              this.browser.msie &&
              this.browser.version < 8 &&
              (y = "htmlFor");
            for (p = [], f = 0, g = 0; g < o.length; g++) {
              S =
                "*" == h
                  ? o[g].getElementsByTagName("*")
                  : o[g].getElementsByTagName(h);
              for (m = 0; S[m]; m++) p[f++] = S[m];
            }
            o = [];
            var H;
            v = 0;
            switch (C) {
              case "=":
                H = function (t) {
                  return t.getAttribute(y) == w;
                };
                break;
              case "~":
                H = function (t) {
                  return t
                    .getAttribute(y)
                    .match(new RegExp("(\\s|^)" + w + "(\\s|$)"));
                };
                break;
              case "|":
                H = function (t) {
                  return t.getAttribute(y).match(new RegExp("^" + w + "-?"));
                };
                break;
              case "^":
                H = function (t) {
                  return 0 == t.getAttribute(y).indexOf(w);
                };
                break;
              case "$":
                H = function (t) {
                  return (
                    t.getAttribute(y).lastIndexOf(w) ==
                    t.getAttribute(y).length - w.length
                  );
                };
                break;
              case "*":
                H = function (t) {
                  return t.getAttribute(y).indexOf(w) > -1;
                };
                break;
              default:
                H = function (t) {
                  return t.getAttribute(y);
                };
            }
            o = [];
            for (v = 0, b = 0; b < p.length; b++) H(p[b]) && (o[v++] = p[b]);
          } else {
            h = token;
            for (p = [], f = 0, g = 0; g < o.length; g++) {
              var S = o[g].getElementsByTagName(h);
              for (m = 0; m < S.length; m++) p[f++] = S[m];
            }
            o = p;
          }
        s = [].concat(s, o);
      }
      return s;
    },
    trim: function (t) {
      return t.replace(/^\s+/, "").replace(/\s+$/, "");
    },
    bind: function (t, e, i) {
      return function () {
        return t.apply(e, void 0 !== i ? [i] : arguments);
      };
    },
  }),
  (function (t) {
    function e(e) {
      (this.options = t.extend(
        {
          parent: ".bg-frame",
          image: "img",
          parallaxOffset: 100,
          fallbackFunc: function () {},
        },
        e
      )),
        this.init();
    }
    e.prototype = {
      init: function () {
        if (this.options.holder) {
          if ("function" == typeof this.options.fallbackFunc && (s || i))
            return void this.options.fallbackFunc();
          this.getStructure(), this.attachEvents();
        }
      },
      getStructure: function () {
        (this.holder = t(this.options.holder)),
          (this.parent = this.holder.find(this.options.parent)),
          (this.holderHeight = this.holder.height()),
          (this.holderOffset = this.holder.offset().top),
          (this.image = this.parent
            .find(this.options.image)
            .eq(0)
            .css({ visibility: "hidden" })),
          (this.imageRatio =
            this.image.attr("width") / this.image.attr("height") ||
            this.image.width() / this.image.height()),
          this.parent.css({
            backgroundImage: "url(" + this.image.attr("src") + ")",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }),
          (this.win = t(window)),
          (this.winHeight = this.win.height()),
          (this.winWidth = this.win.width()),
          (this.winScroll = this.win.scrollTop()),
          (this.bgHeight = this.winHeight + this.options.parallaxOffset);
      },
      attachEvents: function () {
        var t = this;
        this.bindHandlers(["scrollLayout"]),
          this.bindHandlers(["resizeLayout"]),
          this.win
            .bind("scroll", this.scrollLayout)
            .bind("resize load", this.resizeLayout),
          setTimeout(function () {
            t.resizeLayout(), t.win.trigger("scroll");
          }, 500);
      },
      resizeLayout: function () {
        (this.winHeight = this.win.height()),
          (this.winWidth = this.win.width()),
          (this.holderHeight = this.holder.height()),
          (this.holderOffset = this.holder.offset().top),
          (this.blockHeight = this.winHeight + this.options.parallaxOffset),
          (this.currentTop = Math.max(0, this.blockHeight - this.holderHeight)),
          (this.parallaxRatio =
            this.win.width() / (this.winHeight + this.options.parallaxOffset)),
          (this.ratioState = this.imageRatio <= this.parallaxRatio),
          this.ratioState
            ? ((this.bgWidth = this.winWidth),
              (this.bgHeight = this.bgWidth / this.imageRatio))
            : ((this.bgWidth = "auto"),
              (this.bgHeight = this.winHeight + this.options.parallaxOffset)),
          this.parent.css({
            paddingBottom: this.currentTop,
            backgroundSize:
              "auto" != this.bgWidth
                ? this.bgWidth + "px " + this.bgHeight + "px"
                : this.bgWidth + " " + this.bgHeight + "px",
          }),
          this.scrollLayout();
      },
      scrollLayout: function () {
        if (
          ((this.winScroll = this.win.scrollTop()),
          (this.offsetPercentage = Math.max(
            0,
            Math.min(
              (this.winScroll + this.winHeight - this.holderOffset) /
                (this.winHeight + this.holderHeight),
              1
            )
          ).toFixed(4)),
          this.ratioState)
        )
          var t =
            "50% " +
            (-parseFloat(this.offsetPercentage) * this.options.parallaxOffset -
              (this.bgHeight - this.winHeight) / 2) +
            "px";
        else
          t =
            "50% " +
            -parseFloat(this.offsetPercentage) * this.options.parallaxOffset +
            "px";
        this.parent.css({ backgroundPosition: t });
      },
      bindHandlers: function (e) {
        var i = this;
        t.each(e, function (t, e) {
          var s = i[e];
          i[e] = function () {
            return s.apply(i, arguments);
          };
        });
      },
    };
    var i =
        /MSIE 10.*Touch/.test(navigator.userAgent) ||
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof DocumentTouch),
      s = window.attachEvent && !window.addEventListener;
    t.fn.parallaxBG = function (i) {
      return this.each(function () {
        new e(t.extend(i, { holder: this }));
      });
    };
  })(jQuery);
/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2012 David DeSandro / Metafizzy
 */
(function (a, b, c) {
  "use strict";
  var d = a.document,
    e = a.Modernizr,
    f = function (a) {
      return a.charAt(0).toUpperCase() + a.slice(1);
    },
    g = "Moz Webkit O Ms".split(" "),
    h = function (a) {
      var b = d.documentElement.style,
        c;
      if (typeof b[a] == "string") return a;
      a = f(a);
      for (var e = 0, h = g.length; e < h; e++) {
        c = g[e] + a;
        if (typeof b[c] == "string") return c;
      }
    },
    i = h("transform"),
    j = h("transitionProperty"),
    k = {
      csstransforms: function () {
        return !!i;
      },
      csstransforms3d: function () {
        var a = !!h("perspective");
        if (a) {
          var c = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
            d = "@media (" + c.join("transform-3d),(") + "modernizr)",
            e = b(
              "<style>" + d + "{#modernizr{height:3px}}" + "</style>"
            ).appendTo("head"),
            f = b('<div id="modernizr" />').appendTo("html");
          (a = f.height() === 3), f.remove(), e.remove();
        }
        return a;
      },
      csstransitions: function () {
        return !!j;
      },
    },
    l;
  if (e) for (l in k) e.hasOwnProperty(l) || e.addTest(l, k[l]);
  else {
    e = a.Modernizr = { _version: "1.6ish: miniModernizr for Isotope" };
    var m = " ",
      n;
    for (l in k) (n = k[l]()), (e[l] = n), (m += " " + (n ? "" : "no-") + l);
    b("html").addClass(m);
  }
  if (e.csstransforms) {
    var o = e.csstransforms3d
        ? {
            translate: function (a) {
              return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) ";
            },
            scale: function (a) {
              return "scale3d(" + a + ", " + a + ", 1) ";
            },
          }
        : {
            translate: function (a) {
              return "translate(" + a[0] + "px, " + a[1] + "px) ";
            },
            scale: function (a) {
              return "scale(" + a + ") ";
            },
          },
      p = function (a, c, d) {
        var e = b.data(a, "isoTransform") || {},
          f = {},
          g,
          h = {},
          j;
        (f[c] = d), b.extend(e, f);
        for (g in e) (j = e[g]), (h[g] = o[g](j));
        var k = h.translate || "",
          l = h.scale || "",
          m = k + l;
        b.data(a, "isoTransform", e), (a.style[i] = m);
      };
    (b.cssNumber.scale = !0),
      (b.cssHooks.scale = {
        set: function (a, b) {
          p(a, "scale", b);
        },
        get: function (a, c) {
          var d = b.data(a, "isoTransform");
          return d && d.scale ? d.scale : 1;
        },
      }),
      (b.fx.step.scale = function (a) {
        b.cssHooks.scale.set(a.elem, a.now + a.unit);
      }),
      (b.cssNumber.translate = !0),
      (b.cssHooks.translate = {
        set: function (a, b) {
          p(a, "translate", b);
        },
        get: function (a, c) {
          var d = b.data(a, "isoTransform");
          return d && d.translate ? d.translate : [0, 0];
        },
      });
  }
  var q, r;
  e.csstransitions &&
    ((q = {
      WebkitTransitionProperty: "webkitTransitionEnd",
      MozTransitionProperty: "transitionend",
      OTransitionProperty: "oTransitionEnd otransitionend",
      transitionProperty: "transitionend",
    }[j]),
    (r = h("transitionDuration")));
  var s = b.event,
    t = b.event.handle ? "handle" : "dispatch",
    u;
  (s.special.smartresize = {
    setup: function () {
      b(this).bind("resize", s.special.smartresize.handler);
    },
    teardown: function () {
      b(this).unbind("resize", s.special.smartresize.handler);
    },
    handler: function (a, b) {
      var c = this,
        d = arguments;
      (a.type = "smartresize"),
        u && clearTimeout(u),
        (u = setTimeout(
          function () {
            s[t].apply(c, d);
          },
          b === "execAsap" ? 0 : 100
        ));
    },
  }),
    (b.fn.smartresize = function (a) {
      return a
        ? this.bind("smartresize", a)
        : this.trigger("smartresize", ["execAsap"]);
    }),
    (b.Isotope = function (a, c, d) {
      (this.element = b(c)), this._create(a), this._init(d);
    });
  var v = ["width", "height"],
    w = b(a);
  (b.Isotope.settings = {
    resizable: !0,
    layoutMode: "masonry",
    containerClass: "isotope",
    itemClass: "isotope-item",
    hiddenClass: "isotope-hidden",
    hiddenStyle: { opacity: 0, scale: 0.001 },
    visibleStyle: { opacity: 1, scale: 1 },
    containerStyle: { position: "relative", overflow: "hidden" },
    animationEngine: "best-available",
    animationOptions: { queue: !1, duration: 800 },
    sortBy: "original-order",
    sortAscending: !0,
    resizesContainer: !0,
    transformsEnabled: !0,
    itemPositionDataEnabled: !1,
  }),
    (b.Isotope.prototype = {
      _create: function (a) {
        (this.options = b.extend({}, b.Isotope.settings, a)),
          (this.styleQueue = []),
          (this.elemCount = 0);
        var c = this.element[0].style;
        this.originalStyle = {};
        var d = v.slice(0);
        for (var e in this.options.containerStyle) d.push(e);
        for (var f = 0, g = d.length; f < g; f++)
          (e = d[f]), (this.originalStyle[e] = c[e] || "");
        this.element.css(this.options.containerStyle),
          this._updateAnimationEngine(),
          this._updateUsingTransforms();
        var h = {
          "original-order": function (a, b) {
            return b.elemCount++, b.elemCount;
          },
          random: function () {
            return Math.random();
          },
        };
        (this.options.getSortData = b.extend(this.options.getSortData, h)),
          this.reloadItems(),
          (this.offset = {
            left: parseInt(this.element.css("padding-left") || 0, 10),
            top: parseInt(this.element.css("padding-top") || 0, 10),
          });
        var i = this;
        setTimeout(function () {
          i.element.addClass(i.options.containerClass);
        }, 0),
          this.options.resizable &&
            w.bind("smartresize.isotope", function () {
              i.resize();
            }),
          this.element.delegate(
            "." + this.options.hiddenClass,
            "click",
            function () {
              return !1;
            }
          );
      },
      _getAtoms: function (a) {
        var b = this.options.itemSelector,
          c = b ? a.filter(b).add(a.find(b)) : a,
          d = { position: "absolute" };
        return (
          (c = c.filter(function (a, b) {
            return b.nodeType === 1;
          })),
          this.usingTransforms && ((d.left = 0), (d.top = 0)),
          c.css(d).addClass(this.options.itemClass),
          this.updateSortData(c, !0),
          c
        );
      },
      _init: function (a) {
        (this.$filteredAtoms = this._filter(this.$allAtoms)),
          this._sort(),
          this.reLayout(a);
      },
      option: function (a) {
        if (b.isPlainObject(a)) {
          this.options = b.extend(!0, this.options, a);
          var c;
          for (var d in a) (c = "_update" + f(d)), this[c] && this[c]();
        }
      },
      _updateAnimationEngine: function () {
        var a = this.options.animationEngine
            .toLowerCase()
            .replace(/[ _\-]/g, ""),
          b;
        switch (a) {
          case "css":
          case "none":
            b = !1;
            break;
          case "jquery":
            b = !0;
            break;
          default:
            b = !e.csstransitions;
        }
        (this.isUsingJQueryAnimation = b), this._updateUsingTransforms();
      },
      _updateTransformsEnabled: function () {
        this._updateUsingTransforms();
      },
      _updateUsingTransforms: function () {
        var a = (this.usingTransforms =
          this.options.transformsEnabled &&
          e.csstransforms &&
          e.csstransitions &&
          !this.isUsingJQueryAnimation);
        a ||
          (delete this.options.hiddenStyle.scale,
          delete this.options.visibleStyle.scale),
          (this.getPositionStyles = a ? this._translate : this._positionAbs);
      },
      _filter: function (a) {
        var b = this.options.filter === "" ? "*" : this.options.filter;
        if (!b) return a;
        var c = this.options.hiddenClass,
          d = "." + c,
          e = a.filter(d),
          f = e;
        if (b !== "*") {
          f = e.filter(b);
          var g = a.not(d).not(b).addClass(c);
          this.styleQueue.push({ $el: g, style: this.options.hiddenStyle });
        }
        return (
          this.styleQueue.push({ $el: f, style: this.options.visibleStyle }),
          f.removeClass(c),
          a.filter(b)
        );
      },
      updateSortData: function (a, c) {
        var d = this,
          e = this.options.getSortData,
          f,
          g;
        a.each(function () {
          (f = b(this)), (g = {});
          for (var a in e)
            !c && a === "original-order"
              ? (g[a] = b.data(this, "isotope-sort-data")[a])
              : (g[a] = e[a](f, d));
          b.data(this, "isotope-sort-data", g);
        });
      },
      _sort: function () {
        var a = this.options.sortBy,
          b = this._getSorter,
          c = this.options.sortAscending ? 1 : -1,
          d = function (d, e) {
            var f = b(d, a),
              g = b(e, a);
            return (
              f === g &&
                a !== "original-order" &&
                ((f = b(d, "original-order")), (g = b(e, "original-order"))),
              (f > g ? 1 : f < g ? -1 : 0) * c
            );
          };
        this.$filteredAtoms.sort(d);
      },
      _getSorter: function (a, c) {
        return b.data(a, "isotope-sort-data")[c];
      },
      _translate: function (a, b) {
        return { translate: [a, b] };
      },
      _positionAbs: function (a, b) {
        return { left: a, top: b };
      },
      _pushPosition: function (a, b, c) {
        (b = Math.round(b + this.offset.left)),
          (c = Math.round(c + this.offset.top));
        var d = this.getPositionStyles(b, c);
        this.styleQueue.push({ $el: a, style: d }),
          this.options.itemPositionDataEnabled &&
            a.data("isotope-item-position", { x: b, y: c });
      },
      layout: function (a, b) {
        var c = this.options.layoutMode;
        this["_" + c + "Layout"](a);
        if (this.options.resizesContainer) {
          var d = this["_" + c + "GetContainerSize"]();
          this.styleQueue.push({ $el: this.element, style: d });
        }
        this._processStyleQueue(a, b), (this.isLaidOut = !0);
      },
      _processStyleQueue: function (a, c) {
        var d = this.isLaidOut
            ? this.isUsingJQueryAnimation
              ? "animate"
              : "css"
            : "css",
          f = this.options.animationOptions,
          g = this.options.onLayout,
          h,
          i,
          j,
          k;
        i = function (a, b) {
          b.$el[d](b.style, f);
        };
        if (this._isInserting && this.isUsingJQueryAnimation)
          i = function (a, b) {
            (h = b.$el.hasClass("no-transition") ? "css" : d),
              b.$el[h](b.style, f);
          };
        else if (c || g || f.complete) {
          var l = !1,
            m = [c, g, f.complete],
            n = this;
          (j = !0),
            (k = function () {
              if (l) return;
              var b;
              for (var c = 0, d = m.length; c < d; c++)
                (b = m[c]), typeof b == "function" && b.call(n.element, a, n);
              l = !0;
            });
          if (this.isUsingJQueryAnimation && d === "animate")
            (f.complete = k), (j = !1);
          else if (e.csstransitions) {
            var o = 0,
              p = this.styleQueue[0],
              s = p && p.$el,
              t;
            while (!s || !s.length) {
              t = this.styleQueue[o++];
              if (!t) return;
              s = t.$el;
            }
            var u = parseFloat(getComputedStyle(s[0])[r]);
            u > 0 &&
              ((i = function (a, b) {
                b.$el[d](b.style, f).one(q, k);
              }),
              (j = !1));
          }
        }
        b.each(this.styleQueue, i), j && k(), (this.styleQueue = []);
      },
      resize: function () {
        this["_" + this.options.layoutMode + "ResizeChanged"]() &&
          this.reLayout();
      },
      reLayout: function (a) {
        this["_" + this.options.layoutMode + "Reset"](),
          this.layout(this.$filteredAtoms, a);
      },
      addItems: function (a, b) {
        var c = this._getAtoms(a);
        (this.$allAtoms = this.$allAtoms.add(c)), b && b(c);
      },
      insert: function (a, b) {
        this.element.append(a);
        var c = this;
        this.addItems(a, function (a) {
          var d = c._filter(a);
          c._addHideAppended(d),
            c._sort(),
            c.reLayout(),
            c._revealAppended(d, b);
        });
      },
      appended: function (a, b) {
        var c = this;
        this.addItems(a, function (a) {
          c._addHideAppended(a), c.layout(a), c._revealAppended(a, b);
        });
      },
      _addHideAppended: function (a) {
        (this.$filteredAtoms = this.$filteredAtoms.add(a)),
          a.addClass("no-transition"),
          (this._isInserting = !0),
          this.styleQueue.push({ $el: a, style: this.options.hiddenStyle });
      },
      _revealAppended: function (a, b) {
        var c = this;
        setTimeout(function () {
          a.removeClass("no-transition"),
            c.styleQueue.push({ $el: a, style: c.options.visibleStyle }),
            (c._isInserting = !1),
            c._processStyleQueue(a, b);
        }, 10);
      },
      reloadItems: function () {
        this.$allAtoms = this._getAtoms(this.element.children());
      },
      remove: function (a, b) {
        (this.$allAtoms = this.$allAtoms.not(a)),
          (this.$filteredAtoms = this.$filteredAtoms.not(a));
        var c = this,
          d = function () {
            a.remove(), b && b.call(c.element);
          };
        a.filter(":not(." + this.options.hiddenClass + ")").length
          ? (this.styleQueue.push({ $el: a, style: this.options.hiddenStyle }),
            this._sort(),
            this.reLayout(d))
          : d();
      },
      shuffle: function (a) {
        this.updateSortData(this.$allAtoms),
          (this.options.sortBy = "random"),
          this._sort(),
          this.reLayout(a);
      },
      destroy: function () {
        var a = this.usingTransforms,
          b = this.options;
        this.$allAtoms
          .removeClass(b.hiddenClass + " " + b.itemClass)
          .each(function () {
            var b = this.style;
            (b.position = ""),
              (b.top = ""),
              (b.left = ""),
              (b.opacity = ""),
              a && (b[i] = "");
          });
        var c = this.element[0].style;
        for (var d in this.originalStyle) c[d] = this.originalStyle[d];
        this.element
          .unbind(".isotope")
          .undelegate("." + b.hiddenClass, "click")
          .removeClass(b.containerClass)
          .removeData("isotope"),
          w.unbind(".isotope");
      },
      _getSegments: function (a) {
        var b = this.options.layoutMode,
          c = a ? "rowHeight" : "columnWidth",
          d = a ? "height" : "width",
          e = a ? "rows" : "cols",
          g = this.element[d](),
          h,
          i =
            (this.options[b] && this.options[b][c]) ||
            this.$filteredAtoms["outer" + f(d)](!0) ||
            g;
        (h = Math.floor(g / i)),
          (h = Math.max(h, 1)),
          (this[b][e] = h),
          (this[b][c] = i);
      },
      _checkIfSegmentsChanged: function (a) {
        var b = this.options.layoutMode,
          c = a ? "rows" : "cols",
          d = this[b][c];
        return this._getSegments(a), this[b][c] !== d;
      },
      _masonryReset: function () {
        (this.masonry = {}), this._getSegments();
        var a = this.masonry.cols;
        this.masonry.colYs = [];
        while (a--) this.masonry.colYs.push(0);
      },
      _masonryLayout: function (a) {
        var c = this,
          d = c.masonry;
        a.each(function () {
          var a = b(this),
            e = Math.ceil(a.outerWidth(!0) / d.columnWidth);
          e = Math.min(e, d.cols);
          if (e === 1) c._masonryPlaceBrick(a, d.colYs);
          else {
            var f = d.cols + 1 - e,
              g = [],
              h,
              i;
            for (i = 0; i < f; i++)
              (h = d.colYs.slice(i, i + e)), (g[i] = Math.max.apply(Math, h));
            c._masonryPlaceBrick(a, g);
          }
        });
      },
      _masonryPlaceBrick: function (a, b) {
        var c = Math.min.apply(Math, b),
          d = 0;
        for (var e = 0, f = b.length; e < f; e++)
          if (b[e] === c) {
            d = e;
            break;
          }
        var g = this.masonry.columnWidth * d,
          h = c;
        this._pushPosition(a, g, h);
        var i = c + a.outerHeight(!0),
          j = this.masonry.cols + 1 - f;
        for (e = 0; e < j; e++) this.masonry.colYs[d + e] = i;
      },
      _masonryGetContainerSize: function () {
        var a = Math.max.apply(Math, this.masonry.colYs);
        return { height: a };
      },
      _masonryResizeChanged: function () {
        return this._checkIfSegmentsChanged();
      },
      _fitRowsReset: function () {
        this.fitRows = { x: 0, y: 0, height: 0 };
      },
      _fitRowsLayout: function (a) {
        var c = this,
          d = this.element.width(),
          e = this.fitRows;
        a.each(function () {
          var a = b(this),
            f = a.outerWidth(!0),
            g = a.outerHeight(!0);
          e.x !== 0 && f + e.x > d && ((e.x = 0), (e.y = e.height)),
            c._pushPosition(a, e.x, e.y),
            (e.height = Math.max(e.y + g, e.height)),
            (e.x += f);
        });
      },
      _fitRowsGetContainerSize: function () {
        return { height: this.fitRows.height };
      },
      _fitRowsResizeChanged: function () {
        return !0;
      },
      _cellsByRowReset: function () {
        (this.cellsByRow = { index: 0 }),
          this._getSegments(),
          this._getSegments(!0);
      },
      _cellsByRowLayout: function (a) {
        var c = this,
          d = this.cellsByRow;
        a.each(function () {
          var a = b(this),
            e = d.index % d.cols,
            f = Math.floor(d.index / d.cols),
            g = (e + 0.5) * d.columnWidth - a.outerWidth(!0) / 2,
            h = (f + 0.5) * d.rowHeight - a.outerHeight(!0) / 2;
          c._pushPosition(a, g, h), d.index++;
        });
      },
      _cellsByRowGetContainerSize: function () {
        return {
          height:
            Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) *
              this.cellsByRow.rowHeight +
            this.offset.top,
        };
      },
      _cellsByRowResizeChanged: function () {
        return this._checkIfSegmentsChanged();
      },
      _straightDownReset: function () {
        this.straightDown = { y: 0 };
      },
      _straightDownLayout: function (a) {
        var c = this;
        a.each(function (a) {
          var d = b(this);
          c._pushPosition(d, 0, c.straightDown.y),
            (c.straightDown.y += d.outerHeight(!0));
        });
      },
      _straightDownGetContainerSize: function () {
        return { height: this.straightDown.y };
      },
      _straightDownResizeChanged: function () {
        return !0;
      },
      _masonryHorizontalReset: function () {
        (this.masonryHorizontal = {}), this._getSegments(!0);
        var a = this.masonryHorizontal.rows;
        this.masonryHorizontal.rowXs = [];
        while (a--) this.masonryHorizontal.rowXs.push(0);
      },
      _masonryHorizontalLayout: function (a) {
        var c = this,
          d = c.masonryHorizontal;
        a.each(function () {
          var a = b(this),
            e = Math.ceil(a.outerHeight(!0) / d.rowHeight);
          e = Math.min(e, d.rows);
          if (e === 1) c._masonryHorizontalPlaceBrick(a, d.rowXs);
          else {
            var f = d.rows + 1 - e,
              g = [],
              h,
              i;
            for (i = 0; i < f; i++)
              (h = d.rowXs.slice(i, i + e)), (g[i] = Math.max.apply(Math, h));
            c._masonryHorizontalPlaceBrick(a, g);
          }
        });
      },
      _masonryHorizontalPlaceBrick: function (a, b) {
        var c = Math.min.apply(Math, b),
          d = 0;
        for (var e = 0, f = b.length; e < f; e++)
          if (b[e] === c) {
            d = e;
            break;
          }
        var g = c,
          h = this.masonryHorizontal.rowHeight * d;
        this._pushPosition(a, g, h);
        var i = c + a.outerWidth(!0),
          j = this.masonryHorizontal.rows + 1 - f;
        for (e = 0; e < j; e++) this.masonryHorizontal.rowXs[d + e] = i;
      },
      _masonryHorizontalGetContainerSize: function () {
        var a = Math.max.apply(Math, this.masonryHorizontal.rowXs);
        return { width: a };
      },
      _masonryHorizontalResizeChanged: function () {
        return this._checkIfSegmentsChanged(!0);
      },
      _fitColumnsReset: function () {
        this.fitColumns = { x: 0, y: 0, width: 0 };
      },
      _fitColumnsLayout: function (a) {
        var c = this,
          d = this.element.height(),
          e = this.fitColumns;
        a.each(function () {
          var a = b(this),
            f = a.outerWidth(!0),
            g = a.outerHeight(!0);
          e.y !== 0 && g + e.y > d && ((e.x = e.width), (e.y = 0)),
            c._pushPosition(a, e.x, e.y),
            (e.width = Math.max(e.x + f, e.width)),
            (e.y += g);
        });
      },
      _fitColumnsGetContainerSize: function () {
        return { width: this.fitColumns.width };
      },
      _fitColumnsResizeChanged: function () {
        return !0;
      },
      _cellsByColumnReset: function () {
        (this.cellsByColumn = { index: 0 }),
          this._getSegments(),
          this._getSegments(!0);
      },
      _cellsByColumnLayout: function (a) {
        var c = this,
          d = this.cellsByColumn;
        a.each(function () {
          var a = b(this),
            e = Math.floor(d.index / d.rows),
            f = d.index % d.rows,
            g = (e + 0.5) * d.columnWidth - a.outerWidth(!0) / 2,
            h = (f + 0.5) * d.rowHeight - a.outerHeight(!0) / 2;
          c._pushPosition(a, g, h), d.index++;
        });
      },
      _cellsByColumnGetContainerSize: function () {
        return {
          width:
            Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) *
            this.cellsByColumn.columnWidth,
        };
      },
      _cellsByColumnResizeChanged: function () {
        return this._checkIfSegmentsChanged(!0);
      },
      _straightAcrossReset: function () {
        this.straightAcross = { x: 0 };
      },
      _straightAcrossLayout: function (a) {
        var c = this;
        a.each(function (a) {
          var d = b(this);
          c._pushPosition(d, c.straightAcross.x, 0),
            (c.straightAcross.x += d.outerWidth(!0));
        });
      },
      _straightAcrossGetContainerSize: function () {
        return { width: this.straightAcross.x };
      },
      _straightAcrossResizeChanged: function () {
        return !0;
      },
    }),
    (b.fn.imagesLoaded = function (a) {
      function h() {
        a.call(c, d);
      }
      function i(a) {
        var c = a.target;
        c.src !== f &&
          b.inArray(c, g) === -1 &&
          (g.push(c),
          --e <= 0 && (setTimeout(h), d.unbind(".imagesLoaded", i)));
      }
      var c = this,
        d = c.find("img").add(c.filter("img")),
        e = d.length,
        f =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
        g = [];
      return (
        e || h(),
        d.bind("load.imagesLoaded error.imagesLoaded", i).each(function () {
          var a = this.src;
          (this.src = f), (this.src = a);
        }),
        c
      );
    });
  var x = function (b) {
    a.console && a.console.error(b);
  };
  b.fn.isotope = function (a, c) {
    if (typeof a == "string") {
      var d = Array.prototype.slice.call(arguments, 1);
      this.each(function () {
        var c = b.data(this, "isotope");
        if (!c) {
          x(
            "cannot call methods on isotope prior to initialization; attempted to call method '" +
              a +
              "'"
          );
          return;
        }
        if (!b.isFunction(c[a]) || a.charAt(0) === "_") {
          x("no such method '" + a + "' for isotope instance");
          return;
        }
        c[a].apply(c, d);
      });
    } else
      this.each(function () {
        var d = b.data(this, "isotope");
        d
          ? (d.option(a), d._init(c))
          : b.data(this, "isotope", new b.Isotope(a, this, c));
      });
    return this;
  };
})(window, jQuery);
/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
if (Object.create) {
  !(function (a, b, c, d) {
    "use strict";
    function e(a, b, c) {
      return setTimeout(k(a, c), b);
    }
    function f(a, b, c) {
      return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
    }
    function g(a, b, c) {
      var e;
      if (a)
        if (a.forEach) a.forEach(b, c);
        else if (a.length !== d)
          for (e = 0; e < a.length; ) b.call(c, a[e], e, a), e++;
        else for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
    function h(a, b, c) {
      for (var e = Object.keys(b), f = 0; f < e.length; )
        (!c || (c && a[e[f]] === d)) && (a[e[f]] = b[e[f]]), f++;
      return a;
    }
    function i(a, b) {
      return h(a, b, !0);
    }
    function j(a, b, c) {
      var d,
        e = b.prototype;
      (d = a.prototype = Object.create(e)),
        (d.constructor = a),
        (d._super = e),
        c && h(d, c);
    }
    function k(a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    }
    function l(a, b) {
      return typeof a == kb ? a.apply(b ? b[0] || d : d, b) : a;
    }
    function m(a, b) {
      return a === d ? b : a;
    }
    function n(a, b, c) {
      g(r(b), function (b) {
        a.addEventListener(b, c, !1);
      });
    }
    function o(a, b, c) {
      g(r(b), function (b) {
        a.removeEventListener(b, c, !1);
      });
    }
    function p(a, b) {
      for (; a; ) {
        if (a == b) return !0;
        a = a.parentNode;
      }
      return !1;
    }
    function q(a, b) {
      return a.indexOf(b) > -1;
    }
    function r(a) {
      return a.trim().split(/\s+/g);
    }
    function s(a, b, c) {
      if (a.indexOf && !c) return a.indexOf(b);
      for (var d = 0; d < a.length; ) {
        if ((c && a[d][c] == b) || (!c && a[d] === b)) return d;
        d++;
      }
      return -1;
    }
    function t(a) {
      return Array.prototype.slice.call(a, 0);
    }
    function u(a, b, c) {
      for (var d = [], e = [], f = 0; f < a.length; ) {
        var g = b ? a[f][b] : a[f];
        s(e, g) < 0 && d.push(a[f]), (e[f] = g), f++;
      }
      return (
        c &&
          (d = b
            ? d.sort(function (a, c) {
                return a[b] > c[b];
              })
            : d.sort()),
        d
      );
    }
    function v(a, b) {
      for (
        var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0;
        g < ib.length;

      ) {
        if (((c = ib[g]), (e = c ? c + f : b), e in a)) return e;
        g++;
      }
      return d;
    }
    function w() {
      return ob++;
    }
    function x(a) {
      var b = a.ownerDocument;
      return b.defaultView || b.parentWindow;
    }
    function y(a, b) {
      var c = this;
      (this.manager = a),
        (this.callback = b),
        (this.element = a.element),
        (this.target = a.options.inputTarget),
        (this.domHandler = function (b) {
          l(a.options.enable, [a]) && c.handler(b);
        }),
        this.init();
    }
    function z(a) {
      var b,
        c = a.options.inputClass;
      return new (b = c ? c : rb ? N : sb ? Q : qb ? S : M)(a, A);
    }
    function A(a, b, c) {
      var d = c.pointers.length,
        e = c.changedPointers.length,
        f = b & yb && d - e === 0,
        g = b & (Ab | Bb) && d - e === 0;
      (c.isFirst = !!f),
        (c.isFinal = !!g),
        f && (a.session = {}),
        (c.eventType = b),
        B(a, c),
        a.emit("hammer.input", c),
        a.recognize(c),
        (a.session.prevInput = c);
    }
    function B(a, b) {
      var c = a.session,
        d = b.pointers,
        e = d.length;
      c.firstInput || (c.firstInput = E(b)),
        e > 1 && !c.firstMultiple
          ? (c.firstMultiple = E(b))
          : 1 === e && (c.firstMultiple = !1);
      var f = c.firstInput,
        g = c.firstMultiple,
        h = g ? g.center : f.center,
        i = (b.center = F(d));
      (b.timeStamp = nb()),
        (b.deltaTime = b.timeStamp - f.timeStamp),
        (b.angle = J(h, i)),
        (b.distance = I(h, i)),
        C(c, b),
        (b.offsetDirection = H(b.deltaX, b.deltaY)),
        (b.scale = g ? L(g.pointers, d) : 1),
        (b.rotation = g ? K(g.pointers, d) : 0),
        D(c, b);
      var j = a.element;
      p(b.srcEvent.target, j) && (j = b.srcEvent.target), (b.target = j);
    }
    function C(a, b) {
      var c = b.center,
        d = a.offsetDelta || {},
        e = a.prevDelta || {},
        f = a.prevInput || {};
      (b.eventType === yb || f.eventType === Ab) &&
        ((e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }),
        (d = a.offsetDelta = { x: c.x, y: c.y })),
        (b.deltaX = e.x + (c.x - d.x)),
        (b.deltaY = e.y + (c.y - d.y));
    }
    function D(a, b) {
      var c,
        e,
        f,
        g,
        h = a.lastInterval || b,
        i = b.timeStamp - h.timeStamp;
      if (b.eventType != Bb && (i > xb || h.velocity === d)) {
        var j = h.deltaX - b.deltaX,
          k = h.deltaY - b.deltaY,
          l = G(i, j, k);
        (e = l.x),
          (f = l.y),
          (c = mb(l.x) > mb(l.y) ? l.x : l.y),
          (g = H(j, k)),
          (a.lastInterval = b);
      } else
        (c = h.velocity),
          (e = h.velocityX),
          (f = h.velocityY),
          (g = h.direction);
      (b.velocity = c), (b.velocityX = e), (b.velocityY = f), (b.direction = g);
    }
    function E(a) {
      for (var b = [], c = 0; c < a.pointers.length; )
        (b[c] = {
          clientX: lb(a.pointers[c].clientX),
          clientY: lb(a.pointers[c].clientY),
        }),
          c++;
      return {
        timeStamp: nb(),
        pointers: b,
        center: F(b),
        deltaX: a.deltaX,
        deltaY: a.deltaY,
      };
    }
    function F(a) {
      var b = a.length;
      if (1 === b) return { x: lb(a[0].clientX), y: lb(a[0].clientY) };
      for (var c = 0, d = 0, e = 0; b > e; )
        (c += a[e].clientX), (d += a[e].clientY), e++;
      return { x: lb(c / b), y: lb(d / b) };
    }
    function G(a, b, c) {
      return { x: b / a || 0, y: c / a || 0 };
    }
    function H(a, b) {
      return a === b
        ? Cb
        : mb(a) >= mb(b)
        ? a > 0
          ? Db
          : Eb
        : b > 0
        ? Fb
        : Gb;
    }
    function I(a, b, c) {
      c || (c = Kb);
      var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];
      return Math.sqrt(d * d + e * e);
    }
    function J(a, b, c) {
      c || (c = Kb);
      var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];
      return (180 * Math.atan2(e, d)) / Math.PI;
    }
    function K(a, b) {
      return J(b[1], b[0], Lb) - J(a[1], a[0], Lb);
    }
    function L(a, b) {
      return I(b[0], b[1], Lb) / I(a[0], a[1], Lb);
    }
    function M() {
      (this.evEl = Nb),
        (this.evWin = Ob),
        (this.allow = !0),
        (this.pressed = !1),
        y.apply(this, arguments);
    }
    function N() {
      (this.evEl = Rb),
        (this.evWin = Sb),
        y.apply(this, arguments),
        (this.store = this.manager.session.pointerEvents = []);
    }
    function O() {
      (this.evTarget = Ub),
        (this.evWin = Vb),
        (this.started = !1),
        y.apply(this, arguments);
    }
    function P(a, b) {
      var c = t(a.touches),
        d = t(a.changedTouches);
      return b & (Ab | Bb) && (c = u(c.concat(d), "identifier", !0)), [c, d];
    }
    function Q() {
      (this.evTarget = Xb), (this.targetIds = {}), y.apply(this, arguments);
    }
    function R(a, b) {
      var c = t(a.touches),
        d = this.targetIds;
      if (b & (yb | zb) && 1 === c.length)
        return (d[c[0].identifier] = !0), [c, c];
      var e,
        f,
        g = t(a.changedTouches),
        h = [],
        i = this.target;
      if (
        ((f = c.filter(function (a) {
          return p(a.target, i);
        })),
        b === yb)
      )
        for (e = 0; e < f.length; ) (d[f[e].identifier] = !0), e++;
      for (e = 0; e < g.length; )
        d[g[e].identifier] && h.push(g[e]),
          b & (Ab | Bb) && delete d[g[e].identifier],
          e++;
      return h.length ? [u(f.concat(h), "identifier", !0), h] : void 0;
    }
    function S() {
      y.apply(this, arguments);
      var a = k(this.handler, this);
      (this.touch = new Q(this.manager, a)),
        (this.mouse = new M(this.manager, a));
    }
    function T(a, b) {
      (this.manager = a), this.set(b);
    }
    function U(a) {
      if (q(a, bc)) return bc;
      var b = q(a, cc),
        c = q(a, dc);
      return b && c
        ? cc + " " + dc
        : b || c
        ? b
          ? cc
          : dc
        : q(a, ac)
        ? ac
        : _b;
    }
    function V(a) {
      (this.id = w()),
        (this.manager = null),
        (this.options = i(a || {}, this.defaults)),
        (this.options.enable = m(this.options.enable, !0)),
        (this.state = ec),
        (this.simultaneous = {}),
        (this.requireFail = []);
    }
    function W(a) {
      return a & jc
        ? "cancel"
        : a & hc
        ? "end"
        : a & gc
        ? "move"
        : a & fc
        ? "start"
        : "";
    }
    function X(a) {
      return a == Gb
        ? "down"
        : a == Fb
        ? "up"
        : a == Db
        ? "left"
        : a == Eb
        ? "right"
        : "";
    }
    function Y(a, b) {
      var c = b.manager;
      return c ? c.get(a) : a;
    }
    function Z() {
      V.apply(this, arguments);
    }
    function $() {
      Z.apply(this, arguments), (this.pX = null), (this.pY = null);
    }
    function _() {
      Z.apply(this, arguments);
    }
    function ab() {
      V.apply(this, arguments), (this._timer = null), (this._input = null);
    }
    function bb() {
      Z.apply(this, arguments);
    }
    function cb() {
      Z.apply(this, arguments);
    }
    function db() {
      V.apply(this, arguments),
        (this.pTime = !1),
        (this.pCenter = !1),
        (this._timer = null),
        (this._input = null),
        (this.count = 0);
    }
    function eb(a, b) {
      return (
        (b = b || {}),
        (b.recognizers = m(b.recognizers, eb.defaults.preset)),
        new fb(a, b)
      );
    }
    function fb(a, b) {
      (b = b || {}),
        (this.options = i(b, eb.defaults)),
        (this.options.inputTarget = this.options.inputTarget || a),
        (this.handlers = {}),
        (this.session = {}),
        (this.recognizers = []),
        (this.element = a),
        (this.input = z(this)),
        (this.touchAction = new T(this, this.options.touchAction)),
        gb(this, !0),
        g(
          b.recognizers,
          function (a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
          },
          this
        );
    }
    function gb(a, b) {
      var c = a.element;
      g(a.options.cssProps, function (a, d) {
        c.style[v(c.style, d)] = b ? a : "";
      });
    }
    function hb(a, c) {
      var d = b.createEvent("Event");
      d.initEvent(a, !0, !0), (d.gesture = c), c.target.dispatchEvent(d);
    }
    var ib = ["", "webkit", "moz", "MS", "ms", "o"],
      jb = b.createElement("div"),
      kb = "function",
      lb = Math.round,
      mb = Math.abs,
      nb = Date.now,
      ob = 1,
      pb = /mobile|tablet|ip(ad|hone|od)|android/i,
      qb = "ontouchstart" in a,
      rb = v(a, "PointerEvent") !== d,
      sb = qb && pb.test(navigator.userAgent),
      tb = "touch",
      ub = "pen",
      vb = "mouse",
      wb = "kinect",
      xb = 25,
      yb = 1,
      zb = 2,
      Ab = 4,
      Bb = 8,
      Cb = 1,
      Db = 2,
      Eb = 4,
      Fb = 8,
      Gb = 16,
      Hb = Db | Eb,
      Ib = Fb | Gb,
      Jb = Hb | Ib,
      Kb = ["x", "y"],
      Lb = ["clientX", "clientY"];
    y.prototype = {
      handler: function () {},
      init: function () {
        this.evEl && n(this.element, this.evEl, this.domHandler),
          this.evTarget && n(this.target, this.evTarget, this.domHandler),
          this.evWin && n(x(this.element), this.evWin, this.domHandler);
      },
      destroy: function () {
        this.evEl && o(this.element, this.evEl, this.domHandler),
          this.evTarget && o(this.target, this.evTarget, this.domHandler),
          this.evWin && o(x(this.element), this.evWin, this.domHandler);
      },
    };
    var Mb = { mousedown: yb, mousemove: zb, mouseup: Ab },
      Nb = "mousedown",
      Ob = "mousemove mouseup";
    j(M, y, {
      handler: function (a) {
        var b = Mb[a.type];
        b & yb && 0 === a.button && (this.pressed = !0),
          b & zb && 1 !== a.which && (b = Ab),
          this.pressed &&
            this.allow &&
            (b & Ab && (this.pressed = !1),
            this.callback(this.manager, b, {
              pointers: [a],
              changedPointers: [a],
              pointerType: vb,
              srcEvent: a,
            }));
      },
    });
    var Pb = {
        pointerdown: yb,
        pointermove: zb,
        pointerup: Ab,
        pointercancel: Bb,
        pointerout: Bb,
      },
      Qb = { 2: tb, 3: ub, 4: vb, 5: wb },
      Rb = "pointerdown",
      Sb = "pointermove pointerup pointercancel";
    a.MSPointerEvent &&
      ((Rb = "MSPointerDown"),
      (Sb = "MSPointerMove MSPointerUp MSPointerCancel")),
      j(N, y, {
        handler: function (a) {
          var b = this.store,
            c = !1,
            d = a.type.toLowerCase().replace("ms", ""),
            e = Pb[d],
            f = Qb[a.pointerType] || a.pointerType,
            g = f == tb,
            h = s(b, a.pointerId, "pointerId");
          e & yb && (0 === a.button || g)
            ? 0 > h && (b.push(a), (h = b.length - 1))
            : e & (Ab | Bb) && (c = !0),
            0 > h ||
              ((b[h] = a),
              this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a,
              }),
              c && b.splice(h, 1));
        },
      });
    var Tb = { touchstart: yb, touchmove: zb, touchend: Ab, touchcancel: Bb },
      Ub = "touchstart",
      Vb = "touchstart touchmove touchend touchcancel";
    j(O, y, {
      handler: function (a) {
        var b = Tb[a.type];
        if ((b === yb && (this.started = !0), this.started)) {
          var c = P.call(this, a, b);
          b & (Ab | Bb) &&
            c[0].length - c[1].length === 0 &&
            (this.started = !1),
            this.callback(this.manager, b, {
              pointers: c[0],
              changedPointers: c[1],
              pointerType: tb,
              srcEvent: a,
            });
        }
      },
    });
    var Wb = { touchstart: yb, touchmove: zb, touchend: Ab, touchcancel: Bb },
      Xb = "touchstart touchmove touchend touchcancel";
    j(Q, y, {
      handler: function (a) {
        var b = Wb[a.type],
          c = R.call(this, a, b);
        c &&
          this.callback(this.manager, b, {
            pointers: c[0],
            changedPointers: c[1],
            pointerType: tb,
            srcEvent: a,
          });
      },
    }),
      j(S, y, {
        handler: function (a, b, c) {
          var d = c.pointerType == tb,
            e = c.pointerType == vb;
          if (d) this.mouse.allow = !1;
          else if (e && !this.mouse.allow) return;
          b & (Ab | Bb) && (this.mouse.allow = !0), this.callback(a, b, c);
        },
        destroy: function () {
          this.touch.destroy(), this.mouse.destroy();
        },
      });
    var Yb = v(jb.style, "touchAction"),
      Zb = Yb !== d,
      $b = "compute",
      _b = "auto",
      ac = "manipulation",
      bc = "none",
      cc = "pan-x",
      dc = "pan-y";
    T.prototype = {
      set: function (a) {
        a == $b && (a = this.compute()),
          Zb && (this.manager.element.style[Yb] = a),
          (this.actions = a.toLowerCase().trim());
      },
      update: function () {
        this.set(this.manager.options.touchAction);
      },
      compute: function () {
        var a = [];
        return (
          g(this.manager.recognizers, function (b) {
            l(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
          }),
          U(a.join(" "))
        );
      },
      preventDefaults: function (a) {
        if (!Zb) {
          var b = a.srcEvent,
            c = a.offsetDirection;
          if (this.manager.session.prevented) return void b.preventDefault();
          var d = this.actions,
            e = q(d, bc),
            f = q(d, dc),
            g = q(d, cc);
          return e || (f && c & Hb) || (g && c & Ib)
            ? this.preventSrc(b)
            : void 0;
        }
      },
      preventSrc: function (a) {
        (this.manager.session.prevented = !0), a.preventDefault();
      },
    };
    var ec = 1,
      fc = 2,
      gc = 4,
      hc = 8,
      ic = hc,
      jc = 16,
      kc = 32;
    (V.prototype = {
      defaults: {},
      set: function (a) {
        return (
          h(this.options, a),
          this.manager && this.manager.touchAction.update(),
          this
        );
      },
      recognizeWith: function (a) {
        if (f(a, "recognizeWith", this)) return this;
        var b = this.simultaneous;
        return (
          (a = Y(a, this)),
          b[a.id] || ((b[a.id] = a), a.recognizeWith(this)),
          this
        );
      },
      dropRecognizeWith: function (a) {
        return f(a, "dropRecognizeWith", this)
          ? this
          : ((a = Y(a, this)), delete this.simultaneous[a.id], this);
      },
      requireFailure: function (a) {
        if (f(a, "requireFailure", this)) return this;
        var b = this.requireFail;
        return (
          (a = Y(a, this)),
          -1 === s(b, a) && (b.push(a), a.requireFailure(this)),
          this
        );
      },
      dropRequireFailure: function (a) {
        if (f(a, "dropRequireFailure", this)) return this;
        a = Y(a, this);
        var b = s(this.requireFail, a);
        return b > -1 && this.requireFail.splice(b, 1), this;
      },
      hasRequireFailures: function () {
        return this.requireFail.length > 0;
      },
      canRecognizeWith: function (a) {
        return !!this.simultaneous[a.id];
      },
      emit: function (a) {
        function b(b) {
          c.manager.emit(c.options.event + (b ? W(d) : ""), a);
        }
        var c = this,
          d = this.state;
        hc > d && b(!0), b(), d >= hc && b(!0);
      },
      tryEmit: function (a) {
        return this.canEmit() ? this.emit(a) : void (this.state = kc);
      },
      canEmit: function () {
        for (var a = 0; a < this.requireFail.length; ) {
          if (!(this.requireFail[a].state & (kc | ec))) return !1;
          a++;
        }
        return !0;
      },
      recognize: function (a) {
        var b = h({}, a);
        return l(this.options.enable, [this, b])
          ? (this.state & (ic | jc | kc) && (this.state = ec),
            (this.state = this.process(b)),
            void (this.state & (fc | gc | hc | jc) && this.tryEmit(b)))
          : (this.reset(), void (this.state = kc));
      },
      process: function () {},
      getTouchAction: function () {},
      reset: function () {},
    }),
      j(Z, V, {
        defaults: { pointers: 1 },
        attrTest: function (a) {
          var b = this.options.pointers;
          return 0 === b || a.pointers.length === b;
        },
        process: function (a) {
          var b = this.state,
            c = a.eventType,
            d = b & (fc | gc),
            e = this.attrTest(a);
          return d && (c & Bb || !e)
            ? b | jc
            : d || e
            ? c & Ab
              ? b | hc
              : b & fc
              ? b | gc
              : fc
            : kc;
        },
      }),
      j($, Z, {
        defaults: { event: "pan", threshold: 10, pointers: 1, direction: Jb },
        getTouchAction: function () {
          var a = this.options.direction,
            b = [];
          return a & Hb && b.push(dc), a & Ib && b.push(cc), b;
        },
        directionTest: function (a) {
          var b = this.options,
            c = !0,
            d = a.distance,
            e = a.direction,
            f = a.deltaX,
            g = a.deltaY;
          return (
            e & b.direction ||
              (b.direction & Hb
                ? ((e = 0 === f ? Cb : 0 > f ? Db : Eb),
                  (c = f != this.pX),
                  (d = Math.abs(a.deltaX)))
                : ((e = 0 === g ? Cb : 0 > g ? Fb : Gb),
                  (c = g != this.pY),
                  (d = Math.abs(a.deltaY)))),
            (a.direction = e),
            c && d > b.threshold && e & b.direction
          );
        },
        attrTest: function (a) {
          return (
            Z.prototype.attrTest.call(this, a) &&
            (this.state & fc || (!(this.state & fc) && this.directionTest(a)))
          );
        },
        emit: function (a) {
          (this.pX = a.deltaX), (this.pY = a.deltaY);
          var b = X(a.direction);
          b && this.manager.emit(this.options.event + b, a),
            this._super.emit.call(this, a);
        },
      }),
      j(_, Z, {
        defaults: { event: "pinch", threshold: 0, pointers: 2 },
        getTouchAction: function () {
          return [bc];
        },
        attrTest: function (a) {
          return (
            this._super.attrTest.call(this, a) &&
            (Math.abs(a.scale - 1) > this.options.threshold || this.state & fc)
          );
        },
        emit: function (a) {
          if ((this._super.emit.call(this, a), 1 !== a.scale)) {
            var b = a.scale < 1 ? "in" : "out";
            this.manager.emit(this.options.event + b, a);
          }
        },
      }),
      j(ab, V, {
        defaults: { event: "press", pointers: 1, time: 500, threshold: 5 },
        getTouchAction: function () {
          return [_b];
        },
        process: function (a) {
          var b = this.options,
            c = a.pointers.length === b.pointers,
            d = a.distance < b.threshold,
            f = a.deltaTime > b.time;
          if (((this._input = a), !d || !c || (a.eventType & (Ab | Bb) && !f)))
            this.reset();
          else if (a.eventType & yb)
            this.reset(),
              (this._timer = e(
                function () {
                  (this.state = ic), this.tryEmit();
                },
                b.time,
                this
              ));
          else if (a.eventType & Ab) return ic;
          return kc;
        },
        reset: function () {
          clearTimeout(this._timer);
        },
        emit: function (a) {
          this.state === ic &&
            (a && a.eventType & Ab
              ? this.manager.emit(this.options.event + "up", a)
              : ((this._input.timeStamp = nb()),
                this.manager.emit(this.options.event, this._input)));
        },
      }),
      j(bb, Z, {
        defaults: { event: "rotate", threshold: 0, pointers: 2 },
        getTouchAction: function () {
          return [bc];
        },
        attrTest: function (a) {
          return (
            this._super.attrTest.call(this, a) &&
            (Math.abs(a.rotation) > this.options.threshold || this.state & fc)
          );
        },
      }),
      j(cb, Z, {
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: 0.65,
          direction: Hb | Ib,
          pointers: 1,
        },
        getTouchAction: function () {
          return $.prototype.getTouchAction.call(this);
        },
        attrTest: function (a) {
          var b,
            c = this.options.direction;
          return (
            c & (Hb | Ib)
              ? (b = a.velocity)
              : c & Hb
              ? (b = a.velocityX)
              : c & Ib && (b = a.velocityY),
            this._super.attrTest.call(this, a) &&
              c & a.direction &&
              a.distance > this.options.threshold &&
              mb(b) > this.options.velocity &&
              a.eventType & Ab
          );
        },
        emit: function (a) {
          var b = X(a.direction);
          b && this.manager.emit(this.options.event + b, a),
            this.manager.emit(this.options.event, a);
        },
      }),
      j(db, V, {
        defaults: {
          event: "tap",
          pointers: 1,
          taps: 1,
          interval: 300,
          time: 250,
          threshold: 2,
          posThreshold: 10,
        },
        getTouchAction: function () {
          return [ac];
        },
        process: function (a) {
          var b = this.options,
            c = a.pointers.length === b.pointers,
            d = a.distance < b.threshold,
            f = a.deltaTime < b.time;
          if ((this.reset(), a.eventType & yb && 0 === this.count))
            return this.failTimeout();
          if (d && f && c) {
            if (a.eventType != Ab) return this.failTimeout();
            var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
              h = !this.pCenter || I(this.pCenter, a.center) < b.posThreshold;
            (this.pTime = a.timeStamp),
              (this.pCenter = a.center),
              h && g ? (this.count += 1) : (this.count = 1),
              (this._input = a);
            var i = this.count % b.taps;
            if (0 === i)
              return this.hasRequireFailures()
                ? ((this._timer = e(
                    function () {
                      (this.state = ic), this.tryEmit();
                    },
                    b.interval,
                    this
                  )),
                  fc)
                : ic;
          }
          return kc;
        },
        failTimeout: function () {
          return (
            (this._timer = e(
              function () {
                this.state = kc;
              },
              this.options.interval,
              this
            )),
            kc
          );
        },
        reset: function () {
          clearTimeout(this._timer);
        },
        emit: function () {
          this.state == ic &&
            ((this._input.tapCount = this.count),
            this.manager.emit(this.options.event, this._input));
        },
      }),
      (eb.VERSION = "2.0.4"),
      (eb.defaults = {
        domEvents: !1,
        touchAction: $b,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
          [bb, { enable: !1 }],
          [_, { enable: !1 }, ["rotate"]],
          [cb, { direction: Hb }],
          [$, { direction: Hb }, ["swipe"]],
          [db],
          [db, { event: "doubletap", taps: 2 }, ["tap"]],
          [ab],
        ],
        cssProps: {
          userSelect: "none",
          touchSelect: "none",
          touchCallout: "none",
          contentZooming: "none",
          userDrag: "none",
          tapHighlightColor: "rgba(0,0,0,0)",
        },
      });
    var lc = 1,
      mc = 2;
    (fb.prototype = {
      set: function (a) {
        return (
          h(this.options, a),
          a.touchAction && this.touchAction.update(),
          a.inputTarget &&
            (this.input.destroy(),
            (this.input.target = a.inputTarget),
            this.input.init()),
          this
        );
      },
      stop: function (a) {
        this.session.stopped = a ? mc : lc;
      },
      recognize: function (a) {
        var b = this.session;
        if (!b.stopped) {
          this.touchAction.preventDefaults(a);
          var c,
            d = this.recognizers,
            e = b.curRecognizer;
          (!e || (e && e.state & ic)) && (e = b.curRecognizer = null);
          for (var f = 0; f < d.length; )
            (c = d[f]),
              b.stopped === mc || (e && c != e && !c.canRecognizeWith(e))
                ? c.reset()
                : c.recognize(a),
              !e && c.state & (fc | gc | hc) && (e = b.curRecognizer = c),
              f++;
        }
      },
      get: function (a) {
        if (a instanceof V) return a;
        for (var b = this.recognizers, c = 0; c < b.length; c++)
          if (b[c].options.event == a) return b[c];
        return null;
      },
      add: function (a) {
        if (f(a, "add", this)) return this;
        var b = this.get(a.options.event);
        return (
          b && this.remove(b),
          this.recognizers.push(a),
          (a.manager = this),
          this.touchAction.update(),
          a
        );
      },
      remove: function (a) {
        if (f(a, "remove", this)) return this;
        var b = this.recognizers;
        return (
          (a = this.get(a)),
          b.splice(s(b, a), 1),
          this.touchAction.update(),
          this
        );
      },
      on: function (a, b) {
        var c = this.handlers;
        return (
          g(r(a), function (a) {
            (c[a] = c[a] || []), c[a].push(b);
          }),
          this
        );
      },
      off: function (a, b) {
        var c = this.handlers;
        return (
          g(r(a), function (a) {
            b ? c[a].splice(s(c[a], b), 1) : delete c[a];
          }),
          this
        );
      },
      emit: function (a, b) {
        this.options.domEvents && hb(a, b);
        var c = this.handlers[a] && this.handlers[a].slice();
        if (c && c.length) {
          (b.type = a),
            (b.preventDefault = function () {
              b.srcEvent.preventDefault();
            });
          for (var d = 0; d < c.length; ) c[d](b), d++;
        }
      },
      destroy: function () {
        this.element && gb(this, !1),
          (this.handlers = {}),
          (this.session = {}),
          this.input.destroy(),
          (this.element = null);
      },
    }),
      h(eb, {
        INPUT_START: yb,
        INPUT_MOVE: zb,
        INPUT_END: Ab,
        INPUT_CANCEL: Bb,
        STATE_POSSIBLE: ec,
        STATE_BEGAN: fc,
        STATE_CHANGED: gc,
        STATE_ENDED: hc,
        STATE_RECOGNIZED: ic,
        STATE_CANCELLED: jc,
        STATE_FAILED: kc,
        DIRECTION_NONE: Cb,
        DIRECTION_LEFT: Db,
        DIRECTION_RIGHT: Eb,
        DIRECTION_UP: Fb,
        DIRECTION_DOWN: Gb,
        DIRECTION_HORIZONTAL: Hb,
        DIRECTION_VERTICAL: Ib,
        DIRECTION_ALL: Jb,
        Manager: fb,
        Input: y,
        TouchAction: T,
        TouchInput: Q,
        MouseInput: M,
        PointerEventInput: N,
        TouchMouseInput: S,
        SingleTouchInput: O,
        Recognizer: V,
        AttrRecognizer: Z,
        Tap: db,
        Pan: $,
        Swipe: cb,
        Pinch: _,
        Rotate: bb,
        Press: ab,
        on: n,
        off: o,
        each: g,
        merge: i,
        extend: h,
        inherit: j,
        bindFn: k,
        prefixed: v,
      }),
      typeof define == kb && define.amd
        ? define(function () {
            return eb;
          })
        : "undefined" != typeof module && module.exports
        ? (module.exports = eb)
        : (a[c] = eb);
  })(window, document, "Hammer");
}

function initTabjumb() {
  jQuery(document).ready(function () {
    var a = document.location.toString();
    a.match("#") &&
      jQuery('.nav-tabs a[href="#' + a.split("#")[1] + '"]').tab("show"),
      jQuery(".nav-tabs area").on("shown.bs.tab", function (a) {
        window.location.hash = a.target.hash;
      });
  });
}
function initAddOpener() {
  $(".has-drop-down")
    .find(".has-drop-down-a")
    .after('<a href="#" class="opener">openre</a>'),
    jQuery("#nav li").mobileNav({
      hideOnClickOutside: !0,
      menuActiveClass: "hover",
      menuOpener: ">.opener",
      menuDrop: ">ul",
    });
}
function initHeadersticky() {
  jQuery(window).scroll(function () {
    var e = jQuery(window).scrollTop();
    (header = jQuery("#header").height() - 20),
      e >= header
        ? jQuery(".header").addClass("sticky")
        : e <= header && jQuery(".header").removeClass("sticky");
  });
}
function initSearchForm() {
  $(document).ready(function () {
    $(function () {
      $(".search-form a").on("click", function (o) {
        $(".search-form").toggleClass("open");
      }),
        $(document).on("click", function (o) {
          !1 === $(o.target).is(".search-form .input, .search-form a") &&
            $(".search-form").removeClass("open");
        });
    });
  });
}
