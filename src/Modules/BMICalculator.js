export const BMICalculator = (weight, height, method) => {
  parseFloat(weight)
  parseFloat(height)
  let bmi
  let methodSelect = method

  weight = isNaN(weight) ? 0 : weight
  height = isNaN(height) ? 0 : height



  methodSelect === 'metric' ? bmi = (weight / (height / 100 * height / 100)) : bmi = (weight / (height * height) * 703)

  let finalBMI = parseFloat(bmi.toFixed(2))
  let BMIMessage = setBMIMessage(finalBMI)

  if (isNaN(finalBMI) || !isFinite(finalBMI) || finalBMI === 0) {
    return ''
  }
  else if (finalBMI > 50) {
    return 'Your BMI exceeds our current test range.'
  } else {
    return `You are ${BMIMessage} with a BMI of ${finalBMI}`
  }
}

const setBMIMessage = (finalBMI) => {
  if (finalBMI < 18.5) {
    return "Underweight"
  }
  if (finalBMI > 18.5 && finalBMI < 25) {
    return "Normal"
  }
  if (finalBMI > 25 && finalBMI < 30) {
    return "Overweight"
  }
  if (finalBMI > 30 && finalBMI < 50) {
    return "Obese"
  }
}