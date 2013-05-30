$(document).ready(function(){//replaced with deviceready phonegap function

$('.page').on('backbutton',
     function(e){
         e.preventDefault();
});

// handling the covers

//more styles for img_container set in styles.css
var $cover_img_container = $('.cover_img_container');
$cover_img_container.css('width', $(window).width());
$cover_img_container.css('height', $(window).height());

// Loading external html files -- moved to external js file
/*
var pages_to_load = ['1.html'];
    for (var i = 0; i < pages_to_load.length; i++) {
        var current_file = pages_to_load[i];
        var html_to_append = req(current_file);
        $('#wrapper_pg1').children('.scroller').html(html_to_append);
    };


var external_files_to_load = ['shoe_details.html'];
    for (var i = 0; i < external_files_to_load.length; i++) {
        var current_file = external_files_to_load[i];
        var html_to_append = req(current_file);
        $('.hidden_content').append(html_to_append);
    };
*/


//Handling product clicks
//var $product_li = $('.product_list').children('li');
$('body').on('tap click', '.product_img', function(){
    var product_id = $(this).parent('div').parent('li').attr('id');
    $('.hidden_content').show();//show parent div
    $('#'+product_id+'_details').show();// show relevant child div
});
$('body').on('tap click', '.product_overlay', function(){
    $('.product_overlay').hide();//hide relevant child div
     $('.hidden_content').hide();//hide parent div
});


// Handling a form submission
    $('body').on('tap click', '.button_popup', function (){
        myScroll.disable()
        $('#form_well').show();
        $('#form_popup').show();
    });
    $('body').on('tap click', '#form_close', function (){
        myScroll.enable()
        $('#form_popup').hide();
    });
    
    
    $('#pg_request_form').submit(function(){
        var email = $('#pg_email').val();
        $.ajax({
            type: 'POST',
            data: {email:email},
            url: 'http://e-m-i-l-e.appspot.com/pg_request',
            success: function(data){
                console.log(data);
                alert('Your comment was successfully added');
            },
            error: function(data){
                console.log(data);
                alert('There was an error adding your comment');
            }
        });
        return false;
    });


// handling other touch events within scroller 3D rotator and pinch zoom


// The wrapperWidth before orientationChange. Used to identify the current page number in updateLayout();
wrapperWidth = 0;

var myScroll = new iScroll('pageWrapper', {
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
page6Scroll = new iScroll('wrapper_pg6', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page7Scroll = new iScroll('wrapper_pg7', {hScrollbar: false, vScrollbar: true, lockDirection: true });
page8Scroll = new iScroll('wrapper_pg8', {hScrollbar: false, vScrollbar: true, lockDirection: true });

/*SPRITESPIN*/
    
});


