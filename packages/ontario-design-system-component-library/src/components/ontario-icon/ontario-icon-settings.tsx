// content automatically generated by `generate-icons.js` begins
import { Component, Prop, h, Watch } from '@stencil/core';
import { Icon } from './icon.interface';
import { IconColour } from './ontario-icon.enum';

@Component({
    tag: 'ontario-icon-settings',
    styleUrl: 'ontario-icon.scss',
    shadow: true,
})
export class OntarioIconSettings implements Icon {
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
                <svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="settings"><path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5zm7.43-2.53a7.77 7.77 0 0 0 .07-.97 8.55 8.55 0 0 0-.07-1l2.1-1.63c.2-.15.24-.42.12-.64l-2-3.46a.49.49 0 0 0-.61-.22l-2.5 1c-.52-.4-1.06-.73-1.7-.98l-.37-2.65c-.04-.24-.25-.42-.5-.42h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.6-1.7.98l-2.5-1a.49.49 0 0 0-.61.22l-2 3.46c-.13.22-.07.5.12.64L4.57 11l-.07 1a7.77 7.77 0 0 0 .07.97l-2.1 1.66c-.2.15-.25.42-.12.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.06.74 1.7 1l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65a7.28 7.28 0 0 0 1.69-.99l2.5 1c.22.08.5 0 .6-.22l2-3.46c.12-.22.07-.5-.12-.64l-2.1-1.66z"/></svg>
            </div>
        );
    }
};
// content automatically generated by `generate-icons.js` ends
