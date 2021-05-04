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

$(function seach_cel(){
    $("#content-cell").load("cadastro_celular.html"); 
});  

$(function seach_user() { 
     $('#container-user').load("cadastro_usuario.html"); 
};


function seach() {  
    $('#container-seach').load();
   
};

/*function btn_vinculo() { 
    $('#container-vinculo').show();
    $('#container-seach').hide();
    $('#container-user').hide(); 
    $('#container-cell').hide();  
}; 

function record_cell() { 
    alert("Celular Gravado!");
}; 

function cancelar_cell() { 
    alert("Cancelado!");
}; 

function record_user() { 
    alert("Usuário Gravado!");
}; 

function cancelar_user() { 
    alert("Cancelado!");
}; 

function pesquisar_vinculo() { 
    alert("Gerando Lista....");
}; 
function view_all() { 
    alert("Aguarde um instante...");
};