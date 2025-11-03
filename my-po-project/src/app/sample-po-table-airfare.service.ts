import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableAirfareService {

  private itemsList: any[] = [
    {
      id: '5',
      titulo: 'Melhorar a Interface da Home',
      categoria: 'Melhoria',
      date: '31-10-2025',
    },
    {
      id: '2',
      titulo: 'Consertar os computadores',
      categoria: 'Suporte',
      date: '02-11-2025'
    },
    {
      id: '3',
      titulo: 'Consertar os computadores',
      categoria: 'Suporte',
      date: '02-11-2025'
    }
  ];

  private columnsList: any[] = [
    { property: 'id', label: 'ID', width: '10%' },
    { property: 'titulo', label: 'Título', width: '40%' },
    { property: 'categoria', label: 'Categoria', width: '25%' },
    { property: 'date', label: 'Prazo', width: '25%' },
  ];

  getItems(): any[] {
    return this.itemsList;
  }

  getColumns(): any[] {
    return this.columnsList;
  }

  addItem(item: any): void {
    this.itemsList.push(item);
  }

  updateItem(updatedItem: any): void {
    const targetId = String(updatedItem.id);
    const index = this.itemsList.findIndex(i => String(i.id) === targetId);
    if (index !== -1) {
      this.itemsList[index] = updatedItem;
    }
  }

  removeItem(itemToRemove: any): void {
    const targetId = String(itemToRemove.id);
    const index = this.itemsList.findIndex(i => String(i.id) === targetId);
    if (index !== -1) {
      this.itemsList.splice(index, 1);
    }
  }
}