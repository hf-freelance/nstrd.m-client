import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgOptimizedImage,ReactiveFormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  logoUrl = "assets/tenailleFull.svg";
  logoBtmUrl = "assets/tenaillebtm.svg";
  logoTopUrl = "assets/tenailletop.svg";

  contactFormGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    object: new FormControl(''),
    message: new FormControl(''),

  });

  onSubmit() {
    console.log(this.contactFormGroup)}
}
