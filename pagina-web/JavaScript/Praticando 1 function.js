function calcular_area(){
	var altura = document.getElementById("altura").value * 1;
	var base = document.getElementById("base").value * 1;
	var area = altura * base
	if(!isNaN(area)){
		resultado.innerHTML = "A área é igual à: " + area;
		document.getElementById("altura").value = ""
		document.getElementById("base").value = ""
	} else{
		alert("Os valores precisam ser números")
	}
}