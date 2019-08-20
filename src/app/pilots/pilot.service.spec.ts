import { Pilot } from './../pilot';
import { TestBed, inject } from '@angular/core/testing';

import { PilotService } from './pilot.service';
import { of } from 'rxjs';

class FakeHttp {
  get(url: string, options) {}
  post(url: string, body, options) {}
  put(url: string, body, options) {}
}

describe('PilotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PilotService]
    });
  });

  it('should be created', inject([PilotService], (service: PilotService) => {
    expect(service).toBeTruthy();
  }));
});

fdescribe('PilotService', () => {
  let pilotService, httpService;
  beforeEach(() => {
    httpService = new FakeHttp();
    pilotService = new PilotService(httpService);
  });
  describe('getPilot', () => {
    let expectedPilot;
    beforeEach(() => {
      const pilotAttrs = {id: 1, firstName: 'Adam', lastName: 'Lark'};
      spyOn(httpService, 'get').and.returnValue(of(pilotAttrs));
      pilotService.getPilot(1).subscribe((pilot) => expectedPilot = pilot);
    });

    it('should make a request for pilot', () => {
      expect(httpService.get).toHaveBeenCalledWith('/api/pilots/1');
    });

    it('should return pilot', () => {
      expect(expectedPilot instanceof Pilot).toBeTruthy();
    });
  });

  describe('savePilot', () => {
    describe('when pilot is persisted', () => {
      const pilot = new Pilot({id: 1, firstName: 'Adam', lastName: 'Lark'});
      beforeEach(() => {
        spyOn(httpService, 'put').and.returnValue(of(pilot));
        pilotService.savePilot(pilot);
      });

      it('should make put request', () => {
        expect(httpService.put).toHaveBeenCalledWith('/api/pilots/1', pilot);
      });
    });

    describe('when pilot not persisted', () => {
      const pilot = new Pilot({id: 0, firstName: 'Adam', lastName: 'Lark'});
      beforeEach(() => {
        spyOn(httpService, 'post').and.returnValue(of(new Pilot({id: 0, name: 'Adam Lark'})));
        pilotService.savePilot(pilot);
      });

      it('should make post request', () => {
        expect(httpService.post).toHaveBeenCalledWith('/api/pilots', pilot);
      });
    });
  });

});
