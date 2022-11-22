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
