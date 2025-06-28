var valor_total_compra = 0

function adicionarProduto(){
	var produto_nome = document.getElementById("produto_nome").value;
	var produto_valor = document.getElementById("produto_valor").value * 1;
	var produto_quantidade = document.getElementById("produto_quantidade").value;
	var produto_valor_total = (produto_valor * produto_quantidade);
	valor_total_compra += produto_valor_total

	var produto_item_tabela = "<tr><td>" + produto_nome + "</td><td>" + produto_valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) + "</td><td>" + produto_quantidade + "</td><td>" + produto_valor_total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) + "</td></tr>";
	
	if(produto_nome == "" || produto_valor == "" || produto_quantidade == ""){
		alert("Por favor, insira todos os valores");
	}else{
		alert("Produto inserido com sucesso!");
		tabela_produtos.innerHTML += produto_item_tabela;
		valor_total.innerHTML = "<span>Total compra: </span>" + valor_total_compra.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
		document.getElementById("produto_nome").value = "";
		produto_valor = document.getElementById("produto_valor").value = "";
		produto_quantidade = document.getElementById("produto_quantidade").value = "";
	}
}