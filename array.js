//Vetores ou array
//Como declarar
/*let vetor = ['caracter', 1, true];
console.log(vetor); */

//Guardar varios tipos de dados e acessando seus indices
let vetorOne = ['string', 1, true,['array1'], ['array2']];
/*console.log(vetorOne[0]);
console.log(vetorOne[1]); */

//MANIPULANDO ARRAYS
//FOREACH
/* vetorOne.forEach(function(item, index){console.log(item, index)}); */

//push
/* vetorOne.push('novo item');
console.log(vetorOne); */

//pop
/* vetorOne.pop();
console.log(vetorOne); */

//shift
/*vetorOne.shift();
console.log(vetorOne); */

//unshift
/*vetorOne.unshift('novo item inicio');
console.log(vetorOne); */

//indexof
/*console.log(vetorOne.indexOf(true)); */

//splice // os selecionados seram excluidos
/*vetorOne.splice(0, 2); 
console.log(vetorOne); */

//slice // os slecionados permaneceram e o resto é excluido
/*let novoarray = vetorOne.slice(0,3);
console.log(novoarray); */

//OBJETOS
//declarand
let objeto = {
    String: 'nome do objeto',
    Number: 1,
    Boolean: true,
    Array: ['arraydoobjeto'],
    objetoInterno:{
        objetoInterno: 'objeto interno'
    }
};

//acessando essas propriedades do objeto
/*console.log(objeto); */

//acessando apenas uma propriedade do objeto
/*console.log(objeto.objetoInterno) */

//destruturação do objeto
/*var nome = objeto.String;
console.log(nome);

var vatordoobjeto = objeto.Array;
console.log(vatordoobjeto); */

var {String, Boolean, objetoInterno} = objeto;
console.log(String, Boolean, objetoInterno)