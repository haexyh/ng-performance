import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {SigChildComponent} from './sig-child.component';

@Component({
  selector: 'app-sig-container',
  imports: [
    SigChildComponent
  ],
  template: `
    <div style="border: 2px solid blue">
      Signal
      <hr>
      <p> {{ name() }} &nbsp;{{ count }}</p>
      <hr>
      <app-sig-child></app-sig-child>
    </div>
    <ng-content></ng-content>
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
