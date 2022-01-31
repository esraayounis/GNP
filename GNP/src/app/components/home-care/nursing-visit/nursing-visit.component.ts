import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nursing-visit',
  templateUrl: './nursing-visit.component.html',
  styleUrls: ['./nursing-visit.component.css']
})
export class NursingVisitComponent implements OnInit {

  formdata!:FormGroup;
  selectedCity:any;
  selectedArea:any;
  selectedSpecialization:any;

  items = [
    {id: '1', name: 'A', value:'A'},
    {id: '2', name: 'B', value:'B'},
    {id: '3', name: 'C', value:'C'}
  ]
  constructor(public fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.formdata = this.fb.group({
      specialization:"",
      city:"",
      area:"",
    });
  }
  selectSpecialization() {
    this.selectedSpecialization = this.formdata.controls["specialization"].value;
  }


  selectCity() {
    this.selectedCity = this.formdata.controls["city"].value;
  }
  

  selectArea() {
    this.selectedArea = this.formdata.controls["area"].value;
  }
  

  onClickSubmit(data:any){

  }
}
