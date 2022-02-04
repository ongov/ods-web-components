import { Component, h } from '@stencil/core';
import interacEnAlt from './assets/ontario-icon-interac-en-alt.svg';

@Component({
  tag: 'ontario-icon-interac-en-alt',
  styleUrl: 'ontario-icon.scss',
  shadow: true,
})

export class OntarioIconInteracEnAlt {
  render() {
    return <div class="ontario-icon" innerHTML={interacEnAlt} />;
  }
};