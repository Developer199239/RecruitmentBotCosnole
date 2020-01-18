import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import {
  FormGroup,
  FormBuilder,
  Validators,
  EmailValidator
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { LoginModel } from "src/app/models/LoginModel";
import { LoginService } from "src/app/services/login.service";
import { SuccessModel } from "src/app/models/SuccessModel";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;
  loginModel: LoginModel;
  successModel: SuccessModel;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private loginService: LoginService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.spinner.show();
    this.userLoginForm = this.formBuilder.group({
      user_name: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.userLoginForm.controls;
  }

  onSubmit() {
    if (this.userLoginForm.invalid) {
      this.showToaster();
      return;
    }
    this.adminLogin();
  }

  adminLogin() {
    this.router.navigate(["applicant"]);
    // this.spinner.show();
    // this.loginModel = new LoginModel(
    //   this.f.user_name.value,
    //   this.f.password.value
    // );

    // this.loginService.adminLogin(this.loginModel).subscribe(
    //   response => {
    //     this.spinner.hide();
    //     this.successModel = response;
    //     if (this.successModel.success) {
    //       console.log("success");
    //     } else {
    //       console.log("failed");
    //       // this.router.navigate(["notfound"]);
    //     }
    //   },
    //   er => {
    //     this.spinner.hide();
    //     console.log("== get user order error " + er);
    //     //todo failed handle and show message
    //     // this.router.navigate(["notfound"]);
    //   }
    // );
  }

  showToaster() {
    // this.toastr.success("Hello, I'm the toastr message.");
    this.toastr.error("UserName or Password can't be emtpy!", "Error", {
      timeOut: 3000
    });
  }
}
