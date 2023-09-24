import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  submitted = false;
  hide = true;
  usersList: User[] = [];
  newUser!: User;

  registerForm = this.formBuilder.group({
    username: ['', { validators: [Validators.required], updateOn: 'change' }],
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'change',
      },
    ],
    password: [
      '',
      {
        validators: [Validators.required, Validators.minLength(8)],
        updateOn: 'change',
      },
    ],
    terms: [
      false,
      { validators: [Validators.requiredTrue], updateOn: 'change' },
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe((response: any) => {
      this.usersList = response;
    });
  }

  submitForm() {
    //cuando se haga submit ir al dashboard
    this.submitted = true;

    let user = {
      username: this.registerForm.get('username')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      premium: false,
      country: null,
      city: null,
      plants: null,
      events: null,
      plots: null,
    };
    if (this.usersList && this.usersList.length > 0) {
      // Comprobar si el correo electrónico ya existe en la lista de usuarios
      const isEmailExist = this.usersList.some((u) => u.email === user.email);
  
      if (isEmailExist) {
        alert('Email already exists!');
        return;
      }
    }
    this.userService.create(user).subscribe();
    this.router.navigate(['/accounts/plans']);
  }

  getUsernameError() {
    return 'Please, enter an username';
  }

  getEmailError() {
    if (this.registerForm?.get('email')?.hasError('email')) {
      return 'Please, enter a valid email address';
    }
    return 'Please, enter an email address';
  }

  getPasswordError() {
    if (this.registerForm?.get('password')?.hasError('minlength')) {
      return 'Please, enter a password at least 8 characters';
    }
    return 'Please, enter a password';
  }
}
