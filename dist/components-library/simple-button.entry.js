import { r as registerInstance, h } from './core-a4bd4e8d.js';

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("button", { type: this.buttonType }, h("slot", null)));
    }
    static get style() { return "button {\n  color: red;\n}"; }
};

export { MyComponent as simple_button };
