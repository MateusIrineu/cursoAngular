import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableAirfareService {

  private itemsList: any[] = [
    {
      id: '1',
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
      id: '4',
      titulo: 'Consertar os computadores',
      categoria: 'Suporte',
      date: '02-11-2025'
    }
  ];

  getItems(): any[] {
    return this.itemsList;
  }

  addItem(item: any): void {
    this.itemsList.push(item);
  }

  updateItem(updatedItem: any): void {
    const index = this.itemsList.findIndex(i => i.id === updatedItem.id);
    if (index !== -1) {
      this.itemsList[index] = updatedItem;
    }
  }
}