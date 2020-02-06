'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-9d4238e2.js');

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const MyComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return core.h("div", null, "Hello, World! I'm ", this.getText());
    }
    static get style() { return ""; }
};

const MyComponent$1 = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("button", { type: this.buttonType }, core.h("slot", null)));
    }
    static get style() { return "button{color:red}"; }
};

exports.my_component = MyComponent;
exports.simple_button = MyComponent$1;
