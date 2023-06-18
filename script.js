  "use strict";



// alert("Hello World")


// let number = 10

// console.log(number);


// const user ={
//     name : "Nurbek"
// }
// user.name = "Maks"
// console.log(user);


// let number = 5.6 //Data type number

// console.log(8/0);//infinity чексиздик
// console.log("Nurbek"*8); //NaN

// const name = `Nurbek` //string

// // Boolean
// const isMaried = false;
// const isCircleEarth = true;
//  //null
// //  console.log(nurbek);

// //  undefined
// let und;
// console.log(und);

// // object
// const thief = {
//     age:"300",
//     jacket:"black",
//     isLong: false

// }
// console.log(thief);

// // array
// const color = ["red","black","green","blue"]
// console.log(color);

// alert("hello JavaScript")
// const data_1 = confirm("True False")
// console.log(data_1);

// // string
// const string = prompt("Atin kim")
// console.log(typeof string);

// // Integer
// const age = +prompt("Kanchadasyn")
// console.log(age);

// const favouriteColor = []

// favouriteColor[0] = prompt("Color #1")
// favouriteColor[1] = prompt("Color #2")
// favouriteColor[2] = prompt("Color #3")

// console.log(favouriteColor);

// const name = prompt("what is your name")





// // isMaried

// const name = prompt("Атың ким?")
// const age = +prompt("канча жаштасың?")

// const isMaried = confirm("Үйлөгөнсүңбү?")

// if(isMaried){
//     const ageMaried = +prompt("Канча жашта?")
//     if(ageMaried<25 && ageMaried<24){
//         alert(`Жок дегенде 25 ке чыгып үйлөнбөйт белең,${25-ageMaried} жыл чыдай албай калыпсында а тиррик`)
//     }
//     else if(ageMaried>23 && ageMaried<27){
//         alert("Жакшы норм")
//     }
//     else if(ageMaried>26 && ageMaried>30){
//         alert("Бир аз кеч калыпсында")
//     }
//     else if(ageMaried>29){
//         alert(`${ageMaried-25} жыл үйлөнбөй не кылып жүрдүң`)
//     }
//     alert(`Демек үйлөнгөнүңө ${age-ageMaried} жыл болуптур да а`)
// }
// else{
//     if (age>30 && age<=40){
//         alert("Аа вакф сынбы")
//     }
//     else if(age>21 && age <= 30){
//         alert("40ка чейин кызматты кыла бер")
//     }
//     else if(age<=21){
//         alert("Али сага көп бар экен")
//     }
//     else if(age>40){
//         alert("Болду эми үйлөнө бер")
//     }
// }



// let numberOfSeries;

// function startApp(){
//     numberOfSeries = +prompt("Канча сериал көргөнсүз","");

//     while(numberOfSeries == "" || numberOfSeries == null || isNaN(numberOfSeries)){
//         numberOfSeries = +prompt("Канча сериал көргөнсүз","");
//     }
// }



// startApp()

// const seriesDb = {
//     count : numberOfSeries,
//     series : {},
//     actors : {},
//     genres : [],
//     private  : false
// }

// function rememberMySeries(){

//     for (let i = 0; i < 2; i++){
//         const a = prompt("Акыркы көргөн сериалыңыз?"),
//         b = prompt("Канчалык баа бересиз?")
//         if (a != null && b != null && a != "" && b != "") {
//             seriesDb.series[a] = b
//             console.log("Done");
//         }
//         else{
//             console.log("Error");
//             i--;
//         }
//     }
// }
// rememberMySeries()

// function detectLavelSeries(){

//     if (seriesDb.count<5){
//         console.log("Аз сериал көрүпсүз");
//     }else if (seriesDb.count>=5 && seriesDb.count <10){
//         console.log("Классик сериалчы экенсиң");
//     }else if(seriesDb.count >=10 ){
//         console.log("Сериалчы экенсин");
//     }else{
//         console.log("Error");
//     }

// }
// detectLavelSeries()

// function writeGenres(){
//     for(let i = 0;i<4;i++){
//         const janr = prompt(`Жакшы көргөн жанр${i+1}`)
//         seriesDb.genres[i] = janr;
//     }
// }

// writeGenres()

// function showDB(){
//     if(!seriesDb.private){
//         console.log(seriesDb);
//     }
// }

// showDB()





// // calback #17

// function first(calback){
//     // code
//     setTimeout(()=>{
//         console.log(1)
//         calback()
//     },1000)
// }

// function second() {
//     console.log(2);
// }

// first(second)






// #18

