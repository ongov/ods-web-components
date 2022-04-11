// content automatically generated by `generate-icons.js` begins
import { Component, Prop, h, Watch } from '@stencil/core';
import { Icon } from './icon.interface';

@Component({
    tag: 'ontario-icon-alert-warning',
    styleUrl: 'ontario-icon.scss',
    shadow: true,
})
export class OntarioIconAlertWarning implements Icon {
    /**
     * The icon width will autogenerate the height since the icons are in square format, thus preserving
     * the aspect ratio.
     */
    @Prop() iconWidth: number = 24;
    
    /**
     * Watch for changes in the `iconWidth` variable for validation purpose
     */
    @Watch('iconWidth')
    validateWidth() {
        const defaultWidth = 24;

        // if value is not a number, set the iconWidth to be 24
        if (isNaN(this.iconWidth)) {
            this.iconWidth = defaultWidth;
        }
    }

    /**
	 * Stencil API that doesn't return anything. Implementation is optional.
	 */
    componentWillLoad() {
        this.validateWidth();
    }

    /**
	 * Returns the HTML code to be rendered into a custom element. Implementation is mandatory.
	 */
    render() {
        return (
            <div class='ontario-icon' style={{ 'width': `${this.iconWidth}px` }}>
                <svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="alert-warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="#ffd440"/><path d="M11 10h2v4h-2zm0 6h2v2h-2z" fill="#000"/></svg>
            </div>
        );
    }
};
// content automatically generated by `generate-icons.js` ends
