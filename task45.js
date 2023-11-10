var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacturer, modelName, options) {
    var car = __assign({ manufacturer: manufacturer, modelName: modelName }, options);
    return car;
}
var myCar = createCar("Toyota", "Camry", { color: "Blue", hasSunroof: true });
var myCar2 = createCar("Honda", "Accord", { color: "Red", hasSunroof: false });
console.log(myCar);
console.log(myCar2);
