 
 document.getElementById('withdraw-btn').addEventListener('click', function(){
        
        const withdrawField = document.getElementById('withdraw-field');
        const withdrawFieldString = withdrawField.value ;
        const newWithdrawAmount = parseFloat(withdrawFieldString);
         

         const currentWithdrawBalance = document.getElementById ('withdraw-balance');
         const withdrawBalanceString =  currentWithdrawBalance.innerText;
         const previousWithdraw = parseFloat(withdrawBalanceString)


         const totalCurrentBalanceElement = document.getElementById('total-balance');
         const totalBalanceElementString = totalCurrentBalanceElement.innerText;
         const totalBalance = parseFloat(totalBalanceElementString);

         
         withdrawField.value = '';
        if(newWithdrawAmount > totalBalance){
                alert('Your balance is low')
                return;
        }
         
         
         const totalCurrentBalance = totalBalance - newWithdrawAmount;
         totalCurrentBalanceElement.innerText = totalCurrentBalance
         
         const totalWithdraw = previousWithdraw + newWithdrawAmount;
         currentWithdrawBalance.innerText = totalWithdraw;
          
        
         
 
 })