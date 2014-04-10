export class FixedExpense {
	
    constructor(private _amount: number) { }

	totalCost():number {
		return this._amount;
	}
}