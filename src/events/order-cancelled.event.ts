import { Event } from './event';
import { Subjects } from './subjects';

export interface OrderCancelledEvent extends Event {
  subject: typeof Subjects.OrderCancelled;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
}
