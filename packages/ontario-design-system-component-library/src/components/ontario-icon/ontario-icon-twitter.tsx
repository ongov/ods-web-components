// content automatically generated by `generate-icons.js` begins
import { Component, Prop, h, Watch, State} from '@stencil/core';
import { IconWithColour } from './icon.interface';
import { IconSize, IconColour, IconColours } from './icon.types';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { validateValueAgainstArray } from '../../utils/validation/validation-functions';

@Component({
    tag: 'ontario-icon-twitter',
    styleUrl: 'ontario-icon.scss',
    shadow: true,
})
export class OntarioIconTwitter implements IconWithColour {
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
              .addMonospaceText(' <ontario-icon-twitter> ')
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
   * Watch for changes in the `colour` variable for validation purpose.
   * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
   * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
   */
  @Watch('colour')
  validateColour() {
    const isValid = validateValueAgainstArray(this.colour, IconColours);
    if (isValid) {
      this.iconColourState = this.colour;
    } else {
      this.iconColourState = this.warnDefaultColour();
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
			.addMonospaceText(' <ontario-icon-accessibility> ')
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
            <div class={`ontario-icon ontario-icon--${this.iconColourState}`} style={{ 'width': `${this.iconWidthState}px` }}>
                <svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="twitter"><path d="M22.46 6c-.77.35-1.6.58-2.46.7a4.3 4.3 0 0 0 1.88-2.38 8.64 8.64 0 0 1-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.3a4.46 4.46 0 0 0 .11.98C8.28 9.1 5.1 7.38 3 4.8c-.37.63-.58 1.37-.58 2.15 0 1.5.75 2.8 1.9 3.56-.7 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.2a4.22 4.22 0 0 1-1.13.15c-.27 0-.54-.03-.8-.08a4.28 4.28 0 0 0 4 2.98c-1.46 1.16-3.3 1.84-5.33 1.84-.34 0-.68-.02-1.02-.06C3.44 20.3 5.7 21 8.12 21c7.88 0 12.2-6.54 12.2-12.2 0-.2 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
            </div>
        );
    }
};
// content automatically generated by `generate-icons.js` ends
