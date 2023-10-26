import PageHeading from "@/components/page-heading";
import { clsx as cn } from "clsx";

const transactions = [
  {
    id: "01",
    month: "Aug",
    day: "08",
    activity: "Electricity",
    description: "Credit card auto-pay will take care",
    type: "debit",
    amount: "890",
    paymentMethod: "Credit card",
  },
  {
    id: "02",
    month: "Sept",
    day: "07",
    activity: "Paycheck",
    description: "Monthly paycheck",
    type: "credit",
    amount: "1,95,230",
    paymentMethod: "Saving account",
  },
  {
    id: "03",
    month: "Oct",
    day: "21",
    activity: "Grocery",
    description: "Monthly grocery shopping at DMart",
    type: "debit",
    amount: "2,130",
    paymentMethod: "Credit card",
  },
];

export default function TransactionPage() {
  return (
    <main className="flex h-full w-full flex-col space-y-4">
      <PageHeading title={"Transactions"} />
      <div>
        {transactions.map((transaction) => {
          return (
            <div
              key={transaction.id}
              className="flex w-full items-center justify-between border-b border-separator py-6 last:border-none"
            >
              <div className="flex space-x-6">
                <div className="flex flex-col items-center">
                  <p className="text-xs font-semibold uppercase leading-6">
                    {transaction.month}
                  </p>
                  <p className="text-xs leading-normal text-secondary">
                    {transaction.day}
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{transaction.activity}</p>
                    <div
                      className={cn(
                        "relative -top-px flex items-center self-center rounded-lg border",
                        {
                          "border-blue-600 px-1.5 py-1 text-blue-500 dark:border-blue-500 dark:text-blue-500":
                            transaction.type === "debit",
                          "border-purple-600 px-1.5 py-1 text-purple-500 dark:border-purple-500 dark:text-purple-500":
                            transaction.type === "credit",
                        },
                      )}
                    >
                      <small className="text-[10px] font-black uppercase leading-3 tracking-wider transition-colors">
                        {transaction.paymentMethod}
                      </small>
                    </div>
                  </div>
                  <p className="text-xs leading-normal text-secondary">
                    {transaction.description}
                  </p>
                </div>
              </div>
              <div>
                <p
                  className={cn("font-base font-semibold", {
                    "text-green-600 dark:text-green-500":
                      transaction.type === "credit",
                  })}
                >
                  {transaction.type === "debit" ? "-" : "+"} ₹
                  {transaction.amount}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
