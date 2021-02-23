import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'numberelement', pure: false})
export class NumberElementPipe implements PipeTransform {
  transform(value: any,count:number): any {
    if (value == null) return value;
    return value.filter((v, i) => (i % count == 0));
  }

  
}