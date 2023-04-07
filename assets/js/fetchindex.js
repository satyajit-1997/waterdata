
var EsrValue = document.getElementById('Esr-value');
var UgrValue = document.getElementById('ugrValue');
var Inlatepressure = document.getElementById('in-late');
var Outlatepressure = document.getElementById('outl_pre');



const fetchPromise = fetch("https://phpclusters-119275-0.cloudclusters.net/ed456dfvrtg56dfc6gxs");
fetchPromise.then(response => {
  return response.json();
}).then(data => {
  console.log(data);
  UgrValue.innerHTML = data[7].Val.toFixed(3);
  EsrValue.innerHTML = data[6].Val.toFixed(3);
  Inlatepressure.innerHTML = data[5].Val.toFixed(3);
  Outlatepressure.innerHTML = data[4].Val.toFixed(3);



});




