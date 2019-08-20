import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pilot } from '../pilot';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(private httpClient: HttpClient) { }

  getPilots(): Observable<Pilot[]> {
    return this.httpClient.get('/api/pilots').pipe(
      map((data: object[]) => data.map((pilotAttrs) => new Pilot(pilotAttrs)))
    );
  }

  getPilot(id: number): Observable<Pilot> {
    return this.httpClient.get(`/api/pilots/${id}`).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }

  createPilot(pilot: Pilot): Observable<Pilot> {
    return this.httpClient.post('/api/pilots', pilot).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }

  updatePilot(pilot: Pilot): Observable<Pilot> {
    return this.httpClient.put(`/api/pilots/${pilot.id}`, pilot).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }

  savePilot(pilot: Pilot): Observable<Pilot> {
    return pilot.id !== 0 ? this.updatePilot(pilot) : this.createPilot(pilot);
  }

  getPilotByLastName(lastName: string): Observable<Pilot> {
    const params = {lastName};
    return this.httpClient.get('/api/pilots', {params}).pipe(
      map((data) => {
            const attrs = data[0];
            return attrs ? new Pilot(attrs) : null;
        })
    );

  }
}
