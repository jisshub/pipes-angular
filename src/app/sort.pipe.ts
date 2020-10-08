import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
})
export class SortPipe implements PipeTransform {
  transform(value: any, name: string): any {
    // function compare(a, b) {
    //   if (a.name < b.name) {
    //     return -1;
    //   }
    //   if (a.name > b.name) {
    //     return 1;
    //   }
    // }
    // return value.sort(compare);
    return value.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
  }
}
