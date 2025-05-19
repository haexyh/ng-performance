import {ChangeDetectionStrategy, Component, input, signal} from '@angular/core';

@Component({
  selector: 'app-sig-child',
  imports: [],
  template: `
    <div>
      Child {{count}}
      <button (click)="onClick()" >Click {{click()}}</button>
    </div>
    @if (click() > 0) {
      <app-sig-child></app-sig-child>
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigChildComponent {
  private render = 1;
  get count (){
    return this.render++;
  }
  readonly click = signal(0)

  onClick() {
   this.click.update(prev => ++prev)
  }
}
