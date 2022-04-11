// content automatically generated by `generate-icons.js` begins
import { Component, Prop, h, Watch } from '@stencil/core';
import { Icon } from './icon.interface';
import { IconColour } from './ontario-icon.enum';

@Component({
    tag: 'ontario-icon-replay',
    styleUrl: 'ontario-icon.scss',
    shadow: true,
})
export class OntarioIconReplay implements Icon {
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
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
    componentWillLoad() {
        this.validateColour();
        this.validateWidth();
    }

    /**
	 * Returns the HTML code to be rendered into a custom element.
	 */
    render() {
        return (
            <div class={`ontario-icon ontario-icon--${this.colour}`} style={{ 'width': `${this.iconWidth}px` }}>
                <svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="replay"><path d="M17.65 6.35C16.2 4.9 14.2 4 12 4a7.99 7.99 0 0 0-7.99 8A7.99 7.99 0 0 0 12 20c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6c1.66 0 3.14.7 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
            </div>
        );
    }
};
// content automatically generated by `generate-icons.js` ends
