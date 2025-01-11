import { Currency } from "@/type";
import SvgIcon from "./SvgIcon";

interface Props {
  item: Currency;
}
const SelectItem = ({ item }: Props) => {
  return (
    <div className="flex items-center space-x-2 w-full">
      <SvgIcon name={item.currency} />
      <span className="text-gray-800 font-medium">{item.currency}</span>
    </div>
  );
};

export default SelectItem;
