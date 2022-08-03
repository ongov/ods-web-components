import { Component, Prop, h, getAssetPath, State, Watch } from '@stencil/core';
import { ExpandedThreeColumnOptions } from './footer-expanded-three-column-option-interface';
import { ExpandedTwoColumnOptions } from './footer-expanded-two-column-option-interface';
import { DefaultOptions } from './footer-default-option-interface';

const enDash = '\u2013';

@Component({
	tag: 'ontario-footer',
	styleUrl: 'ontario-footer.scss',
	shadow: true,
	assetsDirs: ['assets'],
})
export class OntarioFooter {
	/**
	 * Type of footer to be rendered
	 */
	@Prop() type: 'default' | 'partnership' | 'expandedTwoColumn' | 'expandedThreeColumn' = 'default';

	/**
	 * Stores the required links for all footers
	 */
	@Prop() defaultOptions: DefaultOptions | string;

	/**
	 * Stores the titles and content for the expanded
	 * two column footer
	 */
	@Prop() expandedTwoColumnOptions?: ExpandedTwoColumnOptions | string;

	/**
	 * Stores the titles and content for the expanded
	 * three column footer
	 */
	@Prop() expandedThreeColumnOptions?: ExpandedThreeColumnOptions | string;

	/**
	 * Stores the page's connection with Ontario for
	 * the partnership footer
	 */
	@Prop() partnershipConnection?:
		| 'Licensed by Government of Ontario'
		| 'In partnership with Government of Ontario'
		| 'Funded by Government of Ontario'
		| 'Sponsored by Government of Ontario';

	@State() private defaultState: DefaultOptions;

	@State() private expandedTwoColumnState: ExpandedTwoColumnOptions;

	@State() private expandedThreeColumnState: ExpandedThreeColumnOptions;

	private verifyDefault() {
		if (this.defaultState && !this.defaultState.queensPrinterLink) {
			this.defaultState.queensPrinterLink = 'https://www.ontario.ca/page/copyright-information-c-queens-printer-ontario';
		}
		if (!this.defaultState || !this.defaultState.accessibilityLink || !this.defaultState.contactLink || !this.defaultState.privacyLink || !this.defaultState.queensPrinterLink) {
			console.error('Error: defaultOptions not fully set, please review your values and ensure all required options are truthy.');
		}
	}

	private verifyPartnership() {
		if (this.type == 'partnership') {
			if (!this.partnershipConnection) {
				console.error('Error: A Partnership Connection has not been selected, please review your entry.');
			}
		}
	}

	private verifyExpandedTwoColumn() {
		if (this.type == 'expandedTwoColumn') {
			if (
				!this.expandedTwoColumnState ||
				!this.expandedTwoColumnState.firstColumn ||
				!this.expandedTwoColumnState.firstColumn.title ||
				!this.expandedTwoColumnState.firstColumn.content ||
				!this.expandedTwoColumnState.secondColumn ||
				!this.expandedTwoColumnState.secondColumn.title ||
				!this.expandedTwoColumnState.secondColumn.content ||
				!this.expandedTwoColumnState.secondColumn.contactButtonText
			) {
				console.error('Error: expandedTwoColumnOptions not fully set, please review your values and ensure all options are truthy.');
			}
		}
	}

	private verifyExpandedThreeColumn() {
		if (this.type == 'expandedThreeColumn') {
			if (
				!this.expandedThreeColumnState ||
				!this.expandedThreeColumnState.firstColumn ||
				!this.expandedThreeColumnState.firstColumn.title ||
				!this.expandedThreeColumnState.firstColumn.content ||
				!this.expandedThreeColumnState.secondColumn ||
				!this.expandedThreeColumnState.secondColumn.title ||
				!this.expandedThreeColumnState.secondColumn.content ||
				!this.expandedThreeColumnState.secondColumn.content[0].title ||
				!this.expandedThreeColumnState.secondColumn.content[0].link ||
				!this.expandedThreeColumnState.thirdColumn ||
				!this.expandedThreeColumnState.thirdColumn.title ||
				!this.expandedThreeColumnState.thirdColumn.content ||
				(this.expandedThreeColumnState.thirdColumn.facebook && !this.expandedThreeColumnState.thirdColumn.facebook.link) ||
				(this.expandedThreeColumnState.thirdColumn.twitter && !this.expandedThreeColumnState.thirdColumn.twitter.link) ||
				(this.expandedThreeColumnState.thirdColumn.instagram && !this.expandedThreeColumnState.thirdColumn.instagram.link) ||
				(this.expandedThreeColumnState.thirdColumn.youtube && !this.expandedThreeColumnState.thirdColumn.youtube.link)
			) {
				console.error('Error: expandedThreeColumnOptions not fully set, please review your values and ensure all required options are truthy.');
			}
		}
	}

