    // console.log('from withdraw');
    // step-1
    document.getElementById('btn-withdraw').addEventListener('click',function(){
        // step-2
        const withdrawField = document.getElementById('withdraw-field');
        const withdrawAmountString = withdrawField.value;
        const newWithdrawAmount = parseFloat(withdrawAmountString);
      
        // step-3
        const WithdrawTotalElement = document.getElementById('withdraw-total');
        const previousWithdrawTotalString = WithdrawTotalElement.innerText;
        const perviouswithdrawTotal = parseFloat(previousWithdrawTotalString);
        console.log(perviouswithdrawTotal);
        // step-4
        const totalWithdrawAmount = perviouswithdrawTotal + newWithdrawAmount;
        WithdrawTotalElement.innerText = totalWithdrawAmount;
        // step-5

       
        const balanectotalElement = document.getElementById('total-amount');
        const previousTotalBalanceString = balanectotalElement.innerText;
        const previousBalanceTotal = parseFloat(previousTotalBalanceString);
        // step-6
        const newbalanceTotal = previousBalanceTotal -newWithdrawAmount;
        balanectotalElement.innerText = newbalanceTotal;
        // step-7
        withdrawField.value = '';
    })