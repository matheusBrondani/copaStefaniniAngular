import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'cpfMask2'
})
export class CpfMask2Pipe implements PipeTransform {
  

  transform(value: string, args?: any): any {
    if(value){
      value = value.toString();
      if(value.length === 11){
          return value.substring(0,3).concat(".")
                                     .concat(value.substring(3,6))
                                     .concat(".")
                                     .concat(value.substring(6,9))
                                     .concat("-")
                                     .concat(value.substring(9,11))
      }
    } 
    return value;
  }
}
