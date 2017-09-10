import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RoutingModule} from './modules/routing/routing.module';
import {ApiService} from './services/api.service';
import {SessionStorageService} from './services/session-storage.service';
import {AuthService} from './services/auth.service';
import {PubSubDistinct} from 'pubsub-distinct';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { DataManagerService } from './services/data-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    PageNotFoundComponent,
    AdminPageComponent,
    ItemsListComponent,
    ItemDetailsComponent,
    HeaderComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [ApiService, SessionStorageService, AuthService, PubSubDistinct,
    DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
