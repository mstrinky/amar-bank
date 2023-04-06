/*
step-1: add event handler with the withdraw button
 step-2: get the withdraw amount from the withdraw input field
 2.1:also make sure to convert the input into a number by using parseFloat
 step-3:get previous withdraw total
 step-4: calculate total withdraw amount
 4.1: set total withdraw amount
 step-5: get the previous balance total
 step-6: calculate new balance total
 6.1:set the new balance
 step-7: clear the input field
*/
// step-1:
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // console.log('clicked');

    // step-2:
   const withdrawField = document.getElementById('Withdraw-field');
   const newWithdrawAmountString = withdrawField.value;
   const newWithdrawAmount = parseFloat(newWithdrawAmountString);
//    console.log(newWithdrawAmount);

   // step-3:
   const withdrawTotalElement = document.getElementById('withdraw-total');
   const previousWithdrawTotalString = withdrawTotalElement.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
//    console.log(previousWithdrawTotal);

   // step-4:
   currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
   withdrawTotalElement.innerText = currentWithdrawTotal;

   // step-5:
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);
//    console.log(previousBalanceTotal);
if(newWithdrawAmount > previousBalanceTotal){
   alert('amar bank a ato tk nai');
   return;
}

// step-6:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

   // step-7:
   withdrawField.value = '';
})