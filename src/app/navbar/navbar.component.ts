import { CommonModule, ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {

  constructor(
    private viewPortScroller: ViewportScroller,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  openLink() {
    window.open('https://inesrobat.com/', '_blank');
  }

  goTo() {
    this.router.navigate(['/']);
  }

  scrollTo(elementId: string) {
    if (Object.keys(this.route.snapshot.params).length === 0) {
      this.viewPortScroller.scrollToAnchor(elementId);
    } else {
      this.router.navigate(['/']);

      timer(100).subscribe(() => {
        this.viewPortScroller.scrollToAnchor(elementId);
      });
    }
  }

}
