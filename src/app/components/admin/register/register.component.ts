import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/model/register';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  register = new Register();
  // handle all country codes
  countryCodes: any = [];
  // test if register in progress or finished
  inRegister = false;
  // default countryCode
  countryCode = "+1111";
  // pattern for complex passowrd
  strongPassword = "(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}";
  // 
  toggleInputPassword = 'password';

  registerForm = new FormGroup({
    storename: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.strongPassword)]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"),]),
  });

  constructor(private global: GlobalService) { }

  ngOnInit(): void {
    document.title = 'Regiteration';
    this.getCountryCodes();
  }

  /**
   * register user details to database
   */
  registerNow() {
    this.inRegister = true;
    setTimeout(() => {
      this.inRegister = false;
      alert(JSON.stringify(this.register));
    }, 2000);
  }

  /**
   * call all country codes as http request to pass all
   * codes to countryCodes array
   */
  private getCountryCodes() {
    this.global.getCountryCodes().subscribe((code) => {
      this.countryCodes = code;
    });
  }

  /**
   * extract country code from selected entry and return it back
   * to phone input to shown as hint (guide for user)
   */
  getCurrentCode() {
    // let matches = this.register.phone.match(/(\d+)/)
    let matches = this.register.phone.match(/\((.*)\)/);
    this.countryCode = matches[1];
    this.register.phone = '';
  }

  /**
   * test if passed form control achieve all restrictions or not
   * if true so will through it
   * if false so make alert as danger that there needed contraints
   * @param control
   */
  validate(control: string) {
    return (this.registerForm.get(control).touched && this.registerForm.get(control).invalid)
  }

  /**
   * toggle password to text to be visible for user
   * and verse text to password to be invisible for user
   */
  togglePassword() {
    this.toggleInputPassword = this.toggleInputPassword == "text" ?
     this.toggleInputPassword = "password" : this.toggleInputPassword = "text"
  }
}
