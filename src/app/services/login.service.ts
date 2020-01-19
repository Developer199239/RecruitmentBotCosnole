import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpHeaderResponse
} from "@angular/common/http";
import { from, Observable } from "rxjs";
import { SuccessModel } from "../models/SuccessModel";
import { ApplicantModel } from "../models/ApplicantModel";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  baseUrl = "https://recruitment-bot-api.herokuapp.com/";
  constructor(private http: HttpClient) {}

  public adminLogin(obj): Observable<SuccessModel> {
    return this.http.post<SuccessModel>(`${this.baseUrl}adminLogin`, obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  public confirm(obj): Observable<SuccessModel> {
    return this.http.post<SuccessModel>(`${this.baseUrl}confirm`, obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  public decline(obj): Observable<SuccessModel> {
    return this.http.post<SuccessModel>(`${this.baseUrl}decline`, obj, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  getAllApplicant(): Observable<ApplicantModel[]> {
    return this.http.get<ApplicantModel[]>(`${this.baseUrl}getAllApplicant`);
  }
}
