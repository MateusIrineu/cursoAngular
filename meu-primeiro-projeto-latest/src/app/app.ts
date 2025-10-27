import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent],
  template: ` 
    <h1>Curso de Angular</h1>
    <app-new-component />
   
   `,
  // posso trabalhar com style individual
})
export class App {
 
}

// <router-outlet /> 
