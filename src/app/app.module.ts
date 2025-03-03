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
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuctionListComponent } from './components/auction-list/auction-list.component';
import { AuctionListItemComponent } from './components/auction-list-item/auction-list-item.component';
import {MatCardModule} from '@angular/material/card';
import { TimerComponent } from './components/timer/timer.component';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import { AuctionCreateFormComponent } from './components/auction-create-form/auction-create-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    AuctionListComponent,
    AuctionListItemComponent,
    TimerComponent,
    AuctionCreateFormComponent
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
    MatButton,
    MatCardHeader,
    MatCardActions,
    MatCardModule,
    MatTabGroup,
    MatTab,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
