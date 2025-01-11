import { Currency } from "@/type";

export interface ExchangeSliceState {
  token: Currency | null;
  exchangeToken: Currency | null;
  amountToSend: number;
  amounToReceive: number;
  result: number;
  isLoading: boolean;
}

export const initialExchangeState: ExchangeSliceState = {
  token: null,
  exchangeToken: null,
  amountToSend: 0,
  amounToReceive: 0,
  result: 0,
  isLoading: false,
};
