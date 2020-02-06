import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'simple-button',
  styleUrl: 'simple-button.css',
  shadow: true
})
export class MyComponent {
  /**
   * The html type of the button.
   */
  @Prop() buttonType!: 'submit' | 'button' | 'reset';

  render() {
    return (
      <button type={this.buttonType}>
        <slot />
      </button>
    );
  }
}
