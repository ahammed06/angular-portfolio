import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { EducationComponent } from './sections/about/education/education.component';
import { SkillComponent } from './sections/about/skill/skill.component';
import { ExperienceComponent } from './sections/about/experience/experience.component';
import { ServiceComponent } from './sections/service/service.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { ContactComponent } from './sections/contact/contact.component';
import { HeaderComponent } from './parts/header/header.component';
import { SidebarComponent } from './parts/sidebar/sidebar.component';
import { LoaderComponent } from './parts/loader/loader.component';
import { ThemeComponent } from './parts/theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    SkillComponent,
    ExperienceComponent,
    ServiceComponent,
    PortfolioComponent,
    ContactComponent,
    HeaderComponent,
    SidebarComponent,
    LoaderComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
