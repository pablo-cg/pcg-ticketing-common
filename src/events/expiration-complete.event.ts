import { Subjects } from './subjects';

export interface ExpirationCompleteEventData {
  orderId: string;
}

export interface ExpirationCompleteEvent extends Event {
  subject: typeof Subjects.ExpirationComplete;
  data: ExpirationCompleteEventData;
}
