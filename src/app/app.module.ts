import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import {SuiModule} from 'ng2-semantic-ui';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { MainTableComponent } from './main-table/main-table.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {Ng2SmartTableModule} from 'ng2-smart-table';

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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    Ng2SmartTableModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
