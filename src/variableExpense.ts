export class Expense {
    constructor(private _amount: number) { }
    amount(quantity: number):number {
        return quantity * this._amount;
    }
}