import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, type OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LazyImgDirective } from '../directives/LazyImg.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    LazyImgDirective,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {

  @ViewChild('image') image!: ElementRef<HTMLImageElement>;

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

  onMouseWheel(e: any) {
    // on mouse wheel event parralex effect on the image following the mouse wheel
    // this.image.nativeElement.style.transform = `translateY(-${e.deltaY}px)`;


  }

  onScroll(e: Event) {
    console.log(e);
  }

}
