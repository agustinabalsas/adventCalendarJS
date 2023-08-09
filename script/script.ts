
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

  