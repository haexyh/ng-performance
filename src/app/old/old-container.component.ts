import {Component, Input, input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-old-container',
  imports: [],
  template: `
    <div style="border: 2px solid greenyellow">
      Signal <button (dblclick)="ondblclick()">test</button>
      <hr>
      <p> {{ name }} &nbsp;{{ count }}</p>
      <hr>
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
