$(document).ready(function(){
    
    var num_pages = 5;
    for (var i = 0; i < num_pages; i++) {
        var html_to_append = req_page(i);
        $('#wrapper_pg'+i).html(html_to_append);
        console.log('#wrapper_pg'+i);
    };


    /*var external_files_to_load = ['shoe_details.html'];
    for (var i = 0; i < external_files_to_load.length; i++) {
        var current_file = external_files_to_load[i];
        var html_to_append = req(current_file);
        $('.hidden_content').append(html_to_append);
    };*///now dynamically loading popups one at a time using json see dynamic_content.js
});


// XML HttpRequest Function(s)
function req_page(page_no){
    var request = new XMLHttpRequest();
    
    var response_html = 'error'
    
    request.open("GET", page_no+'.html', false);/* changed to async = false */
    request.onreadystatechange = function(){
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 0) {
                response_html = request.responseText;
            }
        }
    };
        request.send();
        return response_html
};

function req(file_name){
    var request = new XMLHttpRequest();
    
    var response_html = 'error'
    
    request.open("GET", file_name, false);/* changed to async = false */
    request.onreadystatechange = function(){
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 0) {
                //console.log("response " + request.responseText);
                response_html = request.responseText;
            }
        }
    };
        request.send();
        return response_html
};