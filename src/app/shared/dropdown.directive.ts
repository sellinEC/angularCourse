import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";


@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective  {
@HostBinding('class.open') showDropdown: boolean = false
@HostListener('click') toggleOpen() {
  this.showDropdown = !this.showDropdown
}
  constructor(private elRef: ElementRef, private renderer: Renderer2) {  }


}

