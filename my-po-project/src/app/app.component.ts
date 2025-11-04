import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SamplePoTableAirfareService } from './sample-po-table-airfare.service';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid'; 

import {
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
  PoButtonModule,
  PoContainerModule,
  PoFieldModule, 
  PoDropdownModule,
  PoTableModule,
  PoTableColumn,
  PoDialogService,
  PoModalComponent,
  PoModalModule,
  PoNotificationService,
  PoTableComponent,
  PoTableAction,
  PoDividerModule,
  PoInfoModule,
  PoModalAction,
  PoModule,
  PoSelectOption, 
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule, 
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    PoButtonModule,
    PoContainerModule,
    PoFieldModule, 
    PoDividerModule,
    PoDropdownModule,
    PoTableModule,
    PoModalModule,
    PoInfoModule,
    PoModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SamplePoTableAirfareService, PoDialogService, PoNotificationService], 
  standalone: true
})
export class SamplePoTableTransport implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;
  @ViewChild(PoTableComponent, { static: true }) poTable!: PoTableComponent;

  actions: Array<PoTableAction> = [
    { action: this.editItem.bind(this), icon: 'po-icon po-icon-edit', label: 'Editar' },
    { action: this.confirmRemove.bind(this), icon: 'po-icon po-icon-delete', label: 'Remover' },
  ];

  // ------------------------------------------------ LISTA DE PROPRIEDADES

  columns!: Array<PoTableColumn>;
  items!: Array<any>;
  
  itemToEdit: any = {}; 
  isCreating: boolean = false;

  categoryOptions: Array<PoSelectOption> = [
    { label: 'Suporte', value: 'Suporte' },
    { label: 'Melhoria', value: 'Melhoria' },
    { label: 'Correção', value: 'Correção' },
    { label: 'Análise', value: 'Análise' },
  ];

  // AQUI É DESABILITADO O ID NA EDIÇÃO E CRIAÇÃO
  get isIdDisabled(): boolean {
    return true; 
  }
  
  updateAction: PoModalAction = {
    label: 'Atualizar',
    action: () => this.updateTask()
  };
  
  cancelAction: PoModalAction = {
    label: 'Cancelar',
    action: () => this.poModal.close()
  };
  
  createAction: PoModalAction = {
    label: 'Confirmar Criação',
    action: () => this.createTask() 
  };
  
  constructor(
    private sampleAirfare: SamplePoTableAirfareService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService
  ) {}
  
  
  ngOnInit(): void { 
    this.columns = this.sampleAirfare.getColumns(); 
    this.items = this.sampleAirfare.getItems();
  }

  // ---------------------------- MODAIS QUE SERÃO ABERTOS APOS CLICK
  openCreateModal() {
    this.isCreating = true;
    this.itemToEdit = {}; 
    this.poModal.open();
  }

  // ------------------------------ MÉTODO PARA REMOVER 
  executeRemove(item: any) {
    this.sampleAirfare.removeItem(item);
    this.items = [...this.sampleAirfare.getItems()];
    this.poNotification.success(`Tarefa "${item.titulo || item.id}" foi removida com sucesso!`)
  }

  confirmRemove(item: any) {
    this.poDialog.confirm({
      title: 'Confirmação de Exclusão',
      message: `Tem certeza que deseja remover a tarefa: ${item.titulo || item.id}?`,
      confirm: () => this.executeRemove(item),
      cancel: () => this.poNotification.information('Operação cancelada.')
    });
  }


  // -------------------------------- MÉTODO PARA CRIAR TAREFA
  createTask() {
    const newItem = {...this.itemToEdit}; 
    
    // UUID AQUI AO INVES DE GERAR MANUALMENTE O ID E REMOVI DO HTML TB
    newItem.id = uuidv4(); 
    
    if (!newItem.titulo) {
      this.poNotification.error('O Título da tarefa é obrigatório.');
      return;
    }

    this.sampleAirfare.addItem(newItem);
    this.items = [...this.sampleAirfare.getItems()]; 
    
    this.poNotification.success(`Tarefa "${newItem.titulo || newItem.id}" criada com sucesso!`);
    this.poModal.close();
    this.isCreating = false;
  }

  // ----------------------------------- EDIÇÃO DE TAREFA
  updateTask() {
    const itemToUpdate = this.itemToEdit; 
    
    this.sampleAirfare.updateItem(itemToUpdate); 
    
    this.items = [...this.sampleAirfare.getItems()]; 
    
    this.poNotification.success(`Tarefa "${itemToUpdate.titulo || itemToUpdate.id}" atualizada com sucesso!`);
    this.poModal.close();
  }

  editItem(item: any) {
    this.isCreating = false; 
    this.itemToEdit = { ...item }; 
    this.poModal.open();
  }
}


// -> RESOLVIDO: ERROR TypeError: Cannot read properties of undefined (reading 'id') pode estar dando erro nisso
// -> RESOLVIDO: ERROR MgModel two-biding-way-> destrinchei o [(mgModel)] em [mgModel] e (mgModelChange) dropdown da Categoria componente Select ou Combo
// -> RESOLVIDO: utilizei uuid para geração de ID -> deixar o ID sem visualizar (oculto) disabled
