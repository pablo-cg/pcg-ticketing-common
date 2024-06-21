export const OrderStatus = {
  CREATED: 'created', // order has been created but ticket has not been reserved
  CANCELLED: 'cancelled', // order has been cancelled, ticket has already been reserved or the order expired
  AWAITING_PAYMENT: 'awaiting:payment', // order has been created and ticket has been reserved
  COMPLETE: 'complete', // order has been paid and ticket has been reserved
} as const;

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
