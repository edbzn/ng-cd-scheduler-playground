import { ApplicationConfig, ɵChangeDetectionScheduler as ChangeDetectionScheduler, NgZone, ɵNoopNgZone } from '@angular/core';
import { RxAngularChangeDetectionScheduler } from './rx-angular-cd-scheduler';

export const appConfig: ApplicationConfig = {
  providers: [{
    provide: NgZone,
    useClass: ɵNoopNgZone,
  },
  {
    provide: ChangeDetectionScheduler,
    useClass: RxAngularChangeDetectionScheduler,
  },]
};
