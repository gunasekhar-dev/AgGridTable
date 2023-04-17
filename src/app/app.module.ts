import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

import { AppComponent } from './app.component';
import { RowGroupComponent } from './component/row-group/row-group.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'grid',
    component: RowGroupComponent,
  },
];

@NgModule({
  declarations: [AppComponent, RowGroupComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
