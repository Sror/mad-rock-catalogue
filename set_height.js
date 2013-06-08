
$(document).ready(function(){
    
    $('.set_height').css('height', child_height($(this)));
    $('.set_height').css('width', child_width());
    
});

function child_height($item){
    
    var height = $item.children().attr('height');
    return height
    
};

function child_width($item){
    
    var width = $item.children().attr('width');
    return width
    
};


