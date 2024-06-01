import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core';

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
export class CardInfoComponent implements OnInit {

  @Input() title!: string;
  @Input() sub!: string;
  @Input() src!: string;
  @Input() codeLink!: string;
  @Input() websiteLink!: string;

  ngOnInit(): void { }

  goTo(url: string) {
    window.open(url, '_blank');
  }

}
