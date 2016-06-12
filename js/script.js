// I want my console to be global
var console = {};

window.onload = function() {    
        
    createConsole();
    
    console.log("Normal text.");
    console.log("Error text.", "error");
      
}

function createConsole() {
    console = {
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
    
}

// jQuery onload function
$(document).ready(function() {
    //alert("jquery loaded");
});