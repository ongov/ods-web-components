/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface OntarioButton {
        /**
          * Overrides the default value of the `aria-label` HTML attribute.
         */
        "ariaLabel"?: string;
        /**
          * The unique identifier of the button
         */
        "buttonId"?: string;
        /**
          * The native HTML button type the button should use.
         */
        "htmlType"?: 'button' | 'reset' | 'submit';
        /**
          * Text to be displayed within the button. This will override the text provided through the Element Content.
          * @example <ontario-button label="Label Text">Text</ontario-button>  The resulting button will have the label `"Label Text"`.
         */
        "label"?: string;
        /**
          * The type of button to render.
         */
        "type"?: 'primary' | 'secondary' | 'tertiary';
    }
    interface OntarioHintText {
        /**
          * Text to display as the hint text statement.  Setting the hint can be done using the element content or setting the this property.  This property will take precedence.
          * @example <ontario-hint-text hint="Override Hint Text">Hint Text</ontario-button>  The resulting hint text will display `"Override Hint Text"`.
         */
        "hint": string;
        /**
          * Used to used to establish a relationship between hint text content and elements using aria-describedby.
         */
        "hintId"?: string;
    }
    interface OntarioIconAccessibility {
        "color": string;
    }
    interface OntarioInput {
        /**
          * The aria-describedBy value if the input has hint text associated with it.
         */
        "describedBy"?: string;
        /**
          * The unique identifier of the input. If no ID is passed, one will be autogenerated.
         */
        "inputId"?: string;
        /**
          * The width of the input field. If no value is assigned, it will present as the default input width.
         */
        "inputWidth"?: '2-char-width' | '3-char-width' | '4-char-width' | '5-char-width' | '7-char-width' | '10-char-width' | '20-char-width' | 'default';
        /**
          * The name assigned to the input.The name value is used to reference form data after a form is submitted.
         */
        "name": string;
        /**
          * Used to define whether the input field is required or not. If required, the value passed should be 'required'.
         */
        "required"?: boolean;
        /**
          * The input type value.
         */
        "type"?: 'text' | 'tel' | 'email' | 'password';
        /**
          * The input content value.
         */
        "value"?: string;
    }
    interface OntarioTextarea {
        /**
          * The aria-describedBy value if the textarea has hint text associated with it.
         */
        "describedBy"?: string;
        /**
          * The name assigned to the textarea. The name value is used to reference form data after a form is submitted.
         */
        "name": string;
        /**
          * Used to define whether the textarea field is required or not. If required, the value passed should be 'required'.
         */
        "required"?: boolean;
        /**
          * The unique identifier of the textarea. If no ID is passed, one will be autogenerated.
         */
        "textareaId"?: string;
        /**
          * The textarea content value.
         */
        "value"?: string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLOntarioButtonElement extends Components.OntarioButton, HTMLStencilElement {
    }
    var HTMLOntarioButtonElement: {
        prototype: HTMLOntarioButtonElement;
        new (): HTMLOntarioButtonElement;
    };
    interface HTMLOntarioHintTextElement extends Components.OntarioHintText, HTMLStencilElement {
    }
    var HTMLOntarioHintTextElement: {
        prototype: HTMLOntarioHintTextElement;
        new (): HTMLOntarioHintTextElement;
    };
    interface HTMLOntarioIconAccessibilityElement extends Components.OntarioIconAccessibility, HTMLStencilElement {
    }
    var HTMLOntarioIconAccessibilityElement: {
        prototype: HTMLOntarioIconAccessibilityElement;
        new (): HTMLOntarioIconAccessibilityElement;
    };
    interface HTMLOntarioInputElement extends Components.OntarioInput, HTMLStencilElement {
    }
    var HTMLOntarioInputElement: {
        prototype: HTMLOntarioInputElement;
        new (): HTMLOntarioInputElement;
    };
    interface HTMLOntarioTextareaElement extends Components.OntarioTextarea, HTMLStencilElement {
    }
    var HTMLOntarioTextareaElement: {
        prototype: HTMLOntarioTextareaElement;
        new (): HTMLOntarioTextareaElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "ontario-button": HTMLOntarioButtonElement;
        "ontario-hint-text": HTMLOntarioHintTextElement;
        "ontario-icon-accessibility": HTMLOntarioIconAccessibilityElement;
        "ontario-input": HTMLOntarioInputElement;
        "ontario-textarea": HTMLOntarioTextareaElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface OntarioButton {
        /**
          * Overrides the default value of the `aria-label` HTML attribute.
         */
        "ariaLabel"?: string;
        /**
          * The unique identifier of the button
         */
        "buttonId"?: string;
        /**
          * The native HTML button type the button should use.
         */
        "htmlType"?: 'button' | 'reset' | 'submit';
        /**
          * Text to be displayed within the button. This will override the text provided through the Element Content.
          * @example <ontario-button label="Label Text">Text</ontario-button>  The resulting button will have the label `"Label Text"`.
         */
        "label"?: string;
        /**
          * The type of button to render.
         */
        "type"?: 'primary' | 'secondary' | 'tertiary';
    }
    interface OntarioHintText {
        /**
          * Text to display as the hint text statement.  Setting the hint can be done using the element content or setting the this property.  This property will take precedence.
          * @example <ontario-hint-text hint="Override Hint Text">Hint Text</ontario-button>  The resulting hint text will display `"Override Hint Text"`.
         */
        "hint"?: string;
        /**
          * Used to used to establish a relationship between hint text content and elements using aria-describedby.
         */
        "hintId"?: string;
    }
    interface OntarioIconAccessibility {
        "color"?: string;
    }
    interface OntarioInput {
        /**
          * The aria-describedBy value if the input has hint text associated with it.
         */
        "describedBy"?: string;
        /**
          * The unique identifier of the input. If no ID is passed, one will be autogenerated.
         */
        "inputId"?: string;
        /**
          * The width of the input field. If no value is assigned, it will present as the default input width.
         */
        "inputWidth"?: '2-char-width' | '3-char-width' | '4-char-width' | '5-char-width' | '7-char-width' | '10-char-width' | '20-char-width' | 'default';
        /**
          * The name assigned to the input.The name value is used to reference form data after a form is submitted.
         */
        "name"?: string;
        /**
          * Emitted when the input loses focus.
         */
        "onBlurEvent"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onChangeEvent"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * Emitted when the input gains focus.
         */
        "onFocusEvent"?: (event: CustomEvent<void>) => void;
        /**
          * Used to define whether the input field is required or not. If required, the value passed should be 'required'.
         */
        "required"?: boolean;
        /**
          * The input type value.
         */
        "type"?: 'text' | 'tel' | 'email' | 'password';
        /**
          * The input content value.
         */
        "value"?: string;
    }
    interface OntarioTextarea {
        /**
          * The aria-describedBy value if the textarea has hint text associated with it.
         */
        "describedBy"?: string;
        /**
          * The name assigned to the textarea. The name value is used to reference form data after a form is submitted.
         */
        "name"?: string;
        /**
          * Emitted when the input loses focus.
         */
        "onBlurEvent"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onChangeEvent"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * Emitted when the input gains focus.
         */
        "onFocusEvent"?: (event: CustomEvent<void>) => void;
        /**
          * Used to define whether the textarea field is required or not. If required, the value passed should be 'required'.
         */
        "required"?: boolean;
        /**
          * The unique identifier of the textarea. If no ID is passed, one will be autogenerated.
         */
        "textareaId"?: string;
        /**
          * The textarea content value.
         */
        "value"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "ontario-button": OntarioButton;
        "ontario-hint-text": OntarioHintText;
        "ontario-icon-accessibility": OntarioIconAccessibility;
        "ontario-input": OntarioInput;
        "ontario-textarea": OntarioTextarea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "ontario-button": LocalJSX.OntarioButton & JSXBase.HTMLAttributes<HTMLOntarioButtonElement>;
            "ontario-hint-text": LocalJSX.OntarioHintText & JSXBase.HTMLAttributes<HTMLOntarioHintTextElement>;
            "ontario-icon-accessibility": LocalJSX.OntarioIconAccessibility & JSXBase.HTMLAttributes<HTMLOntarioIconAccessibilityElement>;
            "ontario-input": LocalJSX.OntarioInput & JSXBase.HTMLAttributes<HTMLOntarioInputElement>;
            "ontario-textarea": LocalJSX.OntarioTextarea & JSXBase.HTMLAttributes<HTMLOntarioTextareaElement>;
        }
    }
}
