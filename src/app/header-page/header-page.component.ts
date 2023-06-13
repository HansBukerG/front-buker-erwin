import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent {

  constructor(
    private readonly router: Router
  ) { }

  goToStartPage() {
    this.router.navigate(['mainPage']);
  }

  goToWhoAmIPage() {
    this.router.navigate(['quienesSomos']);
  }
}
