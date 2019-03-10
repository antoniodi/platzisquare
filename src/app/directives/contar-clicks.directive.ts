import { Directive, OnInit, ElementRef, Renderer2, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: 'p[contar-clicks]'
})

export class ContarClicksDirective {
    countClicks = 0;

    @HostBinding('style.opacity') opacity = 0.1;
    @HostListener('click', ['$event.target'])
    onClick(btn) {
        console.log('a', btn, 'Número de clicks', this.countClicks++);
        this.opacity += 0.1;
    }
}
