import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective implements OnInit {

  // @Input('autofocus') isFocused: boolean;

  constructor(private hostElement: ElementRef) { }

  ngOnInit() {
    setTimeout(() => this.hostElement.nativeElement.focus(), 0);

  }

}
