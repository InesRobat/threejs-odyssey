import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { interval } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { NumberFlipDirective } from '../directives/number-flip.directive';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  standalone: true,
  imports: [CommonModule, NumberFlipDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent implements AfterViewInit {
  @ViewChildren('scrollNum') scrollNum!: QueryList<ElementRef<HTMLSpanElement>>;
  items = [
    { text: 'Chapters', number: 7 },
    { text: 'Lessons', number: 66 },
    { text: 'Hours of tutorial', number: 93 },
    { text: 'Challenging', number: 100 },
  ];

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.updateView();
  }

  updateView(): void {
    this.items.forEach((item) => this.setup(item.number));
  }

  setup(startNum: number): void {
    const digits = startNum.toString().split('');

    this.createSpans(digits);
    this.scrollNumber(digits);
  }

  private createSpans(digits: string[]): void {
    this.scrollNum.forEach((num, index) => {
      const stat = num.nativeElement as HTMLSpanElement;
      digits.forEach((digit) => {
        const span = this.renderer.createElement('span');
        this.renderer.setStyle(span, 'transform', 'translateY(-1000%)');
        this.renderer.setAttribute(span, 'data-value', digit);
        this.renderer.appendChild(stat, span);
      });
    });
  }

  scrollNumber(digits: string[]): void {
    this.scrollNum.forEach((num, index) => {
      const stat = num.nativeElement as HTMLSpanElement;
      const ticks = stat.querySelectorAll('span[data-value]');
      ticks.forEach((tick: any, i) => {
        tick.style.transform = `translateY(-${100 * parseInt(digits[index], 10)}%)`;
      });
      setTimeout(() => {
        stat.style.width = `${digits.length * 28}px`;
      }, 100);
      interval(60).pipe(take(digits.length * 1000), switchMap(() => interval(50))).subscribe(() => {
        ticks.forEach((tick: any, i) => {
          const value = parseInt(digits[index], 10) - i;
          tick.style.transform = `translateY(-${value}%)`;
        });
      });
    });
  }
}

