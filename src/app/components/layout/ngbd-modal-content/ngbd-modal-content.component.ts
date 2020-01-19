import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-ngbd-modal-content",
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Applicant profile</h4>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <span>Name: {{ name }}<br /></span>
      <span>Email: {{ email }}<br /></span>
      <span>Phone: {{ phone }}<br /></span>
      <span>Job Position: {{ job_position }}<br /></span>
      <span>Job Location: {{ job_location }}<br /></span>
      <span>Country: {{ country }}<br /></span>
      <span>Experience: {{ experience }}<br /></span>
      <span>Travel Percentage: {{ travel_percentage }}<br /></span>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-dark"
        (click)="activeModal.close('Close click')"
      >
        Close
      </button>
    </div>
  `,
  styleUrls: ["./ngbd-modal-content.component.css"]
})
export class NgbdModalContentComponent {
  // constructor() { }

  // ngOnInit() {
  // }


  @Input() name;
  @Input() email;
  @Input() job_position;
  @Input() phone;
  @Input() job_location;
  @Input() country;
  @Input() experience;
  @Input() travel_percentage;

  constructor(public activeModal: NgbActiveModal) {}
}
