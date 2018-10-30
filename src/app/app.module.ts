import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HttpService } from './httpservice.service';
import { ParentComponentComponent } from './parent-child/parent-component/parent-component.component';
import { ChildComponentComponent } from './parent-child/parent-component/child-component/child-component.component';
import { SiblingComponentComponent } from './parent-child/sibling-component/sibling-component.component';
import { AuthGuard } from './auth.guard';
import { LoggedInUsersGuardGuard } from './logged-in-users-guard.guard';
import { SigninComponent } from './pages/signin/signin.component';
import { InterceptService } from './intercept.service';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'employees',
    component: AboutComponent,
  },
  { 
    path: "employee/:id", 
    component: BlogComponent,
    canActivate: [LoggedInUsersGuardGuard, AuthGuard ],
  },
  // {
  //   path: 'blog',
  //   component: BlogComponent,
  // },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'express',
    component: ParentComponentComponent
  },
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenubarComponent,
    HomepageComponent,
    AboutComponent,
    BlogComponent,
    PortfolioComponent,
    ContactComponent,
    SignupComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    SiblingComponentComponent,
    SigninComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService, AuthGuard, LoggedInUsersGuardGuard, { provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
