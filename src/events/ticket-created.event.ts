import { type Event } from './event';
import { Subjects } from './subjects';

export interface TicketCreatedEventData {
  id: string;
  title: string;
  price: number;
  userId: string;
  version: number;
}

export interface TicketCreatedEvent extends Event {
  subject: typeof Subjects.TicketCreated;
  data: TicketCreatedEventData;
}
