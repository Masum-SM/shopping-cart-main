function productNumber(product,price,isAdd){
    const inputField = document.getElementById( product + '-input');
    let inputNumber =inputField.value;
    if(isAdd == true){
        inputField.value = parseInt(inputNumber) +1;
    }
    else if(inputNumber>0) {
        inputField.value = parseInt(inputNumber) - 1;
    }
    inputNumber = inputField.value;
    
   const amountFeild = document.getElementById( product + '-total');
    
    let updateAmount = inputNumber * price;
    amountFeild.innerText = updateAmount;
    calculateTotal()

}
function getInput(product){
    const inputField = document.getElementById( product + '-input');
    let inputNumber = parseInt(inputField.value);
    return inputNumber;
}
function calculateTotal(){

    const phoneTotal = getInput('phone') * 1219;
    const caseTotal = getInput('case') *59;
    const subTotal = phoneTotal +caseTotal;
    const taxAmount = subTotal/10;
    const totalAmount = subTotal + taxAmount;
    const subTotalField = document.getElementById('sub-total');
    subTotalField.innerText = subTotal;

    const taxField = document.getElementById('tax');
    taxField.innerText = taxAmount;
    const totalField = document.getElementById('total');
    totalField.innerText = totalAmount;
}

document.getElementById('case-plus').addEventListener('click',function(){
    productNumber('case',59,true);

})
document.getElementById('case-minus').addEventListener('click',function(){
    productNumber('case',59,false);

})

document.getElementById('phone-plus').addEventListener('click',function(){
    productNumber('phone',1219,true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    productNumber('phone',1219,false);
})