	private parseDefaultOptions() {
		const defaultOptions = this.defaultOptions;
		if (defaultOptions) {
			if (typeof defaultOptions === 'string') this.defaultState = JSON.parse(defaultOptions);
			else this.defaultState = defaultOptions;
		}
	}

	private parseExpandedTwoColumnOptions() {
		const expandedTwoColumnOptions = this.expandedTwoColumnOptions;
		if (expandedTwoColumnOptions) {
			if (typeof expandedTwoColumnOptions === 'string') {
				this.expandedTwoColumnState = JSON.parse(expandedTwoColumnOptions);
			} else this.expandedTwoColumnState = expandedTwoColumnOptions;
		}
	}

	private parseExpandedThreeColumnOptions() {
		const expandedThreeColumnOptions = this.expandedThreeColumnOptions;
		if (expandedThreeColumnOptions) {
			if (typeof expandedThreeColumnOptions === 'string') {
				this.expandedThreeColumnState = JSON.parse(expandedThreeColumnOptions);
			} else this.expandedThreeColumnState = expandedThreeColumnOptions;
		}
	}

	@Watch('defaultOptions')
	private processDefaultOptions() {
		this.parseDefaultOptions();
		this.verifyDefault();
	}

	@Watch('partnershipConnection')
	private processPartnershipConnection() {
		this.verifyPartnership();
	}

	@Watch('expandedTwoColumnOptions')
	private processExpandedTwoColumnOptions() {
		this.parseExpandedTwoColumnOptions();
		this.verifyExpandedTwoColumn();
	}

	@Watch('expandedThreeColumnOptions')
	private processExpandedThreeColumnOptions() {
		this.parseExpandedThreeColumnOptions();
		this.verifyExpandedThreeColumn();
	}

	componentWillLoad() {
		this.processDefaultOptions();
		this.processExpandedTwoColumnOptions();
		this.processExpandedThreeColumnOptions();
		this.processPartnershipConnection();
	}

	private getBackgroundImagePath() {
		const backgroundImage =
			this.type == 'expandedTwoColumn' || this.type == 'expandedThreeColumn' ? 'footer-expanded-supergraphic-logo.svg' : 'footer-default-supergraphic-logo.svg';
		return { '--imagePath': `url(${getAssetPath(`./assets/${backgroundImage}`)})` };
	}

