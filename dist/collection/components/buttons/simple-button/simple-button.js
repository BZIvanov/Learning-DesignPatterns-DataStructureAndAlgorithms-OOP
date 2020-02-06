import { h } from "@stencil/core";
export class MyComponent {
    render() {
        return (h("button", { type: this.buttonType },
            h("slot", null)));
    }
    static get is() { return "simple-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["simple-button.css"]
    }; }
    static get styleUrls() { return {
        "$": ["simple-button.css"]
    }; }
    static get properties() { return {
        "buttonType": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'submit' | 'button' | 'reset'",
                "resolved": "\"button\" | \"reset\" | \"submit\"",
                "references": {}
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The html type of the button."
            },
            "attribute": "button-type",
            "reflect": false
        }
    }; }
}
