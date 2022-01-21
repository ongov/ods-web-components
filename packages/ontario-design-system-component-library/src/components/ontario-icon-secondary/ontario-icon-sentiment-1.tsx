import { Component, Prop, h } from '@stencil/core';
import sentiment1 from './assets/ontario-icon-sentiment-1.svg';

/** @internal **/
@Component({
  tag: 'ontario-icon-sentiment-1',
  styleUrl: 'ontario-icon-secondary.scss',
  shadow: false,
})

export class OntarioIconSentiment1 {

  @Prop() colour: "black" | "blue" | "grey";

  render() {
    return <div class={`ontario-icon ontario-icon--${this.color}`} innerHTML={sentiment1} />;
  }
};
