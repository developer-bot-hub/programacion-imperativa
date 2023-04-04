function mitad(numero) {
  return (numero/2)
}
function doble(numero) {
  return 2 * numero;
}
function siguiente(numero) {
  return numero + 1;
}
function siguienteDelDoble(numero) {
   return siguiente(doble(numero));
}
function anterior(numero) {
  return (numero-1);
}
function triple(numero) {
  return (numero*3);
}
function anteriorDelTriple(numero) {
   return anterior(triple(numero));
}
function extraer(saldo, monto) {
  return Math.max(saldo - monto, 0);
}
function estaEntre(numero1,numero2,numero3){
  return (numero1>numero2) && (numero1<numero3);
 }
 function estaFueraDeRango(numero1,numero2,numero3){
   return (numero1<numero2) || (numero1>numero3);
 }
 function esFinDeSemana(diaSemana){
  return diaSemana === "sábado" || diaSemana ==="domingo";
}
function medallaSegunPuesto (puesto) {
  if (puesto===1) {
    return  "oro";
  }  
  else if(puesto===2) {
		return "plata";
  } 
  else if(puesto===3){
    return "bronce";
 } 
	else  {
	return "nada";
 }
}