// //1
// let i = 0;
// while (i <= 10){
//   console.log(i)  
//   i++; 
// }

// //2
// let sum = 0;
// let i = 0;
// while (i <= 100){
//   sum += i;
//   console.log(sum);
//   i++;
// }

// //3
// let a = 1;
// while (a <= 20){
//   if (a % 2 === 0){
//     console.log(a);
       
//   } a++; 
// }

// //4
// let n = prompt("Введите число: ");
//     let factorial = 1;
//     while (n > 0) {
//     factorial *= n;
//     n--;    
//     }
//     console.log(factorial);

// //5
// let number = prompt("Введите число:");
// let sum = 0;
// let i = 0;
// while (number > 0){
//   if (sum = 0){
//   let numberString = number.toString();
//   i < numberString.length;
//   i++;
//   sum += parseInt(numberString[i]);
// }
// } console.log("Сумма цифр числа " + number + " равна " + sum)

// //6 
// let str = prompt("Введите пустую строку: ");
// if (str.length > 0) {
// let letters = "";
// for (var i = 0; i < str.length; i++) {
//         let char = str[i];
//         letters += char;
//      console.log("Буквы в строке" + letters)
// }
// }

// //7
// var number = parseInt(prompt("Введите число:"));
// let i = 0;
// while ( i <= number) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
//     i++
// }

// //8 
// let n = prompt("Введите строку: ");
// console.log(n.length)

// //9
// let arr = ["Aibek", 16];

// for (let i = 0; i < arr.length; i++){
// console.log(arr[i])
// }

// //10
// let array = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log("Сумма всех элементов массива: " + sum)

// //11
// let nums = [11, -12, 2, 33, -7];

// for (let i = 0; i <= nums.length; i++) {
//     if (nums[i] > 0) {
//         console.log('Все элементы положителны')
//     } else {
//         console.log('Есть отрицательные элементы')
//     }
//     } 

// //12
// let numbers = [1, 2, 3, 4, 5];
// if (numbers.length > 0);{
//     sum = 0
// for (let i = 0; i < numbers.length; i++){
//     sum += numbers[i]
// }   average = sum / numbers.length;
// }
// console.log("среднее арифмитическое значение: " + average)

// //13
// let element = [1, 2, -3, 4, 5];
// let min = element[0];
// for (let i = 1; i < element.length; i++){
//     if (element[i] <= min){
//     element[i] = min
//     return min;
// }
// }
//  console.log(element)

//  //14
// let n = [1, 2, 3, 4, 5, 6, 7];
// let even = 0;
// let odd = 0;
// for (let i = 0; i < n.length; i++){
//     if (n[i] % 2 === 0) {
//             even++;
//           } else {
//             odd++;
//           }
//         ;}
    
//         console.log("Количество четных элементов: " + even); 
//         console.log("Количество нечетных элементов: " + odd);
        
        

// //15
// let arrNums = [5, -2, 9, -1, 7, -4, 6];
// let newArray = [];

// for (let i = 0; i < arrNums.length; i++) {
//   if (arrNums[i] >= 0) {
//     newArray.push(arrNums[i]);
//   }
// }

// console.log(newArray); 