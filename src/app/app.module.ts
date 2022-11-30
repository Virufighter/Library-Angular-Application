import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { BookentryComponent } from './bookentry/bookentry.component';
import { BookviewComponent } from './bookview/bookview.component';
import { BookserachComponent } from './bookserach/bookserach.component';
import { BookdeleteComponent } from './bookdelete/bookdelete.component';
import { BookeditComponent } from './bookedit/bookedit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const myrout:Routes=[
  {
    path:"",
    component:AdminComponent
    
  },
  {
    path:"ulogin",
    component:UserloginComponent
    
  },
  {
    path:"ureg",
    component:UserregistrationComponent
  },
  {
    path:"entry",
    component:BookentryComponent

  },
  {
    path:"view",
    component:BookviewComponent

  },
  {
    path:"search",
    component:BookserachComponent

  },
  {
    path:"delete",
    component:BookdeleteComponent

  },
  {
    path:"edit",
    component:BookeditComponent

  }

]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserloginComponent,
    UserregistrationComponent,
    BookentryComponent,
    BookviewComponent,
    BookserachComponent,
    BookdeleteComponent,
    BookeditComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myrout),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
