//MASONRY

function Masonry() {
    var BlockO = "#masonry-column-carrier";
    var ItemO = ".masonry-column-item";
    var ColumnW = 200;
    var Speed = 500;
    var Time = 500;
    if (Device.isMobile()) { Time = 0; Speed = 0; }

//IMAGES

    $(BlockO).masonry({
        itemSelector: ".masonry-column-item:not('.invis')",
        columnWidth: ColumnW,
        isAnimated: !Modernizr.csstransitions,
        animationOptions: {
            duration: Speed,
            queue: false
        }
    });

    var SortLinkO = $(".hidden-header-block .header-albums-carrier .album-item");

    if (Device.isMobile()) {
        $(".logo-block").click(function(){
            $(BlockO).children(".invis")
                .toggleClass("invis")
                .animate({opacity: 1}, {duration: Speed})
                .show();
        });
    }
    else {
        $(".logo-block").click(function(){
            $(BlockO).children(".invis")
                .toggleClass("invis")
                .animate({opacity: 1}, {duration: Speed});

            $(BlockO).css("height","auto").masonry('reload');

        });
    }


    SortLinkO.click( function() {

        //Active
        var ActiveLinkClass = "active-album-item";
        var resetItems = false;

        if($(this).hasClass(ActiveLinkClass))
        {
            resetItems = true;
            $(this).removeClass(ActiveLinkClass);
        }
        else
        {
            SortLinkO.removeClass(ActiveLinkClass);
            $(this).addClass(ActiveLinkClass);
        }

        //ANIMATE
        $("#hidden-header-close-block").click();

        var CurScrollPosition = $("html, body").scrollTop();
        if (!CurScrollPosition) { CurScrollPosition = $(window).scrollTop();}
        var NewScrollPosition = $(BlockO).offset().top - $(".header-block").height();
        var AnimateTime = parseInt(Math.abs(NewScrollPosition-CurScrollPosition)/$("body").height())*Time + Time;
        if (AnimateTime > 100) {
            if (Device.isMobile()) {
                $(window).scrollTop(parseInt($(BlockO).offset().top));
            }
            else {
                $('html,body').animate({ scrollTop: NewScrollPosition }, AnimateTime);
            }

        }

        if(resetItems)
        {
            if (!Device.isMobile()) {
                $(BlockO).children(".invis")
                    .toggleClass("invis")
                    .animate({opacity: 1}, {duration: Speed});

                $(BlockO).css("height","auto").masonry('reload');
            }
            else {
                $(BlockO).children(".invis")
                    .toggleClass("invis")
                    .animate({opacity: 1}, {duration: Speed})
                    .show();
            }
            return false;
        }

        //SORT
        if (!Device.isMobile()) {
            var ID = $(this).attr("id").substr(12);
            $(BlockO).children().not(".masonry-album-"+ID).not('.invis')
                .toggleClass("invis")
                .animate({opacity: 0}, {duration: Speed});
            $(BlockO).find(".masonry-album-"+ID+".invis")
                .toggleClass("invis")
                .animate({opacity: 1}, {duration: Speed});
            $(BlockO).css("height","auto").masonry('reload');
        }
        else {
            var ID = $(this).attr("id").substr(12);
            $(BlockO).children().not(".masonry-album-"+ID).not('.invis')
                .toggleClass("invis")
                .animate({opacity: 0}, {duration: Speed})
                .hide();
            $(BlockO).find(".masonry-album-"+ID+".invis")
                .toggleClass("invis")
                .animate({opacity: 1}, {duration: Speed})
                .show();
        }
        return false;
    });
}

function FancyBox() {
    var ItemO = $(".fancybox-link");
    $(ItemO).fancybox({
        openEffect	: 'none',
        closeEffect	: 'none'
    });
}

function ScrollButtonJS() {
    var BlockO = $("#scroll-top");
    var BodyH = $("body").height();
    var Time = 500;
    BlockO.click( function() {
        $("html, body").animate({
            scrollTop: 0
        },Time);
    });

    $(window).scroll( function() {
        var CurScroll = $("html, body").scrollTop();
        if (!CurScroll) { CurScroll = $(window).scrollTop(); }
        if (CurScroll < BodyH) {
            BlockO.hide();
        }
        else {
            BlockO.show();
        }
    });
}

function HeaderHiddenMenu() {
    var CloseO = $("#hidden-header-close-block");
    var BlockO = ".hidden-header-carrier";
    var SlideO = ".hidden-header-block";
    var ActiveLinkClass = "active-nav-item";
    var ActiveClass = "active-hidden-header-carrier";
    var TabO = ".tab-item-block";
    var Time = 500;
    if(Device.isMobile()) {Time = 0;}

    $(".header-nav-carrier .nav-item a").click( function() {
        var ID = $(this).attr("id").substr(12);
        if ( $("#header-tab-"+ID).css("display") == "none") {

            $(".header-nav-carrier .nav-item").removeClass(ActiveLinkClass);
            $(this).closest(".nav-item").addClass(ActiveLinkClass);

            if ($(BlockO).find(SlideO).css("display") == "block") {

                $(BlockO).find(TabO).slideUp(Time, function() {
                    setTimeout(function() {
                        $(this).closest(BlockO).addClass(ActiveClass);
                        $("#header-tab-"+ID).stop().slideDown(Time);
                    }, Time);
                });

            }
            else {
                $("#header-tab-"+ID).show();
                $(BlockO)
                    .addClass(ActiveClass)
                    .find(SlideO).slideDown(Time);
            }

        }
        else {
            CloseO.click();
        }
        return false;
    });

    CloseO.click( function() {

        $(".header-nav-carrier .nav-item").removeClass(ActiveLinkClass);

        $(this)
            .closest(BlockO)
            .removeClass(ActiveClass)
            .find(SlideO).slideUp(Time, function() {
                $(this)
                    .find(TabO).hide();
            });
    });
}

function MobileAdaptive() {
    if ( Device.isMobile() ) {
        //
        $("body").addClass("mobile-device");
        //
        //$(".header-carrier").addClass("mobile-fixed-fix");
        //
    }
}

function HeaderNav() {
    var BlockO = $(".item-container");
    var ItemO = ".item";

    BlockO.each( function() {
        var Selector = $(this).find(ItemO);
        var ItemW =
            parseInt((Selector).css("padding-left"))
                + parseInt((Selector).css("padding-right"))
                + parseInt((Selector).css("margin-left"))
                + parseInt((Selector).css("margin-right"))
                + Selector.width();
        var BlockW = ItemW * Selector.length;
        $(this).width(BlockW+3);
    });
}




//FUNCTIONS
$(document).ready( function() {
    FancyBox();
    //
    ScrollButtonJS();
    //
    HeaderHiddenMenu();
    //
    MobileAdaptive();
    //
    HeaderNav();
});

$(window).load( function() {
    Masonry();
    //
});

$(window).resize( function() {

});