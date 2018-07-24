import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appColorBorder]'
})

export class ColorBorderDirective {
    constructor (private el: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(this.el.nativeElement, 'border', 'red');
    }
}