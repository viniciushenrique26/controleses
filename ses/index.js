const { func } = require("prop-types");


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

function seach_cel() {  
    $('#container-cell').show(); 
    $('#container-user').hide(); 
    $('#container-seach').hide(); 
    $('#container-vinculo').hide();
    
     
};    
function seach_user() { 
     $('#container-user').show(); 
     $('#container-cell').hide(); 
     $('#container-seach').hide(); 
     $('#container-vinculo').hide();
};


function seach() {  
    $('#container-seach').show();
    $('#container-user').hide(); 
    $('#container-cell').hide();  
    $('#container-vinculo').hide();
};

function btn_vinculo() { 
    $('#container-vinculo').show();
    $('#container-seach').hide();
    $('#container-user').hide(); 
    $('#container-cell').hide();  
};