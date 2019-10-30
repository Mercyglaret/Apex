import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }
    // On submit button click
    onSubmit() {
    }
  // On Forgot password link click
  onForgotPassword() {
      this.router.navigate(['/forget']);
  }
  // On registration link click
  onRegister() {
      this.router.navigate(['register']);
  }
}
