// content automatically generated by `generate-icons.js` begins
import { Component, Prop, h, Watch } from '@stencil/core';
import { Icon } from './icon.interface';
import { IconColour } from './ontario-icon.enum';

@Component({
    tag: 'ontario-icon-youtube',
    styleUrl: 'ontario-icon.scss',
    shadow: true,
})
export class OntarioIconYoutube implements Icon {
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
                <svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="youtube"><path d="M10 15l5.2-3L10 9v6zm11.56-7.83c.13.47.22 1.1.28 1.9l.1 2.1.06.84c0 2.2-.16 3.8-.44 4.83a2.34 2.34 0 0 1-1.73 1.73c-.47.13-1.33.22-2.65.28l-3.6.1L12 19c-4.2 0-6.8-.16-7.83-.44a2.34 2.34 0 0 1-1.73-1.73c-.13-.47-.22-1.1-.28-1.9l-.1-2.1L2 12c0-2.2.16-3.8.44-4.83a2.34 2.34 0 0 1 1.73-1.73c.47-.13 1.33-.22 2.65-.28l3.6-.1L12 5c4.2 0 6.8.16 7.83.44a2.34 2.34 0 0 1 1.73 1.73z"/></svg>
            </div>
        );
    }
};
// content automatically generated by `generate-icons.js` ends
