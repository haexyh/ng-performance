import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ReplaySubject, Subject} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {ObsChildComponent} from './obs-child.component';

@Component({
  selector: 'app-obs-container',
  imports: [
    AsyncPipe,
    ObsChildComponent
  ],
  template: `
    <div style="border: 4px solid blue">
      Observable <button (dblclick)="ondblclick()">test</button>
      <p> {{ (name$ | async) }} &nbsp;{{ count }}</p>
      <hr>
      <app-obs-child></app-obs-child>
    </div>

    <ng-content></ng-content>
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

  protected ondblclick() {
    console.log('dblclick')
  }
}
