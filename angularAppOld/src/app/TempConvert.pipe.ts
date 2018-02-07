import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: "TempConvert"
})

export class TempConvertPipe implements PipeTransform {
    transform(value: number) :number{
        return (value *9/5) +32;
    }
}