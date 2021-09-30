import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form : FormGroup;
  submitted = false;
  

  constructor(
    private router : Router,
    private formBuilder: FormBuilder,

   ){} 

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required , Validators.minLength(5)]],
      password: ['', Validators.required]
  });
  }

  get formControls() { return this.form.controls; }

  onSubmit(){
    console.log(this.form.value);
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    
    alert("success");
  }
  
  

}
