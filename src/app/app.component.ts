import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SigContainerComponent} from './sig/sig-container.component';
import {ObsContainerComponent} from './obs/obs-container.component';
import {FormsModule} from '@angular/forms';
import {interval, map, Observable, startWith} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {SigChildComponent} from './sig/sig-child.component';
import {ObsChildComponent} from './obs/obs-child.component';

@Component({
  selector: 'app-root',
  imports: [SigContainerComponent, ObsContainerComponent, FormsModule, AsyncPipe, SigChildComponent, ObsChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  protected name$: Observable<string> = interval(1_000).pipe(
    startWith('peter'),
    map(() => Math.random() > 0.5 ? 'Hello' : crypto.randomUUID())
  )
}
