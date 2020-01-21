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
  submitted = false;
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
    this.submitted = true;
    if (this.userLoginForm.invalid) {
      this.showToaster("UserName or Password can't be emtpy!");
      return;
    }
    this.spinner.show();
    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.adminLogin();
    // }, 3000);

    this.adminLogin();
  }

  adminLogin() {
    // this.spinner.show();
    this.loginModel = new LoginModel(
      this.f.user_name.value,
      this.f.password.value
    );

    this.loginService.adminLogin(this.loginModel).subscribe(
      response => {
        this.spinner.hide();
        this.successModel = response;
        if (this.successModel.success) {
          console.log("success");
          this.router.navigate(["applicant"]);
        } else {
          console.log("failed");
          this.showToaster("Invalid userName or password!");
        }
      },
      er => {
        this.spinner.hide();
        console.log("== Login failed " + er);
        this.showToaster("Login faield " + er);
      }
    );
  }

  showToaster(msg: string) {
    // this.toastr.success("Hello, I'm the toastr message.");
    this.toastr.error(msg, "Error", {
      timeOut: 3000
    });
  }
}
