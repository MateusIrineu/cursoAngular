import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AdicionarTarefa } from './app/tarefa.component';

bootstrapApplication(AdicionarTarefa, appConfig)
  .catch((err) => console.error(err));
