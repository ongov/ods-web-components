import { Component, h, Element, Prop, State, Watch } from '@stencil/core';
import { Blockquote } from './blockquote.interface';
import { validatePropExists } from '../../utils/validation/validation-functions';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';

@Component({
	tag: 'ontario-blockquote',
	styleUrl: 'ontario-blockquote.scss',
	shadow: true,
})
export class OntarioBlockquote implements Blockquote {
	@Element() host: HTMLElement;

	/**
	 * Text to be displayed as the quote. Note that wrapping the quotes in quotations is not needed - this is handled through the component styles.
	 */
	@Prop({ mutable: true }) quote: string;

	/**
	 * Text to be displayed as the attribution (the author) of the quote.
	 */
	@Prop() attribution: string;

	/**
	 * Optional text for additional information about the attribution/author.
	 */
	@Prop() byline?: string;

	@State() shortQuote: boolean = false;

	/*
	 * Watch for changes in the `quote` prop for validation purposes.
	 * If quote is not provided, set quote to Element Content (if it exists).
	 * If the quote length is 140 characters or less, set the `shortQuote` state to true - this will add additonal classes for the blockquote styles.
	 */
	@Watch('quote')
	validateQuoteLength() {
		this.quote = this.quote ?? this.host.textContent ?? '';
		this.validateQuoteContent(this.quote);
		this.quote.length && this.quote.length <= 140 ? (this.shortQuote = true) : (this.shortQuote = false);
	}

	/**
	 * Print the quote warning message
	 */
	validateQuoteContent(newValue: string) {
		if (validatePropExists(newValue)) {
			const message = new ConsoleMessageClass();
			message.addDesignSystemTag().addMonospaceText(' quote ').addRegularText('for').addMonospaceText(' <ontario-blockquote> ').addRegularText('was not provided').printMessage();
		}
	}

	/*
	 * Watch for changes in the `attribution` prop for validation purposes.
	 * Print the attribution warning message.
	 */
	@Watch('attribution')
	validateAttributionContent() {
		if (validatePropExists(this.attribution)) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' attribution ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-blockquote> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}

	componentWillLoad() {
		this.validateQuoteLength();
		this.validateAttributionContent();
	}

	render() {
		return (
			<blockquote class={this.shortQuote ? `ontario-blockquote ontario-blockquote--short` : `ontario-blockquote`}>
				<p>{this.quote}</p>
				<cite class="ontario-blockquote__attribution">{this.attribution}</cite>
				{this.byline && <cite class="ontario-blockquote__byline">{this.byline}</cite>}
			</blockquote>
		);
	}
}
