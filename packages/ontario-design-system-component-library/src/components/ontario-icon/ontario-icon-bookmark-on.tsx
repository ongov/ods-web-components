import { Component, Prop, h } from '@stencil/core';
import bookmarkOn from './assets/ontario-icon-bookmark-on.svg';

@Component({
  tag: 'ontario-icon-bookmark-on',
  styleUrl: 'ontario-icon.scss',
  shadow: true,
})

export class OntarioIconBookmarkOn {

  @Prop() colour: "black" | "blue" | "grey" = "black";

  render() {
    return <div class={`ontario-icon ontario-icon--${this.colour}`} innerHTML={bookmarkOn} />;
  }
};
