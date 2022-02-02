import { Component, Prop, h } from '@stencil/core';
import transportWalk from './assets/ontario-icon-transport-walk.svg';

@Component({
  tag: 'ontario-icon-transport-walk',
  styleUrl: 'ontario-icon.scss',
  shadow: true,
})

export class OntarioIconTransportWalk {

  @Prop() colour: "black" | "blue" | "grey" = "black";

  render() {
    return <div class={`ontario-icon ontario-icon--${this.colour}`} innerHTML={transportWalk} />;
  }
};
