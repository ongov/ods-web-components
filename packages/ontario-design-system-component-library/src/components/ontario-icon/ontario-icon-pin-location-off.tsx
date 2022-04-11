// content automatically generated by `generate-icons.js` begins
import { Component, Prop, h, Watch } from '@stencil/core';
import { Icon } from './icon.interface';
import { IconColour } from './ontario-icon.enum';

@Component({
    tag: 'ontario-icon-pin-location-off',
    styleUrl: 'ontario-icon.scss',
    shadow: true,
})
export class OntarioIconPinLocationOff implements Icon {
    /**
     * The icon width will autogenerate the height since the icons are in square format, thus preserving
     * the aspect ratio.
     */
    @Prop() iconWidth: number = 24;
    
    /**
     * Set the icon's colour.
     * Some icon's colour cannot be changed.
     * Note that the `keyof typeof` syntax is not necessary to use the enum as a type with StencilJS component.
     */
    @Prop() colour: IconColour = IconColour.black;

    /**
     * Watch for changes in the `colour` variable for validation purpose.
     * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
     * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
     */
    @Watch('colour')
    validateColour() {
        this.colour = (this.colour && Object.values(IconColour).find(colour => colour === this.colour.toLowerCase())) || IconColour.black;
    }
    
    /**
     * Watch for changes in the `iconWidth` variable for validation purpose.
     * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
     */
    @Watch('iconWidth')
    validateWidth() {
        const defaultWidth = 24;

        if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
            this.iconWidth = defaultWidth;
        }
    }

    /**
	 * Stencil API that doesn't return anything. Implementation is optional.
	 */
    componentWillLoad() {
        this.validateColour();
        this.validateWidth();
    }

    /**
	 * Returns the HTML code to be rendered into a custom element. Implementation is mandatory.
	 */
    render() {
        return (
            <div class={`ontario-icon ontario-icon--${this.colour}`} style={{ 'width': `${this.iconWidth}px` }}>
                <svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pin-location-off"><path d="M16.37 16.1l-4.73-4.74L3.27 3 2 4.27l3.18 3.18C5.06 7.95 5 8.46 5 9c0 5.25 7 13 7 13s1.67-1.85 3.37-4.35L18.73 21 20 19.72l-3.63-3.62zM12 6.5A2.5 2.5 0 0 1 14.5 9c0 .73-.33 1.4-.83 1.85l3.63 3.65c.98-1.88 1.7-3.82 1.7-5.5a7 7 0 0 0-7-7c-2 0-3.76.82-5.04 2.14l3.2 3.2A2.47 2.47 0 0 1 12 6.5z"/></svg>
            </div>
        );
    }
};
// content automatically generated by `generate-icons.js` ends
