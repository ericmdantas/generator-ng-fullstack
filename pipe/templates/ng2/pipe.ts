import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: '<%= name %>'})
export class <%= nameCapitalized %>Pipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    return value;
  }
}
