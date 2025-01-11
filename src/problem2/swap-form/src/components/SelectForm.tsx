import { Dropdown, Label } from "flowbite-react";

import { options } from "@/utils/currency";
import React from "react";
import { Currency, FormType } from "@/type";
import SelectTrigger from "./SelectTrigger";
import SvgIcon from "./SvgIcon";

interface Props {
  title: string;
  token: Currency | null;
  id: FormType;
  onClick: (id: FormType, item: Currency) => void;
}

const SelectForm = ({ title, token, id, onClick }: Props) => {
  return (
    <div className="w-full flex flex-col">
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label
            htmlFor="countries"
            value={title}
            className="text-white text-2xl"
          />
        </div>
        <div className="relative z-10 overflow-visible">
          <Dropdown
            renderTrigger={() => {
              return (
                <div className="w-full">
                  <SelectTrigger token={token} />
                </div>
              );
            }}
            placement="bottom"
            className="overflow-auto"
          >
            <div className="max-h-48 overflow-y-auto">
              {options.map((item, index) => {
                return (
                  <Dropdown.Item
                    key={index}
                    onClick={() => {
                      onClick(id, item);
                    }}
                  >
                    <div className="flex gap-3">
                      <>
                        <SvgIcon name={item.currency} />
                        <span>{item.currency}</span>
                      </>
                    </div>
                  </Dropdown.Item>
                );
              })}
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SelectForm);
