import { Component } from "@angular/core";
import { HomeService } from "../home.service";
import { StuarrayService } from "../stuarray.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {

  users:any=[];
  student:any=[];


constructor(private gethome:HomeService ,_getstu:StuarrayService) {

  this.users=gethome.getinput();
  this.student=_getstu.getoutput();
  
}


edit(){

}
delete(){

  
}
}
