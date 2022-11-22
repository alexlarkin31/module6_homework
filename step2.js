
function prostoeChislo(item){
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
      
      console.log(prostoeChislo(10));