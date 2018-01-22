import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import {SuiModule} from 'ng2-semantic-ui';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { MainTableComponent } from './main-table/main-table.component';
import {Ng2TableModule} from 'ng2-table';
import { AboutComponent } from './about/about.component';

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
    Ng2TableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
