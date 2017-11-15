import {Region} from './models/region';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
   name: 'getRegionPosition'
})
export class GetRegionPositionPipe implements PipeTransform {

   transform(value: Region, args?: any): number[] {
      console.log('Pipe');
      console.log(value);
      return [value.latitude, value.longitude];
   }

}
