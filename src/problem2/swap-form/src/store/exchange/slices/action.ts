import { Currency } from "@/type";
import { StateCreator } from "zustand";
import { ExchangeStore } from "../store";

export interface ExchangeAction {
  setToken: (token: Currency | null) => void;
  setExchangeToken: (exchangeToken: Currency | null) => void;
  setResult: (result: number) => void;
  setIsLoading: (isLoading: boolean) => void;
}
export const createExchangeSlice: StateCreator<
  ExchangeStore,
  [],
  [],
  ExchangeAction
> = (set) => ({
  setToken: (token: Currency | null) => {
    set({ token });
  },
  setExchangeToken: (exchangeToken: Currency | null) => {
    set({ exchangeToken });
  },
  setResult: (result: number) => {
    set({ result });
  },
  setIsLoading: (isLoading: boolean) => {
    set({ isLoading });
  },
});
