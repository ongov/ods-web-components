// content automatically generated by `generate-icons.js` begins
import { Component, Prop, h, Watch, State } from '@stencil/core';
import { IconWithColour } from './icon.interface';
import { IconSize, IconColour, IconColours  } from './icon.types';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { validateValueAgainstArray } from '../../utils/validation/validation-functions'; 
import validateColor from "validate-color";

@Component({
    tag: 'ontario-icon-twitter-alt',
    styleUrl: 'ontario-icon.scss',
    shadow: true,
})
export class OntarioIconTwitterAlt implements IconWithColour {
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
              .addMonospaceText(' <ontario-icon-twitter-alt> ')
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
   * Set the icon's colour.
   */
  @Prop() colour: IconColour = 'black';

  /**
	 * Mutable variable, for internal use only.
	 * Set the icon's colour based on validation result.
	 */
  @State() iconColourState: string;

  /**
   * Mutable variable, for internal use only.
   * Set the icon's colour based on validation result.
   */
  @State() iconCustomColourState: string;

  /**
   * Watch for changes in the `colour` variable for validation purpose.
   * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
   * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
   */
  @Watch('colour')
  validateColour() {
    const isValid = validateValueAgainstArray(this.colour, IconColours);
    if (isValid) {
      this.iconColourState = this.colour;
    } else  {
      if (validateColor(this.colour)) {
        this.iconCustomColourState = this.colour;
      } else {
        this.iconColourState = this.warnDefaultColour();
      }
    }
  }

  /**
   * Print the invalid colour warning message
   * @returns default colour (black)
   */
  private warnDefaultColour(): IconColour{
		const message = new ConsoleMessageClass();
		message
			.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-twitter-alt> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
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
            <div class={`ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`} style={{ 'width': `${this.iconWidthState}px` }}>
                <svg class="svg-icon" style={{ fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}`}} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="twitter-alt"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm12.7 6.33c.48-.4 1.04-.88 1.3-1.4-.4.2-.9.34-1.44.4.5-.36.9-.83 1.12-1.47-.52.28-1.05.52-1.7.64-1.55-1.87-5.26-.35-4.6 2.45-2.6-.16-4.2-1.34-5.52-2.8-.75 1.22-.1 3.07.8 3.58-.46-.03-.8-.17-1.14-.33.04 1.54.9 2.28 2.08 2.68-.36.07-.76.1-1.14.03C7.8 14.2 8.58 14.86 9.9 15c-.9.76-2.56 1.3-3.9 1.08 1.15.73 2.46 1.3 4.28 1.23 4.4-.2 7.36-3.36 7.43-7.98z"/></svg>
            </div>
        );
    }
};
// content automatically generated by `generate-icons.js` ends
