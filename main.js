const phototherapyThresholds = [
  { age: 0, bilirubin: 6 },
  { age: 24, bilirubin: 7 },
  { age: 48, bilirubin: 9 },
  { age: 72, bilirubin: 11 },
  { age: 96, bilirubin: 13 },
  { age: 120, bilirubin: 15 },
  { age: 144, bilirubin: 17 },
  { age: 168, bilirubin: 19 },
  { age: 192, bilirubin: 21 },
  { age: 216, bilirubin: 23 },
  { age: 240, bilirubin: 25 },
  { age: 264, bilirubin: 27 },
  { age: 288, bilirubin: 29 },
  { age: 312, bilirubin: 31 },
  { age: 336, bilirubin: 33 },
];

const exchangeTransfusionThresholds = [
  { age: 0, bilirubin: 25 },
  { age: 24, bilirubin: 26 },
  { age: 48, bilirubin: 28 },
  { age: 72, bilirubin: 30 },
  { age: 96, bilirubin: 32 },
  { age: 120, bilirubin: 34 },
  { age: 144, bilirubin: 36 },
  { age: 168, bilirubin: 38 },
  { age: 192, bilirubin: 40 },
  { age: 216, bilirubin: 42 },
  { age: 240, bilirubin: 44 },
  { age: 264, bilirubin: 46 },
  { age: 288, bilirubin: 48 },
  { age: 312, bilirubin: 50 },
  { age: 336, bilirubin: 52 },
];

const form = document.querySelector('form');
const phototherapyThresholdOutput = document.querySelector('#phototherapy-threshold');
const exchangeTransfusionThresholdOutput = document.querySelector('#exchange-transfusion-threshold');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const dob = new Date(form.dob.value);
  const currentDate = new Date(form['current-date-time'].value);
  const ageInHours = Math.round((currentDate - dob) / (60 * 60 * 1000));

  let phototherapyThreshold = null;
  let exchangeTransfusionThreshold = null;

  for (let i = 0; i < phototherapyThresholds.length; i++) {
    if (ageInHours <= phototherapyThresholds[i].age) {
      phototherapyThreshold = phototherapyThresholds[i].bilirubin;
      break;
    }
  }

  for (let i = 0; i < exchangeTransfusionThresholds.length; i++) {
    if (ageInHours <= exchangeTransfusionThresholds[i].age) {
      exchangeTransfusionThreshold = exchangeTransfusionThresholds[i].bilirubin;
      break;
    }
  }

  phototherapyThresholdOutput.value = `${phototherapyThreshold} mg/dL`;
  exchangeTransfusionThresholdOutput.value = `${exchangeTransfusionThreshold} mg/dL`;
});
