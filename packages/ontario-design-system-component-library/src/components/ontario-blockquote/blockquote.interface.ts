import { Base } from '../../utils/common.interface';

export interface Blockquote extends Base {
	/**
	 * Text to be displayed as the quote. Note that wrapping the quotes in quotations is not needed - this is handled through the component styles.
	 */
	quote: string;

	/**
	 * Text to be displayed as the attribution (the author) of the quote.
	 */
	attribution: string;

	/**
	 * Optional text for additional information about the attribution/author.
	 */
	byline?: string | undefined;
}
