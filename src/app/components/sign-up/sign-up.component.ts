import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent{
  email: string = '';
  name: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private userService: UserService) {
  }
}
