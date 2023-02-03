const feet = 3.28084;
const gallon = 0.264172;
const pound = 2.20462;

const inputBox = document.querySelector('#inputBox');
const convertBtn = document.querySelector('#convertBtn');
const outputLength = document.querySelector('#outputLength');
const outputVolume = document.querySelector('#outputVolume');
const outputMass = document.querySelector('#outputMass');

convertBtn.addEventListener('click', function () {
  let value = inputBox.value;
  let mtf = (value * feet).toFixed(3);
  let ftm = (value / feet).toFixed(3);
  let ltg = (value * gallon).toFixed(3);
  let gtl = (value / gallon).toFixed(3);
  let ktp = (value * pound).toFixed(3);
  let ptk = (value / pound).toFixed(3);

  if (value > 0) {
    outputLength.innerHTML = `${value} meter = ${mtf} feet | ${value} feet = ${ftm} meter`;
    outputVolume.innerHTML = `${value} liter = ${ltg} gallon | ${value} gallon = ${gtl} liter`;
    outputMass.innerHTML = `${value} kilogram = ${ktp} pound | ${value} pound = ${ptk} kilogram`;
  } else {
    alert('Please enter value greater than 0.');
  }
});
