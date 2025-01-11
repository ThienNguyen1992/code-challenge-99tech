import { Alert, TextInput } from "flowbite-react";
import { GiClick } from "react-icons/gi";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { HiInformationCircle } from "react-icons/hi";
import { FormSubmit } from "@/type";

type Inputs = {
  amount: number;
};

interface Props {
  handleSwap: ({ amount }: FormSubmit) => void;
}
const schema = z.object({
  amount: z
    .string()
    .nonempty("Amount is required")
    .refine(
      (val) => {
        const number = Number(val);
        return !isNaN(number) && Number.isInteger(number) && number > 0;
      },
      {
        message: "Amount must be a positive integer",
      }
    ),
});

const SwapForm = ({ handleSwap }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { amount: 0 },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => handleSwap(data);

  return (
    <div className="flex items-center w-[50%]">
      <form
        className="flex flex-col items-start w-full justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          id="amount"
          {...register("amount")}
          type="text"
          placeholder="Enter amount to swap"
          required
          color="info"
          className="w-full font-bold text-6xl text-black mb-2 mt-4"
        />
        {errors?.amount && (
          <Alert
            color="failure"
            icon={HiInformationCircle}
            className="mb-2 w-full p-2"
          >
            <span className="font-medium">{errors.amount.message}</span>
          </Alert>
        )}
        <div className="flex w-full justify-center mt-2 mb-4">
          <button
            type="submit"
            className="font-bold uppercase border rounded-full shadow-md  px-6 py-2 text-2xl  bg-gradient-to-tr hover:from-[#D3FC7A] hover:to-[#0ED2F7] from-pink-500 to-orange-500"
          >
            <div className="flex items-center gap-2 ">
              <span className="font-bold text-white">Swap</span>
              <GiClick />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SwapForm;
