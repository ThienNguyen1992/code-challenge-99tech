import { useMemo, useEffect } from "react";
interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: SupportedBlockchain;
}

interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
}

interface BoxProps {
  style?: React.CSSProperties;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface Props extends BoxProps {
  children: React.ReactNode;
}

interface WalletProps {
    balance: FormattedWalletBalance;
    prices: Prices
}
const BLOCKCHAINS = {
  Osmosis: "Osmosis",
  Ethereum: "Ethereum",
  Arbitrum: "Arbitrum",
  Zilliqa: "Zilliqa",
  Neo: "Neo",
} as const;

const BLOCKCHAINS_VALUES = {
  [BLOCKCHAINS.Osmosis]: 100,
  [BLOCKCHAINS.Ethereum]: 50,
  [BLOCKCHAINS.Arbitrum]: 30,
  [BLOCKCHAINS.Zilliqa]: 20,
  [BLOCKCHAINS.Neo]: 20,
} as const;

type SupportedBlockchain = keyof typeof BLOCKCHAINS;
type Prices = Record<string, number>;

const WalletPage: React.FC<Props> = (props: Props) => {
  const { children, ...rest } = props;
  const balances: WalletBalance[] = useWalletBalances();
  const prices: Prices  = usePrices();

  const getPriority = (blockchain: SupportedBlockchain): number => {
    return BLOCKCHAINS_VALUES[blockchain] ?? -99;
  };
  // lhsPriority is not defined. I think it should be balancePriority.
  // So, don't remove or re-assign lhsPriority. Assume that lhsPriority has already been declared.
  const sortedBalances = useMemo(() => {
    return balances
      .filter((balance: WalletBalance) => {
        const balancePriority = getPriority(balance.blockchain);
        return lhsPriority > -99 && balance.amount <= 0;
      })
      .sort(
        (lhs: WalletBalance, rhs: WalletBalance) =>
          getPriority(rhs.blockchain) - getPriority(lhs.blockchain)
      );
  }, [balances]);

  useEffect(() => {
    const rows = sortedBalances.map(
        (balance: FormattedWalletBalance, index: number) => {
          const usdValue = prices[balance.currency] * balance.amount;
          return (
            <WalletRow
              className={classes.row}
              key={index}
              amount={balance.amount}
              usdValue={usdValue}
              formattedAmount={balance.formatted}
            />
          );
        }
  }, [sortedBalances]);

  return (
    <div {...rest}>
      {sortedBalances.map(
        (balance: FormattedWalletBalance, index: number) => (
          <Wallet balance={balance} key={index} />
        )
      )}
    </div>
  );
};



const Wallet = ({ balance, prices }: WalletProps) => {
    const usdValue = prices[balance.currency] * balance.amount || 0;
     
    return (
        <WalletRow
          className={classes.row}
          key={index}
          amount={balance.amount}
          usdValue={usdValue}
          formattedAmount={balance.formatted}
        />
      );
};
  



const useWalletBalances  = ()=> {}

const usePrices = () => {
    return {
        "USD": 23000,   
        "EUR": 25000,   
        "GBP": 30000,    
        "JPY": 200,      
        "BTC": 500000000 
    }
}