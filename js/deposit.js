
        //step 1: 
document.getElementById('deposit-btn').addEventListener('click',function(){
         
       const newDepositAmount = getInputValueById( 'deposit-field');


       if(isNaN(newDepositAmount) ){
             alert('please valid number!!!')
             return;
      }else if(newDepositAmount<= 0){
              alert('please positive number !!!');
              return;
      }
       const previasTotalDeposit = getElementInnerById('total-deposit');
       totalDepositAmount = newDepositAmount + previasTotalDeposit;
        
       depositTotal = setTotalBalance('total-deposit', totalDepositAmount);
       
         
         
        const previousTotalBalance = getElementInnerById('total-balance');
        totalCurrentBalance = newDepositAmount + previousTotalBalance;

        totalBalance = setTotalBalance('total-balance', totalCurrentBalance);
         
        
})