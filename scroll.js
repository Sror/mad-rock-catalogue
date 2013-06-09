var myScroll = "";

$(document).ready(function(){//replaced with deviceready phonegap function

$('.page').on('backbutton',
     function(e){
         e.preventDefault();
});

// handling the covers

//more styles for img_container set in styles.css
/*
var $cover_img_container = $('.cover_img_container');
$cover_img_container.css('width', $(window).width());
$cover_img_container.css('height', $(window).height());
*/

// handling other touch events within scroller 3D rotator and pinch zoom


// The wrapperWidth before orientationChange. Used to identify the current page number in updateLayout();
wrapperWidth = 0;

myScroll = new iScroll('pageWrapper', {
	snap: true,
	momentum: false,
	hScrollbar: false,
	vScrollbar: false,
    lockDirection: true
});
    
updateLayout();

function updateLayout() {

    var currentPage = 0;

    if (wrapperWidth > 0) {
        currentPage = - Math.ceil( $('#pageScroller').position().left / wrapperWidth);
    }//this just works out the current page so that on a layout change the user won't be scrolled somewhere else

    wrapperWidth = $('#pageWrapper').width();

    $('#pageScroller').css('width', wrapperWidth * 11);
    $('.page').css('width', wrapperWidth - 0);//was -20 with margin 10 on .page //was - 40 with padding 20 // working out the .page width its simply the wrapper width - the padding and margins I think
    myScroll.refresh();
    myScroll.scrollToPage(currentPage, 0, 0);

};

page1Scroll = new iScroll('wrapper_pg1', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page2Scroll = new iScroll('wrapper_pg2', {hScrollbar: false, vScrollbar: true, lockDirection: true });
//page3Scroll = new iScroll('wrapper_pg3', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page4Scroll = new iScroll('wrapper_pg4', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page5Scroll = new iScroll('wrapper_pg5', {hScrollbar: false, vScrollbar: true, lockDirection: true });
//page6Scroll = new iScroll('wrapper_pg6', {hScrollbar: false, vScrollbar: true, lockDirection: true });
//page7Scroll = new iScroll('wrapper_pg7', {hScrollbar: false, vScrollbar: true, lockDirection: true });
//page8Scroll = new iScroll('wrapper_pg8', {hScrollbar: false, vScrollbar: true, lockDirection: true });

/*SPRITESPIN*/
    
});


