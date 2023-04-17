import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// import { Grid, GridOptions, ValueGetterParams } from 'ag-grid-community';
// import 'ag-grid-enterprise';
// import { IOlympicData } from './app/interface';

// const gridOptions: GridOptions<IOlympicData> = {
//   columnDefs: [
//     { field: 'sport', rowGroup: true, hide: true },
//     { field: 'country', rowGroup: true, hide: true },
//     { field: 'gold', aggFunc: 'avg' },
//     { field: 'silver', aggFunc: 'sum' },
//     { field: 'bronze', aggFunc: 'sum' },
//   ],
//   defaultColDef: {
//     flex: 1,
//     minWidth: 150,
//     filter: true,
//     floatingFilter: true,
//     resizable: true,
//   },
//   autoGroupColumnDef: {
//     minWidth: 260,
//     filter: 'agTextColumnFilter',
//     filterValueGetter: (params: ValueGetterParams) => params.data.sport,
//   },
//   animateRows: true,
// };

// function applyFilter() {
//   gridOptions.api!.setFilterModel({
//     'ag-Grid-AutoColumn': {
//       filterType: 'text',
//       type: 'contains',
//       filter: 'Skiing',
//     },
//   });
// }

// // setup the grid after the page has finished loading
// var gridDiv = document.querySelector<HTMLElement>('#myGrid')!;
// new Grid(gridDiv, gridOptions);

// fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
//   .then((response) => response.json())
//   .then((data: IOlympicData[]) => gridOptions.api!.setRowData(data));

// if (typeof window !== 'undefined') {
//   // Attach external event handlers to window so they can be called from index.html
//   (<any>window).applyFilter = applyFilter;
// }
