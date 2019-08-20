import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shipName'
})
export class ShipNamePipe implements PipeTransform {

  transform(shipName: String, fullName: String): String {
    return fullName == null ? `${shipName}` : `${shipName} ${fullName}`;
  }

}
