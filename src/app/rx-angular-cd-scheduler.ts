import * as scheduler from '@rx-angular/cdk/internals/scheduler';
import {
  ApplicationRef,
  ɵChangeDetectionScheduler as ChangeDetectionScheduler,
  inject,
} from '@angular/core';

export class RxAngularChangeDetectionScheduler
  implements ChangeDetectionScheduler
{
  #appRef = inject(ApplicationRef);
  #task: null | ReturnType<typeof scheduler.scheduleCallback> = null;

  constructor() {
    this.#appRef.onDestroy(
      () => this.#task && scheduler.cancelCallback(this.#task)
    );
  }

  notify(): void {
    this.#task = scheduler.scheduleCallback(
      scheduler.PriorityLevel.NormalPriority,
      () => {
        this.#appRef.tick();
      }
    );
  }
}
