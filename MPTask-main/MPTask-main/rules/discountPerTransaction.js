import Rule from './rule.js';

class DiscountPerTransaction extends Rule {
    calculateDiscountPercent() {
        // Write logic here. Default method from Rule class is overridden by this method

        return 5 // example output
    }

    calculateDiscountFlatAmount() {
        // Write logic here. We can override second method.
        // In those rule classes that we are not overriding method it will return default value 0;

        return 15 // example output
    }
}

export default DiscountPerTransaction;