import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToSignUp() {
    this.router.navigate(['/app-sign-up']); // Replace '/sign-up' with the appropriate route for <app-sign-up>
  }
  navigateToSignIn() {
    this.router.navigate(['/app-sign-in']); // Replace '/sign-up' with the appropriate route for <app-sign-up>
  }
}
