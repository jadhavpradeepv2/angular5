import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsondata'
})
export class JsondataPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return 'Name: ' + value.name + ' and Age: ' + value.age;
  }

}
