import { Component, h, Prop, State, Watch, Element } from '@stencil/core';
import { RadioButtons } from './radio-buttons.interface';
import { RadioOption } from './radio-option.interface';
import { InputCaption } from '../../utils/input-caption/input-caption';
import { HintExpander } from '../ontario-hint-expander/hint-expander.interface';
import { validatePropExists } from '../../utils/validation/validation-functions';
import { ConsoleType, MessageStyle } from '../../utils/console-message/console-message.enum';
import { printConsoleMessage } from '../../utils/console-message/console-message';

@Component({
	tag: 'ontario-radio-buttons',
	styleUrl: 'ontario-radio-buttons.scss',
	shadow: true,
})
export class OntarioRadioButtons implements RadioButtons {
	/**
	 * The text to display as the label
	 *
	 * @example
	 * <ontario-radio-buttons
	 *   caption='{
	 *     "captionText": "Address",
	 *     "captionType": "heading",
	 *     "isRequired": true}'
	 *   ...>
	 * </ontario-radio-buttons>
	 */
	@Prop() caption: InputCaption | string;

	/**
	 * Instantiate an InputCaption object for internal logic use
	 */
	@State() private captionState: InputCaption;

	/**
	 * Grant access to the host element and related DOM methods/events within the class instance.
	 */
	@Element() element: HTMLElement;

	/**
	 * The name assigned to the radio button.
	 * The name value is used to reference form data after a form is submitted.
	 */
	@Prop() name: string;

	/**
	 * Define hint text for Radio Button fieldset.
	 */
	@Prop() hintText?: string;

	/**
	 * Used to include the Hint Expander component for the Radio Button fieldset.
	 * This is passed in as an object with key-value pairs.
	 *
	 * @example
	 * <ontario-radio-buttons
	 *   caption='{
	 *     "captionText": "Address",
	 *     "captionType": "heading",
	 *     "isRequired": true}'
	 * 	 name: "Radio"
	 *   options='[
	 * 	   {
	 *        "value": "radio-option-1",
	 * 				"elementId": "radio-1",
	 *        "label": "Radio Option 1 Label",
	 *        "hintExpander": {
	 *			    "hint": "Hint expander",
	 * 		      "content": "This is the content"
	 *		    }
	 *     }
	 *   ]'
	 *   hint-expander='{
	 *     "hint": "Hint expander",
	 *     "content": "This is the content, yup this is the content"
	 *   }'
	 * >
	 * </ontario-radio-buttons>
	 */
	@Prop() hintExpander?: HintExpander | string;

	/**
	 * The hint expander options are re-assigned to the internalHintExpander array.
	 */
	@State() private internalHintExpander: HintExpander;

	@Watch('hintExpander')
	private parseHintExpander() {
		const hintExpander = this.hintExpander;
		if (hintExpander) {
			if (typeof hintExpander === 'string') this.internalHintExpander = JSON.parse(hintExpander);
			else this.internalHintExpander = hintExpander;
		}
	}

	/**
	 * Each property will be passed in through an object in the options array.
	 * This can either be passed in as an object directly (if using react), or as a string in HTML.
	 * If there are multiple radio buttons in a fieldset, each radio button will be displayed as an option.
	 * In the example below, the options are being passed in as a string and
	 * there are two radio buttons to be displayed in the fieldset.
	 *
	 * @example
	 * <ontario-radio-buttons
	 *   caption='{
	 *     "captionText": "Address",
	 *     "captionType": "heading",
	 *     "isRequired": true}'
	 *   hint-text="This is the hint text"
	 *   options='[
	 *     {
	 *        "value": "radio-1-value",
	 * 				"elementId": "radio-1",
	 *        "label": "Radio Button Label 1"
	 *     },
	 *     {
	 *        "value": "radio-2-value",
	 * 				"elementId": "radio-1",
	 *        "label": "Radio Button Label 2",
	 *        "hintExpander": {
	 *          "hint": "Hint expander",
	 *          "content": "This is the content"
	 *        }
	 *      }
	 *   ]'
	 * >
	 * </ontario-radio-buttons>
	 */
	@Prop() options: string | RadioOption[];

	/**
	 * The options are re-assigned to the internalOptions array.
	 */
	@State() internalOptions: RadioOption[];

	@Watch('options')
	parseOptions() {
		if (typeof this.options !== 'undefined') {
			if (!Array.isArray(this.options)) {
				this.internalOptions = JSON.parse(this.options);
			} else {
				this.internalOptions = this.options;
			}
		}
	}

	/*
	 * Watch for changes in the `name` variable for validation purpose
	 * Validate the name and make sure the name has a value.
	 * Log error if user doesn't input a value for the name.
	 */
	@Watch('name')
	validateNameContent(newValue: string) {
		const isNameBlank = validatePropExists(newValue);
		if (isNameBlank) {
			printConsoleMessage(
				[
					{
						message: ' name ',
						style: MessageStyle.Code,
					},
					{
						message: 'for',
						style: MessageStyle.Regular,
					},
					{
						message: ` <ontario-radio-buttons> `,
						style: MessageStyle.Code,
					},
					{
						message: `was not provided`,
						style: MessageStyle.Regular,
					},
				],
				ConsoleType.Error,
			);
		}
	}

	componentWillLoad() {
		this.captionState = new InputCaption(this.element.tagName, this.caption, true);
		this.parseOptions();
		this.parseHintExpander();
		this.validateNameContent(this.name);
	}

	render() {
		return (
			<div class="ontario-form-group">
				<fieldset class="ontario-fieldset">
					{this.captionState.getCaption()}
					{this.hintText && <ontario-hint-text hint={this.hintText}></ontario-hint-text>}
					<div class="ontario-radios">
						{this.internalOptions?.map(radioOption => (
							<div class="ontario-radios__item">
								<input class="ontario-radios__input" id={radioOption.elementId} name={this.name} type="radio" value={radioOption.value} required={this.captionState.isRequired} />
								<label class="ontario-radios__label" htmlFor={radioOption.elementId}>
									{radioOption.label}
								</label>

								<div class="ontario-radios__hint-expander">
									{radioOption.hintExpander && (
										<ontario-hint-expander hint={radioOption.hintExpander.hint} content={radioOption.hintExpander.content} input-exists></ontario-hint-expander>
									)}
								</div>
							</div>
						))}

						{this.internalHintExpander && (
							<ontario-hint-expander hint={this.internalHintExpander.hint} content={this.internalHintExpander.content} input-exists></ontario-hint-expander>
						)}
					</div>
				</fieldset>
			</div>
		);
	}
}
