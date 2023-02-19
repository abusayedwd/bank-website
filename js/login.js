
document.getElementById('submit-btn').addEventListener('click',function(){

         const emailField = document.getElementById('user-email');
         const email = emailField.value ;
         emailField.value = '';
          
         const passwordField = document.getElementById('user-password');
         const password = passwordField.value ;
         passwordField.value = '';
          
         if(email === 'ab@sayed.com' && password === 'secret'){
                window.location.href = 'bank.html' ;  
                 
         }else{
               alert('incorrect email or password'); 
                
         }
        
        })