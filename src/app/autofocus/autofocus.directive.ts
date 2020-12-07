import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective implements OnInit {


  constructor(private hostElement: ElementRef) { }

  ngOnInit() {
    setTimeout(() => this.hostElement.nativeElement.focus(), 0);

  }

}
