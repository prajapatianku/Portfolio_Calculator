document.getElementById('portfolioForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user inputs
    const investmentType = document.getElementById('investmentType').value;
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value);
    const annualReturn = parseFloat(document.getElementById('annualReturn').value);
    const years = parseInt(document.getElementById('years').value);

    let resultText = '';

    if (investmentType === 'lumpSum') {
        // Lump sum investment calculation
        const finalAmount = investmentAmount * Math.pow((1 + (annualReturn / 100)), years);
        const totalReturn = finalAmount - investmentAmount;

        resultText = `
            Final Value (Lump Sum): ₹${finalAmount.toFixed(2)}<br>
            Total Return: ₹${totalReturn.toFixed(2)}
        `;
    } else if (investmentType === 'sip') {
        // SIP investment calculation
        const monthlyReturn = (annualReturn / 100) / 12;
        const totalMonths = years * 12;
        const sipFutureValue = investmentAmount * ((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn) * (1 + monthlyReturn);
        const totalInvestment = investmentAmount * totalMonths;
        const totalReturn = sipFutureValue - totalInvestment;

        resultText = `
            Final Value (SIP): ₹${sipFutureValue.toFixed(2)}<br>
            Total Investment: ₹${totalInvestment.toFixed(2)}<br>
            Total Return: ₹${totalReturn.toFixed(2)}
        `;
    }

    // Display the result
    document.getElementById('result').innerHTML = resultText;
    document.getElementById('result-box').style.display = 'block'; // Show result box
});
