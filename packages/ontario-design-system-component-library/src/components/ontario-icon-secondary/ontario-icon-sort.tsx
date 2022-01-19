import { Component, Prop, h } from '@stencil/core';
import sort from './assets/ontario-icon-sort.svg';

/** @internal **/
@Component({
  tag: 'ontario-icon-sort',
  styleUrl: 'ontario-icon-secondary.scss',
  shadow: false,
})

export class ontarioIconSort {

  @Prop() color: string;

  render() {
    return <div class={`ontario-icon ontario-icon--${this.color}`} innerHTML={sort} />;
  }
};
