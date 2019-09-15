import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        })
      ),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class LeftMenuComponent implements OnInit {
  state = 'hide';

  constructor(public el: ElementRef) {}

  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }
}
