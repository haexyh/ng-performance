import {Component, Input, input, OnChanges} from '@angular/core';
import {OldChildComponent} from './old-child.component';

@Component({
  selector: 'app-old-container',
  imports: [
    OldChildComponent
  ],
  template: `
    <div style="border: 4px solid yellow">
      Old <button (dblclick)="ondblclick()">test</button>
      <hr>
      <p> {{ name }} &nbsp;{{ count }}</p>
      <hr>
      <app-old-child></app-old-child>
    </div>
    <ng-content></ng-content>
  `,
  styles: ``
})
export class OldContainerComponent {
  private render = 1;
  get count (){
    this.render++
    return this.render;
  }
  @Input({required: true}) name = '';

  protected ondblclick() {
    console.log('dblclick')
  }

}
