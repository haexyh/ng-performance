import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ReplaySubject, Subject} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-obs-container',
  imports: [
    AsyncPipe
  ],
  template: `
    <div style="border: 2px solid rebeccapurple">
      Observable
      <p> {{ name$ | async}} &nbsp;{{count}}</p>
      <hr>
      <ng-content></ng-content>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObsContainerComponent {
  private render = 1;
  get count (){
    return this.render++;
  }
  readonly name$ = new ReplaySubject<string>(1)
  @Input({required: true}) set name(value: string)
  {
    this.name$.next(value)
  }
}
