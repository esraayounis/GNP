import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-complexes',
  templateUrl: './medical-complexes.component.html',
  styleUrls: ['./medical-complexes.component.css']
})
export class MedicalComplexesComponent implements OnInit {
  formdata!:FormGroup;
  selectedCity:any;
  selectedArea:any;
  selectedHospital:any;

  items = [
    {id: '1', name: 'A', value:'A'},
    {id: '2', name: 'B', value:'B'},
    {id: '3', name: 'C', value:'C'}
  ]
  constructor(public fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.formdata = this.fb.group({
      city:"",
      area:"",
      hospital:""
    });
  }

  
  selectCity() {
    this.selectedCity = this.formdata.controls["city"].value;
  }
  

  selectArea() {
    this.selectedArea = this.formdata.controls["area"].value;
  }
  
  selectHospital(){
    this.selectedHospital = this.formdata.controls["hospital"].value;
  }

  onClickSubmit(data:any){

  }

}
