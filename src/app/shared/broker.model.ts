export interface Broker {
  id: number;
  email: string;
  job_title: string;
  first_name: string;
  last_name: string;
  city: string;
  state: string;
  zip: string;
  biography?: string;
  profile_photo_url?: string;
}

