import {
  ExchangeSliceState,
  initialExchangeState,
} from "./slices/initialState";

export type StoreState = ExchangeSliceState;

export const initialState: StoreState = {
  ...initialExchangeState,
};
