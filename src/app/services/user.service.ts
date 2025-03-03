import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface SignInModel{
  email: string;
  password: string;
}

export interface SignUpModel{
  email: string;
  name: string;
  password: string;
}

export interface UserModel{
  id: string;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: UserModel | null = null;

  constructor(private http: HttpClient) { }

  signIn(model: SignInModel){
    return this.http.post<UserModel>('https://localhost:7042/api/v1/user/signin', model)
      .subscribe(user => this.user = user);
  }

  signUp(model: SignUpModel){
    return this.http.post('https://localhost:7042/api/v1/user/signup', model);
  }

  logout(){
    this.user = null;
  }

  isAuthenticated(){
    return this.user !== null;
  }
}
