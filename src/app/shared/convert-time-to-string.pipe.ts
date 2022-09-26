import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTimeToString'
})
export class ConvertTimeToStringPipe implements PipeTransform {

  transform(value: Date): string {
    return value.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute:'2-digit'
    });
  }
}
