// content automatically generated by `generate-icons.js` begins
import { Component, Prop, h, Watch } from '@stencil/core';
import { Icon } from './icon.interface';
import { IconColour } from './ontario-icon.enum';

@Component({
    tag: 'ontario-icon-location-off',
    styleUrl: 'ontario-icon.scss',
    shadow: true,
})
export class OntarioIconLocationOff implements Icon {
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
                <svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="location-off"><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.2.46-3.16.97l1.5 1.5C10.16 5.2 11.06 5 12 5c3.87 0 7 3.13 7 7a7.03 7.03 0 0 1-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27L5.04 6.3c-1.07 1.3-1.8 2.92-1.98 4.7H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.9 4.7-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.1 18.45 13.6 19 12 19c-3.87 0-7-3.13-7-7 0-1.6.55-3.1 1.46-4.27l9.8 9.8z"/></svg>
            </div>
        );
    }
};
// content automatically generated by `generate-icons.js` ends
