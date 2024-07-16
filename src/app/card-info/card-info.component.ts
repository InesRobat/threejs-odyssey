import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, type OnInit } from '@angular/core';
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

  handleMouseMove(event: MouseEvent, element: HTMLDivElement) {
    const bounds = element.getBoundingClientRect();
    element.style.setProperty('--x', (event.clientX - (bounds.left + Math.floor(bounds.width / 2))).toString())
    element.style.setProperty('--y', (event.clientY - (bounds.top + Math.floor(bounds.height / 2))).toString())
  }

  handleMouseLeave(event: MouseEvent, element: HTMLDivElement) {
    element.style.setProperty('--x', '0')
    element.style.setProperty('--y', '0')
  }

}
