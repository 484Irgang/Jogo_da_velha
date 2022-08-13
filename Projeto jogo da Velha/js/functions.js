window.onload = function(){
	alert('Seja Bem vindo ao nosso jogo da velha!!');
	let p1 = prompt('Player 1, qual é o seu nome?');
	let p2 = prompt('Player 2, qual é o seu nome?');
	alert('Ok vamos começar');
	jogador1 = document.querySelector('.jogador1');
	jogador2 = document.querySelector('.jogador2');
	jogador1.innerText = p1;
	jogador2.innerText = p2;
	var player1 = {'nome':p1,'vez':true,'acao':[]};
	var player2 = {'nome':p2,'vez':false,'acao':[]};
	var campeao;
	var box = document.getElementsByClassName('box');
	var boxes = [];
	var indexAtual = 0;
	var arrBase = {'res1':[0,1,2],'res2':[3,4,5],'res3':[6,7,8],'res4':[0,3,6],'res5':[1,4,7],'res6':[2,5,8],'res7':[0,4,8],'res8':[2,4,6]}

	for(i=0;i<box.length;i++){
		boxes.push(box[i]);
	}

	analisarJogo();
	
	function analisarJogo(){
		if(campeao == undefined && player1.vez == true){
			movimentoPlayer1(player1.acao, player1.vez, player1.nome);
		}
		else if(campeao == player1.nome){
			alert('Parabéns '+player1.nome+', você venceu')
		}
		else if(player1.acao.length == 5 && player2.acao.length == 4 && campeao == undefined){
			alert('Empate')
		}
		else if(campeao == undefined && player2.vez == true){
			movimentoPlayer2(player2.acao, player2.vez, player2.nome);
		}
		else if(campeao == player2.nome){
			alert('Parabéns '+player2.nome+', você venceu')
		}
		
	}
	
	function movimentoPlayer1(ação, vez, player){	
		
		for(var p in boxes){
			boxes[p].onclick = function(){
				indexAtual = boxes.indexOf(this);
				if(player1.acao.indexOf(indexAtual) == -1 && player2.acao.indexOf(indexAtual) == -1){
					this.style.backgroundColor = 'red';
					player1.acao.push(indexAtual);
					calcularResultado(player1.acao,arrBase.res1,player1.nome);
					calcularResultado(player1.acao,arrBase.res2,player1.nome);
					calcularResultado(player1.acao,arrBase.res3,player1.nome);
					calcularResultado(player1.acao,arrBase.res4,player1.nome);
					calcularResultado(player1.acao,arrBase.res5,player1.nome);
					calcularResultado(player1.acao,arrBase.res6,player1.nome);
					calcularResultado(player1.acao,arrBase.res7,player1.nome);
					calcularResultado(player1.acao,arrBase.res8,player1.nome);
					player1.vez = false;
					player2.vez = true;
					analisarJogo();
				}
				else{
					alert('Movimento repetido')
				}	
			}	
		}	
	}	

	function movimentoPlayer2(ação, vez, player){	
		for(var p in boxes){
			boxes[p].onclick = function(){
				indexAtual = boxes.indexOf(this);
				if(player2.acao.indexOf(indexAtual) == -1 && player1.acao.indexOf(indexAtual) == -1){
					this.style.backgroundColor = 'green';
					player2.acao.push(indexAtual);
					calcularResultado(player2.acao,arrBase.res1,player2.nome);
					calcularResultado(player2.acao,arrBase.res2,player2.nome);
					calcularResultado(player2.acao,arrBase.res3,player2.nome);
					calcularResultado(player2.acao,arrBase.res4,player2.nome);
					calcularResultado(player2.acao,arrBase.res5,player2.nome);
					calcularResultado(player2.acao,arrBase.res6,player2.nome);
					calcularResultado(player2.acao,arrBase.res7,player2.nome);
					calcularResultado(player2.acao,arrBase.res8,player2.nome);
					player2.vez = false;
					player1.vez = true;
					analisarJogo();
				}
				else{
					alert('Movimento repetido')
				}	
			}
		}
	}

	function calcularResultado(arr,res,nome){
		numWin = 0;
		for(i=0;i<res.length;i++){
			if(arr.includes(res[i])){
				numWin++;
			}
		}
		if(numWin == 3){
			return campeao = nome;
		}
	}	
		

}