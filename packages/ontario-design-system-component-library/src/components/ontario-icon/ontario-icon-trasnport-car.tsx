import { Component, Prop, h } from '@stencil/core';
import transportCar from './assets/ontario-icon-transport-car.svg';

@Component({
  tag: 'ontario-icon-transport-car',
  styleUrl: 'ontario-icon.scss',
  shadow: true,
})

export class OntarioIconTransportCar {

  @Prop() colour: "black" | "blue" | "grey" = "black";

  render() {
    return <div class={`ontario-icon ontario-icon--${this.colour}`} innerHTML={transportCar} />;
  }
};