// const thief = {
//     jacket: "black",
//     height: 1.8,
//     colors: {
//         hair: "gray",
//         style: "curley"
//     },
//     howOut: function(){
//         console.log("Fast with halp doors");
//     }
// };

// delete thief.jacket
// console.log(Object.keys(thief).length);

// for (let key in thief){
//     if(typeof thief[key] == "object"){
//         for(let i in thief[key]){
//             console.log(`${i} has value ${thief[key][i]}`);
//         }
//     }
//     else{
//         console.log(`${key} has value ${thief[key]}`);
//     }
// }

// thief.howOut()

// const {hair,style} = thief.colors
// console.log(hair,style);






// #19 Массив
// onoi
//  const arr = [25,17,43,85,6,1];
// arr.sort((a,b) => a-b)
// console.log(arr);


// kyiyn
 //  arr.sort(compareFn)
// console.log(arr);

// // Сортировка функции
// function compareFn(a,b){
//     return a-b
// }

// arr[99] = 0;
//  console.log(arr);

// arr.pop();
// arr.push(7)

// анча иштетилбеген
// arr.shift()
// arr.unshift(0)


// console.log(arr);

// for( let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for( let value of arr){
//     console.log(value);
// }

// arr.forEach(function(item, index, arr) {
//     console.log(`${index}:${item} into arr ${arr}`);
// });

// const movies = prompt("What's your favorite movies")
// const userMovies = movies.split(" ")
// // coryirobka
// userMovies.sort()
// console.log(userMovies.join("-"));




// #20

// object

// let x = 10
// let y = x
// console.log(x,y+5);

// const number = {
//     x:10,
//     y:5,
// }

// const newNumber = number // сырты чехол

// newNumber.x = 15

// console.log(newNumber);
// console.log(number);




// kyiyn
// function kochurObj(obj){
//     let objKochur = {}
//     for(let key in obj){
//         objKochur[key] = obj[key]
//     }
//     return objKochur
// }

// const number = {
//     x: 10,
//     y:5,
// }

// const newNumber = kochurObj(number)

// newNumber.x = 15;

// console.log(newNumber);
// console.log(number);


// onoi
// const number = {
//     x: 10,
//     y:5,
//     z:{
//         a:1,
//         b:2
//     }
// }

// const newNumber = Object.assign({},number)

// newNumber.z.b = 5;

// console.log(newNumber);
// console.log(number);

// const number = {
//     x: 10,
//     y:5
// }

// const addNumber = {
//     z:15
// }

// const allNumber = Object.assign(number,addNumber)
// console.log(allNumber);

// 21 Массив

// // array
// const arr = [1,2,3]

// const numbers = arr.slice()

// numbers[1] = "Nurbek"

// console.log(arr);
// console.log(numbers);

// // SPREAD

// const liverpool = ["Salah","Mane"]
// const manCity = ["Mahrez"]

// const mixPlayer = [...liverpool, ...manCity]

// console.log(mixPlayer);


// function logger(x,y,z){
//     console.log(x+y+z)
// }

// const calc = [1,2,3]

// logger(...calc)

// const number = {
//     x:10,
//     y:5
// }

// const newNumber = {...number}
//  newNumber.x = 15

//  console.log(number);
//  console.log(newNumber);




// #22 OOP

// const car = {
//     motor: "X",
//     color: "red",
//     isAirbag : true,
//     isSpeed: function(){
//         console.log(320);
//     }
// }
// // const gm = {
// //     isAirbag: false
// // }

// // Object.setPrototypeOf(gm,car)

// // console.log(gm);

// const bmw = Object.create(car)
// console.log(bmw);


// // 23 amaliyat


// const seriesDb = {
//     count : 0,
//     series : {},
//     actors : {},
//     genres : [],
//     private  : false,
//     start: function(){
//         seriesDb.count = +prompt("Канча сериал көргөнсүз","");

