import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterLink, RouterOutlet],
  template: `
<main>
  <a [routerLink]="['/']">
    <header class="brand-name">
      <h1 style="color: green; text-align: center; text-transform: uppercase; font-weight: bold;">
        <i class="fas fa-car"></i> Vehicle System
      </h1>
    </header>
  </a>
  <section class="content">
    <router-outlet></router-outlet>
  </section>
</main>

  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Cars';
}
