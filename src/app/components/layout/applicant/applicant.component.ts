import { Component, OnInit, Input } from "@angular/core";
import { from } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ApplicantModel } from "src/app/models/ApplicantModel";
import { ThrowStmt } from "@angular/compiler";
import { ToastrService } from "ngx-toastr";
import { ConfrimReqModel } from "src/app/models/ConfrimReqModel";
import { SuccessModel } from "src/app/models/SuccessModel";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbdModalContentComponent } from "../ngbd-modal-content/ngbd-modal-content.component";

@Component({
  selector: "app-applicant",
  templateUrl: "./applicant.component.html",
  styleUrls: ["./applicant.component.css"]
})
export class ApplicantComponent implements OnInit {
  allApplicants: ApplicantModel[];
  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getAllApplicant();
  }

  open(applicantInfo) {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
    modalRef.componentInstance.name = applicantInfo.name;
    modalRef.componentInstance.email = applicantInfo.email;
    modalRef.componentInstance.phone = applicantInfo.phone;
    modalRef.componentInstance.job_position = applicantInfo.job_position;
    modalRef.componentInstance.job_location = applicantInfo.job_location;
    modalRef.componentInstance.country = applicantInfo.country;
    modalRef.componentInstance.experience = applicantInfo.experience;
    modalRef.componentInstance.travel_percentage =
      applicantInfo.travel_percentage;
  }

  viewProfile(applicantInfo) {
    // const modalRef = this.modalService.open(NgbdModalContent);
    this.open(applicantInfo);
  }

  confirm(applicantInfo) {
    this.spinner.show();
    let reqModel = new ConfrimReqModel(applicantInfo.sender_id);
    this.loginService.confirm(reqModel).subscribe(
      response => {
        this.spinner.hide();
        let successModel: SuccessModel = response;
        if (successModel.success) {
          this.showSuccessToaster("Sent confirmation success");
          this.getAllApplicant();
        } else {
          console.log("failed");
          this.showErrorToaster("Sent confirmation failed");
        }
      },
      er => {
        this.spinner.hide();
        console.log("== sent confirmation error " + er);
        this.showErrorToaster("Sent confirmation error: " + er);
      }
    );
  }

  decline(applicantInfo) {
    this.spinner.show();
    let reqModel = new ConfrimReqModel(applicantInfo.sender_id);
    this.loginService.decline(reqModel).subscribe(
      response => {
        this.spinner.hide();
        let successModel: SuccessModel = response;
        if (successModel.success) {
          this.showSuccessToaster("Sent rejection success");
          this.getAllApplicant();
        } else {
          console.log("failed");
          this.showErrorToaster("Sent rejection failed");
        }
      },
      er => {
        this.spinner.hide();
        console.log("== Sent rejection error " + er);
        this.showErrorToaster("Sent rejection error: " + er);
      }
    );
  }

  getAllApplicant() {
    this.spinner.show();
    this.loginService.getAllApplicant().subscribe(
      applicants => {
        this.spinner.hide();
        console.log(applicants);
        this.allApplicants = applicants;
      },
      er => {
        console.log("== get user order error " + er);
        this.spinner.hide();
      }
    );
  }

  showErrorToaster(msg: string) {
    this.toastr.error(msg, "Error", {
      timeOut: 3000
    });
  }

  showSuccessToaster(msg: string) {
    this.toastr.success(msg, "Success", {
      timeOut: 3000
    });
  }
}
