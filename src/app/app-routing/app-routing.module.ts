import { EngineersTrashGuard } from './../ships/engineers-trash.guard';
import { EngineersRoomComponent } from './../engineers-room/engineers-room.component';
import { PilotResolver } from './../pilots/pilot.resolver';
import { PilotFormComponent } from './../pilots/pilot-form/pilot-form.component';
import { BlackHoleComponent } from './../black-hole/black-hole.component';
import { HangarComponent } from './../hangar/hangar.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EngineersTrashComponent } from '../ships/engineers-trash/engineers-trash.component';

const appRouters: Routes = [
  {path: 'intel', loadChildren: 'src/app/intel/intel.module#IntelModule'},
  {path: 'hangar', component: HangarComponent,
  children: [
    {path: 'trash', component: EngineersTrashComponent, canActivate: [EngineersTrashGuard]},
    {path: '', component: EngineersRoomComponent, pathMatch: 'full'}
    ]
  },
  {path: 'pilots/new', component: PilotFormComponent, resolve: {pilot: PilotResolver}},
  {path: 'pilots/:id/edit', component: PilotFormComponent, resolve: {pilot: PilotResolver}},
  {path: '', redirectTo: 'hangar', pathMatch: 'full'},
  {path: '**', component: BlackHoleComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouters)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
