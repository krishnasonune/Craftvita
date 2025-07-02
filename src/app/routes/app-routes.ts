import { Route, RouterModule, Routes } from "@angular/router";
import { UserDetails } from "../user-details/user-details";
import { ClassicTemplate } from "../classic-template/classic-template";
import { ModuleWithProviders } from "@angular/core";

 const routes : Routes = [
  { path: '', component: UserDetails },
  { path: 'profile', component: UserDetails },
  { path: 'classic', component: ClassicTemplate },
  { path: '**', component: UserDetails }
 ]

export const routing : ModuleWithProviders<Route> = RouterModule.forRoot(routes);