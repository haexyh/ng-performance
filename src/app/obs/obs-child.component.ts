import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {ReplaySubject, startWith} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {SigChildComponent} from '../sig/sig-child.component';

@Component({
  selector: 'app-obs-child',
  imports: [
    AsyncPipe,
  ],
  template: `
    <div>
      @let cnt = count;
      @let clicks = (clickView$| async) ?? 0 ;
      Child {{cnt}}
      <button (click)="onClick(cnt)" >Click {{clickView$| async}}</button>
    </div>

    @if (clicks > 0) {
      <app-obs-child></app-obs-child>
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObsChildComponent {
  private render = 1;
  get count (){
    return this.render++;
  }
  readonly click$ = new ReplaySubject<number>(1) ;
  readonly clickView$ = this.click$.pipe(startWith(0));


  onClick(currentCount: number) {
    this.click$.next(currentCount++)
  }

}
