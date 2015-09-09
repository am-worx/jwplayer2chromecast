var dropdownToggle;
$( document ).ready(function() {
    /* dropdown-toggle */

        $('body').on('click', function (e) {
            var target = $(e.target),
                dropdownParent = $('.dropdown-toggle').parent();

            if (dropdownParent.hasClass('open') && !target.parents().hasClass('open') && !target.hasClass('dropdown-toggle')) {
                dropdownParent.find('.dropdown-toggle.active').removeClass('active');
                dropdownParent.removeClass('open');
                dropdownParent.find('.dropdown-menu').hide();
            }
        });
        $('.dropdown-toggle').click(function (e) {
            var target = $(this),
                targetParent = target.parent();

            if (!targetParent.hasClass('open')) {
                target.addClass('active');
                $('.dropdown-menu').hide();
                $('.dropdown-menu').parent().removeClass('open');

                targetParent.addClass('open');
                target.next('.dropdown-menu').show();
            } else {
                target.removeClass('active');
                targetParent.removeClass('open');
                target.next('.dropdown-menu').hide();
            }

            $('.dropdown-menu i.fa-times').click(function () {
                target.next('.dropdown-menu').hide(200);
                targetParent.removeClass('open');
                target.removeClass('active');
            });
            return false;
        });

    /* /dropdown-toggle */

    /* menu */
        $('.dropdown-right').hide();
        $('.dropdown-right:first').show();
        $('.dropdown-left li:first').addClass('active');
        $('.dropdown-left li').hover(function() {
            $('.dropdown-left li').removeClass('active');
            $(this).addClass('active');
            $('.dropdown-right').hide();
            var activeTab = $(this).find('a').attr('name');
            $(activeTab).show();
            return false;
        });



        $('.menu ul.main-menu > li').hover(function() {
            $(this).find('.dropdown-right').hide();
            $(this).find('.dropdown-right:first').show();
            $('.dropdown-left ul li a').removeClass('dropdown-active');
            $(this).find('.dropdown-left li:first a').addClass('dropdown-active');
            $(this).find('.dropdown-left ul li a').hover(function() {
                $('.dropdown-left ul li a').removeClass('dropdown-active');
                $(this).addClass('dropdown-active');
            });
        });
    /* /menu */

    /* video carousel */
    $('.videobox-slider-wrap').each(function(e) {
        var target = $(this),
            targetLength = target.data('length');

        if(target.hasClass('active-slider')) {
           videoCarousel(target, targetLength);
        }
    });

    /* /video carousel */

//	$(".videobox-tab").hide();
//	$(".videobox-tab:first").show();
//	$(".videobox-menu li:first").addClass("active").show();
	$(".videobox-menu li").click(function() {
        if(!$(this).hasClass('active')){
            $(".videobox-menu li").removeClass("active");
            $(this).addClass("active");
            $(".videobox-tab").hide();
            var activeTab = $(this).find("a").attr("href");
            $(activeTab).fadeIn();
		}
		return false;
	});


    $(".playlists").hide();
    $(".playlists:first").show();
    $(".channels-nav li:first").addClass("active").show();
    $(".channels-nav li").click(function() {
        $(".channels-nav li").removeClass("active");
        $(this).addClass("active");
        $(".playlists").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });


    $('.js-pager').click(function(e) {
        var target = $(e.target);
        var targetPage = target.attr('data-page');
        var url = window.location.search;

        if(url.indexOf('p=') >= 0) {
            window.location.href = window.location.href.replace(/p\=([\d]+)/, 'p=' + targetPage);
        } else {
            window.location.href += (url.indexOf("?")>= 0?"&":"?") + 'p=' + targetPage;
        }

        return false;
    });

	// $('body').on('click','',function(){
	// 	$('.dropdown-toggle').parent('open').removeClass('open').find('.dropdown-menu').hide();
	// });
	$('.footer-sign-in').click(function(e) {
	    $('body').animate({scrollTop : 0}, 500, 'swing', function(){
            $('.action-header-sign-in').click();
        });
        return false;
	});
});

