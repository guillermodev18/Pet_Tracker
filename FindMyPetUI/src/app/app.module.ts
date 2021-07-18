import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Globals } from './globals';
import { LoginFormComponent } from './login-form/login-form.component';
import { GenderComponent } from './gender/gender.component';
import { CategoryComponent } from './category/category.component';
import { AggressionComponent } from './aggression/aggression.component';
import { PetRegistrationComponent } from './pet-registration/pet-registration.component';
import { ForumHeaderComponent } from './forum-header/forum-header.component';
import { ForumComponent } from './forum/forum.component';
import { ForumListComponent } from './forum-list/forum-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CustomerComponent,
    SignUpComponent,
    LoginFormComponent,
    GenderComponent,
    CategoryComponent,
    AggressionComponent,
    PetRegistrationComponent,
    ForumHeaderComponent,
    ForumComponent,
    ForumListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),
    HttpClientModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent, Globals]
})
export class AppModule { }
