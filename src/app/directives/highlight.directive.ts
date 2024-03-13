import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  
  constructor(private el:ElementRef) {
    
   }

  @HostBinding("style.backgroundColor")
  bgcolor = "red"

  @HostListener("mouseenter")
  changeFontSize(){
    console.log("mouse enter");
    this.el.nativeElement.style.fontSize = "50px";
  }

  @HostListener("mouseleave")
  resetFontSize(){
    console.log("mouse leave");
    this.el.nativeElement.style.fontSize = "30px";
  }
}
