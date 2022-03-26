import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Jobs } from "../interfaces/job.interface";

const headers = new HttpHeaders({
  'x-api-key': `${environment.xApiKey}`
});

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<Jobs> {
    return this.http.get<Jobs>(`${environment.jobsUrl}`, {headers});
  }
}
