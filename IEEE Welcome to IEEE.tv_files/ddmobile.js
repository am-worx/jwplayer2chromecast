if(isMobile.any && location.pathname.search("player/embed_play") == -1 ){
    $.ajax({
      url:"ajax.action",
      data:{
        target:"MobileDetectProc",
        action:"getLocation",
        parameters:location.pathname
      }
    }).done(function(msg){
      data = $.parseJSON(msg);

      if (!!data) {
        location = data.location
      }
    });
}