////////// 1

function wrapping(gifts : string[]) {

    let retorno : string[] = [];
  
    for (let gift of gifts){
  
      let wrapper = "";
  
      for (let i = 0; i< gift.length+2; i++){
        wrapper += "*";
      }
  
      retorno.push(wrapper + "\n*" + gift + "*\n" + wrapper);
    }
  
    return retorno;
  }

  console.log('Ejercicio 1 --->');
  console.log(wrapping(["toy", "phone"]));
  console.log(' ');

////////// 2

  function countHours(year : number, holidays : string[]) {
    let accumulated : number = 0;
  
    for (let holiday of holidays){
      let day = new Date(`${holiday}/${year}`).getDay();
  
      if (day !== 6 && day !== 0) accumulated += 2;
    }
  
    return accumulated;
  }

  console.log('Ejercicio 2 --->');
  console.log(countHours(2021, ["01/01", "12/02", "25/12"]));