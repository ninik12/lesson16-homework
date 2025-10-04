// 1
let array1 = [14, 150, 'css', null, 'javascript', 25];
let arrayMap =array1.map(function(el){
    if(typeof el === "number"){
       return el * el;
    } else if(typeof el === "string"){
       return el.toUpperCase();
    }else{
        return el;
    }
})
console.log(arrayMap);

// 2
let correctAnswer = "tbilisi";
let userAnswer = prompt("Capital of Georgia?");
if(userAnswer.toLowerCase() === correctAnswer){
    console.log("It is correct");
}else{
    console.log("it is incorrect");
}

//3
let array2 =['hello1', 14, 24, 'hello2']
let array2New = array2.filter((item) => {
    if (typeof item === "number"){
        return item;
    }
})
console.log(array2New);

//4
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let languagesNew = languages.filter((el) => {
    if(el.length > 3){
        return el;
    }
})
console.log(languagesNew);

//5
let words = ['Madrid', 'rome', 'Milan', 'berlin'];
let newWords =words.filter((el) => {
    if(el.includes("m") || el.includes("M")){
        return el;
    }
})
console.log(newWords);

//6
 let link = 'https://google.com';
 let checkedLink = (item) => {
    if(item.includes('https://')){
        return "კი მოიცავს"
    }return "არა, არ მოიცავს"
 }
 console.log(checkedLink(link));


 //7
 let array7 = [5,4,3,2,1];
 let array7New = array7.map((el) => el * el)
 console.log(array7New);


 //8
let string1 = '12345'
let sum = string1.split('').map(Number).reduce((acc, curr) => acc + curr, 0);
console.log(sum);

//9
let numbersArray = [23, 3, 56, 7, 89, 13];
let sumNew = numbersArray.reduce((acc, curr) => acc + curr, 0);
console.log(sumNew);

//10
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let arrayNew = arr1.concat(arr2, arr3)
console.log(arrayNew);

//11
let array = ['apple', 'lemon', 'orange', 'banana', 'dragon-fruit'];
let removedArray = array.splice(-2, 1, 'strawberry')
console.log(removedArray);
console.log(array);


let arrayNew1 = ['apple', 'lemon', 'orange'];
if (arrayNew1.length >= 2) {
  arrayNew1.splice(-2, 1, 'strawberry');
} else {
  console.log('მასივში არ არის საკმარისი ელემენტები!');
}
console.log(arrayNew1);


//12

 let info= 'good day';
let newWord = info.slice(5, 8)
console.log(newWord);

//13
let str = 'javascript';
let strFnc = (el) => el.length

console.log(strFnc(str));

//14
let array3 = [5, 25, 89, 120, 36];
array3.push('javascript','python' ) 
console.log(array3);
array3.unshift('html', 'css');
console.log(array3);
console.log(array3.length);
array3.shift()
array3.pop()
console.log(array3);

//15
let fruits = ['ფორთოხალი', 'ბანანი', 'კივი'];
console.log(fruits.length);
fruits.push('ვაშლი', 'ანანასი');
fruits.unshift('საზამთრო');
console.log(fruits.length);
fruits.splice(2, 0, 'მანგო');
fruits.pop()
fruits.shift()
console.log(fruits);


//16
 let array16 =[1, 2, 3, 4, 5];
 array16.splice(3, 0, 'a', 'b', 'c')
 console.log(array16);

 //17
 let array17 =  [15, 100, 25, 10, 36]
 array17.splice(3, 1);
 console.log(array17);

 //18
  let array18 = [ 1, 2 , 3 , 4, 5];
  array18.splice(2, 1, 'three')
  console.log(array18);

  //19
let array19 = [14, 150, 'css', null, 'javascript', 25];
let array19New =array19.map(function(el){
    if(typeof el === "number"){
       return el * el;
    } else if(typeof el === "string"){
       return el.toUpperCase();
    }else{
        return el;
    }
})
console.log(array19New);


//20
let  array20 = [12, 25, 3, 6, 8, 14, 7, 23];
let array20New =array20.map(function(el){
        return el / 3;
})
console.log(array20New);


//21
let array21 =['apple', 'orange', 'mango', 'kiwi'];
array21.splice(2, 0, 'strawberry', 'avocado');
console.log(array21);

//22
let numbers = [12, 56, 18, 35, 10];
let numbersNew =numbers.filter((el)=>{
    if(el % 2 === 0){
        return el;
    }
})
console.log(numbersNew);

//23
let array23 = [1,2,3,4,5];
let newArray23 = array23.reduce(function(acc, cur){
    return acc * cur
}, 1);
console.log(newArray23);





