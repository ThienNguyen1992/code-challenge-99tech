import { initialState, StoreState } from "./initialState";
import { StateCreator } from "zustand/vanilla";
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import { createExchangeSlice, ExchangeAction } from "./slices/action";

export type ExchangeStore = StoreState & ExchangeAction;

const createStore: StateCreator<ExchangeStore> = (...parameters) => ({
  ...initialState,
  ...createExchangeSlice(...parameters),
});

export const useExchangeStore = createWithEqualityFn<ExchangeStore>()(
  createStore,
  shallow
);
