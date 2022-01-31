import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthententicationService } from 'src/app/core/services/authententication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  formSubmitAttempt: boolean = false;
  notValidHere: any[] = [];
  submitted = false;
  loading = false;
  errors: []= [];
  
  constructor( private fb: FormBuilder, private authService: AuthententicationService,
     private router: Router){}
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  
  validateAllFormFields(formGroup: FormGroup) {     
    Object.keys(formGroup.controls).forEach(field => { 
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        if (control.invalid) {
          this.notValidHere.push(control);
        }
        else {
          control.markAsPristine();
        }
        control.markAsTouched({ onlySelf: true });
      }
      else if (control instanceof FormGroup) {   
        this.validateAllFormFields(control);    
      }
    });
  }

  get fireValidation() { return this.loginForm.controls; }

  onClickSubmit(data:any) {
    debugger
    this.submitted  = true;
    this.loading = true;
    this.notValidHere = new Array();
    if (!this.loginForm.valid) {
      this.loading = false;
      console.log(data)
    }
    else{
      this.loading = true;
      let myStorage = window.localStorage;
      myStorage.setItem("authenticatedUSer", data.userName);
      localStorage.setItem("UserId", data.password);
      this.router.navigate(['/home'])
      // this.authService.login(this.loginForm.value);
    }
  };

}

export interface User {
  userName: string;
  password: string;
}
