import { Component, Prop, h } from '@stencil/core';
import transportWalk from './assets/ontario-icon-transport-walk.svg';

/** @internal **/
@Component({
  tag: 'ontario-icon-transport-walk',
  styleUrl: 'ontario-icon-secondary.scss',
  shadow: false,
})

export class ontarioIconTransportWalk {

  @Prop() color: string;

  render() {
    return <div class={`ontario-icon ontario-icon--${this.color}`} innerHTML={transportWalk} />;
  }
};
