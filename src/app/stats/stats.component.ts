import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsComponent implements AfterViewInit {

  @ViewChildren('statsNumbers') statsNumbers!: QueryList<ElementRef<HTMLDivElement>>;

  items = [
    { text: 'Chapters', number: 7 },
    { text: 'Lessons', number: 66 },
    { text: 'Hours of tutorial', number: 93 },
    { text: 'Challenging', number: 100 },
  ];

  ngAfterViewInit(): void { }
}