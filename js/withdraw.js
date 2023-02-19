   //step-1 - set the event handler withdraw button. 
 document.getElementById('withdraw-btn').addEventListener('click', function(){
         const newWithdrawBalance  = getInputValueById('withdraw-field');
         const previousTotalBalance = getElementInnerById('total-balance');
         const currentBalance =  previousTotalBalance - newWithdrawBalance;

         if(newWithdrawBalance > previousTotalBalance){
                 alert('balance is low !!!');
                 return;
                } else if(isNaN(newWithdrawBalance) ){
                       alert('please valid number!!!')
                       return;
                }else if(newWithdrawBalance <= 0){
                        alert('please positive number !!!');
                        return;
                }


         const previousWithdraw = getElementInnerById('withdraw-balance');
         BalanceWithdraw = newWithdrawBalance + previousWithdraw;
         setTotalBalance('withdraw-balance', BalanceWithdraw);
        
         
         
                setTotalBalance('total-balance',currentBalance );
 })
              
                
     