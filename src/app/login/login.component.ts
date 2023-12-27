import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup |any;

    

  constructor(private http :HttpClient , private route:Router) { }

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl('')
    })
  }

  onSubmit(loginForm:FormGroup){
      this.http.get<any>("http://localhost:3000/signup").subscribe((response)=>{
        console.log(response)
        const user =response.find((a:any)=>{
           console.log(response)
          return a.username=== this.loginForm.value.username && a.password === this.loginForm.value.password
          
        });
        if(user) {
          alert('u are succesfully login ');
          this.loginForm.reset();
          this.route.navigate(['home'])
        }
        else{
          alert('user not found ');
          this.route.navigate(['login'])
        }
      }, (err)=>{
        alert('something went wrong ')
      }) 
  }

}
