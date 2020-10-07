import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
})
export class SortPipe implements PipeTransform {
  transform(value: any, serverName: string): any {
    for (const item of value) {
      // console.log(item[serverName]);
    }
  }
}
