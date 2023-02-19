//get input value function---

function getInputValueById(inputValue){
        const newAmountField = document.getElementById( inputValue);
         const newAmountString =  newAmountField.value ;
         newAmount = parseFloat(newAmountString)
         newAmountField.value = '';
         return newAmount;
}

//set element function

function getElementInnerById(innerText){
        const totalElement = document.getElementById( innerText)
         const previasTotalSting = totalElement.innerText;
         previasTotal = parseFloat(previasTotalSting)
         return previasTotal;
}

function setTotalBalance(element, value){
        const setTotal = document.getElementById(element);
        setTotal.innerText =value;
         
}