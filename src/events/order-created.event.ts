import { Event } from './event';
import { Subjects } from './subjects';
import { OrderStatus } from './types';

export interface OrderCreatedEvent extends Event {
  subject: typeof Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
