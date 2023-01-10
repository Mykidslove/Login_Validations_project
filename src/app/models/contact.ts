import { FormControl } from "@angular/forms";

export interface ContactForm {
  name: FormControl<string>;
  username: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
  coursename:FormControl<string>;
}

