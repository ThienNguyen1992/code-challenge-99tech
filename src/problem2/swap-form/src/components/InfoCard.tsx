import { useExchangeStore } from "@/store/exchange";
import SelectForm from "./SelectForm";
import { FaExchangeAlt } from "react-icons/fa";
import { Currency, FormSubmit, FormType } from "@/type";
import SwapForm from "./SwapForm";
import Notify from "./Notify";
import { useState } from "react";
const InfoCard = () => {
  const [showToast, setShowToast] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    token,
    exchangeToken,
    setToken,
    setExchangeToken,
    setResult,
    setIsLoading,
  } = useExchangeStore((state) => state);
  const handleSelect = (id: FormType, item: Currency) => {
    if (id == "token") {
      setToken(item);
    } else {
      setExchangeToken(item);
    }
  };
  const handleShowToast = (
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    isSuccess = true,
    duration = 1500
  ) => {
    setIsSuccess(isSuccess);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, duration);
  };

  const handleSwap = ({ amount }: FormSubmit) => {
    try {
      setIsLoading(true);
      if (!token || !exchangeToken) {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        handleShowToast(setShowToast, false);
        return;
      }

      const result = amount * (token.price / exchangeToken.price);
      setResult(result);
      handleShowToast(setShowToast, true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } catch (err) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };
  return (
    <div className="w-full max-w-xl info-card flex flex-col rounded-3xl text-white shadow items-center p-2">
      <div className="w-full p-4 flex gap-8 item-ce">
        <SelectForm
          title="From"
          token={token}
          id="token"
          onClick={handleSelect}
        />
        <div className="flex flex-col justify-end h-full ">
          <FaExchangeAlt size={30} />
        </div>
        <SelectForm
          title="To"
          token={exchangeToken}
          id="exchangeToken"
          onClick={handleSelect}
        />
      </div>

      <SwapForm handleSwap={handleSwap} />
      {showToast && <Notify isSuccess={isSuccess} />}
    </div>
  );
};

export default InfoCard;
