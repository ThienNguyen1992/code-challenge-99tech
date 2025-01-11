import { Currency } from "@/type";
import React from "react";
import SvgIcon from "./SvgIcon";
interface Props {
  token: Currency;
}
const SelectedToken = ({ token }: Props) => {
  return (
    <div className="flex gap-3">
      <SvgIcon name={token.currency} />
    </div>
  );
};

export default React.memo(SelectedToken);
