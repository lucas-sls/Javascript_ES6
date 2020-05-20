/* CURRYING: Transformação de uma função com n parâmetros em apenas 1 função com 1 parâmetro,
 sendo que a cada parâmetro vai retornando uma função. */

 function soma(a){
     return function(b){
         return a+b;
     }
 }

 const soma_2 = soma(2);
 console.log(soma_2(2)); // 4
 console.log(soma_2(3)); // 5
 console.log(soma_2(4)); // 6
 console.log(soma_2(5), '\n'); // 7

 // COMANDOS COM STRINGS

 const a = "Lucas"

 console.log(a.length) //TAMANHO DA STRING
 console.log(a.split("")) // QUEBRA UMA STRING POR UM DELIMITADOR
 console.log(a.replace("uc","ar")) //SUBSTITUI VALORES 
 console.log(a.slice(-1)) // RETORNA ÚLTIMA FATIA DE UMA STRING
 console.log(a.slice(0, -1)) // FATIA QUE INICIA NO PRIMEIRO ITEM ATÉ O PENÚLTIMO
 console.log(a.slice(1)) // FATIA A PARTIR DA SEGUNDA STRING ATÉ A ÚLTIMA
 console.log(a.substr(0,2) , '\n') // DUAS PRIMEIRAS STRINGS

// COMANDOS COM NUMBERS

const x = 99
console.log(typeof x) // X É NUMBER

num_to_str = x.toString() // CONVERSÃO DE NUMBER PARA STRING
console.log(num_to_str) 
console.log(typeof num_to_str) // NUM_TO_STR É STRING
