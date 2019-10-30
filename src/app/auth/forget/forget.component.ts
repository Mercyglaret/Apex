import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {

  }
onSubmit() {
  
}

// On login link click
onLogin() {
    this.router.navigate(['login']);
}

// On registration link click
onRegister() {
    this.router.navigate(['register']);
}

}
