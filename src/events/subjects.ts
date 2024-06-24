export const Subjects = {
  TicketCreated: 'ticket:created',
  TicketUpdated: 'ticket:updated',
  OrderCreated: 'order:created',
  OrderCancelled: 'order:cancelled',
} as const;

export type Subject = (typeof Subjects)[keyof typeof Subjects];
