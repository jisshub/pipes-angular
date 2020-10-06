// import PipeTransform interface
import { Pipe, PipeTransform } from "@angular/core";

// add Pipe decorator - set up a name for pipe.
@Pipe({ name: "shorten" })
export class ShortenPipe implements PipeTransform {
  // define transform method - receives a value to be transformed
  transform(value: any, limit: number) {
    //   if length of value > 10 characters
    if (value.length > limit) {
      // shorten the value
      return value.substr(0, limit) + "...";
    }
    // if not return original value
    return value;
  }
}
