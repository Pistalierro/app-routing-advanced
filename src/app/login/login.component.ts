import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  message!: string;
  userLogin!: string;
  userPassword!: string;

  constructor(public authService: AuthService,
              private router: Router,) {
  }

  ngOnInit() {
    this.setMessage();
  }

  login() {
    this.setMessage('Tying to log in...');
    this.authService.login(this.userLogin, this.userPassword).subscribe({
      next: params => {
        this.setMessage();
        if (!this.authService.isLoggedIn) return;
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        this.router.navigateByUrl(redirect).then();
      },
      error: err => console.error(err)
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  setMessage(msg: string = '') {
    if (msg) {
      this.message = msg;
      return;
    }
    this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`;
  }
}
