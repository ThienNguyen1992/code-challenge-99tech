export type Currency = {
  currency: string;
  date: string;
  price: number;
};

export type FormType = "exchangeToken" | "token";

export type FormSubmit = {
  amount: number;
};
