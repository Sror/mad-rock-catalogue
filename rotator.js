
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
    
    
        $('body').on('touchstart', '#rotator_1_pg_5', function(){
            myScroll.disable();
        });
        $('body').on('touchend', '#rotator_1_pg_5', function(){
            myScroll.enable();
        });

});
