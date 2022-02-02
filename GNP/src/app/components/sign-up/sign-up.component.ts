import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import intlTelInput from 'intl-tel-input';
// import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm!: FormGroup;
  notValidHere: any[] = [];
  submitted = false;
  showRegisterError:any;
  registerServererror ="";
  loading = false;
  errors: []= [];
  selectedGender:any;

  mobilePattern = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
  emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  genders = [
    {id: '1', value:'ذكر'},
    {id: '2', value:'أنثي'},
  ]
  constructor(public fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: new FormControl("", Validators.required),
      mobile: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      birthdate: new FormControl("" , Validators.required),
      gender: new FormControl("" , Validators.required),
      password: new FormControl("", Validators.required),
      confirmPass: new FormControl("", Validators.required),
    });
    
    // const input = document.querySelector("#phone");
    // intlTelInput(input, {
    //     // any initialisation options go here
    // }); 
  }

  selectGender(){
    this.selectedGender =  this.registerForm.controls["gender"].value;
  }

  allowOnlyNumbers(e:any) {
    let input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
      return false;
    }
    if (e.which === 0) {
      return true;
    }
    if (e.which < 33) {
      return true;
    }

    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
  }

  // minValuePassword(control: FormControl): { [s: string]: boolean } {
  //   if (control.value != null && control.value != "") {
  //     if (!isNullOrUndefined(control.value)) {
  //       if (control.value.length < 4) {
  //         return { 'PasswordNumberLength': true }
  //       }
  //       else {
  //         return null;
  //       }
  //     }
  //   }
  // }

  // minValuePhone(control: FormControl): { [s: string]: boolean } {
  //   if (control.value != null && control.value != "") {
  //     if (!isNullOrUndefined(control.value)) {
  //       if (control.value.length < 10) {
  //         return { 'PhoneNumberLength': true }
  //       }
  //       else {
  //         return null;
  //       }
  //     }
  //   }
  // }

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

  get fireValidation() { return this.registerForm.controls; }

  onClickSubmit(data:any) {
    this.submitted  = true;
    this.loading = true;
    this.notValidHere = new Array();
    if (!this.registerForm.valid) {
      this.loading = false;
      console.log(data)
    }
    else{
      this.loading = true;
      this.router.navigate(['/profile'])
    }
  };

}
