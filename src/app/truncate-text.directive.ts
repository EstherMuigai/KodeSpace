import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appTruncateText]'
})
export class TruncateTextDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.width='80%';
  }

}
