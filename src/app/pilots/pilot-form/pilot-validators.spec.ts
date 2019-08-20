import { PilotService } from './../pilot.service';
import { Pilot } from './../../pilot';
import { PilotValidators } from './pilot-validators';
import { FormControl } from '@angular/forms';

fdescribe('pilotValidators', () => {
    describe('containsCapitalLetter', () => {
        let formControl: FormControl;
        describe ('when string empty', () => {
            it('should be null', () => {
                formControl = new FormControl('');
                expect(PilotValidators.constainsCapitalLetter(formControl)).toBeNull();
            });
        });

        describe ('when string with lower letter', () => {
            it('should return error', () => {
                formControl = new FormControl('lark');
                expect(PilotValidators.constainsCapitalLetter(formControl)).toEqual({containsCapitalLetter: true});
            });
        });

        describe ('when string with capital', () => {
            it('should return error', () => {
                formControl = new FormControl('Lark');
                expect(PilotValidators.constainsCapitalLetter(formControl)).toBeNull();
            });
        });

    });
    describe('pilotUniq', () => {
        let controlForm, editedPilot;
        beforeEach(() => {
            controlForm = new FormControl('Adam');
            editedPilot = new Pilot({id: 1, firstName: 'Adam', lastName: 'Lark', imageUrl: '/assets/john.jpg'});
        });

        describe('when no pilot with such name', () => {
            it('should ');
        });



    });
}
);
