import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  auth = new Login();
  inLogin = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
    document.title="Log In"
  }

  public login() {
    this.inLogin = true;

    setTimeout(() => {
      this.inLogin = false;
      alert(JSON.stringify(this.auth))
    }, 2000)

  }

}
