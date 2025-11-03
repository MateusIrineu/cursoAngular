import { CommonModule } from '@angular/common';
import { Component, OnInit, viewChild, ViewChild } from '@angular/core';
import { SamplePoTableAirfareService } from './sample-po-table-airfare.service';



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
} from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';

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

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SamplePoTableAirfareService, PoDialogService],
})
export class SamplePoTableTransport implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;
  @ViewChild(PoTableComponent, { static: true }) poTable!: PoTableComponent;

  actions: Array<PoTableAction> = [
    //----------------------------------------------- ÁREA DOS DETALHES OBS: SÓ MANTIVE DE EDITAR (...)
    { action: this.editItem.bind(this), icon: 'po-icon po-icon-edit', label: 'Editar' },
  ];

  // ------------------------------------------------ LISTA DE PROPRIEDADES

  columns!: Array<PoTableColumn>;
  columnsDefault!: Array<PoTableColumn>;
  detail: any;
  items!: Array<any>;
  total: number = 0;
  totalExpanded = 0;
  initialColumns!: Array<any>;
  itemToEdit: any;
  isCreating: boolean = false;

  
  updateAction: PoModalAction = {
      label: 'Atualizar',
      action: () => this.updateTask()
    };
    
    cancelAction: PoModalAction = {
      label: 'Cancelar',
      action: () => this.poModal.close()
    };
    
    constructor(
      private sampleAirfare: SamplePoTableAirfareService,
      private poNotification: PoNotificationService,
      private poDialog: PoDialogService
    ) {}
    
    
    ngOnInit(): void { 
      this.items = this.sampleAirfare.getItems();
    }
    
    createAction: PoModalAction = {
    label: 'Confirmar Criação',
    action: () => this.createTask() 
  };

  // ---------------------------- MODAIS QUE SERÃO ABERTOS APOS CLICK
  openCreateModal() {
  this.isCreating = true;
  this.itemToEdit = {};
  this.poModal.open();
}

// ------------------------------ MÉTODO PARA REMOVER 

  removeTask(item: { [key: string]: any }) {
    this.poTable.removeItem(item);
  }

  confirmRemove(item: any) {
  this.poDialog.confirm({
    title: 'Confirmação de Exclusão',
    message: `Tem certeza que deseja remover a tarefa: ${item.titulo}?`,
    confirm: () => this.executeRemove(item),
    cancel: () => this.poNotification.information('Operação cancelada.')
  });
}

  executeRemove(item: any) {
  this.removeTask(item); 
  alert('Tarega removida com sucesso!');
}

// -------------------------------- MÉTODO PARA CRIAR TAREFA
  createTask() {
  const newItem = {...this.itemToEdit};
  
  if (!newItem.id) {
     this.poNotification.error('O ID da tarefa é obrigatório.');
     return;
  }

  const isDuplicate = this.items.some(item => item.id === newItem.id);
  if (isDuplicate) {
     this.poNotification.error('O ID  já existe. Por favor, escolha outro.');
     return;
  }
  this.sampleAirfare.addItem(newItem);
  this.items = [...this.items]; 
  
  this.poNotification.success(`Tarefa "${newItem.titulo}" criada com sucesso!`);
  this.poModal.close();
  this.isCreating = false;
  }

// ----------------------------------- EDIÇÃO DE TAREFA

  editItem(item: any) {
  this.isCreating = false; 
  this.itemToEdit = { ...item }; 
  this.poModal.open();
}

updateTask() {
  const itemToUpdate = this.itemToEdit; 
  
  this.sampleAirfare.updateItem(itemToUpdate); 
  
  this.items = [...this.items]; 
  
  this.poNotification.success(`Tarefa "${itemToUpdate.titulo || itemToUpdate.id}" atualizada com sucesso!`);
  this.poModal.close();
}

  };


