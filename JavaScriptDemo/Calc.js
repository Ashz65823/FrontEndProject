function Calculator(a, b) {
    this.num1 = a;
    this.num2 = b;

    this.getSum = function () {
        return this.num1 + this.num2;
    }
    this.getSubtract = function () {
        return this.num1 - this.num2;
    }
    this.getProduct = function () {
        return this.num1 * this.num2;
    }
    this.getDivident = function () {
        return this.num1 / this.num2;
    }
}