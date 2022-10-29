import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { HardNSoftSkillsComponent } from './components/hard-n-soft-skills/hard-n-soft-skills.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { FooterComponent } from './components/footer/footer.component';
import { APLogoComponent } from './components/header/ap-logo/ap-logo.component';
import { SocialComponent } from './components/header/social/social.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysSkillsComponent } from './components/hys-skills/hys-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,
    EducationComponent,
    HardNSoftSkillsComponent,
    AboutComponent,
    ProyectComponent,
    FooterComponent,
    APLogoComponent,
    SocialComponent,
    BannerComponent,
    HysSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
