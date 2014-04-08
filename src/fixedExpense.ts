export class Expense {
	
	constructor(private _amount:number) { }
	amount():number {
		return this._amount;
	}
}