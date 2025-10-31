import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { SamplePoTableTransport } from './app/app.component'

bootstrapApplication(SamplePoTableTransport, appConfig)
  .catch((err) => console.error(err));
