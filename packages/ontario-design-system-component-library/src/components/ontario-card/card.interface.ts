import { Base } from '../../utils/common/common.interface';
import { CardType, HeaderType } from './ontario-card-types';

export interface Card extends Base {
	/**
	 * The type of button to render.
	 *
	 * If no type is passed, it will default to 'secondary'.
	 */
	type: CardType;

	/**
	 * The type of header to render.
	 *
	 * If no type is passed, it will default to 'default'.
	 */
	headerType: HeaderType;

	/**
	 * Text to be displayed within the button. This will override the text provided through the host element textContent.
	 *
	 * @example
	 * <ontario-button label="Label Text">Text</ontario-button>
	 *
	 * The resulting button will have the label `"Label Text"`.
	 */
	title?: string;

	/**
	 * Provides more context as to what the button interaction is doing. This should only be used for accessibility purposes, if the button interaction requires more description than what the text provides.
	 *
	 *  This is optional.
	 *
	 * @example
	 * <ontario-button aria-label-text="Click button to open map">Open</ontario button>
	 */
	ariaTitleText?: string;

	/**
	 * The unique identifier of the button. This is optional - if no ID is passed, one will be generated.
	 */
	elementId?: string;
}
