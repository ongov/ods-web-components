import { DropdownOption } from './dropdown-option.interface';
import { HintExpander } from '../ontario-hint-expander/hint-expander.interface';

import { Base, Hint } from '../../utils/common/common.interface';
import { InputFocusBlurEvent, InputChangeEvent } from '../../utils/events/event-handler.interface';

export interface Dropdown extends Base {
	/**
	 * The name for the dropdown list.
	 */
	name: string;

	/**
	 * The ID for the dropdown list.
	 */
	elementId?: string;

	/**
	 * Each property will be passed in through an object in the options array.
	 * This can either be passed in as an object directly (if using react), or as a string in HTML.
	 * In the example below, the options are being passed in as a string and there are three dropdown options displayed.
	 *
	 * @example
	 * <ontario-dropdown-list
	 *   caption='{
	 *     "captionText": "Label",
	 *     "captionType": "heading",
	 *   }'
	 *   name="ontario-dropdown-list"
	 *   options='[
	 *     {
	 *       "value": "dropdown-option-1",
	 *       "label": "Option 1",
	 *       "selected": "true"
	 *     },
	 *     {
	 *       "value": "dropdown-option-2",
	 *       "label": "Option 2"
	 *     },
	 *     {
	 *       "value": "dropdown-option-3",
	 *       "label": "Option 3"
	 *     }
	 *   ]'
	 * >
	 * </ontario-dropdown-list>
	 */
	options: string | DropdownOption[];

	/**
	 * This is used to determine whether the dropdown list is required or not.
	 * This prop also gets passed to the InputCaption utility to display either an optional or required flag in the label.
	 * If no prop is set, it will default to false (optional).
	 */
	required?: boolean;

	/**
	 * Whether or not the initial option displayed is empty.
	 * If set to true, it will render the default “select” text.
	 * If set to a string, it will render the string value.
	 *
	 * @example
	 * <ontario-dropdown-list is-empty-start-option="true"></ontario-dropdown-list>
	 *
	 * or
	 *
	 * <ontario-dropdown-list is-empty-start-option="Please select"></ontario-dropdown-list>
	 */
	isEmptyStartOption?: boolean | string;

	/**
	 * Used to include the ontario-hint-text component for the dropdown list.
	 * This is optional.
	 */
	hintText?: string | Hint;

	/**
	 * Used to include the Hint Expander component underneath the dropdown list box.
	 * This is passed in as an object with key-value pairs. This is optional.
	 *
	 * @example
	 * <ontario-dropdown-list
	 *   caption='{
	 *     "caption": "What province do you live in?",
	 *     "captionType": "heading",
	 *   }
	 *   name="ontario-dropdown-list"
	 *   options='[
	 *     {
	 *       "value": "dropdown-option-1",
	 *       "label": "Option 1",
	 *       "selected": "true"
	 *     },
	 *     {
	 *       "value": "dropdown-option-2",
	 *       "label": "Option 2"
	 *     },
	 *     {
	 *       "value": "dropdown-option-3",
	 *       "label": "Option 3"
	 *     }
	 *   ]'
	 *   hint-expander='{
	 *    "hint": "Hint expander for the dropdown list",
	 *    "content": "Example hint expander content for the dropdown list."
	 *   }'
	 * >
	 * </ontario-dropdown-list>
	 */
	hintExpander?: HintExpander | string;

	/**
	 * Used to add a custom function to the dropdown onChange event.
	 */
	customOnChange?: Function;

	/**
	 * Used to add a custom function to the dropdown onBlur event.
	 */
	customOnBlur?: Function;

	/**
	 * Used to add a custom function to the dropdown onFocus event.
	 */
	customOnFocus?: Function;

	/**
	 * Emitted when a keyboard input or mouse event occurs when a dropdown list has been changed.
	 */
	dropdownOnChange: InputChangeEvent;

	/**
	 * Emitted when a keyboard input event occurs when a dropdown list has lost focus.
	 */
	dropdownOnBlur: InputFocusBlurEvent;

	/**
	 * Emitted when a keyboard input event occurs when a dropdown list has gained focus.
	 */
	dropdownOnFocus: InputFocusBlurEvent;
}
