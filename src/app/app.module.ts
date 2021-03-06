import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

import { ResumeService } from './app-services/resume.service';
import { ContactService } from './app-services/contact.service';
import { HomeService } from './app-services/home.service';
import { ProjectService } from './app-services/project.service';





@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PortfolioComponent,
    HomeComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [ResumeService, ContactService, HomeService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
