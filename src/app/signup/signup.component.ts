import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../app-material.module';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form : FormGroup;
  submitted = false;

  constructor(
    private router : Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    console.log(this.registrationForm);
    
    this.form = this.formBuilder.group({
      firstname: ['', [Validators.required , Validators.minLength(5)]],
      lastname: ['', Validators.required],
      mail: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
  });
  }

  registrationForm = new FormGroup({
    firstName: new FormControl("",[Validators.required,Validators.minLength(5)]),
    lastName: new FormControl("",[Validators.required , Validators.minLength(5)]),
    emailAdrress: new FormControl("",[Validators.required , Validators.email]),
    address: new FormGroup({
    street:new FormControl(),
    city:new FormControl(),
    state:new FormControl(),
    pincode:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
  }),
    userName: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.pattern('^[0-9]+$')]),
    confirmPassword: new FormControl('',[Validators.required]),
    // gender: new FormControl('',[Validators.required]),
    
  
    
  });

  
    
  

  

  get firstName(){
    return this.registrationForm.get('firstName');
  }

  get lastName(){ 
    return this.registrationForm.get('lastName');
  }
  get emailAdrress(){
    return this.registrationForm.get('emailAddress');
  }
  get pincode(){
    return this.registrationForm.get('address')['controls']['pincode'];
  }
  get password(){ 
    return this.registrationForm.get('password');
  }

  get confirmPassword(){ 
    return this.registrationForm.get('confirmPassword');
  }



  

  onSubmit() {

    if (this.registrationForm.invalid) {
      alert('Form is invalid kindly input details required')
    }
    else {
      alert('Reactive form submited!')
      console.log(this.registrationForm);
      console.log(this.registrationForm.value);
    }

  }


 
}
