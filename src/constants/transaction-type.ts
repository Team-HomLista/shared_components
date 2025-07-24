import { TransactionType } from "@/types/enums/transaction-type";
import { TransactionTypeGroup } from "@/types/enums/transaction-type-group";

export const TRANSACTION_TYPE_ES = {
  [TransactionType.RENT]: "Renta",
  [TransactionType.BUY]: "Venta",
  [TransactionType.DEVELOPMENT]: "Desarrollo",
  [TransactionType.AUCTION]: "Remate",
} as const satisfies Record<TransactionType, string>;

export const TRANSACTION_TYPE_GROUP_ES = {
  [TransactionTypeGroup.RENT]: "Renta",
  [TransactionTypeGroup.BUY]: "Venta",
} as const satisfies Record<TransactionTypeGroup, string>;

export const TRANSACTION_TYPE_GROUP = {
  [TransactionType.RENT]: [TransactionType.RENT],
  [TransactionType.BUY]: [
    TransactionType.BUY,
    TransactionType.DEVELOPMENT,
    TransactionType.AUCTION,
  ],
} as const satisfies Record<TransactionTypeGroup, TransactionType[]>;
