// content automatically generated by `generate-icons.js` begins
import { Component, Prop, h, Watch } from '@stencil/core';
import { Icon } from './icon.interface';
import { IconColour } from './ontario-icon.enum';

@Component({
    tag: 'ontario-icon-list',
    styleUrl: 'ontario-icon.scss',
    shadow: true,
})
export class OntarioIconList implements Icon {
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
                <svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="list"><path d="M4 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3zm0-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3zm0 12c-.83 0-1.5.68-1.5 1.5A1.51 1.51 0 0 0 4 19.5 1.51 1.51 0 0 0 5.5 18c0-.82-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg>
            </div>
        );
    }
};
// content automatically generated by `generate-icons.js` ends
