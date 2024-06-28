export const Subjects = {
  TicketCreated: 'ticket:created',
  TicketUpdated: 'ticket:updated',
  OrderCreated: 'order:created',
  OrderCancelled: 'order:cancelled',
  ExpirationComplete: 'expiration:complete',
  PaymentCreated: 'payment:created',
} as const;

export type Subject = (typeof Subjects)[keyof typeof Subjects];
