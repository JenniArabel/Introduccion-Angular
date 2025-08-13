import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
// Sacar pipe del folder components
