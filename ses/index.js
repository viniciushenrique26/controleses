

const body = document.getElementsByTagName('body')[0]


var btnSeachUser= document.querySelector("#");
var btnSeachTel= document.querySelector("#seach-tel");
var user = document.querySelector(".container-form-user");  
var tel = document.querySelector("container-form");   
var gravar = document.querySelector("#botao"); 

btnSignIn.addEventListener("click", function (){ 
    user.className = "seach-user-js"; 
}); 
btnSignIn.addEventListener("click", function (){ 
    tel.className = "seach-js"; 
});


function collapseSidebar() {
	body.classList.toggle('sidebar-expand')
}

window.onclick = function(event) {
	openCloseDropdown(event)
}

$( document ).ready(function() {
   
    function seach_cel() {  
        alert("cel"); 
        $('#qqq').hide(); 
        $('#container-cell').show();
    
        alert("cel3"); 
    }    
    function seach_user() { 
        alert("abc"); 
         $('#container-user').show(); 
         $('#container-cell').html('ggg'); 
    }
});


