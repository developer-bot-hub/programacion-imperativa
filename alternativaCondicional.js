function valorAbsoluto(unNumero) {
   if (unNumero >= 0) {
     return unNumero;
   } else {
     return -unNumero;
   }
}
function maximo (numero1,numero2){
  if(numero2<numero1){
    return numero1;
    }else{
     return numero2;
  }
  }
  function cuidadoSegun(dia) {
    if (dia === "lunes") {
      return "fertilizar";
    }  else  if (dia === "viernes") {
      return "fumigar";
    } else {
      return "regar";
    } 
  }
  function signo(numero){
    if (numero > 0){
      return 1
    } 
    else if (numero === 0){
      return 0
    }
    else{
      return -1
    }
  }