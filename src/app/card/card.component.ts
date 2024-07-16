import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParallaxDirective } from './../directives/parallax.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    ParallaxDirective,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() title!: string;
  @Input() src!: string;
  @Input() number!: number;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void { }

  goTo(title: string) {
    this.router.navigate([title.toLocaleLowerCase()]);
  }

}
