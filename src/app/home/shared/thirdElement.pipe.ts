import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'thirdelement', pure: false})
export class ThirdElementPipe implements PipeTransform {
  transform(value: any): any {
    if (value == null) return value;
    return value.filter((v, i) => (i % 3 == 0));
  }

  
}