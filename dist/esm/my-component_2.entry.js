import { r as registerInstance, h } from './core-039c16b4.js';

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", null, "Hello, World! I'm ", this.getText());
    }
    static get style() { return ""; }
};

const MyComponent$1 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("button", { type: this.buttonType }, h("slot", null)));
    }
    static get style() { return "button{color:red}"; }
};

export { MyComponent as my_component, MyComponent$1 as simple_button };
