class Rule {
    calculateDiscountPercent() {
        return 0;
    }

    calculateDiscountFlatAmount() {
        return 0;
    }

    apply() {
        return {
            discountPercent: this.calculateDiscountPercent(),
            discountFlatAmount: this.calculateDiscountFlatAmount()
        }
    }
}

export default Rule;