var EsrValue1 = document.getElementById('Esr-value1');
var UgrValue1 = document.getElementById('ugrValue1');
var Inlatepressure1 = document.getElementById('in-late1');
var Outlatepressure1 = document.getElementById('outl_pre1');

const fetchPromise = fetch("https://phpclusters-119275-0.cloudclusters.net/ed456dfvrtg56dfc6gxs");
fetchPromise.then(response => {
  return response.json();
}).then(data => {
  console.log(data);


  UgrValue1.innerHTML = data[3].Val.toFixed(3);
  EsrValue1.innerHTML = data[2].Val.toFixed(3);
  Inlatepressure1.innerHTML = data[1].Val.toFixed(3);
  Outlatepressure1.innerHTML = data[0].Val.toFixed(3);


});