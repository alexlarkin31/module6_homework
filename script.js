/*let a;
a = +prompt("Введите цифру");

if(a == 0){
    alert('Число 0');
}else if(typeof a !== 'number' || isNaN(a)){
    alert("Ошибка. Не число.");
}else{
    if(a%2 == 0){
        alert('Число '+a+' Четное');
    }else{
        alert('Число '+a+' Нечетное');
    }
}*/
/*
let b = [];
b = typeof b;
switch(b) {
    case 'number':  // if (x === 'value1')
      alert('Число '+b);
      break;
      case 'string':  // if (x === 'value2')
      alert('Строка '+b);
      break;
      case 'boolean':  // if (x === 'value2')
      alert('boolean '+b);
      break;
      default:
        alert( 'Не определен!' );
    }
  */
 /*
    const str = "map";
    const reverse = str.split('').reverse().join('');
    
    alert(reverse);
    console.log(reverse); // pam
    */
   /*
    function getRandomIntFromRange(min, max) {
        min = Math.ceil(min); // вычисляет и возвращает наименьшее целое число, которое больше или равно переданному числу (округляет число вверх)
        max = Math.floor(max); // вычисляет и возвращает наибольшее целое число, которое меньше или равно переданному числу (округляет число вниз)
        return Math.floor(Math.random() * (max - min)) + min; 
      }
      alert(getRandomIntFromRange(0,100));
      */
     /*
     let arr = ['1','r','5','y','u','7','k','l'];
     console.log(arr.length);
     let result = arr.map(function(item, index, array) {

        return item
      
      });
      console.log(result);*/
/*
      let arr = [1,2,3]

        arr.forEach(function(item, index, array) {

   console.log(item)

});
*/
/*
let arr = [1,2,3,4,5,'r','r'];
  const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
  const duplicates = findDuplicates(arr);
  console.log(duplicates.length === 0?false:true);
  */

  /*
let arr = [1,2,3,4,5,6,7,8,5,34,'r','u',[],0,null];
let nol=0;
let chet=0;
let nechet=0;
let nechislo=0; 
 arr.forEach(function(item, index){
   
        



    if(item === 0){
        ++nol;
       // console.log('Число 0.');
    }else if(typeof item !== 'number' || isNaN(item)){
            ++nechislo;
        //console.log("Ошибка. Не число. "+item);
    }else{
        if(item%2 == 0){
          //  console.log('Число '+item+' Четное');
            ++chet;
        }else{
            //console.log('Число '+item+' Нечетное');
            ++nechet;
            }       
                
         }
});
                console.log("Количество четных: " + chet);
                console.log("Количество нечетных: " + nechet);
                console.log("Количество нулей: " + nol);
                */

/*
                let carName = 'Porsche';
                let carPrice = 1000000;
                function getCarPrice(strings, carNameExp, carPriceExp) {
                    let str0 = strings[0]; // "This car is " 
                    let str1 = strings[1]; // " and it is "
                    let carPriceText = carPriceExp > 50000 ? 'expensive' : 'cheap'
                    return `${str0}${carNameExp}${str1}${carPriceText}`;
                }
                let result = getCarPrice`This car is ${carName} and it is ${carPrice}`;
                console.log(result); // "This car is Porsche and it is expensive"
*/
/*
                map = new Map();
                map.set(1, true);
                map.set("h", "H");
                map.set("car", "jeep");
                map.set("5", 5);
                map.set(false, "bool");
                //console.log(map.entries());
                for (let index of map.keys()) {
                    console.log(index+" - "+map.get(index)); // огурец, помидор, лук
                  }
                  *//*
                 function chetNechetNol(){
                  let arr = [1,2,3,4,5,6,7,8,5,34,'r','u',[],0,null];
let nol=0;
let chet=0;
let nechet=0;
let nechislo=0; 
 arr.forEach(function(item, index){
   
        



    if(item === 0){
        ++nol;
       // console.log('Число 0.');
    }else if(typeof item !== 'number' || isNaN(item)){
            ++nechislo;
        //console.log("Ошибка. Не число. "+item);
    }else{
        if(item%2 == 0){
          //  console.log('Число '+item+' Четное');
            ++chet;
        }else{
            //console.log('Число '+item+' Нечетное');
            ++nechet;
            }       
                
         }
});
                console.log("Количество четных: " + chet);
                console.log("Количество нечетных: " + nechet);
                console.log("Количество нулей: " + nol);
              return   "Количество четных: " + chet + "Количество нечетных: " + nechet + "Количество нулей: " + nol;
              }

              chetNechetNol();

    */ /*       function prostoeChislo(item){
                let val
                  if( val=(item === 0 || item ===1)?"Число " + item:(item>1000?"Данные неверны":raschet(item)))
                    return val;
              }
              function raschet(n){
                
                if(n === 2)  {
                  return n;
                } else {
                  for(let x = 2; x < n; x++)  {
                    if(n % x === 0) {
                      return n+" не простое";
                      //console.log("dd");
                    }
                  }
                  return n +" Простое";  
                }
                }
              
              console.log(prostoeChislo(10));*/

              /*function func1(int){
                 
                funct2 = function(b){
              
                  return int+b;
                }
                return funct2(1);
              }
              console.log(func1(1));*/
  
              /*function printNumbers(from, to) {
                let current = from;
              
                let timerId = setInterval(function() {
                  console.log(current);
                  if (current == to) {
                    clearInterval(timerId);
                  }
                  current++;
                }, 1000);
              }
              
              // использование:
              printNumbers(5, 15);*/
              const fatBodyArrowFunction = (a, b) => {
                let ta=a;
                let tb =b;
                for(let i=1; i !== tb; i++){
                  ta*=ta;
                }
                const result = ta;
              
                return result;
              
              };
              console.log(fatBodyArrowFunction(5,2));