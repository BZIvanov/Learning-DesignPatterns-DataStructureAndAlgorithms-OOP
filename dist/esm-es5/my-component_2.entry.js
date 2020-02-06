import { r as registerInstance, h } from './core-039c16b4.js';
function format(first, middle, last) {
    return ((first || '') +
        (middle ? " " + middle : '') +
        (last ? " " + last : ''));
}
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    MyComponent.prototype.getText = function () {
        return format(this.first, this.middle, this.last);
    };
    MyComponent.prototype.render = function () {
        return h("div", null, "Hello, World! I'm ", this.getText());
    };
    Object.defineProperty(MyComponent, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return MyComponent;
}());
var MyComponent$1 = /** @class */ (function () {
    function MyComponent$1(hostRef) {
        registerInstance(this, hostRef);
    }
    MyComponent$1.prototype.render = function () {
        return (h("button", { type: this.buttonType }, h("slot", null)));
    };
    Object.defineProperty(MyComponent$1, "style", {
        get: function () { return "button{color:red}"; },
        enumerable: true,
        configurable: true
    });
    return MyComponent$1;
}());
export { MyComponent as my_component, MyComponent$1 as simple_button };
