// 1-EXERCISE

// let elForm = document.querySelector(".js-form");
// let elInput = elForm.querySelector(".js-inp");
// let elRes = document.querySelector(".js-res");
// // console.log(elForm, elInput, elRes);

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   let inputVal = elInput.value.trim().split("");
//   let resLastLetter = inputVal[inputVal.length - 1];
//   let count = 0;
//   for (const iterator of inputVal) {
//     if (iterator == resLastLetter) {
//       count++;
//     }
//     else {
//       resLastLetter;
//     } elInput.value = "";
//   } elRes.textContent = count;
// }
// )

// TASK2

// let nums = prompt("Enter numbers ");
// let nums = prompt("Enter 1-number ");
// let nums = prompt("Enter 1-number ");

// let arr = [2, 3, 5, 6, 10];
// let resArr = 0;
// let lengthArr = arr.length;
// let middleNum = 0;
// for (const iterator of arr) {
//   resArr+=iterator;
//   middleNum = resArr/lengthArr;
// }
// console.log(middleNum);

// TASK3
let arr = ["olma", "anor", "nok"];
let firstEl = arr[0].split("");
let firstLetter = firstEl[0].toUpperCase();
let lastLetter = firstEl[firstEl.length - 1].toUpperCase();
console.log(firstLetter + firstEl.slice(1, 3) + lastLetter );
// console.log(firstLetter + lastLetter);
