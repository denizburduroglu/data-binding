import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector:'[appHighlight]'
})

export class HighlightDirective {
    constructor(private el: ElementRef) {
        // el.nativeElement.style.backgroundColor= 'yellow';
        el.nativeElement.style.display='inline';
    }

    @Input('appHighlight') highlightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || 'red');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
    // clickEvent(event) {
    //     alert(event);
    // }
}