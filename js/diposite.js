document.getElementById('btn-diposite').addEventListener('click',function(){
    // console.log('diposite btn clicked')
    const dipositeField = document.getElementById('diposite-field');
    const newDipositeAmountString = dipositeField.value;
    const newDipositeAmount =parseFloat(newDipositeAmountString);
    // console.log(dipositeAmount);
    const dipositeTotalElement = document.getElementById('diposite-total');
    const perviousdipositeTotalString = dipositeTotalElement.innerText;
    const perviousdipositeTotal = parseFloat(perviousdipositeTotalString);

    const currentDipositeTotal = perviousdipositeTotal + newDipositeAmount;
     dipositeTotalElement.innerText = currentDipositeTotal;
    dipositeField.value = '';

    const balanectotalElement = document.getElementById('total-amount');
    const previousTotalBalanceString = balanectotalElement.innerText;
    const previousBalance = parseFloat(previousTotalBalanceString);
    const currentTotalBalance = previousBalance + newDipositeAmount;
    balanectotalElement.innerText = currentTotalBalance;
    
})