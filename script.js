
var boton = document.getElementById('tellname');
var saludo = document.getElementById('saludo')


boton.addEventListener("click", function(){
	var nombre = prompt("Escriba su nombre por favor:");
	saludo.innerText = "¡Hola " + nombre + "!"

})