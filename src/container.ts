export class Container {
    constructor(private _name: string = 'Stem',
        private _qty: number = 1,
        private _unit:Container = null) { }

    name(): string {
        return this._name;
    }

    quantity(): number {
        return this._qty;
    }

    unit(): Container {
        return this._unit;
    }

    total(): number {
        var multiplier = this._unit ? this._unit.total() : 1,
            total = multiplier * this._qty;

        return total;
    }
}