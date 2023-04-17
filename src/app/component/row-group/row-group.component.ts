import { Component, OnInit, ViewChild } from '@angular/core';
import { IOlympicData } from '../interfaces';
import { Grid, GridOptions, ValueGetterParams } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-row-group',
  templateUrl: './row-group.component.html',
  styleUrls: ['./row-group.component.css'],
})
export class RowGroupComponent implements OnInit {
  grid: any;
  ngOnInit(): void {
    var gridDiv = document.querySelector<HTMLElement>('#myGrid')!;
    new Grid(gridDiv, this.gridOptions);
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((response) => response.json())
      .then((data: IOlympicData[]) => this.gridOptions.api!.setRowData(data));

    if (typeof window !== 'undefined') {
      // Attach external event handlers to window so they can be called from index.html
      (<any>window).applyFilter = this.applyFilter;
    }
  }

  gridOptions: GridOptions<IOlympicData> = {
    columnDefs: [
      { field: 'sport', rowGroup: true, hide: true },
      { field: 'country', rowGroup: true, hide: true },
      { field: 'gold', aggFunc: 'avg' },
      { field: 'silver', aggFunc: 'sum' },
      { field: 'bronze', aggFunc: 'sum' },
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 150,
      filter: true,
      floatingFilter: true,
      resizable: true,
      sortable: true,
    },
    autoGroupColumnDef: {
      minWidth: 260,
      filter: 'agTextColumnFilter',
      filterValueGetter: (params: ValueGetterParams) => {
        const colId = params.column.getColId();
        if (colId.includes('sport')) {
          return params.data.sport;
        } else if (colId.includes('country')) {
          return params.data.country;
        }
      },
    },
    groupDisplayType: 'multipleColumns',
    animateRows: true,
  };

  applyFilter() {
    this.gridOptions.api!.setFilterModel({
      'ag-Grid-AutoColumn-sport': {
        filterType: 'text',
        type: 'contains',
        filter: 'Skiing',
      },
    });
  }

  // setup the grid after the page has finished loading
}
