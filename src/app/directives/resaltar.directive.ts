import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[resaltar]'
})
export class ResaltarDirective implements OnInit {
    constructor(private anElementRef: ElementRef, private aRenderer: Renderer2) {

    }
    @Input('resaltar') outlet = '';
    ngOnInit(): void {
        if (this.outlet === 'yes') {
            this.aRenderer.setStyle(this.anElementRef.nativeElement, 'color', 'red');
            this.aRenderer.setStyle(this.anElementRef.nativeElement, 'background', 'Yellow');
        } else {
            this.aRenderer.setStyle(this.anElementRef.nativeElement, 'color', 'blue');
        }
    }
}