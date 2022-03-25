import { Component } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  apiData: any = [];
  searchStr: string = '';
  viewJobs: boolean = false;
  headerTitle: string = 'LOT Job Offers';

  constructor(private jobsService: JobsService) {
  }

  getJobOffers() {
    this.jobsService.getAllJobs().subscribe(res => {
      this.apiData = res;
      this.viewJobs = true;
    }, () => this.viewJobs = false);
  }
}
