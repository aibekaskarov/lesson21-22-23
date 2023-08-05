// //1
// let str = "Hello, World!";
// let reversedStr = "";
// let i = str.length

// while (i >= 0) {
//   reversedStr += str[i];
//   i--;
// }
// console.log(reversedStr);

// //2
// let nums1 = [1, -3, 2, 5, 10, 0];
// let result = nums1[0];
// let i = 0;

// while (i <= nums1.length) {
//   if (nums1[i] < result ) {
//     result = nums1[i]
//   }
//   i++;
// } console.log(result)


// //3
// let str2 = "Hello";
// const vowels =  ['a', 'e', 'i', 'o', 'u'];
// let sum2 = 0;
// let i = 0;
// while (i < str2.length){
//   if (vowels.includes(str2[i].toLowerCase())){
//     sum2++; 
//   } i++;
// } console.log("Количество гласных букв в строке: " + sum2)

// //4
// let surname = ["Askarov"];
// let name = [" Aibek"];
// let fullName = surname.concat(name);
// console.log(fullName)

// //5
// let array3 = [1, 2, 2, 5, 7, 1, 3];
// let i = array3[0];

// while (i < array3.length){
//   if (array3.indexOf(array3[i]) !== i){
//   array3.splice(i, 1);
//   } else {
//     i++;
//   }
// } console.log(array3)

// //6
// let arrNum = [1, 2, 3, 2, 1];
// let i = 0;
// let x = arrNum.length - 1;
// let isPalindrome = true;
// while (i < x) {
//   if (arrNum[i] !== arrNum[x]) {
//     isPalindrome = false;
//     break;
//   } i++;
//   x--;
// }
// if (isPalindrome) {
//   console.log("Массив является палиндромом");
// } else {
//   console.log("Массив не является палиндромом");
// }

// //7
// let arrStr = "Aibek";
// let i = 0;
// let j = arrStr.length - 1;
// let palindrome = true;
// while (i < j) {
//   if (arrStr[i] !== arrStr[j]){
//     palindrome = false;
//     break;
//   } i++;
//     j--;
// } 
// if (palindrome){
//   console.log("Массив является палиндромом")
// } else {
//   console.log("Массив не является палиндромом")
// }

// //8
// let z = "My name is Aibek";
// let i = 0;
// let p = z.length - 1;
// let numberOfWords = 0;
// while (i < p){
//   if (z[i] === " "){
//    numberOfWords++;
//   } i++;
// }
//  console.log("Количество слов в строке: " + numberOfWords)

//  //9
//  let i = 7; 
//  while (i <= 98){
//   console.log(i);
//   i += 7;
//   }
 
// //10
// let n = Number(prompt("Введите число: "));
// let r = 1;
// let m = 2;
// while (n >= m){
//   r = m;
//   m *= 2
  
// } console.log("Самая большая степень двойки не превосходящая " + n + " равна " + r )