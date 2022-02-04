import { Component, Prop, h } from '@stencil/core';
import phone from './assets/ontario-icon-phone.svg';

@Component({
  tag: 'ontario-icon-phone',
  styleUrl: 'ontario-icon.scss',
  shadow: true,
})

export class OntarioIconPhone {

  @Prop() colour: "black" | "blue" | "grey" = "black";

  render() {
    return <div class={`ontario-icon ontario-icon--${this.colour}`} innerHTML={phone} />;
  }
};
