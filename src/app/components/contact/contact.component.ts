import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact = new Contact()

  //Form Validation
  formData = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  })



  //to get full control of controls use it in validation
  get controls() {
    return this.formData.controls
  }

  //Save Contact

  contactUs() {
   alert(this.contact)
  }


  constructor() { }
  ngOnInit(): void {
  }


}