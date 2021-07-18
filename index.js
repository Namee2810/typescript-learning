var Invoice = /** @class */ (function () {
    function Invoice(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    Invoice.prototype.print = function () {
        return this.client + " owes $" + this.amount + " for this work: " + this.work;
    };
    return Invoice;
}());
var Payment = /** @class */ (function () {
    function Payment(recipient, work, amount) {
        this.recipient = recipient;
        this.work = work;
        this.amount = amount;
    }
    Payment.prototype.print = function () {
        return "I owe " + this.recipient + " $" + this.amount + " for this work: " + this.work;
    };
    return Payment;
}());
var documentOne = new Invoice("Bob", "repair laptop", 50000);
var documentTwo = new Payment("John", "buy coffee", 50000);
