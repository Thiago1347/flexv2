/**
 * APP PWA - Etanol x Gasolina
 * @author Thiago Nascimento
 * @version 2.0
 */

function calcular() {
   // capturar os valores das caixas de input
   let gasolina = document.getElementById('gasolina').value
   let etanol = document.getElementById('etanol').value
   let kmlGasolina = document.getElementById('KmGasolina').value
   let kmlEtanol = document.getElementById('KmEtanol').value
  //calculo da vantagem
  if (etanol < (kmlEtanol / kmlGasolina)* gasolina) {
document.getElementById('status').src = "img/gasolina.png"
  } else  {
  document.getElementById('status').src = "img/etanol.png"
  }
}
