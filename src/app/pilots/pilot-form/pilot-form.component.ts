import { PilotValidators } from './pilot-validators';
import { PilotService } from './../pilot.service';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pilot } from '../../pilot';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pilot-form',
  templateUrl: './pilot-form.component.html',
  styleUrls: ['./pilot-form.component.css']
})
export class PilotFormComponent implements OnInit {

  form$ = this.activatedRoute.data.pipe(map((data: {pilot: Pilot}) => data.pilot),
  map((pilot) => new FormGroup({
    id: new FormControl(pilot.id),
    firstName: new FormControl(pilot.firstName, {validators: [Validators.required, PilotValidators.constainsCapitalLetter]}),
    lastName: new FormControl(pilot.lastName,
      { validators: [Validators.required, PilotValidators.constainsCapitalLetter],
        asyncValidators: [PilotValidators.pilotUniq(pilot, this.pilotService)]}),
    imageUrl: new FormControl(pilot.imageUrl)
  })));

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private pilotService: PilotService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    const editedPilot = new Pilot(form.value);
    this.pilotService.savePilot(editedPilot)
      .subscribe(this.onSaveSuccess.bind(this), this.onSaveFailure.bind(this));
  }

  private onSaveFailure() {

  }

  private onSaveSuccess() {
    this.router.navigate(['/']);
  }

}
