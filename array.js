// *|* - Some - Verifica se qualquer item do array passa no teste
// const ages = [3, 10, 18, 20];
// console.log (ages.some(checkAdult));

// function checkAdult(age) {
//   return age >= 18;
// }

// *|* - Filter - Cria um array preenchido com todos os elementos que passaram no teste
// const ages = [32, 33, 16, 40];

// console.log (ages.filter(checkAdult));

// function checkAdult(age) {
//   return age >= 18;
// }

// *|* - ForEach - Chama uma função para cada item do array em ordem
// const fruits = ["apple", "orange", "cherry"];
// const result = fruits.forEach(myFunction);

//  console.log(result);
 
// function myFunction(item, index) {
//     let text = "-"
//     return text += index + ": " + item;
// }

// *|* - Map - Cria um novo array com o resultado de uma chamada de função
// const numbers = [4, 9, 16, 25];
// result = numbers.map(Math.sqrt);
// console.log(result);

// *|* Slice - Retorna os itens selecionados de um array
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log (citrus);

// *|* - Sort - Ordena os elementos de um array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const result =  fruits.sort()

// console.log(result);


// *|* - Split - Transforma uma string em um array com substring
let str = "How are you doing today?";
const myArr = str.split(" ");
console.log (myArr);
