var rightArrow = document.getElementById("right-button")
var leftArrow = document.getElementById('left-button')
var merch = document.getElementsByClassName("item")
var totalDePixelesMovidos = 0;
var vecesMovidas = 0;
var limit = 2;


rightArrow.addEventListener("click", () => {
	if(vecesMovidas >= limit){
		return 0;
	}
	vecesMovidas +=1;
	
	for(product of merch){
		totalDePixelesMovidos +=((product.offsetWidth * 3) + 61);
		product.style.transform = "translateX(-"+  totalDePixelesMovidos  +"px)"
		//transform: translateX(-20px);
	}
})


leftArrow.addEventListener("click", () => {
	for(product of merch){
		totalDePixelesMovidos -= ((product.offsetWidth * 3) + 61)
		product.style.transform = "translateX("+totalDePixelesMovidos+"px)"
	}
})


/*


por paciente en pacientes{
	paciente.inyectar()
}


for(paciente of pacientes){
	secretaria.escribe(paciente.nombre)
	paciente.inyectar()
}

*/