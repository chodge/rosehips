export class Expense {
	private _amount:number;
	constructor(amount:number) {
		this._amount = amount;
	}
	amount():number {
		return this._amount;
	}
}