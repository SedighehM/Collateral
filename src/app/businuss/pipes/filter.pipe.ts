import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(industrialArray: any[], industrialSearch: any): any[] {
    industrialArray = industrialArray.filter((industrial) => {
      return (
        (industrial.id == industrialSearch.id || !industrialSearch.id) &&
        (industrial.name == industrialSearch.name || !industrialSearch.name) &&
        (industrial.owner == industrialSearch.owner || !industrialSearch.owner) &&
        (industrial.entryDate == industrialSearch.entryDate || !industrialSearch.entryDate)
      );
    });
    return industrialArray;
  }
}
