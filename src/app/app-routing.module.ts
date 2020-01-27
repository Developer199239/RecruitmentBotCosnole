import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/layout/login/login.component";
import { ApplicantComponent } from "./components/layout/applicant/applicant.component";
import { AboutUsComponent } from "./components/layout/about-us/about-us.component";

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "applicant", component: ApplicantComponent, pathMatch: "full" },
  { path: "aboutUs", component: AboutUsComponent, pathMatch: "full" },
  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
