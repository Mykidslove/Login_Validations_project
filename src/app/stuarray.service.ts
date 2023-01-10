import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StuarrayService
 {


  student=[{name1:'Nithya', courseName:'Angular',Duration:'6Months',email:'nithya@gmail.com'},

          {name1:'Ram',courseName:'JavaScript',Duration:'3Months',email:'ram@gmail.com'},
          {name1:'Sita',courseName:'Html',Duration:'1Month',email:'sita@gmail.com'}
];

  constructor() { }


   getoutput(){

    return this.student;
   }
}
