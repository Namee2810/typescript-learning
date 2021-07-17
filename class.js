"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.changeName = function (newName) {
        this.name = newName;
    };
    return Employee;
}());
exports.Employee = Employee;
