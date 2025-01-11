import { Toast } from "flowbite-react";
import { HiExclamation, HiCheck } from "react-icons/hi";

interface Props {
  isSuccess: boolean;
}
const Notify = ({ isSuccess }: Props) => {
  const renderNotificationContent = () => {
    return isSuccess
      ? {
          icon: <HiCheck className="h-5 w-5" />,
          message: "Swap successful",
          iconClass:
            "bg-green-100 text-green-500 dark:bg-green-700 dark:text-green-200",
        }
      : {
          icon: <HiExclamation className="h-5 w-5" />,
          message: "Please select currency",
          iconClass:
            "bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200",
        };
  };
  const { icon, message, iconClass } = renderNotificationContent();

  return (
    <div className="fixed top-4 right-4">
      <Toast>
        <div
          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
        >
          {icon}
        </div>
        <div className="ml-3 text-md font-bold">{message}</div>
      </Toast>
    </div>
  );
};

export default Notify;
