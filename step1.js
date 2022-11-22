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