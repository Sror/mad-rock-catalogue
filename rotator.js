
$(document).ready(function(){

    var rotator_list = ['#rotator_1_pg_5'];//list of ids of rotators

    $("#rotator_1_pg_5").spritespin({
        width     : 480,
        height    : 327,
        frames    : 34,
        framesX   : 6,
        behavior  : "drag",
        module    : "360",
        sense     : -1,
        source    : "imgs/rotator/bike6x6.jpg",
        animate   : true,
        loop      : false,
        frameWrap : true,
        frameTime : 60,
        enableCanvas : false,
        preloadCss: "position: relative; display: block;"
      });
    
    
    for (i=0; i<rotator_list; i++){
        $('body').on('touchstart', i, function(){
            myScroll.disable();
        });
        $('body').on('touchend', i, function(){
            myScroll.enable();
        });
    };

});
