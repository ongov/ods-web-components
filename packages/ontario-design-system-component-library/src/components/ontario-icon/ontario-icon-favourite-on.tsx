import { Component, Prop, h } from '@stencil/core';
import favouriteOn from './assets/ontario-icon-favourite-on.svg';

@Component({
  tag: 'ontario-icon-favourite-on',
  styleUrl: 'ontario-icon.scss',
  shadow: true,
})

export class OntarioIconFavouriteOn {

  @Prop() colour: "black" | "blue" | "grey" = "black";

  render() {
    return <div class={`ontario-icon ontario-icon--${this.colour}`} innerHTML={favouriteOn} />;
  }
};