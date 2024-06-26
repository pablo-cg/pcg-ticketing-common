import { type Event } from './event';
import { Subjects } from './subjects';

export interface TicketUpdatedEventData {
  id: string;
  title: string;
  price: number;
  userId: string;
  version: number;
  orderId?: string;
}

export interface TicketUpdatedEvent extends Event {
  subject: typeof Subjects.TicketUpdated;
  data: TicketUpdatedEventData;
}
