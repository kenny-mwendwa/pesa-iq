import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IoHomeOutline } from "react-icons/io5";
import {
  BsCircleFill,
  BsCurrencyDollar,
  BsFillCalendarEventFill,
  BsThreeDots,
} from "react-icons/bs";
import { BiDollarCircle, BiSolidComment } from "react-icons/bi";
import { LuTrash } from "react-icons/lu";
import { FiArrowUpRight, FiEdit } from "react-icons/fi";
import { FaCommentAlt } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { format } from "date-fns";

type ExpenseTypes = {
  id: string;
  name: string;
  amount: string;
  date: number;
  category: string;
  frequency: string;
  transaction_type: string;
  description: string;
};

type Props = {
  expense: ExpenseTypes;
};

export default function ExpenseCard({ expense }: Props) {
  const rawDate = expense.date;
  const date = new Date(rawDate);
  const formattedDate = format(date, "dd/MM/yyyy");
  return (
    <>
      <div className="h-24 border border-gray-200 shadow rounded-2xl flex">
        <div className="flex items-center space-x-5">
          <div className="ml-5 rounded-full bg-red-100 w-12 h-12 flex justify-center items-center">
            <FiArrowUpRight className="w-8 h-8 text-red-600" />
          </div>
          <div className="py-1 space-y-4">
            <div className="items-center flex">
              <div className="items-center flex space-x-3">
                <BsCircleFill className="text-red-600 w-5 h-5" />
                <div>{expense.name}</div>
              </div>
            </div>
            <div className="items-center flex space-x-5">
              <div className="flex items-center space-x-1">
                <BiDollarCircle className="w-5 h-5" />
                <div>{expense.amount}</div>
              </div>
              <div className="flex items-center space-x-2">
                <BsFillCalendarEventFill className="w-5 h-5" />
                <div>{formattedDate}</div>
              </div>
              <div className="flex items-center space-x-2">
                <FaCommentAlt className="w-5 h-5" />
                <div>{expense.description}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-auto p-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
                <BsThreeDots className="w-5 h-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
              <DropdownMenuItem className="cursor-pointer">
                <FaArrowUpRightFromSquare className="mr-1 w-4 h-4" />
                View
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <FiEdit className="mr-1 w-4 h-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <LuTrash className="text-red-500 mr-1 w-4 h-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
