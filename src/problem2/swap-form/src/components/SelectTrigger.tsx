import { Currency } from "@/type";
import SvgIcon from "./SvgIcon";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import React from "react";

interface Props {
  token: Currency | null;
}

// text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
const SelectTrigger = ({ token }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <button
      className="flex justify-between items-center w-full bg-white min-h-[42px] text-black font-bold px-4 py-2 rounded-md"
      type="button"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="flex gap-3">
        {token && Object.keys(token).length > 0 && (
          <>
            <SvgIcon name={token.currency} />
            <span>{token.currency}</span>
          </>
        )}
      </div>
      {isOpen ? <FaChevronDown /> : <FaChevronUp />}
    </button>
  );
};

export default SelectTrigger;
