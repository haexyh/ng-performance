import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {ReplaySubject, startWith} from 'rxjs';

@Component({
  selector: 'app-obs-child',
  imports: [],
  template: `
    <div>
      @let cnt = count;
      Child {{cnt}}
      <button (click)="onClick(cnt)" >Click</button>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObsChildComponent {
  private render = 1;
  get count (){
    return this.render++;
  }
  readonly click$ = new ReplaySubject(1) ;
  readonly clickView$ = this.click$.pipe(startWith(0));


  onClick(currentCount: number) {
    this.click$.next(currentCount++)
  }

}
