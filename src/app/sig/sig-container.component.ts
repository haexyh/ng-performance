import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-sig-container',
  imports: [ ],
  template: `
    <div style="border: 2px solid blue">
      Signal
      <hr>
      <p> {{ name() }} &nbsp;{{ count }}</p>
      <hr>
      <ng-content></ng-content>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigContainerComponent {
  private render = 1;
  get count (){
   return this.render++;
  }
  readonly name = input.required<string>();
}
