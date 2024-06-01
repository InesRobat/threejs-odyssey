import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { StatsComponent } from '../stats/stats.component';
import { CardComponent } from '../card/card.component';
import { BannerContactComponent } from '../banner-contact/banner-contact.component';
import { CARDS, HEADER } from './content';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeaderComponent,
    StatsComponent,
    CardComponent,
    BannerContactComponent,
    FooterComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent implements OnInit {

  public cards = CARDS;
  public header = HEADER;

  ngOnInit(): void { }

}
