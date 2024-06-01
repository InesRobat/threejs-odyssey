import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CARDS } from '../content/content';
import { ActivatedRoute } from '@angular/router';
import { CardInfoComponent } from '../card-info/card-info.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavbarComponent,
    CardInfoComponent,
    FooterComponent,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent implements OnInit {

  public card: any = {};

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params['id'];
    const foundCard = CARDS.find(card => card.title.toLowerCase() === params);
    this.card = foundCard || CARDS[0];
  }

}
