import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, type OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-contact',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './banner-contact.component.html',
  styleUrl: './banner-contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerContactComponent {

  goTo() {
    window.open('https://inesrobat.com/', '_blank');
  }

}
