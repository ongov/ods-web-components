import { Component, Element, h, Prop, Event, EventEmitter, State, Watch } from '@stencil/core';
import { v4 as uuid } from 'uuid';
import { Checkbox } from './checkbox.interface';

/**
 * Ontario Checkbox component
 */
@Component({
  tag: 'ontario-checkbox',
  styleUrl: 'ontario-checkbox.scss',
  shadow: true,
})

export class OntarioCheckbox implements Checkbox {
  @Element() host: HTMLElement;

  /**
   * The name for the checkbox (note that to group checkboxes to the same question, the name must be the same)
   */
  @Prop() name: string;

  /**
   * The label text for the checkbox
   */
  @Prop({ mutable: true }) checkboxLabel: string;

  /**
   * The ID for the checkbox
   */
  @Prop() elementId?: string;

  /**
   * Used to define whether the input field is required or not. If required, the value passed should be 'required'.
   */
  @Prop({ mutable: true }) required?: boolean = false;

  /**
   * Used to define whether the hint text component is required or not. If required, the value passed should be 'true'.
   */
  @Prop({ mutable: true }) hintText?: boolean = false;

  /**
   * Used to define whether the hint expander component is required or not. If required, the value passed should be 'true'.
   */
  @Prop({ mutable: true }) hintExpander?: boolean = false;

  /**
   * The checkbox content value
   */
  @Prop() value: string;

  /**
   * If there are multiple checkboxes, display each checkbox as an option
   */
  @Prop() options?: string;

  @State() internalOptions: string[];

  @Watch('options')
  parseOptions() {
    if (this.options) {
      this.internalOptions = JSON.parse(this.options);
    }
  }

  /**
   * Emitted when a keyboard input or mouse event occurs.
   */
  @Event() changeEvent!: EventEmitter<any>;

  handleChange = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;

    if (input) {
      input.checked = input.checked ?? '';
    }

    this.changeEvent.emit(ev as any);
  };

  /**
   * Set `hint` using internal component logic
   */
  componentWillLoad() {
    this.checkboxLabel = this.checkboxLabel ?? this.host.textContent ?? '';
    this.elementId = this.elementId ?? uuid();
    this.parseOptions();
  }

  public getId(): string {
    return this.elementId ?? '';
  }

  render() {
    return (
      <div class="ontario-checkboxes">
        {this.internalOptions
          ? this.internalOptions.map((checkbox: any = {}) =>
            <div class="ontario-checkboxes__item">
              <input
                class="ontario-checkboxes__input"
                id={`${checkbox.value}-${this.getId()}`}
                name={checkbox.name}
                type="checkbox"
                value={checkbox.value}
                checkbox-label={checkbox.checkboxLabel}
                required={checkbox.required}
                onChange={checkbox.handleChange}
              />
              <label class="ontario-checkboxes__label" htmlFor={`${checkbox.value}-${this.getId()}`}>
                {checkbox.checkboxLabel}
              </label>

              {checkbox.hintText && <ontario-hint-text hint={checkbox.hint} inputExists={checkbox.inputExists}></ontario-hint-text>}
              {checkbox.hintExpander && <ontario-hint-expander hint={checkbox.hint} content={checkbox.content} aria-label={checkbox.ariaLabel} inputExists={checkbox.inputExists}></ontario-hint-expander>}
            </div>
          )
          : <div class="ontario-checkboxes__item">
            <input
              class="ontario-checkboxes__input"
              id={`${this.value}-${this.getId()}`}
              name={this.name}
              type="checkbox"
              value={this.value}
              checkbox-label={this.checkboxLabel}
              required={this.required}
              onChange={this.handleChange}
            />
            <label class="ontario-checkboxes__label" htmlFor={`${this.value}-${this.getId()}`}>
              {this.checkboxLabel}
            </label>
          </div>
        }
      </div>
    );
  }
}
