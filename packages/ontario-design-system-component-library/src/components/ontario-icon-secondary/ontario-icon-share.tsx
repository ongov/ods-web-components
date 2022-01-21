import { Component, Prop, h } from '@stencil/core';
import share from './assets/ontario-icon-share.svg';

/** @internal **/
@Component({
  tag: 'ontario-icon-share',
  styleUrl: 'ontario-icon-secondary.scss',
  shadow: false,
})

export class OntarioIconShare {

  @Prop() colour: "black" | "blue" | "grey";

  render() {
    return <div class={`ontario-icon ontario-icon--${this.color}`} innerHTML={share} />;
  }
};
