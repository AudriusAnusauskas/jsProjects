import Rule from './rule.js';

// This Class is just an example how to add extra rule when you will be asked to do that
// Usually Extra Fee or Discount is Flat fee or percentage.
// So calculateDiscountPercent and calculateDiscountFlatAmount methods should suffice
// When new rule is added do not forget to add export to index.js!!!

class ExtraFeeForSmallTransaction extends Rule {
    calculateDiscountPercent() {
        // Write logic here. Default method from Rule class is overridden by this method

        return -7 // example output. If there is a rule that adds fee, we can just add negative discount
    }
}

export default ExtraFeeForSmallTransaction
