import {Injectable} from '@angular/core';

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
export class AuthService {
  public user: UserModel | null = {
    id: 'qwerty',
    name: 'john',
    email: 'model.email'
  };

  constructor() { }

  signIn(model: SignInModel){
    this.user = {
      id: 'qwerty',
      name: 'john',
      email: model.email
    };
  }

  signUp(){

  }

  isAuthenticated() : boolean{
    return this.user !== null;
  }
}
