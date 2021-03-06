export interface Job {
  title: string;
  data: Date;
  category: string[];
  country: string;
  location: string;
  region: string;
  reference: string;
  url: string;
}

export interface Jobs {
  jobs: Job[];
}
