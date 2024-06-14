export const Subjects = {
  TicketCreated: 'ticket:created',
  TicketUpdated: 'ticket:updated',
} as const;

export type Subject = (typeof Subjects)[keyof typeof Subjects];
