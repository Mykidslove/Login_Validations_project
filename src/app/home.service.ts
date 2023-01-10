import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  users=[{sno:101,name:'Nirmala', age:35,gender:'female',},
   
      {sno:102,name:'Indra',age:32, gender:'female'},

      {sno:103,name:'saras',age:37,gender:'female'},

      {sno:104, name:'subash',age:38,gender:'male'}




];
 

  constructor() { 

  }

  getinput(){

    return this.users;
  }
}
