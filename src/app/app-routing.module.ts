import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ChangelogComponent} from "./pages/changelog/changelog.component";
import {ContributeComponent} from "./pages/contribute/contribute.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'changelog',
    component: ChangelogComponent
  },
  {
    path: 'contribute',
    component: ContributeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