function initMainSlider() {
    $(function(){
        if($('#slider').length) {
            $('.slider-wrap .slider-loading').hide();
            $('#slider').show();
            $('#slider').anythingSlider({
                // Appearance
                theme: "default", // Theme name
                mode: "horizontal",   // Set mode to "horizontal", "vertical" or "fade" (only first letter needed); replaces vertical option
                expand: false,     // If true, the entire slider will expand to fit the parent element
                resizeContents: true,      // If true, solitary images/objects in the panel will expand to fit the viewport
                showMultiple: false,     // Set this value to a number and it will show that many slides at once
                easing: "swing",   // Anything other than "linear" or "swing" requires the easing plugin or jQuery UI
                buildArrows: false,
                buildStartStop: false,
                autoPlay: true,
                hashTags: false
            });
        }
    });
}

function addToFavorites(videoId) {
    $('body').css('cursor', 'wait');
    $.get("/operationfavoritelist/add/"+videoId,
    {
        //ts: getTimestamp()
    },
    function(data){
        $('body').css('cursor', 'auto');
        $('#fav-icon-' + videoId).attr('onclick', '');
        $('#fav-icon-' + videoId).unbind();
        $('#fav-icon-' + videoId).bind('click', function() {
            removeFromFavorites(videoId);
            return false;
        });
        if ($('#fav-icon-' + videoId).hasClass('add-to-favorites-btn')) {
            $('#fav-icon-' + videoId).addClass('active').find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
        } else {
            $('#fav-icon-' + videoId).removeClass('add-icon');
            $('#fav-icon-' + videoId).addClass('added-icon');
        }
    });
}

function removeFromFavorites(videoId) {
    $('body').css('cursor', 'wait');
    $.get("/operationfavoritelist/rm/"+videoId,
    {},
    function(data){
        if ($("#favorite-list").length != 0) {
            //$("#fav-icon-" + videoId).parent().parent("li").remove();
            renderFavoritList();
        } else {
            $('body').css('cursor', 'auto');
            $('#fav-icon-' + videoId).attr('onclick', '');
            $('#fav-icon-' + videoId).unbind();
            $('#fav-icon-' + videoId).bind('click', function() {
                addToFavorites(videoId);
                return false;
            });
            if ($('#fav-icon-' + videoId).hasClass('add-to-favorites-btn')) {
                $('#fav-icon-' + videoId).removeClass('active').find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
            } else {
                $('#fav-icon-' + videoId).removeClass('added-icon');
                $('#fav-icon-' + videoId).addClass('add-icon');
            }

        }
    });
}

function videoCarousel(el, baseLength) {
    var slider = el.find('.video-box'),
        sliderItem = slider.children('li'),
        sliderItemW = sliderItem.innerWidth(),
        sliderWidth = sliderItem.length * sliderItemW,
        sliderArrowRight = el.find('.right-arrow'),
        sliderArrowLeft = el.find('.left-arrow');

    slider.width(sliderWidth);

    sliderArrowRight.click(function(e) {

        if (slider.is(':not(:animated)') && sliderArrowRight.hasClass('active')) {
            slider.animate({
                left: '-='+ sliderItemW
            }, 500, function(){
                if (!sliderArrowLeft.hasClass('active')) {
                    sliderArrowLeft.addClass('active');
                }
                if (sliderWidth + parseInt(slider.css('left')) <= sliderItemW * baseLength) {
                    sliderArrowRight.removeClass('active');
                }
            });
        }

        return false;
    });
    sliderArrowLeft.click(function(e) {

        if (slider.is(':not(:animated)') && sliderArrowLeft.hasClass('active')) {
            slider.animate({
                left: '+='+ sliderItemW
            }, 500, function(){
                if (!sliderArrowRight.hasClass('active')) {
                    sliderArrowRight.addClass('active');
                }
                if (parseInt(slider.css('left')) >= 0) {
                    sliderArrowLeft.removeClass('active');
                }
            });
        }

        return false;
    });
}

function filterSelected(address) {
    switch (address) {
        case 0:
            window.location.href = "?";break;
        case 1:
            window.location.href = "?filterMethod=public";break;
        case 2:
            window.location.href = "?filterMethod=member";break;
    }
}