//         while(seriesDb.count == "" || seriesDb.count == null || isNaN(seriesDb.count)){
//             seriesDb.count = +prompt("Канча сериал көргөнсүз","");
//         }
//     },
//     rememberMySeries: function(){
//         for (let i = 0; i < 2; i++){
//             const a = prompt("Акыркы көргөн сериалыңыз?"),
//             b = prompt("Канчалык баа бересиз?")
//             if (a != null && b != null && a != "" && b != "") {
//                 seriesDb.series[a] = b
//                 console.log("Done");
//             }
//             else{
//                 console.log("Error");
//                 i--;
//             }
//         }
//     },
//     detectLavelSeries: function(){
//         if (seriesDb.count<5){
//             console.log("Аз сериал көрүпсүз");
//         }else if (seriesDb.count>=5 && seriesDb.count <10){
//             console.log("Классик сериалчы экенсиң");
//         }else if(seriesDb.count >=10 ){
//             console.log("Сериалчы экенсин");
//         }else{
//             console.log("Error");
//         }
//     },
//     writeGenres: function(){
//         // for(let i = 0;i<3;i++){
//         //     const janr = prompt(`Жакшы көргөн жанр${i+1}`)
//         //     if(janr == "" || janr == null){
//         //         console.log("Туура эмес");
//         //         i--
//         //     }else{
//         //         seriesDb.genres[i] = janr;
//         //     }
//         // }
//             let genres = prompt(`Жакшы көргөн жанрды пробел кылып баарын жазын`).toLowerCase()
//             if(genres == "" || genres == null){
//                 console.log("Туура эмес");
//             }else{
//                 seriesDb.genres = genres.split(" ");
//                 seriesDb.genres.sort()
//             }

//         seriesDb.genres.forEach((item,index)=>{
//             console.log(`Жакшы көргөн жанрыңыз ${index+1} аты ${item}`);
//         })
//     },
//     visibleDB: function(){
//         if(seriesDb.private){
//             seriesDb.private = false
//         }else{
//             seriesDb.private = true
//         }
//     },
//     showDB: function(){
//         if(!seriesDb.private){
//             console.log(seriesDb);
//         }
//     }

// }


// 24 Dinamic type

// // to String
// // 1-)
// console.log(typeof String(4));
// // 2_)
// console.log(typeof ("Nurba" +20));

// // to Number
// // 1-)
// console.log(typeof Number ("5"));
// // 2-)
// console.log(typeof +"5");
// // 3-)
// console.log(typeof parseInt("55"));


// // to boolean
// // 0, "" , undefined, null, NaN = dayim false beret
// // Misal

// // 1-)
// let age = 0

// if(age){
//     console.log("G");
// }
// // false

// age = 20
// if(age){
//     console.log("M");
// }
// // True

// // 2-)
// console.log(Boolean(null));
// // false
// console.log(Boolean(0));
// // false
// console.log(Boolean(4));
// // true
// console.log(Boolean(NaN));
// // false

// // 3-)
// console.log(!!4);
// // true
// console.log(!!undefined);
// // false

// 25 DOM

// // Old way
// // id-)
// const box = document.getElementById("box")
// console.log(box);

// // tagName-)

// const button = document.getElementsByTagName("button")[0]
// console.log(button);

// // class-)
// //getElementsByClassName менен circle ты forEach кылса болбойт бул массив
// const circles = document.getElementsByClassName("circle")
// console.log(circles);

// // New way
// const wrapper = document.querySelector(".wrapper")
// console.log(wrapper);

// const heart = wrapper.querySelectorAll(".heart")
// //querySelectorAll менен heart ты forEach кылса болот
// heart.forEach((item)=>{
//     console.log(item);
// })

// // 26 Metod
const box = document.querySelector("#box")
console.log(box);
// const button = document.querySelectorAll('button')
// const circles = document.querySelectorAll(".circle")
// const hearts = document.querySelectorAll(".heart")
// const circleWrapper = document.querySelector(".circle__wrapper")

// // -1)
// // box.style.backgroundColor = "red"
// // box.style.height = "500px"
// // box.style.width = "500px"
// // -2)
// box.style.cssText = "backgroundColor:red;height:300px;width:300px;"
//
// button[0].style.width = "100px"
//
// circles[0].style.backgroundColor = "yellow"
//
// hearts.forEach((item)=>{
//     item.style.backgroundColor = "black"
// })
//
// const newButton = document.createElement("button")
// document.body.append(newButton)
//
// const myCircle = document.createElement("div")
// myCircle.classList.add("circle")
// // circleWrapper.append(myCircle)
// // circleWrapper.before(myCircle)
// // circleWrapper.after(myCircle)
// // circles[0].before(myCircle)
// // circles[2].remove()
// // circles[0].replaceWith(myCircle)
//
// // myCircle.innerHTML = "<pre>E</pre>"
// // myCircle.textContent = "<pre>E</pre>"
//
// // circleWrapper.insertAdjacentHTML("afterbegin","<big>B</big>")
// // circleWrapper.insertAdjacentHTML("afterend","<big>B</big>")
// // circleWrapper.insertAdjacentHTML("beforeend","<big>B</big>")
// // circleWrapper.insertAdjacentHTML("beforebegin","<big>B</big>")
//
