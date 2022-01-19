import { Component, Prop, h } from '@stencil/core';
import photo from './assets/ontario-icon-photo.svg';

/** @internal **/
@Component({
  tag: 'ontario-icon-photo',
  styleUrl: 'ontario-icon-secondary.scss',
  shadow: false,
})

export class ontarioIconPhoto {

  @Prop() color: string;

  render() {
    return <div class={`ontario-icon ontario-icon--${this.color}`} innerHTML={photo} />;
  }
};
