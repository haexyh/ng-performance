import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SigContainerComponent} from './sig/sig-container.component';
import {ObsContainerComponent} from './obs/obs-container.component';
import {FormsModule} from '@angular/forms';
import {interval, map, Observable, shareReplay, startWith, tap} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {SigChildComponent} from './sig/sig-child.component';
import {ObsChildComponent} from './obs/obs-child.component';
import {toSignal} from '@angular/core/rxjs-interop';
import {OldContainerComponent} from './old/old-container.component';

@Component({
  selector: 'app-root',
  imports: [SigContainerComponent, ObsContainerComponent, FormsModule, AsyncPipe, SigChildComponent, ObsChildComponent, OldContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  protected nameObs$: Observable<string> = interval(5_000).pipe(
    map(() => Math.random() > 0.5 ? 'Hello' : crypto.randomUUID()),
    startWith(''),
    tap(console.log),
    shareReplay(1)
  )
  protected nameSig = toSignal(this.nameObs$, {initialValue: ''})
}
