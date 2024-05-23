function calculateLoan() {
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        document.getElementById('monthly-payment').innerText = monthly.toFixed(2);
        document.getElementById('total-payment').innerText = (monthly * calculatedPayments).toFixed(2);
        document.getElementById('total-interest').innerText = ((monthly * calculatedPayments) - principal).toFixed(2);

        document.getElementById('results').classList.remove('hidden');
    } else {
        alert('Please check your numbers');
    }
}