	render() {
		return (
			<footer class={`ontario-footer ontario-footer--${this.type}`} style={this.getBackgroundImagePath()}>
				{(this.type == 'expandedTwoColumn' || this.type == 'expandedThreeColumn') && (
					<div class="ontario-footer__expanded-top-section">
						<div class="ontario-row">
							<div
								class={
									'ontario-columns ontario-small-12 ' +
									(this.type == 'expandedTwoColumn' ? 'ontario-medium-6' : '') +
									(this.type == 'expandedThreeColumn' ? 'ontario-expanded-footer__one-third-block ontario-medium-12 ontario-large-4' : '')
								}
							>
								{this.type == 'expandedTwoColumn' && (
									<div>
										<h2 class="ontario-h4">{this.expandedTwoColumnState?.firstColumn?.title}</h2>
										<div class="ontario-footer--paragraph" innerHTML={this.expandedTwoColumnState?.firstColumn?.content} />
									</div>
								)}
								{this.type == 'expandedThreeColumn' && (
									<div>
										<h2 class="ontario-h4">{this.expandedThreeColumnState?.firstColumn?.title}</h2>
										<div class="ontario-footer--paragraph" innerHTML={this.expandedThreeColumnState?.firstColumn?.content} />
									</div>
								)}
							</div>
							{this.type == 'expandedThreeColumn' && (
								<div class="ontario-columns ontario-small-12 ontario-medium-6 ontario-large-4 ontario-expanded-footer__one-third-block">
									<h2 class="ontario-h4">Most visited topics</h2>
									<ul class="ontario-footer__links-container ontario-footer__links-container--two-column-list">
										{this.expandedThreeColumnState?.secondColumn?.content?.map(item => (
											<li>
												<a class="ontario-footer__link" href={item?.link}>
													{item?.title}
												</a>
											</li>
										))}
									</ul>
								</div>
							)}
							<div
								class={
									'ontario-columns ontario-small-12' +
									(this.type == 'expandedTwoColumn' ? ' ontario-medium-6' : '') +
									(this.type == 'expandedThreeColumn' ? ' ontario-medium-6 ontario-large-4 ontario-expanded-footer__one-third-block' : '')
								}
							>
								{this.type == 'expandedTwoColumn' && (
									<div>
										<h2 class="ontario-h4">{this.expandedTwoColumnState?.secondColumn?.title}</h2>
										<div class="ontario-footer--paragraph" innerHTML={this.expandedTwoColumnState?.secondColumn?.content} />
										<a class="ontario-footer__button ontario-button ontario-margin-bottom-0-!" href={this.defaultState?.contactLink}>
											{this.expandedTwoColumnState?.secondColumn?.contactButtonText}
										</a>
									</div>
								)}
								{this.type == 'expandedThreeColumn' && (
									<div>
										<h2 class="ontario-h4">{this.expandedThreeColumnState?.thirdColumn?.title}</h2>
										<div class="ontario-footer--paragraph" innerHTML={this.expandedThreeColumnState?.thirdColumn?.content} />
										<ul class="ontario-footer__links-container ontario-footer__links-container--social">
											{this.expandedThreeColumnState.thirdColumn.facebook && (
												<li>
													<a class="ontario-footer__link" href={this.expandedThreeColumnState?.thirdColumn?.facebook?.link} aria-label="Facebook">
														<ontario-icon-facebook colour="white" />
													</a>
												</li>
											)}
											{this.expandedThreeColumnState.thirdColumn.twitter && (
												<li>
													<a class="ontario-footer__link" href={this.expandedThreeColumnState?.thirdColumn?.twitter?.link} aria-label="Twitter">
														<ontario-icon-twitter colour="white" />
													</a>
												</li>
											)}
											{this.expandedThreeColumnState.thirdColumn.instagram && (
												<li>
													<a class="ontario-footer__link" href={this.expandedThreeColumnState?.thirdColumn?.instagram?.link} aria-label="Instagram">
														<ontario-icon-instagram colour="white" />
													</a>
												</li>
											)}
											{this.expandedThreeColumnState.thirdColumn.youtube && (
												<li>
													<a class="ontario-footer__link" href={this.expandedThreeColumnState?.thirdColumn?.youtube?.link} aria-label="Youtube">
														<ontario-icon-youtube colour="white" />
													</a>
												</li>
											)}
										</ul>
									</div>
								)}
							</div>
						</div>
					</div>
				)}
				<div class={'ontario-row ' + (this.type == 'expandedTwoColumn' || this.type == 'expandedThreeColumn' ? 'ontario-footer__expanded-bottom-section' : '')}>
					<div class={'ontario-columns ontario-small-12 ' + (this.type == 'partnership' ? 'ontario-medium-7' : '')}>
						<ul class="ontario-footer__links-container ontario-footer__links-container--inline">
							<li>
								<a class="ontario-footer__link" href={this.defaultState?.accessibilityLink}>
									Accessibility
								</a>
							</li>
							<li>
								<a class="ontario-footer__link" href={this.defaultState?.privacyLink}>
									Privacy
								</a>
							</li>
							{!(this.type == 'expandedTwoColumn') && (
								<li>
									<a class="ontario-footer__link" href={this.defaultState?.contactLink}>
										Contact us
									</a>
								</li>
							)}
						</ul>
						<div class="ontario-footer__copyright">
							<a class="ontario-footer__link" href={this.defaultState?.queensPrinterLink}>
								&copy; Queen’s Printer for Ontario,{' '}
								<span class="ontario-nbsp">
									2012{enDash}
									{String(new Date().getFullYear()).slice(-2)}
								</span>
							</a>
						</div>
					</div>
					{this.type == 'partnership' && (
						<div class="ontario-columns ontario-small-12 ontario-medium-5 ontario-footer__partnership-logo-container">
							<a href="https://www.ontario.ca/page/government-ontario" class="ontario-footer__ontario-logo">
								<img src={getAssetPath(`./assets/ontario-logo--partnership-footer.svg`)} />
							</a>
							<p class="ontario-margin-bottom-0-!">{this.partnershipConnection}</p>
						</div>
					)}
				</div>
			</footer>
		);
	}
}