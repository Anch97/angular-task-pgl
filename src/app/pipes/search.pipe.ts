import { Pipe, PipeTransform } from "@angular/core";
import { Job } from "../interfaces/job.interface";

@Pipe({
  name: 'searchJobs',
})
export class SearchPipe implements PipeTransform {
  transform(jobs?: Job[], search = ''): Job[] | undefined {
    if (!search.trim()){
      return jobs;
    }

    return jobs?.filter(job => {
      return job.title.toLowerCase().includes(search.toLowerCase());
    })
  }
}
