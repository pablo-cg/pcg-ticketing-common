import { Event } from './event';
import { Subjects } from './subjects';
import { OrderStatus } from './types';

export interface OrderCreatedEventData {
  id: string;
  status: OrderStatus;
  userId: string;
  expiresAt: string;
  version: number;
  ticket: {
    id: string;
    price: number;
  };
}

export interface OrderCreatedEvent extends Event {
  subject: typeof Subjects.OrderCreated;
  data: OrderCreatedEventData;
}
