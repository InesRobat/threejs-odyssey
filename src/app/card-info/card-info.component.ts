import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, type OnInit } from '@angular/core';
import { fromEvent, map, repeat, switchMap, takeUntil } from 'rxjs';
import { merge } from 'rxjs/operators';
@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardInfoComponent implements OnInit, AfterViewInit {

  @Input() title!: string;
  @Input() sub!: string;
  @Input() src!: string;
  @Input() codeLink!: string;
  @Input() websiteLink!: string;

  @ViewChild('card') card!: ElementRef<HTMLElement>;

  private mouseX = 0;
  private mouseY = 0;
  private width!: number;
  private height!: number;

  ngOnInit(): void {

  }

  get nativeElement() {
    return this.card.nativeElement;
  }

  ngAfterViewInit(): void {
    // if (this.card) {
    //   this.width = this.card.nativeElement.offsetWidth;
    //   this.height = this.card.nativeElement.offsetHeight;

    //   const mouseMove$ = fromEvent<MouseEvent>(this.card.nativeElement, 'mousemove');
    //   const mouseLeave$ = fromEvent<MouseEvent>(this.card.nativeElement, 'mouseleave');
    //   const mouseEnter$ = fromEvent<MouseEvent>(this.card.nativeElement, 'mouseenter').pipe(takeUntil(mouseLeave$));

    //   mouseEnter$.pipe(
    //     switchMap(() => mouseMove$),
    //     map((event: any) => ({
    //       mouseX: event.pageX - this.nativeElement.offsetLeft - this.width / 2,
    //       mouseY: event.pageY - this.nativeElement.offsetTop - this.height / 2
    //     })),
    //     merge(mouseLeave$),
    //     repeat()
    //   ).subscribe((e: any) => {
    //     this.mouseX = e.mouseX;
    //     this.mouseY = e.mouseY;

    //     this.nativeElement.style.transform = `rotateY(${-this.mousePX * -30}deg) rotateX(${this.mousePY * -30}deg)`;
    //   });
    // }
  }

  get mousePX() {
    return this.mouseX / this.width;
  }

  get mousePY() {
    return this.mouseY / this.height;
  }

  goTo(url: string) {
    window.open(url, '_blank');
  }

}
