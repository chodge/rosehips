/// <reference path="./container.ts"/>

import container = require('./container');
import Container = container.Container;

export class VariableExpense {
	name: string;
    unitCost: number;
    unit:Container;

    constructor(name:string = '', unitCost:number = 0, unit:Container = new Container) {
    	this.name = name;
    	this.unitCost = unitCost;
    	this.unit = unit;
    }

    totalQuantity(quantity:number): number {
        return quantity * this.unit.total();
    }

    totalCost(quantity: number): number {
        var containerQuantity = quantity / this.unit.total();
        return this.unitCost * containerQuantity;
    }
}