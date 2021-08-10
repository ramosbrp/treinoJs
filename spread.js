// let lista = [1, 2, 5];
// let listaIncluir = [3, 4];

// console.log(lista);
// console.log(listaIncluir);

// for(let i in listaIncluir) {
//     for(let j in lista) {
    //             lista.splice(j, 0, listaIncluir[i]);
//         if(lista[j] >= listaIncluir[i]) {
//             j++;
//         }
//     }
// }

// console.log(lista);

// const listResult = [1, 2, ...listaIncluir, 5]
// console.log(listResult);

let arr = ["a", "b", "c"];
let arr2 = [...arr];

arr2.push("d");

console.log(arr);
console.log(arr2);

console.log(`arr = ${arr}`);
console.log(`arr2 = ${arr2}`);
