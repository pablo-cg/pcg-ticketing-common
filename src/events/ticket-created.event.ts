import { type Event } from './event';
import { Subjects } from './subjects';

export interface TicketCreatedEvent extends Event {
  subject: typeof Subjects.TicketCreated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
