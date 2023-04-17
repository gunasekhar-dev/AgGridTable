import { Component, OnInit, ViewChild } from '@angular/core';
import { IOlympicData } from '../interfaces';
import {
  ColDef,
  Grid,
  GridApi,
  GridOptions,
  GridReadyEvent,
  ValueGetterParams,
} from 'ag-grid-community';
import 'ag-grid-enterprise';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-row-group',
  templateUrl: './row-group.component.html',
  styleUrls: ['./row-group.component.css'],
})
export class RowGroupComponent {
  private gridApi!: GridApi<IOlympicData>;

  public columnDefs: ColDef[] = [
    { field: 'sport', rowGroup: true, hide: true },
    { field: 'country', rowGroup: true, hide: true },
    { field: 'gold', aggFunc: 'sum' },
    { field: 'silver', aggFunc: 'sum' },
    { field: 'bronze', aggFunc: 'sum' },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
    sortable: true,
    floatingFilter: true,
    resizable: true,
  };
  public autoGroupColumnDef: ColDef = {
    minWidth: 260,
    filter: 'agTextColumnFilter',
    filterValueGetter: (params: ValueGetterParams) => params.data.sport,
  };
  public rowData!: IOlympicData[];

  constructor(private http: HttpClient) {}

  applyFilter() {
    this.gridApi.setFilterModel({
      'ag-Grid-AutoColumn': {
        filterType: 'text',
        type: 'contains',
        filter: 'Skiing',
      },
    });
  }

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.gridApi = params.api;

    this.http
      .get<IOlympicData[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => (this.rowData = data));
  }
  // setup the grid after the page has finished loading
}
