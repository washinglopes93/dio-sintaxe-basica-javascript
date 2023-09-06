/*
//IF
var jogador1 = 0;
var jogador2 = 0;
var placar;
jogador1 !== -1 && jogador2 !== -1 ? console.log('Os jogadores são válidos') : 
console.log('Jogadores Inválidos');
if(jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
}else if(jogador2 > 0 && jogador1 == 0){
    console.log('Jogador 2 marcou ponto!');
    placar = jogador2 > jogador1
}else{
    console.log('Ninguem marcou ponto');
}

//else if
//ninho de if
//switch;case

switch(placar){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
    default:
        console.log('Ninguém ganhou');
}

*/

//LAÇOS DE REPETIÇÃO
//FOR
let array = ['valor1', 'valor2', 'valor3','valor4','valor5'];
let objeto ={
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3',
}
/*for(let i = 0; i < array.length ; i++){
    console.log(i);
} */

//FOR/IN
/* for(let i in array){
    console.log(i);
}
//com objeto
for (i in objeto) {
    console.log(i)
} */

//FOR/OF
/* for (i of array){
    console.log(i);
}
//Com objeto
for(i of objeto.propriedade1){
    console.log(i);
}
 */
//while
/* var a = 0;
while(a < 10){
    a++;
    i++;
    var res = a*i;
    console.log(a);
} */

//dowhile
var a = 0;
do {
    a++;
    console.log(a);
}while (a<10);