/**
 * APP PWA - Etanol x Gasolina
 * @author Thiago Nascimento
 * @version 2.0
 */

//================================================================
// Registro do servidor worker 

//se o navegador de internet suportar este recurso
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
      console.log("Service worker registrado!")
    })
}
//================================================================

function calcular() {
  // capturar os valores das caixas de input
  let gasolina = document.getElementById('gasolina').value
  let etanol = document.getElementById('etanol').value
  let kmlGasolina = document.getElementById('KmGasolina').value
  let kmlEtanol = document.getElementById('KmEtanol').value
  //calculo da vantagem
  if (etanol < (kmlEtanol / kmlGasolina) * gasolina) {
    document.getElementById('status').src = "img/gasolina.png"
  } else {
    document.getElementById('status').src = "img/etanol.png"
  }
}
