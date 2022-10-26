import Rule from './rule.js';

// For this particular rule we need to know all transactions. If they are stored in html
// we need new method in form.js file where we can fetch all transactions available from the DOM.
class DiscountAfterSeveralTransactions extends Rule {
    constructor(transaction) {
        super(); // this is needed, learn more about constructors
        this.transaction = transaction; // This part sets this.transaction to value of new Class(transaction)
    }

    calculateDiscountPercent() {
        // Write logic here. Default method from Rule class is overridden by this method
        // transaction available by using this.transaction
        // Test console.log(this.transaction)

        return 5 // example output
    }
}

export default DiscountAfterSeveralTransactions
