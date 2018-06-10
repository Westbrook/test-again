import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import {style} from './test-el-styles.js';

/**
 * `test-el`
 * Something awesome!
 *
 * ## Styling
 *
 * | Custom property | Description | Default |
 * | --- | --- | --- |
 * | `--custom-property` | What it does | `value` |
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TestEl extends LitElement {
  /**
   * Declare the properties that will be
   * available in the binding system
   */
  static get properties() {
    return {
    };
  }
  /**
   * Build the TemplateResult that represents the elements DOM representation
   *
   * @return {TemplateResult}
   */
  _render(props) {
    return html`
        ${style}
        <h1>test-el</h1>
    `;
  }
};

customElements.define(
  test-el,
  TestEl
);
