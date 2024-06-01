import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent implements OnInit {

  ngOnInit(): void { }

}
