// content automatically generated by `generate-icons.js` begins
import { Component, Prop, h, Watch, State } from '@stencil/core';
import { IconWithColour } from './icon.interface';
import { IconSize, IconColour, IconColours  } from './icon.types';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { validateValueAgainstArray } from '../../utils/validation/validation-functions'; 
import validateColor from "validate-color";

@Component({
    tag: 'ontario-icon-sentiment-1',
    styleUrl: 'ontario-icon.scss',
    shadow: true,
})
export class OntarioIconSentiment1 implements IconWithColour {
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
              .addMonospaceText(' <ontario-icon-sentiment-1> ')
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
  @Prop() colour: IconColour | string = 'black';

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
			.addMonospaceText(' <ontario-icon-sentiment-1> ')
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
                <svg class="svg-icon" style={{ fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}`}} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="sentiment-1"><path d="M12 2a10 10 0 1 0 0 20 10.01 10.01 0 0 0 10-10A10.01 10.01 0 0 0 11.99 2zm0 18a8 8 0 1 1 0-16 8 8 0 1 1 0 16zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.7-1.2 1.97-2 3.45-2s2.75.8 3.45 2h1.67c-.8-2.05-2.8-3.5-5.12-3.5zm3.5-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 1 0 0 3zm-7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 1 0 0 3z"/></svg>
            </div>
        );
    }
};
// content automatically generated by `generate-icons.js` ends
