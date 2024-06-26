import { Event } from './event';
import { Subjects } from './subjects';

export interface OrderCancelledEventData {
  id: string;
  version: number;
  ticket: {
    id: string;
  };
}

export interface OrderCancelledEvent extends Event {
  subject: typeof Subjects.OrderCancelled;
  data: OrderCancelledEventData;
}
