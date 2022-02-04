import { Component, Prop, h } from '@stencil/core';
import transportBus from './assets/ontario-icon-transport-bus.svg';

@Component({
  tag: 'ontario-icon-transport-bus',
  styleUrl: 'ontario-icon.scss',
  shadow: true,
})

export class OntarioIconTransportBus {

  @Prop() colour: "black" | "blue" | "grey" = "black";

  render() {
    return <div class={`ontario-icon ontario-icon--${this.colour}`} innerHTML={transportBus} />;
  }
};