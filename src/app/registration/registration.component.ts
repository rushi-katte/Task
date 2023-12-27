
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup | any;
  profileData: any;
  isProfileEditable: boolean = false;
  isshow:boolean=true;

  constructor( private http:HttpClient , private route:Router) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      "firstName":new FormControl(''), 
      'age':new FormControl(''), 
     'interests': new FormControl(''), 
      'addressType': new FormControl(''), 
      
      'address1':new FormControl(''), 
      'address2': new FormControl(''),
      'companyAddress1': new FormControl(''),
      'companyAddress2': new FormControl('')
    });
    
  }

  onSubmit(registrationForm:FormGroup) {
    console.log(Response)
    if (this.registrationForm.valid) {
      console.log(Response)
      this.http.post("http://localhost:3000/register" , registrationForm.value).subscribe((Response:any)=>{
        console.log(Response)
        this.route.navigate(['profile'])
      })
    }
  }

  

  removeInterest(){
    this.isshow=false;
  }
}
