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
	@Prop() type: 'default' | 'expandedTwoColumn' | 'expandedThreeColumn' = 'default';

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

	@State() private defaultState: DefaultOptions;

	@State() private expandedTwoColumnState: ExpandedTwoColumnOptions;

	@State() private expandedThreeColumnState: ExpandedThreeColumnOptions;

	@Watch('defaultOptions')
	private processDefaultOptions() {
		this.parseOptions(this.defaultOptions);
		this.verifyDefault();
	}

	@Watch('expandedTwoColumnOptions')
	private processExpandedTwoColumnOptions() {
		this.expandedTwoColumnOptions && this.parseOptions(this.expandedTwoColumnOptions);
		this.verifyExpandedTwoColumn();
	}

	@Watch('expandedThreeColumnOptions')
	private processExpandedThreeColumnOptions() {
		this.expandedThreeColumnOptions && this.parseOptions(this.expandedThreeColumnOptions);
		this.verifyExpandedThreeColumn();
	}

	private verifyDefault() {
		if (this.defaultState && !this.defaultState.printerLink) {
			this.defaultState.printerLink = 'https://www.ontario.ca/page/copyright-information';
		}
		if (!this.defaultState || !this.defaultState.accessibilityLink || !this.defaultState.contactLink || !this.defaultState.privacyLink || !this.defaultState.printerLink) {
			console.error('Error: defaultOptions not fully set, please review your values and ensure all required options are truthy.');
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

	private parseOptions(optionType: any) {
		const options = optionType;

		if (options) {
			const optionTypeIsString = typeof options === 'string';

			if (options === this.defaultOptions) {
				this.defaultState = optionTypeIsString ? JSON.parse(options) : options;
			} else if (options === this.expandedTwoColumnOptions) {
				this.expandedTwoColumnState = optionTypeIsString ? JSON.parse(options) : options;
			} else {
				this.expandedThreeColumnState = optionTypeIsString ? JSON.parse(options) : options;
			}
		}
	}

	private getBackgroundImagePath() {
		const backgroundImage =
			this.type == 'expandedTwoColumn' || this.type == 'expandedThreeColumn' ? 'footer-expanded-supergraphic-logo.svg' : 'footer-default-supergraphic-logo.svg';
		return { '--imagePath': `url(${getAssetPath(`./assets/${backgroundImage}`)})` };
	}

	componentWillLoad() {
		this.processDefaultOptions();
		this.processExpandedTwoColumnOptions();
		this.processExpandedThreeColumnOptions();
	}

	render() {
		return (
			<footer
				class={`ontario-footer ` + (this.type == 'expandedTwoColumn' || this.type == 'expandedThreeColumn' ? 'ontario-footer--expanded' : 'ontario-footer--default')}
				style={this.getBackgroundImagePath()}
			>
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
										<div class="ontario-footer__paragraph" innerHTML={this.expandedTwoColumnState?.firstColumn?.content} />
									</div>
								)}
								{this.type == 'expandedThreeColumn' && (
									<div>
										<h2 class="ontario-h4">{this.expandedThreeColumnState?.firstColumn?.title}</h2>
										<div class="ontario-footer__paragraph" innerHTML={this.expandedThreeColumnState?.firstColumn?.content} />
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
										<div class="ontario-footer__paragraph" innerHTML={this.expandedTwoColumnState?.secondColumn?.content} />
										<a href={this.defaultState?.contactLink}>
											<ontario-button aria-label="Secondary Button" type="internalThemeDark" htmlType="reset" id="secondaryButton">
												{this.expandedTwoColumnState?.secondColumn?.contactButtonText}
											</ontario-button>
										</a>
									</div>
								)}
								{this.type == 'expandedThreeColumn' && (
									<div>
										<h2 class="ontario-h4">{this.expandedThreeColumnState?.thirdColumn?.title}</h2>
										<div class="ontario-footer__paragraph" innerHTML={this.expandedThreeColumnState?.thirdColumn?.content} />
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
					<div class="ontario-columns ontario-small-12">
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
							<a class="ontario-footer__link" href={this.defaultState?.printerLink}>
								&copy; King's Printer for Ontario,{' '}
								<span class="ontario-nbsp">
									2012{enDash}
									{String(new Date().getFullYear()).slice(-2)}
								</span>
							</a>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}