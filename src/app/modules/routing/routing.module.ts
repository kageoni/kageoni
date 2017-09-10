import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from "../../pages/page-not-found/page-not-found.component";
import { AdminGuardService } from "../../services/admin-guard.service";
import { LoginPageComponent } from "../../pages/login-page/login-page.component";
import { HomePageComponent } from "../../pages/home-page/home-page.component";
import { AdminPageComponent } from "../../pages/admin-page/admin-page.component";
import { ItemsListComponent } from "../../components/items-list/items-list.component";
import { ItemDetailsComponent } from "../../components/item-details/item-details.component";

const appRoutes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent},
  {
    path: 'admin', component: AdminPageComponent, canActivate: [AdminGuardService],
    children: [
      { path: '', component: ItemsListComponent},
      {
        path: ':category', component: ItemsListComponent,
        children: [
          { path: '', component: ItemDetailsComponent},
          {path: ':item', component: ItemDetailsComponent}
        ]
      }
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [AdminGuardService]
})
export class RoutingModule {
}
