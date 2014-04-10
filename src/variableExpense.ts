/// <reference path="./container.ts"/>

import container = require('./container');

export class VariableExpense {
    constructor(private _unitCost:number = 0,
        private _unit:container.Container = new container.Container) {
    }

    totalQuantity(quantity:number): number {
        return quantity * this._unit.total();
    }

    totalCost(quantity: number):number {
        return this._unitCost * this.totalQuantity(quantity);
    }
}