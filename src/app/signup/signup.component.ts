import { Component, OnInit } from '@angular/core';
import { SigninService } from './signin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup|any;

  
  constructor(private service:SigninService , private route:Router ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    });

}
  onSubmit(signupForm:FormGroup) {
   
    this.service.usersignup(signupForm).subscribe((response)=>{
        alert("sign-up succesfull.... back to login")
        return  this.route.navigate(['login'])
    }, (err)=>{
      alert('somethingf went wrong ')
    })
        
    

   }
     
  
  
}
