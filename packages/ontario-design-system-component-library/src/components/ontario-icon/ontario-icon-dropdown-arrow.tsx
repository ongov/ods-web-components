// content automatically generated by `generate-icons.js` begins
import { Component, Prop, h, Watch, State, Element } from '@stencil/core';
import { Icon } from './icon.interface';
import { IconSize } from './icon.types';
import { ConsoleMessageClass } from '../../utils/console-message/console-message'; 

@Component({
    tag: 'ontario-icon-dropdown-arrow',
    styleUrl: 'ontario-icon.scss',
    shadow: true,
})
export class OntarioIconDropdownArrow implements Icon {
  /**
   * The icon width will autogenerate the height since the icons are in square format, thus preserving
   * the aspect ratio.
   */
  @Prop() iconWidth: IconSize = 24;

  /**
	 * Mutable variable, for internal use only.
	 * Set the icon's width depending on validation result.
	 */
  @State() iconWidthState: number;

  /**
   * Watch for changes in the `iconWidth` variable for validation purpose.
   * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
   */
  @Watch('iconWidth')
  validateWidth() {
  if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
    const message = new ConsoleMessageClass();
          message
              .addDesignSystemTag()
              .addMonospaceText(' icon-width ')
              .addRegularText('on')
              .addMonospaceText(' <ontario-icon-dropdown-arrow> ')
              .addRegularText(`${isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'}; only a positive number is allowed. The default size of`)
              .addMonospaceText(' 24px ')
              .addRegularText('was assumed.')
              .printMessage();
    this.iconWidthState = 24;
  } else {
    this.iconWidthState = this.iconWidth;
  }
  }
  
    /**
     * Reference to the host element
     * Use to check if the host element has the `colour` attribute set
     */
    @Element() host: HTMLElement;

    /**
     * Validate that the `colour` attribute is not set by users
     * Prints a warning message if the `colour` attribute is set
     */
    validateColour() {
        if (this.host.hasAttribute('colour')) {
            const message = new ConsoleMessageClass();
            message
                .addDesignSystemTag()
                .addMonospaceText(' colour ')
                .addRegularText('on')
                .addMonospaceText(' <ontario-icon-dropdown-arrow> ')
                .addRegularText('cannot be set. The provided colour is ignored.')
                .printMessage();
        }
    }
    
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
    componentWillLoad() {
        this.validateColour();
        this.validateWidth();
    }

    /**
	 * Returns the HTML code to be rendered into a custom element.
	 */
    render() {
        return (
            <div class={`ontario-icon ontario-icon--width-${this.iconWidthState}`} style={{ 'width': `${this.iconWidthState}px` }}>
                <svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="dropdown-arrow"><path d="M7.965 10a.4.4 0 0 0-.37.247.4.4 0 0 0 .087.436l4.035 4.035a.4.4 0 0 0 .566 0l4.035-4.035a.4.4 0 0 0 .087-.436.4.4 0 0 0-.37-.247h-8.07z"/></svg>
            </div>
        );
    }
};
// content automatically generated by `generate-icons.js` ends
