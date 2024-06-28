import { Event } from './event';
import { Subjects } from './subjects';

export interface PaymentCreatedEventData {
  id: string;
  orderId: string;
  stripeId: string;
}

export interface PaymentCreatedEvent extends Event {
  subject: typeof Subjects.PaymentCreated;
  data: PaymentCreatedEventData;
}
