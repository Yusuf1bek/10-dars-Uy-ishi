// Uy ishi

// task -1
// let num = [];
// function arrFindMaxNum(arr, count) {
//     if (count === 0) {
//         return arr[0]; 
//     }
//     let num = (prompt("Son kiriting")); -0
//     arr.push(num);
//     let total = arrFindMaxNum(arr, count - 1);
//     return num > total ? num : total;
// }
// let maxNumber = arrFindMaxNum(num, 5);
// console.log("array - ", num);
// console.log("Shu arrayning katta qiymati - ", maxNumber);
// task -1

// task -2
// let arr1 = [5, 6, true, null, 8];
// let arr2 = [0, 2, 5, false, 6];
// let newArr = arr1.concat(arr2);
// function arrNumFunc(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             sum += arr[i];
//         } else if (arr[i] === true) {
//             sum += 1; 
//         } else if (arr[i] === false || arr[i] === null) {
//             sum += 0; 
//         }
//     }
//     return sum;
// }
// let sum = arrNumFunc(newArr);
// console.log("New Arr", newArr);
// console.log("Yig'indisi - ", sum);
// task -2

// task -3
// let numbers = [43, 12, 76, 23, 97, 28, 11];
// function findMinNumIndex(arr) {
//     let minIndex = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[minIndex]) {
//             minIndex = i;
//         }
//     }
//     return minIndex;
// }
// let minIndex = findMinNumIndex(numbers);
// console.log("Eng kichik son -", numbers[minIndex]);
// console.log("Eng kichik sonning indeksi -", minIndex);
// task -3

// task -4
// let arr1 = [5, 4, 6, 3, 7, 1];
// let arr2 = [22, 42, 34, 55, 67, 11, 32];
// let newArr = arr1.concat(arr2);
// newArr.sort((a, b) => a - b);
// console.log("New Arr", newArr);
// task -4

// task -5
// let carsArr = [
//     {
//         name:"Lasetti",
//         price:9000
//     },
//     {
//         name:"Damas",
//         price:7800
//     },
//     {
//         name:"Cobalt",
//         price:12500
//     },
//     {
//         name:"Gentra",
//         price:14000
//     },
//     {
//         name:"Onix",
//         price:17000
//     },
// ]
// let sortedByName = [...carsArr].sort((a, b) => a.name.localeCompare(b.name));
// let sortedByPrice = [...carsArr].sort((a, b) => a.price - b.price);
// console.log("Name", sortedByName);
// console.log("Price", sortedByPrice);
// task -5

// task -6
// let arr = ["Salom", "Raxmat"];
// let word1 = prompt("Ixtiyoriy soz kiriting");
// let word2 = prompt("Ixtiyoriy soz kiriting");
// arr.splice(1, 0, word1, word2);
// console.log("New Arr", arr);
// task -6

// task -7
// let userString = prompt("Soz kirting");
// let userNumber = prompt("Kop honali son kiriting");
// let reversedString = userString.split('').reverse().join('');
// let reversedNumber = userNumber.split('').reverse().join('');
// console.log("Teskari soz va gap - ", reversedString);
// console.log("Teskari son va raqam - ", reversedNumber);
// task -7

// webkitspech
// Bu masalada siz ranglar etasiz va orqa fon shu ranga ozgaradi

// const recognition = new webkitSpeechRecognition();
// recognition.lang = 'UZ-uz';
// recognition.interimResults = false; 
// recognition.maxAlternatives = 1; 

// document.getElementById('startButton').addEventListener('click', () => {
//     recognition.start();
// });

// recognition.onresult = (event) => {
//     const command = event.results[0][0].transcript.toLowerCase(); 
//     if (command === 'qora') {
//         document.body.style.backgroundColor = 'black'; 
//         document.body.style.color = 'white'; 
//     } else if (command === 'oq') {
//         document.body.style.backgroundColor = 'white'; 
//         document.body.style.color = 'black'; 
//     } else if (command === 'sariq') {
//         document.body.style.backgroundColor = 'yellow'; 
//         document.body.style.color = 'black'; 
//     } else if (command === 'yashil') {
//         document.body.style.backgroundColor = 'green'; 
//         document.body.style.color = 'black'; 
//     } else if (command === "ko'k") {
//         document.body.style.backgroundColor = 'blue'; 
//         document.body.style.color = 'black'; 
//     } else if (command === 'qizil') 
//         document.body.style.backgroundColor = 'red'; 
//         document.body.style.color = 'black'; 
// };
// webkitspech

// Uy ishi

