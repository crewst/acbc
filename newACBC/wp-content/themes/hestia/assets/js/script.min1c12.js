jQuery(document).ready(function(s){function n(t){var e=s(t);e.prop("disabled")||e.closest(".form-group").addClass("is-focused")}function e(t){var i=!1;(t.is(s.material.options.checkboxElements)||t.is(s.material.options.radioElements))&&(i=!0),t.closest("label").hover(function(){var t,e,o=s(this).find("input"),a=o.prop("disabled");i&&(t=s(this),e=a,(t.hasClass("checkbox-inline")||t.hasClass("radio-inline")?t:t.closest(".checkbox").length?t.closest(".checkbox"):t.closest(".radio")).toggleClass("disabled",e)),a||n(o)},function(){o(s(this).find("input"))})}function o(t){s(t).closest(".form-group").removeClass("is-focused")}s.expr[":"].notmdproc=function(t){return!s(t).data("mdproc")},s.material={options:{validate:!0,input:!0,ripples:!0,checkbox:!0,togglebutton:!0,radio:!0,arrive:!0,autofill:!1,withRipples:[".btn:not(.btn-link)",".card-image",".navbar a:not(.withoutripple)",".dropdown-menu a",".nav-tabs a:not(.withoutripple)",".withripple",".pagination li:not(.active):not(.disabled) a:not(.withoutripple)"].join(","),inputElements:"input.form-control, textarea.form-control, select.form-control",checkboxElements:".checkbox > label > input[type=checkbox], label.checkbox-inline > input[type=checkbox]",togglebuttonElements:".togglebutton > label > input[type=checkbox]",radioElements:".radio > label > input[type=radio], label.radio-inline > input[type=radio]"},checkbox:function(t){e(s(t||this.options.checkboxElements).filter(":notmdproc").data("mdproc",!0).after('<span class="checkbox-material"><span class="check"></span></span>'))},togglebutton:function(t){e(s(t||this.options.togglebuttonElements).filter(":notmdproc").data("mdproc",!0).after('<span class="toggle"></span>'))},radio:function(t){e(s(t||this.options.radioElements).filter(":notmdproc").data("mdproc",!0).after('<span class="circle"></span><span class="check"></span>'))},input:function(t){s(t||this.options.inputElements).filter(":notmdproc").data("mdproc",!0).each(function(){var o=s(this),a=o.closest(".form-group");if(0!==a.length||"hidden"===o.attr("type")||o.attr("hidden")||o.parents(".pirate_forms").length||(o.wrap('<div class="form-group"></div>'),a=o.closest(".form-group")),0===a.length&&"hidden"!==o.attr("type")&&!o.attr("hidden")&&o.parents(".pirate_forms").length){var t=o.prev();"checkbox"===o.attr("type")&&(t=o.next()),o.add(t).wrapAll('<div class="form-group label-floating"></div>'),a=o.closest(".form-group")}o.attr("data-hint")&&(o.after('<p class="help-block">'+o.attr("data-hint")+"</p>"),o.removeAttr("data-hint"));if(s.each({"input-lg":"form-group-lg","input-sm":"form-group-sm"},function(t,e){o.hasClass(t)&&(o.removeClass(t),a.addClass(e))}),o.hasClass("floating-label")){var e=o.attr("placeholder");o.attr("placeholder",null).removeClass("floating-label");var i=o.attr("id"),n="";i&&(n='for="'+i+'"'),a.addClass("label-floating"),o.after("<label "+n+'class="control-label">'+e+"</label>")}null!==o.val()&&"undefined"!==o.val()&&""!==o.val()||a.addClass("is-empty"),0<a.find("input[type=file]").length&&a.addClass("is-fileinput")})},attachInputEventHandlers:function(){var a=this.options.validate;s(document).on("keydown paste",".form-control",function(t){var e;(void 0===(e=t).which||"number"==typeof e.which&&0<e.which&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&8!==e.which&&9!==e.which&&13!==e.which&&16!==e.which&&17!==e.which&&20!==e.which&&27!==e.which)&&s(this).closest(".form-group").removeClass("is-empty")}).on("keyup change",".form-control",function(){var t=s(this),e=t.closest(".form-group"),o=void 0===t[0].checkValidity||t[0].checkValidity();""===t.val()?e.addClass("is-empty"):e.removeClass("is-empty"),a&&(o?e.removeClass("has-error"):e.addClass("has-error"))}).on("focus",".form-control, .form-group.is-fileinput",function(){n(this)}).on("blur",".form-control, .form-group.is-fileinput",function(){o(this)}).on("change",".form-group input",function(){var t=s(this);if("file"!==t.attr("type")){var e=t.closest(".form-group");t.val()?e.removeClass("is-empty"):e.addClass("is-empty")}}).on("change",'.form-group.is-fileinput input[type="file"]',function(){var t=s(this).closest(".form-group"),o="";s.each(this.files,function(t,e){o+=e.name+", "}),(o=o.substring(0,o.length-2))?t.removeClass("is-empty"):t.addClass("is-empty"),t.find("input.form-control[readonly]").val(o)})},ripples:function(t){s(t||this.options.withRipples).ripples()},autofill:function(){var t=setInterval(function(){s("input[type!=checkbox]").each(function(){var t=s(this);t.val()&&t.val()!==t.attr("value")&&t.trigger("change")})},100);setTimeout(function(){clearInterval(t)},1e4)},attachAutofillEventHandlers:function(){var e;s(document).on("focus","input",function(){var t=s(this).parents("form").find("input").not("[type=file]");e=setInterval(function(){t.each(function(){var t=s(this);t.val()!==t.attr("value")&&t.trigger("change")})},100)}).on("blur",".form-group input",function(){clearInterval(e)})},init:function(t){this.options=s.extend({},this.options,t);var e=s(document);s.fn.ripples&&this.options.ripples&&this.ripples(),this.options.input&&(this.input(),this.attachInputEventHandlers()),this.options.checkbox&&this.checkbox(),this.options.togglebutton&&this.togglebutton(),this.options.radio&&this.radio(),this.options.autofill&&(this.autofill(),this.attachAutofillEventHandlers()),document.arrive&&this.options.arrive&&(s.fn.ripples&&this.options.ripples&&e.arrive(this.options.withRipples,function(){s.material.ripples(s(this))}),this.options.input&&e.arrive(this.options.inputElements,function(){s.material.input(s(this))}),this.options.checkbox&&e.arrive(this.options.checkboxElements,function(){s.material.checkbox(s(this))}),this.options.radio&&e.arrive(this.options.radioElements,function(){s.material.radio(s(this))}),this.options.togglebutton&&e.arrive(this.options.togglebuttonElements,function(){s.material.togglebutton(s(this))}))}}}),function(l){l.hestiaFeatures={initMasonry:function(){"undefined"!=typeof requestpost&&requestpost.masonry&&l(".post-grid-display").masonry({itemSelector:".card-no-width",columnWidth:".card-no-width",percentPosition:!0})},initAnimations:function(){if("undefined"!=typeof AOS){AOS.init({offset:250,delay:300,duration:900,once:!0,disable:"mobile"})}},initTooltips:function(){l('[data-toggle="tooltip"], [rel="tooltip"]').tooltip()}},l.utilitiesFunctions={debounce:function(a,i,n){var s;return function(){var t=this,e=arguments,o=n&&!s;clearTimeout(s),s=setTimeout(function(){s=null,n||a.apply(t,e)},i),o&&a.apply(t,e)}},isElementInViewport:function(t){var e=l(t),o=l(window).scrollTop(),a=o+l(window).height(),i=Math.round(e.offset().top),n=i+e.height();return i<a&&o<n},verifyNavHeight:function(){return l(window).width()<768?l(".navbar").outerHeight():l(".navbar").outerHeight()-15},getWidth:function(){return this.innerWidth?this.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:document.body?document.body.clientWidth:void 0},addControlLabel:function(t){var e=t.attr("placeholder");t.removeAttr("placeholder"),l('<label class="control-label"> '+e+" </label>").insertBefore(t)}},l.hestia={init:function(){this.navSearch(),this.getPortfolioModalData(),this.fixHeaderPadding(),this.headerSpacingFrontpage(),this.initCarousel(),this.initCarouselSwipe(),this.scrollToTop(),this.detectIos(),this.parallaxHeader(),this.addViewCart(),this.setSearchSizeInput(),this.setControlLabel(),this.styleDefaultSubscribeWidget(),this.fixElementorTemplates()},fixElementorTemplates:function(){if(l(".elementor").length<=0)return!1;var t=l(".navbar").outerHeight();return l(".elementor-template-full-width").css("margin-top",t),l(".page-template-template-fullwidth .main.classic-blog").css("margin-top",t),!1},navSearch:function(){l(".hestia-toggle-search").on("click",function(){var t=l(".nav-searching");l(".navbar").toggleClass("nav-searching"),t.find(".hestia-nav-search").addClass("is-focused"),t.find(".hestia-nav-search").find(".search-field").focus(),l(this).find("i").fadeOut(200,function(){l(this).toggleClass("fa-search"),l(this).toggleClass("fa-times")}).fadeIn(200)})},getPortfolioModalData:function(){l("#portfolio").find('a[data-toggle="modal"]').on("click",function(t){t.preventDefault();var e=l(this).data("pid");l.ajax({url:requestpost.ajaxurl,type:"post",data:{action:"hestia_get_portfolio_item_data",pid:e},success:function(t){var e=l(".hestia-portfolio-modal");e.find(".modal-content").html(t),e.on("hidden.bs.modal",function(){l(this).find(".modal-content").html('<div class="portfolio-loading text-center"><i class="fa fa-3x fa-spin fa-circle-o-notch"></i></div>')})}})})},fixHeaderPadding:function(){var t=l(".navbar-fixed-top").outerHeight(),e=window.matchMedia("(max-width: 600px)");if(l("#wpadminbar").length&&e.matches?(l(".wrapper.classic-blog").find(".main").css("margin-top",t-46),l(".carousel .item .container").css("padding-top",t+50-46),l(".home.page.page-template-default .navbar").hasClass("no-slider")&&l(".home.page.page-template-default .main").css("margin-top",t-46)):(l(".wrapper.classic-blog").find(".main").css("margin-top",t),l(".carousel .item .container").css("padding-top",t+50),l(".home.page.page-template-default .navbar").hasClass("no-slider")&&l(".home.page.page-template-default .main").css("margin-top",t)),768<l(window).width()){l(".wrapper.classic-blog").length<1?l(".pagebuilder-section").css("padding-top",t):l(".pagebuilder-section").css("padding-top",0),l(".fl-builder-edit .pagebuilder-section").css("padding-top",t+40),l(".page-header.header-small .container").css("padding-top",t+100);var o=l(".single-product .page-header.header-small").height(),a=o+100;l(".single-product .page-header.header-small .container").css("padding-top",o-a);var i=o-t-172;l(".woocommerce.single-product .blog-post .col-md-12 > div[id^=product].product").css("margin-top",-i)}else l(".page-header.header-small .container , .woocommerce.single-product .blog-post .col-md-12 > div[id^=product].product").removeAttr("style");l(".no-content").length&&l(".page-header.header-small").css("min-height",t+230)},headerSpacingFrontpage:function(){if(0<l(".home .carousel").length){var t=l(".page-header"),e=l(window).width(),o=l(window).height();768<e?t.css("min-height",.9*o):t.css("min-height",o)}},initCarousel:function(){var t={interval:1e4};void 0!==requestpost.disable_autoslide&&"1"===requestpost.disable_autoslide&&(t.interval=!1),0!==l("body.rtl").length&&(l(".carousel-control.left").click(function(){l(".carousel").carousel("next")}),l(".carousel-control.right").click(function(){l(".carousel").carousel("prev")})),l(".carousel").carousel(t)},initCarouselSwipe:function(){if("undefined"!=typeof Hammer){var t="swipeleft",e="swiperight";if(0!==l("body.rtl").length&&(t="swiperight",e="swipeleft"),0!==l("#carousel-hestia-generic").length){var o=document.getElementById("carousel-hestia-generic");Hammer(o).on(t,function(){l(".carousel").carousel("next")}),Hammer(o).on(e,function(){l(".carousel").carousel("prev")})}}},scrollToTop:function(){var o=0;l(window).on("scroll",function(){var t=window.pageYOffset,e=l(".page-header").height();e<t&&0===o&&(l(".hestia-scroll-to-top").addClass("hestia-fade"),o=1),t<e&&1===o&&(l(".hestia-scroll-to-top").removeClass("hestia-fade"),o=0)}),l(".hestia-scroll-to-top").on("click",function(){window.scroll({top:0,behavior:"smooth"})})},sidebarToggle:function(){if(!(l(".blog-sidebar-wrapper,.shop-sidebar-wrapper").length<=0)){var t="left";0!==l("body.rtl").length&&(t="right"),l(".hestia-sidebar-open").click(function(){l(".sidebar-toggle-container").css(t,"0")}),l(".hestia-sidebar-close").click(function(){l(".sidebar-toggle-container").css(t,"-100%")})}},detectIos:function(){(0<l(".hestia-about").length||0<l(".hestia-ribbon").length)&&(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&l("body").addClass("is-ios"))},parallaxHeader:function(){if(!(0<l(".elementor-location-header").length)&&!(l(window).width()<768)){var e=l('.page-header[data-parallax="active"]');0!==e.length&&l(window).on("scroll",function(){if(l.utilitiesFunctions.isElementInViewport(e)){var t=l(window).scrollTop()/3;e.css({transform:"translate3d(0,"+t+"px,0)","-webkit-transform":"translate3d(0,"+t+"px,0)","-ms-transform":"translate3d(0,"+t+"px,0)","-o-transform":"translate3d(0,"+t+"px,0)"})}})}},addViewCart:function(){l(document).on("DOMNodeInserted",".added_to_cart",function(){l(this).parent().hasClass("hestia-view-cart-wrapper")||l(this).wrap('<div class="hestia-view-cart-wrapper"></div>')})},setSearchSizeInput:function(){0<l(".hestia-top-bar").find("input[type=search]").length&&l(".hestia-top-bar input[type=search]").each(function(){l(this).attr("size",l(this).parent().find(".control-label").text().replace(/ |…/g,"").length)})},setControlLabel:function(){var t=l(".search-form label");if(void 0!==t){var e=l(t).find(".search-field");""===l(e).attr("value")?l(t).addClass("label-floating is-empty"):l(t).addClass("label-floating"),l.utilitiesFunctions.addControlLabel(e)}var o=l(".woocommerce-product-search");if(void 0!==o){var a=l(o).find(".search-field");""===l(a).attr("value")?l(o).addClass("label-floating is-empty"):l(o).addClass("label-floating"),l.utilitiesFunctions.addControlLabel(a)}void 0!==l(".contact_submit_wrap")&&l(".pirate-forms-submit-button").addClass("btn btn-primary"),void 0!==l(".form_captcha_wrap")&&(l(".form_captcha_wrap").hasClass("col-sm-4")&&l(".form_captcha_wrap").removeClass("col-sm-6"),l(".form_captcha_wrap").hasClass("col-lg-6")&&l(".form_captcha_wrap").removeClass("col-lg-6"),l(".form_captcha_wrap").addClass("col-md-12")),void 0!==l("form")&&l("form").addClass("form-group"),void 0!==l("input")&&(void 0!==l('input[type="text"]')&&l('input[type="text"]').addClass("form-control"),void 0!==l('input[type="email"]')&&l('input[type="email"]').addClass("form-control"),void 0!==l('input[type="url"]')&&l('input[type="url"]').addClass("form-control"),void 0!==l('input[type="password"]')&&l('input[type="password"]').addClass("form-control"),void 0!==l('input[type="tel"]')&&l('input[type="tel"]').addClass("form-control"),void 0!==l('input[type="search"]')&&l('input[type="search"]').addClass("form-control"),void 0!==l("input.select2-input")&&l("input.select2-input").removeClass("form-control")),void 0!==l("textarea")&&l("textarea").addClass("form-control"),void 0!==l(".form-control")&&(l(".form-control").parent().addClass("form-group"),l(window).on("scroll",function(){l(".form-control").parent().addClass("form-group")}))},styleDefaultSubscribeWidget:function(){var t=l(".hestia-subscribe #sib_signup_form_1");t.find("p.sib-email-area").before('<span class="input-group-addon"><i class="fa fa-envelope"></i></span>'),t.find("p.sib-NAME-area").before('<span class="input-group-addon"><i class="fa fa-user"></i></span>'),t.find(".form-group").each(function(){l(this).addClass("is-empty")})}},l.navigation={init:function(){this.toggleNavbarTransparency(),this.handleResponsiveDropdowns(),this.handleTouchDropdowns(),this.repositionDropdowns(),this.smoothScroll(),this.activeParentLink(),this.highlightMenu(),this.setBodyOverflow()},handleTouchDropdowns:function(){if(window.innerWidth<768)return!1;var o=this;return l(".caret-wrap").on("touchstart",function(t){t.preventDefault(),t.stopPropagation();var e=l(this).closest("li");l(e).hasClass("dropdown-submenu")&&(l(e).siblings().removeClass("open").find("dropdown-submenu").removeClass("open"),l(e).siblings().find(".caret-open").removeClass("caret-open")),l(this).closest("li").parent().is(".nav")&&o.clearDropdowns(),l(this).toggleClass("caret-open"),l(this).closest(".dropdown").toggleClass("open"),o.createOverlay()}),!1},createOverlay:function(){var t=l(".dropdown-helper-overlay");if(0<t.length)return!1;var e=this;return(t=document.createElement("div")).setAttribute("class","dropdown-helper-overlay"),l("#main-navigation").append(t),l(".dropdown-helper-overlay").on("touchstart click",function(){this.remove(),e.clearDropdowns()}),!1},clearDropdowns:function(){l(".dropdown.open").removeClass("open"),l(".caret-wrap.caret-open").removeClass("caret-open")},toggleNavbarTransparency:function(){var t=l(".navbar-color-on-scroll");if(0!==t.length){var e=!0,o=0;t.hasClass("header-with-topbar")&&(o=40),l(window).on("scroll",l.utilitiesFunctions.debounce(function(){l(".home.page .navbar").hasClass("no-slider")||(l(document).scrollTop()>o?e&&(e=!1,t.removeClass("navbar-transparent"),t.addClass("navbar-not-transparent")):e||(e=!0,t.addClass("navbar-transparent"),t.removeClass("navbar-not-transparent")))},17))}},handleResponsiveDropdowns:function(){if(768<window.innerWidth)return!1;l(".navbar .dropdown > a .caret-wrap").on("click touchend",function(t){var e=l(this);t.preventDefault(),t.stopPropagation(),l(e).toggleClass("caret-open"),l(e).parent().siblings().toggleClass("open")})},smoothScroll:function(){l('.navbar a[href*="#"], a.btn[href*="#"]').click(function(){if("#"===l(this).attr("href"))return!1;if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var t=l(this.hash);if((t=t.length?t:l("[name="+this.hash.slice(1)+"]")).length)return l("html,body").animate({scrollTop:t.offset().top-l.utilitiesFunctions.verifyNavHeight()},1200),l(".navbar .navbar-collapse").hasClass("in")&&l(".navbar .navbar-collapse.in").removeClass("in"),l("body").hasClass("menu-open")&&(l("body").removeClass("menu-open"),l(".navbar-collapse").css("height","0"),l(".navbar-toggle").attr("aria-expanded","false")),!1}})},activeParentLink:function(){l(".navbar .dropdown > a").click(function(){return"#"===l(this).attr("href")||(location.href=this.href),!1})},highlightMenu:function(){l(window).on("scroll",function(){if(l("body").hasClass("home")&&751<=l(window).width()){var n=l(window).scrollTop(),s=l(".navbar").outerHeight(),r="no";l("#carousel-hestia-generic, section").each(function(){var t="#"+l(this).attr("id"),e=l(this).offset().top,o=l(this).outerHeight(),a=e-s,i=e+o-s;if(n+l.utilitiesFunctions.verifyNavHeight()>=a&&n+l.utilitiesFunctions.verifyNavHeight()<=i)return r="yes",l("nav .on-section").removeClass("on-section"),l('nav a[href$="'+t+'"]').parent("li").addClass("on-section"),!1;"no"===r&&l("nav .on-section").removeClass("on-section")})}})},setBodyOverflow:function(){var t=l("#main-navigation");t.on("show.bs.collapse",function(){l("body").addClass("menu-open")}),t.on("hidden.bs.collapse",function(){l("body").removeClass("menu-open")})},repositionDropdowns:function(){var n=window.innerWidth;if(n<=768)return!1;var t=l(".dropdown-menu");return 0===t.length||l.each(t,function(t,e){var o=l(e),a=o.offset().left;/webkit.*mobile/i.test(navigator.userAgent)&&(a-=window.scrollX);var i=o.outerWidth();n<=a+i&&l(e).css("left","-100%")}),!1}};var e=0;l.hestiaNavBarScroll={checkNavbarScrollPoint:function(){if(0===l(".navbar-header").length)return!1;if(768<=l.utilitiesFunctions.getWidth()){if(void 0!==l(".navbar-header").offset()){var t=l(".navbar-header").offset().top;/webkit.*mobile/i.test(navigator.userAgent)&&(t-=window.scrollY),e=t+l(".navbar-header").height()}0===l(".hestia_left.header-with-topbar").length&&0===l(".full-screen-menu.header-with-topbar").length||(e=40)}else e=0!==l(".header-with-topbar").length?40:0},addScrollClass:function(){l(window).on("scroll",function(){l(document).scrollTop()>=e?l(".navbar").addClass("navbar-scroll-point"):l(".navbar").removeClass("navbar-scroll-point")})}}}(jQuery),jQuery(document).ready(function(){jQuery.material.init(),jQuery.hestia.init(),jQuery.navigation.init(),jQuery.hestiaFeatures.initAnimations(),jQuery.hestiaFeatures.initTooltips(),jQuery.hestiaNavBarScroll.checkNavbarScrollPoint(),jQuery.hestiaNavBarScroll.addScrollClass()}),jQuery(window).load(function(){jQuery.hestiaFeatures.initMasonry(),jQuery.hestia.sidebarToggle()}),jQuery(window).resize(function(){jQuery.hestiaFeatures.initMasonry(),jQuery.hestia.fixHeaderPadding(),jQuery.hestia.headerSpacingFrontpage(),jQuery.hestiaNavBarScroll.checkNavbarScrollPoint(),jQuery.navigation.repositionDropdowns()});