// content automatically generated by `generate-icons.js` begins
import { Component, Prop, h, Watch } from '@stencil/core';
import { Icon } from './icon.interface';
import { IconColour } from './ontario-icon.enum';

@Component({
    tag: 'ontario-icon-print',
    styleUrl: 'ontario-icon.scss',
    shadow: true,
})
export class OntarioIconPrint implements Icon {
    /**
     * The icon width will autogenerate the height since the icons are in square format, thus preserving
     * the aspect ratio.
     */
    @Prop() iconWidth: number = 24;
    
    /**
     * Set the icon's colour.
     * Note that some icon's colour cannot be changed.
     */
    @Prop() colour: IconColour = IconColour.black;
    
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
            <div class={`ontario-icon ontario-icon--${this.colour}`} style={{ 'width': `${this.iconWidth}px` }}>
                <svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
            </div>
        );
    }
};
// content automatically generated by `generate-icons.js` ends
