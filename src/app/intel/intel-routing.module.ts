import { IntelBrowserComponent } from './intel-browser/intel-browser.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'browser', component: IntelBrowserComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'browser', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntelRoutingModule { }
