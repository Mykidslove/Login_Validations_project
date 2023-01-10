import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";
import { HomeComponent } from "./home/home.component";
import { PasswordPatternDirective } from "./directives/password-pattern.directive";
import { MatchPasswordDirective } from "./directives/match-password.directive";
import { ValidateUserNameDirective } from "./directives/validate-user-name.directive";
import { UserdetailComponent } from './userdetail/userdetail.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { TemplatedrivendataComponent } from "./templatedrivendata/templatedrivendata.component";
import { PageComponent } from './page/page.component';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from "./dashboard/dashboard.module";
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
   
    PasswordPatternDirective,
    MatchPasswordDirective,
    ValidateUserNameDirective,
    UserdetailComponent,
    TemplatedrivendataComponent,
  
    CourseDetailsComponent,
        PageComponent,
        LoginComponent,
        RegisterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    DashboardModule,
    
    RouterModule.forRoot([
      { path: "", component: LoginComponent },
      { path: "reactive-form", component: ReactiveFormComponent },
      {
        path: "template-driven-form",
        component: TemplateDrivenFormComponent,
      },
      {
        path: "template-driven-form/:id",
        component: TemplatedrivendataComponent,
      },
      { path: "home", component: HomeComponent },
      {path:"userdetail",component:UserdetailComponent},

      {path:"course-details",component:CourseDetailsComponent},

      {path:"login",component:LoginComponent},

      
   
      {path: '**' ,component:PageComponent} // wild card route-if we use wrong path
     
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
