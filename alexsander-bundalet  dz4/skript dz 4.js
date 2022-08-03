const array1 = ['a', 'b', 'c'];
const array2 = ['1', '2', '3'];
const array3 = array1.concat(array2);

console.log(array3);




const sports = ['a', 'b', 'c'];
const total = sports.push('1, 2, 3');

console.log(sports); 
console.log(total);  



const myFish = ['a', 'b', 'c'];
const removed = myFish.splice(3, 0, '1, 2, 3');
console.log(myFish)





let myFish = [1, 2, 3, 4, 5];
let removed = myFish.splice(0, 5, '1, 4, 5');
console.log(myFish)


let myFish = [1, 2, 3, 4, 5];
let removed = myFish.splice(3, 0, 'a', 'b', 'c');
 console.log(myFish)




const arr = [1, 2, 3, 4, 5]
for (let arr1 of arr) {
  console.log(arr1*=10)
}



let i = 4;
while (i < 400) { 
  document.write( i );
  i++;
}




let j = 4;
        for(let i = 0; i < 4; i++){
          console.log(j);;
            j += 3;
        }



     


let j = 654;
        for(let i = 654; i > 1; i--){
          console.log(j);;
            j -= 1;
        }



let j = 1983;
        for(let i = 1983; i < 2017; i++){
          console.log(j);;
            j += 1;
        }



let j = -6;
        for(let i = 0; i < 100; i++){
          j += 2;

          console.log(j);;
           
        }






let z = 0;
        for (let i = 1; i <= 100; i++) {
            z += i;
        }
        console.log(z);








let arrLen = +prompt('введите')
let arr = [];
let result ='';

do{
  result = result + 'x'
  arr.push(result)

}while(arr.length < arrLen)
console.log(arr)




let arrLen = +prompt('введите')
 let arr = [];

let str = 'x';
for (var i = 0; i < arrLen; i++) {
	
	arr.push(str);
	str += 'x';
	
}
console.log(arr );




let arrLen = +prompt('введите')
let arr = [];
for (var i=1; i < arrLen; i++){
  arr.push(i.toString().repeat(i))
 
}
 console.log(arr)







let arrLen = +prompt('введите')
let str;
let arr = []
for (var i=1; i<arrLen; i++) {
str = '';
for (var j=1; j<=i; j++) {
str += i;
}
arr.push(str);
}
console.log(arr);








let arrLen = prompt('введите')
words(arrLen);

function words(number){
  let str = number;
  let lastNumber = +str[str.length - 1];
  if( number >= 5 && number <= 20){
  console.log ('У ва '+ number,'товаров');
  
  }
  else if( lastNumber == 1){
    console.log ('У вас '+ number,'товар');
  }
  else if( lastNumber >= 2 && lastNumber <= 4){
    console.log ('У вас '+ number,'товара');
  }
  else if((lastNumber >= 5 && lastNumber <= 9 )|| lastNumber == 0){
    console.log ('У вас '+ number,'товаров');
  }
  
  }








































