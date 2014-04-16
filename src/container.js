var Container = (function () {
    function Container(name, quantity, unit) {
        if (typeof name === "undefined") { name = 'Stem'; }
        if (typeof quantity === "undefined") { quantity = 1; }
        if (typeof unit === "undefined") { unit = null; }
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
    }
    Container.prototype.total = function () {
        var multiplier = this.unit ? this.unit.total() : 1, total = multiplier * this.quantity;

        return total;
    };
    return Container;
})();
exports.Container = Container;
