import { FC } from "react";

import { Text } from "@/components/ui/text";
import { TransactionType } from "@/types/enums/transaction-type";

export interface PropertyCardBannerProps {
  transaction: keyof typeof TransactionType;
}

export const PropertyCardBanner: FC<PropertyCardBannerProps> = ({ transaction }) => {
  const transactionType = () => {
    switch (transaction) {
      case TransactionType.BUY:
        return "VENTA";
      case TransactionType.RENT:
        return "RENTA";
      default:
        return undefined;
    }
  };
  return (
    <div className="bg-primary relative flex w-full flex-col items-center justify-end rounded-b-2xl font-bold">
      <Text variant={"label"} className="p-2 text-sm text-white">
        {transactionType()}
      </Text>
    </div>
  );
};
