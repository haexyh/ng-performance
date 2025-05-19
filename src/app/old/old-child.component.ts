import {Component} from '@angular/core';

@Component({
  selector: 'app-old-child',
  imports: [],
  template: `
    <div>
      Child {{ count }}
      <button (click)="onClick()">Click {{ click }}</button>
    </div>
    @if (click > 0) {
      <app-old-child></app-old-child>
    }
  `,
  styles: ``
})
export class OldChildComponent {
  private render = 1;

  get count() {
    return this.render++;
  }

  protected click = 0;

  onClick() {
    this.click++;
  }
}
