import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { LoginComponent } from "./components/layout/login/login.component";
import { HomeComponent } from "./components/layout/home/home.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ApplicantComponent } from "./components/layout/applicant/applicant.component";
import { NgbdModalContentComponent } from "./components/layout/ngbd-modal-content/ngbd-modal-content.component";
import { AboutUsComponent } from './components/layout/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ApplicantComponent,
    NgbdModalContentComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalContentComponent]
})
export class AppModule {}
