import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

const headers = new HttpHeaders({
  'x-api-key': `${environment.xApiKey}`
});

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  getAllJobs() {
    return this.http.get(`${environment.jobsUrl}`, {headers});
  }
}
