let expressCalculation = document.getElementById('calculate-btn').addEventListener('click', ()=>{
  const incomeField = document.getElementById('income')
  const incomeString =incomeField.value
  const income = parseFloat(incomeString);

  const foodField = document.getElementById('food')
  const foodString = foodField.value;
  const food = parseFloat(foodString);

  const rentField = document.getElementById('rent')
  const rentString = rentField.value
  const rent = parseFloat(rentString);

  const clothesFiled = document.getElementById('clothes')
  const clothesString = clothesFiled.value
  const clothes = parseFloat(clothesString);

  incomeField.value = '';
  foodField.value = '';
  rentField.value = '';
  clothesFiled.value = '';
  if (isNaN(income) && isNaN(food) && isNaN(rent) && isNaN(clothes)){
    alert('Please fill all the input section!')
  }


  let totalExpenses = document.getElementById('total-expenses')
  let balance = document.getElementById('balance')
  totalExpenses.innerText= food + rent + clothes;
  balance.innerText= income - totalExpenses.innerText;




  document.getElementById('save-btn').addEventListener('click', ()=>{
  const saveField = document.getElementById('save')
  const saveString = saveField.value;
  const save = parseFloat(saveString)

  const savingAmount = document.getElementById('saving-amount')
  const remainingBalance = document.getElementById('remaining-balance')

    if (saveField.value == ''){
      console.log('bal')
      let save = 20
      savingAmount.innerText  = ((save/100)*balance.innerText).toFixed(2);
    remainingBalance.innerText = (balance.innerText - savingAmount.innerText).toFixed(2);
    return;
    }
    savingAmount.innerText  = ((save/100)*balance.innerText).toFixed(2);
    remainingBalance.innerText = (balance.innerText - savingAmount.innerText).toFixed(2);
})
})



