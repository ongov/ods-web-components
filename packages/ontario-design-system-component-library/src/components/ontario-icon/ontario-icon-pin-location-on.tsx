// content automatically generated by `generate-icons.js` begins
import { Component, Prop, h, Watch } from '@stencil/core';
import { Icon } from './icon.interface';
import { IconColour } from './ontario-icon.enum';

@Component({
    tag: 'ontario-icon-pin-location-on',
    styleUrl: 'ontario-icon.scss',
    shadow: true,
})
export class OntarioIconPinLocationOn implements Icon {
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
     * Watch for changes in the `iconWidth` variable for validation purpose.
     * If the user input is not a number or a negative number then `iconWidth` will be set to its default (24).
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
        this.validateWidth();
    }

    /**
	 * Returns the HTML code to be rendered into a custom element. Implementation is mandatory.
	 */
    render() {
        return (
            <div class={`ontario-icon ontario-icon--${this.colour}`} style={{ 'width': `${this.iconWidth}px` }}>
                <svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pin-location-on"><path d="M12 11.5A2.5 2.5 0 0 1 9.5 9 2.5 2.5 0 0 1 12 6.5 2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-.732 1.768A2.5 2.5 0 0 1 12 11.5zM12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z"/></svg>
            </div>
        );
    }
};
// content automatically generated by `generate-icons.js` ends
