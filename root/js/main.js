function calculateTip() {
  let billAmt = document.getElementById('bill-amt').value;
  let numPeople = document.getElementById('people-amt').value;
  let serviceQuality = document.getElementById('service-quality').value;
  let tip = document.getElementById('tip');
  let btn = document.getElementById('calc-btn');

  if (billAmt === '') {
    alert('Please provide the required values...');
    return;
  }

  if (numPeople === '' || numPeople <= 1) {
    numPeople = 1;
    document.getElementById('each').style.display = 'none';
  } else {
    document.getElementById('each').style.display = 'block';
  }

  total = (billAmt * serviceQuality) / numPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  tip.innerHTML = total;
  btn.onclick = function () {
    calculateTip();
  };
}
