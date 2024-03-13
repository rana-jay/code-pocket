import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counrtyCode',
  standalone: true
})
export class CounrtyCodePipe implements PipeTransform {

  transform(value: number, country?:string): unknown {
    let code = "+91-"
    if(country=="USA") code = "+1-";
    return code+value;
  }

}
