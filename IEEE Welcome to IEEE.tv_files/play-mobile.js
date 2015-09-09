
setUndefined = function(name, default_value){
    if( typeof window[name] === 'undefined' ){
        window[name] = default_value;
    }
}

/**
 * Player configuration options
 */
akamaiVideoSourceJson =
        typeof akamaiVideoSourceJson == "string" ?
    ( akamaiVideoSourceJson.search("{") !== 0 ?
    {} :
        JSON.parse(akamaiVideoSourceJson)
        ):
    ( typeof akamaiVideoSourceJson == "object" ?
        akamaiVideoSourceJson:
    {}
        );




function hmGetPlayerSetupOptionsMobile(videoWidth, videoHeight) {
    videoWidth = typeof videoWidth == 'undefined' ?
        770 :
        (
                videoWidth == 0 || videoWidth == 'null' || ( (videoWidth+'').search(/auto/i) > -1 ) ?
                    "100%" :
                    videoWidth
            );

    setUndefined('gaJw', {});
    setUndefined('videoThumbnailImage', '');
    setUndefined('displayLogo', '');
    var os1 = {};
    var p1 = window.location.port;
    if (p1.length > 0) {
        p1 = ':' + p1;
    }
    var tag = adTagProgramVast.length > 4 ? adTagProgramVast : ( adTagTitleVast.length > 4 ? adTagTitleVast : ( sadTag.length > 4 ? sadTag : "" ) );
    tag = "/ad_proxy.jsp?url="+tag;
//    var u1 = hmGetVideoUrl();

    var u1 = akamaiVideoSourceJson.direct;

    if (displayLogo == '1') {
        var lUri = '/player/assets/flash_images/video_overlay.png';
    } else {
        var lUri = '';
    }
    var iUri = '/assets/video-images/large/' + videoId + '.jpg?' + ( Date.now() / 1000 | 0);
    var w1 = videoWidth;
    var aspectratio =  "16:9";
    var h1 =  videoWidth == '100%' ? $( window ).width() / 1.78 : ( videoHeight ? videoHeight : 430 );
    var subtitles = [];
    var subtitlesTemp = [];
    if (typeof accessToSubtitles !== 'undefined' && accessToSubtitles == true) {
        if(typeof jsonSubtitles != 'undefined' && jsonSubtitles.length > 0){
            subtitlesTemp = $.parseJSON(jsonSubtitles);
            for( i = 0; i < subtitlesTemp.length; i++ ){
                var item = subtitlesTemp[i];

                if (typeof selectedSubtitles !== 'undefined' && selectedSubtitles == item.language.code1) {
                    var defaultSubtitles = true;
                } else {
                    var defaultSubtitles = false;
                }
                subtitles.push({
                    file: (subtitlePath ? subtitlePath : '/assets/subtitles/') + item.src,
                    label: item.language.name,
                    kind: "captions",
                    "default": defaultSubtitles
                });
            }
        }
    }

    os1 = {
        playlist: [{
            image: videoThumbnailImage,
            file: u1,
            type: 'mp4',
            tracks: subtitles,
            provider: '/js2/jwplayer/AkamaiAdvancedJWStreamProvider.swf'
        }],
        androidhls: true,
        primary: "html5",
        ga: gaJw,
        width: w1,
        aspectratio:aspectratio,
        height: h1,
        logo: {
          file: lUri,
          position: 'bottom-right'
        },
        advertising: {
          client: 'vast',
          tag: tag
        }
    };
    return os1;
}
function initVideoPlayerMobile(videoWidth, videoHeight) {

    var os1 = hmGetPlayerSetupOptionsMobile(videoWidth, videoHeight);
    jwplayer('individual_video').setup(os1);
    if(window.akamaiVideoSourceJson && window.akamaiVideoSourceJson.direct){
        $(".player-action-buttons-nav.download").attr({
            href:window.akamaiVideoSourceJson.direct
        }).removeClass("forbid").removeClass("dropdown-toggle").addClass("allow");
    }else{
        $(".player-action-buttons-nav.download").
            attr({
                href:"#"
            }).
            removeClass("allow").
            addClass("dropdown-toggle").
            addClass("forbid");
    }
}