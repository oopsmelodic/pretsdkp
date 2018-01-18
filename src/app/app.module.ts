import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import {SuiModule} from 'ng2-semantic-ui';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
