var Container = (function () {
    function Container(_name, _qty, _unit) {
        if (typeof _name === "undefined") { _name = 'Stem'; }
        if (typeof _qty === "undefined") { _qty = 1; }
        if (typeof _unit === "undefined") { _unit = null; }
        this._name = _name;
        this._qty = _qty;
        this._unit = _unit;
    }
    Container.prototype.name = function () {
        return this._name;
    };

    Container.prototype.quantity = function () {
        return this._qty;
    };

    Container.prototype.unit = function () {
        return this._unit;
    };

    Container.prototype.total = function () {
        var multiplier = this._unit ? this._unit.total() : 1, total = multiplier * this._qty;

        return total;
    };
    return Container;
})();
exports.Container = Container;
