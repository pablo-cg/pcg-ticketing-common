import { type Event } from './event';
import { Subjects } from './subjects';

export interface TicketUpdatedEvent extends Event {
  subject: typeof Subjects.TicketUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
