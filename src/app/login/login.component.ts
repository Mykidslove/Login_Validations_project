import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  } 


  protected user= new User();

  email:any;
  myemail='nithya.anbu84@gmail.com';
  password:any;
  mypass='123';


  protected onSubmit(){
     
    
    // this.route.navigate(['./home']);

    if(this.user.email==this.myemail && this.user.password==this.mypass){
  this.route.navigateByUrl('/home');
  alert('successfully login');
  
    }else{
      alert('cant go to home');
    }
    

  console.table(this.user);
  }

  protected reset(): void {

  this.user=new User();
  }

}
