import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[fd-list-link], [fdListLink]'
})
export class ListLinkDirective implements OnInit {
    /** Defines if navigation indicator arrow should be included inside list item */
    @Input()
    @HostBinding('class.fd-list__link--navigation-indicator')
    navigationIndicator = false;

    /** Defines if link should be treated as a navigated */
    @Input()
    @HostBinding('class.is-navigated')
    navigated = false;

    /** Defines if item is selected */
    @Input()
    @HostBinding('class.is-selected')
    selected = false;

    /** @hidden */
    @HostBinding('class.fd-list__link')
    fdListLinkClass = true;

    /** Keeps href string */
    href: string;

    constructor(private _elementRef: ElementRef) {}

    /** @hidden */
    ngOnInit(): void {
        this.href = this._elementRef.nativeElement.getAttribute('href');
    }
}
