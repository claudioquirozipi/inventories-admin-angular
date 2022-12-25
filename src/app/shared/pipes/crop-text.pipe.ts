import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cropText',
})
export class CropTextPipe implements PipeTransform {
  transform(text: string, cutNumber?: number): unknown {
    let newText: string = '';
    const newCutNumber: number = cutNumber || 15;
    if (text.length > newCutNumber) {
      newText = text.slice(0, newCutNumber) + ' ...';
    } else {
      newText = text;
    }
    return newText;
  }
}
