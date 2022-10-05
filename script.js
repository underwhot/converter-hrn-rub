let coeff = document.getElementById('coeff');
let hrn = document.getElementById('hrn');
let rub = document.getElementById('rub');

coeffValue = coeff.value;

coeff.onchange = function() {
  coeffValue = this.value;
  // hrnChange();
  // rubChange();
};


hrn.onchange = function hrnChange() {
  let hrnValue = this.value;
  rub.value = hrnValue * coeffValue;
}

rub.onchange = function rubChange() {
  let rubValue = this.value;
  hrn.value = rubValue / coeffValue;
}


