import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
})
export class LoginAdminComponent implements OnInit {
  public loginForm: FormGroup;
  private emailPattern: any =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // private phonePattern: any = '[- +()0-9]+';

  public get password() {
    return this.loginForm.get('password');
  }

  public get correo() {
    return this.loginForm.get('correo');
  }
  createFormGroup() {
    return new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      correo: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.emailPattern),
      ]),
    });
  }
  constructor() {
    this.loginForm = this.createFormGroup();
  }

  ngOnInit(): void {}
  resetForm() {
    this.loginForm.reset();
  }
  saveForm(e: Event) {
    if (this.loginForm.valid) {
      console.log(e);
      this.resetForm();
    }
  }
}
