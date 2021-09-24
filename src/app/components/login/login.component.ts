import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.authService.loginUser(this.loginData.value).subscribe(data => {
      localStorage.setItem('token', data.access_token);
    })
  }

}
