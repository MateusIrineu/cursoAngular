import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
  PoButtonModule,
  PoContainerModule,
  PoFieldModule,
  PoRadioGroupOption,
  PoDropdownModule
} from '@po-ui/ng-components';
import { Tarefa } from '../interface/IAdicionarTarefa';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoDropdownModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AdicionarTarefa {

  public onClick() {
    alert('Tarefa adicionada com sucesso!');
  }
  }


