import { calculateFee } from './app/feeCalculator.js';
import { getTransaction, updateFee } from './app/form.js';

// On button click or form submit calculateFee() and output value
let button = document.getElementById("button");

button.addEventListener("click", () => {
    // Get this value from form
    const transaction = getTransaction()

    // Make this function to return
    const fee = calculateFee(transaction);

    // Show fee string. Transaction will be needed here.
    updateFee(transaction, fee)
});
