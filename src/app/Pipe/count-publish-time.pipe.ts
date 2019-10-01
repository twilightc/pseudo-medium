import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../Services/translate.service';

@Pipe({
  name: 'countPublishTime'
})
export class CountPublishTimePipe implements PipeTransform {
  constructor(private translateservice: TranslateService) {}

  transform(value: string, ...args: any[]): any {
    if (!value) {
      return;
    }

    return this.translateservice.countPublishTime(value);
  }
}
