import { Injectable } from '@angular/core';

import { PoTableColumn, PoTableDetail } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableAirfareService {
  getColumns(): Array<PoTableColumn> {
    const airfareDetail: PoTableDetail = {
      columns: [
        { property: 'package' },
        { property: 'tour' },
        { property: 'time', label: 'Departure time', type: 'time', format: 'HH:mm' },
        { property: 'distance', label: 'Distance (Miles)', type: 'number', format: '1.0-5' }
      ],
      typeHeader: 'top'
    };

    return [
    //   {
    //     property: 'status',
    //     type: 'label',
    //     labels: [
    //       { value: 'available', color: 'color-11', label: 'Available' },
    //       { value: 'reserved', color: 'color-08', label: 'Reserved' },
    //       { value: 'closed', color: 'color-07', label: 'Closed' }
    //     ]
    //   },
    //   { property: 'titulo' },
    //   { property: 'destination' },
    //   {
    //     property: 'region',
    //     type: 'subtitle',
    //     width: '180px',
    //     subtitles: [
    //       { value: 'Alps', color: 'color-01', label: 'Alps', content: 'AL' },
    //       { value: 'Australasia', color: 'color-02', label: 'Australasia', content: 'AU' },
    //       { value: 'British Isle', color: 'color-03', label: 'British Isle', content: 'BI' },
    //       { value: 'Caucasus', color: 'color-04', label: 'Caucasus', content: 'CA' },
    //       { value: 'Danube', color: 'color-05', label: 'Danube', content: 'DA' },
    //       { value: 'East Asia', color: 'color-06', label: 'East Asia', content: 'EA' },
    //       { value: 'Latin America', color: 'color-07', label: 'Latin America', content: 'LA' },
    //       { value: 'Mediterranean', color: 'color-08', label: 'Mediterranean', content: 'ME' },
    //       { value: 'Nordics', color: 'color-09', label: 'Nordics', content: 'NO' },
    //       { value: 'North America', color: 'color-10', label: 'North America', content: 'NA' },
    //       { value: 'Southern Africa', color: 'color-11', label: 'Southern Africa', content: 'SA' },
    //       { value: 'Western Africa', color: 'color-12', label: 'Western Africa', content: 'WA' }
    //     ]
    //   },
    //   { property: 'date', type: 'date' },
    //   { property: 'returnDate', label: 'Return Date', type: 'date' },
    //   { property: 'value', type: 'currency', format: 'USD' },
    //   { property: 'id', label: 'Flight Number', type: 'number' },
    //   {
    //     property: 'onBoardService',
    //     label: 'On Board Service',
    //     type: 'boolean',
    //     boolean: {
    //       trueLabel: 'Yes',
    //       falseLabel: 'No'
    //     }
    //   },
    //   { property: 'detail', label: 'Details', type: 'detail', detail: airfareDetail }
    ];
  }

  getItems() {
    return [
      {
        id: '1',
        título: 'Melhorar a Interface da Home', // titulo padrao
        categoria: 'Melhoria', // categoria padrao
        date: '31-10-2025', // ex: 24/04/199

        // detail: [ REMOVER
        //   {
        //     package: 'Basic',
        //     tour: 'City tour by public bus and visit to the main museums.',
        //     time: '20:10:10',
        //     distance: '1000'
        //   },
        //   {
        //     package: 'Intermediary',
        //     tour: 'City tour by van and guided visit to the main museums.',
        //     time: '09:15:19',
        //     distance: '2000'
        //   },
        //   {
        //     package: 'Complete',
        //     tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
        //     time: '07:10:20',
        //     distance: '3000'
        //   }
        // ]
      },
    ];
  }
}