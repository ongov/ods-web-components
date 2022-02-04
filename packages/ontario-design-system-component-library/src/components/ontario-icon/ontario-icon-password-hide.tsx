import { Component, Prop, h } from '@stencil/core';
import passwordHide from './assets/ontario-icon-password-hide.svg';

@Component({
  tag: 'ontario-icon-password-hide',
  styleUrl: 'ontario-icon.scss',
  shadow: true,
})

export class OntarioIconPasswordHide {

  @Prop() colour: "black" | "blue" | "grey" = "black";

  render() {
    return <div class={`ontario-icon ontario-icon--${this.colour}`} innerHTML={passwordHide} />;
  }
};