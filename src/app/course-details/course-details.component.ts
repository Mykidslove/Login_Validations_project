import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
  NonNullableFormBuilder,
  FormControl,
} from "@angular/forms";
import { ContactForm } from "../models/contact";
import { CustomvalidationService } from "../services/customvalidation.service";
import { UserNameValidationService } from "../services/user-name-validation.service";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./course-details.component.html",
  styleUrls: ["./course-details.component.scss"],
})
export class CourseDetailsComponent implements OnInit {
  protected courseForm!: FormGroup<ContactForm>;
  protected submitted = false;

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly customValidator: CustomvalidationService,
    private readonly userNameValidationService: UserNameValidationService
  ) {}

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group(
      {
        name: new FormControl("", Validators.required),
        username: new FormControl("", {
          asyncValidators: [
            this.userNameValidationService.validate.bind(
              this.userNameValidationService
            ),
          ],
          validators: [Validators.required],
        }),
        password: new FormControl("", [
          Validators.required,
          this.customValidator.patternValidator(),
        ]),
        confirmPassword: new FormControl("", [Validators.required]),
        coursename: new FormControl("", [Validators.required]),
      },
      {
        validators: [
          this.customValidator.matchPassword("password", "confirmPassword"),
        ],
      }
    );
  }

  protected get courseFormControl() {
    return this.courseForm.controls;
  }

  protected onSubmit(): void {
    this.submitted = true;

    if (this.courseForm.valid) {
      alert(
        "Form Submitted succesfully!!!\n Check the values in browser console."
      );
      console.table(this.courseForm.value);
    }
  }

  protected resetForm(): void {
    this.courseForm.reset();
  }
}
