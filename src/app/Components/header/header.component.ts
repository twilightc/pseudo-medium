import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  throttleTime,
  map,
  pairwise,
  distinctUntilChanged,
  share,
  filter
} from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements AfterViewInit {
  private isVisible = true;
  constructor(private router: Router, public userservice: UserService) {}

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const scrollUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const scrollDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    scrollUp$.subscribe(() => (this.isVisible = true));
    scrollDown$.subscribe(() => (this.isVisible = false));
  }

  toLogin() {
    this.router.navigate(['login']);
  }

  toRegister() {
    this.router.navigate(['register']);
  }

  toMain() {
    this.router.navigate(['branch1']);
  }

  Logout() {
    this.userservice.isLoggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['branch1']);
  }
}
