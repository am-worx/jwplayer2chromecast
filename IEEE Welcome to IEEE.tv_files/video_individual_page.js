$( document ).ready(function() {
    var videoDefaultWidth = 770,
        videoDefaultHeight = 430;
    if (!!videoId) {
        $('.video-embed-code').text('<iframe width="'+ videoDefaultWidth +'" height="'+ videoDefaultHeight +'" src="//'+location.host+'/player/embed_play/'+ videoId +'/'+ videoDefaultWidth +'" scrolling="no"></iframe>');
        $('.responsive-video-embed-code').text('<iframe width="100%" src="//'+location.host+'/player/embed_play/'+ videoId +'/auto" frameborder="no" scrolling="no"></iframe>');
    }
    $('.dynamic-size-value').on('input', function(e) {
        var target = $(e.target),
            targetWidth = target.val(),
            targetHeight = parseInt((targetWidth * videoDefaultHeight) / videoDefaultWidth);
        if (!!videoId) {
            target.parent().next('span').text(targetHeight);
            target.parents('.size-block').next('.video-embed-code').text('<iframe width="'+ targetWidth +'" height="'+ targetHeight +'" src="//'+location.host+'/player/embed_play/'+ videoId +'/'+ targetWidth +'" scrolling="no"></iframe>');
        }
    });

    $('.embed-switcher a').click(function(e){
        var target = $(e.target);
        var targetVal = target.data('action');
        var staticWrap = $('.embed-static');
        var responsiveWrap = $('.embed-responsive');

        if (target.hasClass('active')) return false;

        $('.embed-switcher a').removeClass('active');
        target.addClass('active');

        if (targetVal == 'responsive') {
            staticWrap.hide();
            responsiveWrap.show();
        } else {
            responsiveWrap.hide();
            staticWrap.show();
        } 

        return false;
    });

    $('.embed-block .blue-button').click(function() {
        var embedCode = $('.embed-text:visible').val();

        $('.embed-text:visible').select();

        return false;
    });
    /* /embed */

    $('.action-to-sign-in').click(function(e){
        $('body').animate({scrollTop : 0}, 500, 'swing', function(){
            $('.action-header-sign-in').click().next('.dropdown-menu').find('.main-sin-in input').focus();
        });

        return false;
    });


    $('.show-more-description').click(function(e){
        var target = $(e.target);

        target.toggleClass('active');

        if(target.hasClass('active')) {
            $('.video-short-description').hide();
            $('.video-full-description').show()

            target.text('Less');
        } else {
            $('.video-full-description').hide()
            $('.video-short-description').show();

            target.text('More');
        }

        return false;
    });


    videoTitle = $('.video-title').text();
    gaJw = {idstring: videoId,
        trackingobject: "pageTracker",
        label: videoId+" - "+videoTitle
    };
    $('.updated-href').each(function(){
        var target = $(this);
        var targetHref = target.attr('href');

        targetHref = targetHref + location.search;
        target.attr('href', targetHref );
    });
    if(videoStatus != 'member' && memberStatus == 'false') {
        if ((typeof jsonSubtitles != 'undefined' && jsonSubtitles.length > 0  )  &&  memberStatus == 'true') {
            accessToSubtitles = true;
            initVideoPlayer();
        } else {
            initVideoPlayer();
        }
    }

    $(window).bind('updateOndemand', function(){
        $.ajax({
            url:"/ajax.action",
            method:"POST",
            dataType:"json",
            data:{
                target:"UserPoc",
                action:"getMemberStatusWithAkamaiVideoSource",
                parameters:videoId
            }
        }).done(function(data){
            if (data && data.data && data.data.status && data.data.status != '0' && data.data.status.length > 0 ) {
                window.akamaiVideoSourceJson = data.data.akamaiVideoSource;
                accessToSubtitles = true;
                initVideoPlayer();
            }else if(akamaiVideoSourceJson  ){
                window.akamaiVideoSourceJson.direct = window.akamaiVideoSourceJson.base = null;
            }
        });
    });

});
