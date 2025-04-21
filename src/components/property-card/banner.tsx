import { FC } from "react";
import { Text } from "../ui/text";

export enum TransactionTypeEnum {
  ForSale = "ForSale",
  Rent = "Rent",
}
export interface BannerPropertyProps {
  transaction: keyof typeof TransactionTypeEnum;
}

export const BannerProperty: FC<BannerPropertyProps> = ({ transaction }) => {
  const transactionType = () => {
    switch (transaction) {
      case TransactionTypeEnum.ForSale:
        return "VENTA";
      case TransactionTypeEnum.Rent:
        return "RENTA";
      default:
        return undefined;
    }
  };
  return (
    <div className="relative bg-primary w-full flex flex-col items-center justify-end rounded-b-2xl font-bold">
      <Text variant={"label"} className="text-white text-xs p-1">
        {transactionType()}
      </Text>
    </div>
  );
};
