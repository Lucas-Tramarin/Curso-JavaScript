function calcular_imc(){
		let peso = document.getElementById("peso").value * 1;
		let altura = document.getElementById("altura").value * 1;	
		let imc = peso / altura ** 2;	
		resultado.innerHTML = "O IMC é igual à: " + imc
}