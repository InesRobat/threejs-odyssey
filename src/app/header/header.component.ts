import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core';
import { LazyImgDirective } from '../directives/LazyImg.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    LazyImgDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  @Input() title!: string;
  @Input() desc!: string;
  @Input() src!: string;

  ngOnInit(): void { }

  goDown() {
    window.scrollTo(0, 400);
    // make it smooth

  }

}
