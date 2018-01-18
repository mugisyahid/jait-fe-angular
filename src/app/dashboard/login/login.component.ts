import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppConfig} from '../../config/app.config';
import {LoggerService} from '../../core/logger.service';

import {Auth} from '../shared/auth.model';
import {AuthService} from '../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private loginForm: FormGroup;
  private error: String;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { 

    this.loginForm = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    });

  }

  login(l: Auth) {
    this.authService.login(l).subscribe((newHeroWithId) => {
    }, (response: Response) => {
      if (response.status === 500) {
        this.error = 'errorHasOcurred';
      }
    });
  }

}
