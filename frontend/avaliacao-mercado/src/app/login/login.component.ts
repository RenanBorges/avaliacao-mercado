import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private loginService: LoginService, private _router: Router) {}

  ngOnInit(): void {}

  login() {
    console.log('clicked', this.username);
    this.loginService
      .login(this.username, this.password)
      .subscribe((res: any) => {
        console.log(res);
        if (res?.success == true) {
          localStorage.setItem('isLoggedIn', 'true');
          this._router.navigate(['']);
          this.error = '';
        } else {
          this.error = res?.error;
        }
      });
  }
}
