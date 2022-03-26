import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from 'src/app/interfaces/job.interface';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  apiData: Observable<Jobs> = this.jobsService.getAllJobs();
  searchStr: string = '';
  headerTitle: string = 'LOT Polish Airlines - Job Offers';

  constructor(private jobsService: JobsService) {}

  reloadPage() {
    location.reload();
  }
}
