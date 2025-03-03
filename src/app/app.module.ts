import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbar} from '@angular/material/toolbar';
import {MatAnchor, MatButton} from '@angular/material/button';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {MatFormField} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardContent} from '@angular/material/card';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggle,
    MatToolbar,
    MatAnchor,
    MatFormField,
    MatInputModule,
    MatIcon,
    MatCard,
    MatCardContent,
    MatButton
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
