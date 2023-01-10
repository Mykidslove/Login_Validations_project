import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  users=[
    {fname:'John',lname:'kennady',gender:'male',email:'john@gmail.com'},
    {fname:'Bill',lname:'gates', gender:'male',email:'bill@gmail.com'},
    {fname:'laks',lname:'mittal',gender:'female',email:'laks@gmail.com'},    
    {fname:'sundar',lname:'pitchai',gender:'male',email:'sundar@gmail.com'}
];




}
