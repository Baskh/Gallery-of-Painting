import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private router: Router) {}
  title = 'gallerypainters';
  navigateToSignUp() {
    this.router.navigate(['/signup']); // Replace '/sign-up' with the appropriate route for <app-sign-up>]
  }
  navigateToSignIn() {
    this.router.navigate(['/signin']);
  }
}
