import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filteredString: string, status: string): any {
    if (value.length === 0 || filteredString === "") {
      return value;
    }
    // define an array
    const resultantArray: Array<string> = [];
    // loop thru each item in value array
    for (const item of value) {
      // check entered value matches current item's status property
      if (item[status] === filteredString) {
        // push the matching item to the array
        resultantArray.push(item);
      }
    }
    return resultantArray;
  }
}
