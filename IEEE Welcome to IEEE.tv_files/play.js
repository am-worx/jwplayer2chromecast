function setUndefined(name, default_value){
    if( typeof window[name] === 'undefined' ){
        window[name] = default_value;
    }
}

/**
 * Debug log function
 */
function hmLog(msg) {
    return;
    if (typeof window.console.log === "undefined") {
        window.console.log = function() {};
    } else {
        console.log(msg);
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


/**
 * Flash plugin detect
 */
function hasFlash() {
    var f1 = false;
    try {
      var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
      if (fo) {
        f1 = true;
      }
    } catch (e) {
      if (navigator.mimeTypes
            && navigator.mimeTypes['application/x-shockwave-flash'] != undefined
            && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
        f1 = true;
      }
    }
    return f1;
}

/**
 * Display notice if desctop browser has no Flash plugin installed and enabled
 */
function hmShowFlashNotice() {
    var f0 = jQuery('#flashNotice');
    var f1 = hasFlash();
    if (! f1) {
        if (f0.length > 0) {
            jQuery('#flashNotice').show();
        }
    }
}


/**
 * Get Akamai security token
 */
function hmGetToken(url) {
  var tok = '';
    var f1 = hasFlash();
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1;
    var isIphone = ua.indexOf("iphone") > -1;
    var isIpad = ua.indexOf("ipad") > -1;
    if (isAndroid || isIphone || isIpad) {
        tok = akamaiVideoSourceJson.tokenHls;
    } else {
        // Default HDS Flash
        if (f1) {
            tok = akamaiVideoSourceJson.tokenHds;
        } else {
            tok = '';
        }
    }
  return tok;
}


/**
 * Get video URL based on src parameter and checking browser capabilities
 */
function hmGetVideoUrl() {
    var url = '';
    var f1 = hasFlash();
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1;
    var isIphone = ua.indexOf("iphone") > -1;
    var isIpad = ua.indexOf("ipad") > -1;
    if (isAndroid || isIphone || isIpad) {
        url = akamaiVideoSourceJson.hls;
    } else {
        if (f1) {
            url = akamaiVideoSourceJson.hds;
        } else {
            url = akamaiVideoSourceJson.direct;
        }
    }
    return url;
}

/**
 * Get JWPlayer setup options based on available broser capabilities
 */
function hmGetPlayerSetupOptions(videoWidth, videoHeight) {

    setUndefined('gaJw', {});
    setUndefined('videoThumbnailImage', '');
    setUndefined('displayLogo', '');
    var f1 = hasFlash();
    var os1 = {};
    var p1 = window.location.port;
    if (p1.length > 0) {
        p1 = ':' + p1;
    }
    var tag = adTagProgramVast.length > 4 ? adTagProgramVast : ( adTagTitleVast.length > 4 ? adTagTitleVast : ( sadTag.length > 4 ? sadTag : "" ) );
    tag = "/ad_proxy.jsp?url="+tag;
//    var u1 = hmGetVideoUrl();
    var u1 = akamaiVideoSourceJson.hds;
    var u2 = akamaiVideoSourceJson.hls;
    var u3 = akamaiVideoSourceJson.direct;
    //var u3 = window.location.protocol + '//ieeetv.ieee.org/media/ieeetvdl/Spectrum/IEEEtv_DL_ANYBOTS.mp4';

    var t1 = akamaiVideoSourceJson.tokenHds;
    var t2 = akamaiVideoSourceJson.tokenHls;



    //var t1 = hmGetToken(u1);
    u1 = u1 + '?' + t1;
    u2 = u2 + '?' + t2;
    if (displayLogo == '1') {
        var lUri = '/player/assets/flash_images/video_overlay.png';
    } else {
        var lUri = '';
    }
    var iUri = '/assets/video-images/large/' + videoId + '.jpg?'+ ( Date.now() / 1000 | 0);
    var w1 = videoWidth ? videoWidth : 770;
    var h1 = videoHeight ? videoHeight : 430;
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
            sources: [
                {
                    file: u1,
                    type: 'mp4'
                },
                {
                    file: u3,
                    type: 'mp4'
                },
                {
                    file: u3,
                    type: 'mp4'
                }
            ],
            tracks: subtitles,
            provider: '/js2/jwplayer/AkamaiAdvancedJWStreamProvider.swf'
        }],
        androidhls: true,
        primary: getPrimaryPlayerType(),
        ga: gaJw,
        width: w1,
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

function initVideoPlayer(videoWidth, videoHeight) {
    var os1 = hmGetPlayerSetupOptions(videoWidth, videoHeight);
    var jwPlayerInstance = jwplayer('individual_video').setup(os1);
    var errorCount = 0;
    jwPlayerInstance.onError(function(e){
        errorCount++;
        if(errorCount < 2){
            jwPlayerInstance.load([{
                file:"/assets/media-file-error.mp4"
            }]);
            jwPlayerInstance.play();
            $.ajax({
                url:"/ajax.action",
                method:"POST",
                dataType:"json",
                data:{
                    target:"UserPoc",
                    action:"getMemberStatusWithAkamaiVideoSourceSetDirectDirectly",
                    parameters:videoId
                }
            }).done(function(data){
                if(data.data.akamaiVideoSource && data.data.akamaiVideoSource.direct){
                    jwPlayerInstance.load([{file: data.data.akamaiVideoSource.direct }]);
                    jwPlayerInstance.play();
                }
            });
        }
    });



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

function getPrimaryPlayerType(){
    return "flash"; // "html5"; //"flash";
}
