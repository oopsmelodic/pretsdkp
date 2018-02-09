import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import {SuiModule} from 'ng2-semantic-ui';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { MainTableComponent } from './components/main-table/main-table.component';
import { AboutComponent } from './pages/about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { RowActionsComponent } from './components/main-table/row-actions/row-actions.component';
import {ApiService} from './services/api.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotFoundComponent}
];

    @NgModule({
      declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    MainTableComponent,
    AboutComponent,
    RowActionsComponent
  ],
  entryComponents: [
    RowActionsComponent, MainTableComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    Ng2SmartTableModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
