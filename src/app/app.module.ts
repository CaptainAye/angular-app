import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { A2sCommModule } from 'a2s-comm';

import { AppComponent } from './app.component';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './ships/space-ship/space-ship.component';
import { PilotComponent } from './pilot/pilot.component';
import { PilotRoomComponent } from './pilot-room/pilot-room.component';
import { FindPlanetComponent } from './find-planet/find-planet.component';
import { EngineersRoomComponent } from './engineers-room/engineers-room.component';
import { SpaceImageDirective } from './shared/space-image.directive';
import { ShipNamePipe } from './ships/ship-name.pipe';
import { BlackHoleComponent } from './black-hole/black-hole.component';
import { PilotFormComponent } from './pilots/pilot-form/pilot-form.component';
import { EngineersTrashComponent } from './ships/engineers-trash/engineers-trash.component';


@NgModule({
  declarations: [
    AppComponent,
    HangarComponent,
    SpaceShipComponent,
    PilotComponent,
    PilotRoomComponent,
    FindPlanetComponent,
    EngineersRoomComponent,
    SpaceImageDirective,
    ShipNamePipe,
    BlackHoleComponent,
    PilotFormComponent,
    EngineersTrashComponent
  ],
  imports: [
    BrowserModule,
    A2sCommModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
