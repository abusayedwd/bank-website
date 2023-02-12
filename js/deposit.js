document.getElementById('deposit-btn').addEventListener('click',function(){
         const depositField = document.getElementById('deposit-field');
         const newDepositAmountString = depositField.value ;
         newDepositAmount = parseFloat(newDepositAmountString)
          
         const totalDepositElement = document.getElementById('total-deposit')
         const previasTotalDepositSting = totalDepositElement.innerText;
         previasTotalDeposit = parseFloat(previasTotalDepositSting)
         
         totalCurrentDepositAmount = newDepositAmount + previasTotalDeposit;
         totalDepositElement.innerText =  totalCurrentDepositAmount;

         const totalBalanceElement = document.getElementById('total-balance')
         const totalBalanceString = totalBalanceElement.innerText;
         previousTotalBalance = parseFloat(totalBalanceString);

         totalCurrentBalance = newDepositAmount + previousTotalBalance;
         totalBalanceElement.innerText = totalCurrentBalance;






         depositField.value = '';
})