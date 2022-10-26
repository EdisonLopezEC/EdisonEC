import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgParticlesModule } from "ng-particles";
import { PrimengModule } from './primeng/primeng.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './admin/pages/projects/projects.component';
import { LoginComponent } from './auth/pages/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SkillsComponent,
    ProjectsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    SharedModule,
    BrowserAnimationsModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
