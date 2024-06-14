import { type Subject } from './subjects';

export interface Event {
  subject: Subject;
  data: any;
}
