import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData:FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl('')
  })
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    this.authService.registerUser(this.registerUserData.value).subscribe(data => {
      console.log(data);
    });

    this.registerUserData.reset();
  }

}
