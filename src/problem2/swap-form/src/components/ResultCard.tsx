import { useExchangeStore } from "@/store/exchange";
import SvgIcon from "./SvgIcon";
import { Alert, Spinner } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

const ResultCard = () => {
  const { token, exchangeToken, result, isLoading } = useExchangeStore(
    (state) => state
  );

  const calculateExchangeRate = () => {
    if (token && exchangeToken) {
      return (token.price / exchangeToken.price).toFixed(4); //
    }
    return "-";
  };

  const LoadingSpinner = () => (
    <div className="flex flex-wrap items-center gap-2">
      <Spinner aria-label="Loading spinner" size="xl" color="purple" />
    </div>
  );

  const TokenDisplay = () => (
    <>
      {token && exchangeToken ? (
        <>
          <div className="flex items-center gap-3 text-xl">
            <SvgIcon name={exchangeToken.currency} />
            <span>
              {exchangeToken.currency}: {result}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xl">
            <span>
              1 {token.currency} = {calculateExchangeRate()}{" "}
              {exchangeToken.currency}
            </span>
          </div>
        </>
      ) : (
        <div className="text-white-500 mt-4 text-lg">
          <Alert
            color="failure"
            icon={HiInformationCircle}
            className="mb-2 w-full p-2"
          >
            <span className="font-medium">
              Please ensure both tokens are selected for the conversion.
            </span>
          </Alert>
        </div>
      )}
    </>
  );
  return (
    <div className="w-full max-w-xl result-card flex flex-col rounded-3xl text-white shadow items-center p-2">
      <p className="uppercase font-bold text-2xl">Amount to receive</p>
      <hr className="border-t-4 border-white w-3/4 mx-auto my-6" />
      {isLoading ? <LoadingSpinner /> : <TokenDisplay />}
    </div>
  );
};

export default ResultCard;
