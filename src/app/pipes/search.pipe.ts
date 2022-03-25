import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'searchJobs',
})
export class SearchPipe implements PipeTransform {
  transform(jobs: any[], search = ''): any[] {
    if (!search.trim()){
      return jobs;
    }

    return jobs.filter(job => {
      return job.title.toLowerCase().includes(search.toLowerCase());
    })
  }
}
