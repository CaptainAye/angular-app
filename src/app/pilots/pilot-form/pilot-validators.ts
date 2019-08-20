import { timer } from 'rxjs';
import { PilotService } from './../pilot.service';
import { FormControl } from '@angular/forms';
import { Pilot } from '../../pilot';
import { switchMap, map } from 'rxjs/operators';
export class PilotValidators {

    static constainsCapitalLetter(formControl: FormControl) {
        return !formControl.value || /^[A-Z]/.test(formControl.value) ? null : {containsCapitalLetter: true};
    }

    static pilotUniq(pilot: Pilot, pilotService: PilotService) {
        return (formControl: FormControl) => {
          return timer(100).pipe(
            switchMap(() => pilotService.getPilotByLastName(formControl.value)),
            map((fetchedPilot) => (fetchedPilot && fetchedPilot.id !== pilot.id) ? {pilotUniq: true} : null)
          );
        };
      }
}
