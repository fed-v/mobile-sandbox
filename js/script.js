window.onload = function(e) {    
        
    var console = {
        log: function(txt, type='text') {
                 var para = document.createElement('p');
                 var node = document.createTextNode(txt);
                 para.appendChild(node);
                 
                 if(type == 'error') {
                     para.setAttribute("class", "error");
                 }
    
                 var element = document.getElementById("console");
                 element.appendChild(para);   
             }
    };
    
    console.log("test");
    console.log("boobs", "error");
      
}


// jQuery onload function
$(document).ready(function() {
    //alert("jquery loaded");
});