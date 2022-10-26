import * as rules from '../rules';

export function calculateFee(transaction) {
    const discounts = applyRules(transaction)
    const mergedDiscounts = mergeDiscounts(discounts);

    // calculate final fee from mergedDiscounts object.
    // This is just an example
    return calculateFeeFromDiscount(transaction, mergedDiscounts);
}

function applyRules(transaction) {
    let discounts = [];

    for (let ruleTitle in rules) {
        let rule = new rules[ruleTitle](transaction);

        discounts.push(rule.apply());
    }

    return discounts;
}

function mergeDiscounts(discounts) {
    let discount = {
        discountPercent: 0,
        discountFlatAmount: 0
    };

    discounts.map((currentDiscount) => {
        discount = {
            discountPercent: discount.discountPercent + currentDiscount.discountPercent,
            discountFlatAmount: discount.discountFlatAmount + currentDiscount.discountFlatAmount
        }
    })

    return discount;
}

function calculateFeeFromDiscount(transaction, discount) {
    // calculate fee
    // Depending on the business case we can first apply discount by percentage and then flat. Or vice versa.

    return 30;
}