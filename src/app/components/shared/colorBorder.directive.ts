import { Directive, ElementRef, Renderer2, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
    selector: '[appColorBorder]'
})

export class ColorBorderDirective implements OnChanges, OnInit {
    @Input() appColorBorder: string;
    constructor (private el: ElementRef, private renderer: Renderer2) {}

    private color(color: string): void {
        this.renderer.setStyle(this.el.nativeElement, 'border-color', color);
    }

    public ngOnInit() {
        this.color(this.appColorBorder);
    }

    public ngOnChanges() {
        this.color(this.appColorBorder);
    }
}
