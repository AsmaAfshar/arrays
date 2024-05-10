import promptSync from 'prompt-sync';
const prompt = promptSync();
let myFruits = ["apple", "orange", "peach"];
let otherFruits = ["watermelon", "grapes", "guava"];
// console.log(myFruits);
// ===================== array.pop method =====================
// myFruits.pop();       // remove the last element in the array
// console.log(myFruits);
// ========================array.push method==================
// myFruits.push('mango', 'banana');     // add in the last element on the array
// console.log(myFruits);
//================== concatenation method ========================
// let combinedArray = myFruits.concat(otherFruits);
// console.log(combinedArray);
// =====================array.shift method ==========================
// myFruits.shift();            // remove the 1st element of the array
// console.log(myFruits);
// ===================== array.unshift method ==========================
// myFruits.unshift('olive')
// console.log(myFruits);       // add the element on start of the array
// let allaowedStudents = ["ayesha", "humaira", "laiba", "sumaira", "nabila", "faiza"];
//          incdex           0  ,   1      ,     2   ,    3     ,   4     ,   5
// if(allaowedStudents.length > 5){
// allaowedStudents.pop();
// }
// console.log(allaowedStudents);
// ======================== array.slice method ==================================
// let slicedarray = allaowedStudents.slice(1,4);      // here 1 show the index number and 4 show the quantity
// console.log((slicedarray));                        
// =================== array.splice method ========================================
/// 1- remove element                       // add, remove, replace any element
// let removeElement = allaowedStudents.splice(0,1);   // here 0 represent index and 1 represent no of element / quantity
// console.log(removeElement);
// console.log(allaowedStudents);
// 2- add element
// let addElement = allaowedStudents.splice(0,0, 'aeyla', 'jaweria', 'kanwal');  // here 1st zero means add point and 2nd 0 means replace or remove point.
// console.log(addElement);
// console.log(allaowedStudents);
//3- replace ellement
// allaowedStudents.splice(2,1, 'kiran');
// console.log(allaowedStudents);
// ===========================index, length, math.random mathode =======================
let friends = ['bisma', 'rabia', 'rafia', 'saima', 'sania'];
// index          0        1        2        3         4    
let length = friends.length;
let randomIndex = Math.floor(Math.random() * length);
console.log(randomIndex);
let billPerson = friends[randomIndex];
console.log(billPerson);
