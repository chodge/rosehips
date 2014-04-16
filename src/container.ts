export class Container {
    name: string;
    quantity: number;
    unit: Container;

    constructor(name: string = 'Stem',
        quantity: number = 1,
        unit: Container = null) {

        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
    }

    total(): number {
        var multiplier = this.unit ? this.unit.total() : 1,
            total = multiplier * this.quantity;

        return total;
    }
}