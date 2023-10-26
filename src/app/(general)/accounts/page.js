import PageHeading from "@/components/page-heading";
import TextField from "@/components/ui/text-field";
import Button from "@/components/ui/button";
import BadgeIcon from "@/components/icons/badge";
import { clsx as cn } from "clsx";
import OutgoingIcon from "@/components/icons/outgoing";

const methods = [
  {
    id: "01",
    name: "Visa Debit Card",
    description: "HDFC daily use account",
    balance: "2,435",
    type: "saving",
    isPrimary: true,
  },
  {
    id: "02",
    name: "Visa Debit Card",
    description: "SBI personal saving account",
    balance: "12,435",
    type: "saving",
    isPrimary: false,
  },
  {
    id: "02",
    name: "Visa Credit Card",
    description: "HDFC credit account",
    type: "credit",
    balance: "9,388",
    isPrimary: false,
  },
  {
    id: "03",
    name: "Mastercard Debit card",
    description: "ICICI salary account",
    balance: "3,23,176",
    type: "salary",
    isPrimary: false,
  },
];

export default function AccountsPage() {
  return (
    <main className="flex h-full w-full flex-col space-y-4">
      <PageHeading
        title={"Accounts"}
        subtitle={"Manage account access and permissions"}
        classNames={"mb-6"}
      />

      <div className="flex flex-col gap-3">
        {methods.map((method) => {
          return <Account key={method.id} {...method} />;
        })}
      </div>
    </main>
  );
}

function Account({ name, description, balance, type, isPrimary }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-850">
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <p className="font-semibold">{name}</p>
            {isPrimary && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-500 dark:text-blue-300">
                <BadgeIcon />
                <span>Primary</span>
              </span>
            )}
          </div>
          <p className="text-xs text-secondary">{description}</p>
        </div>
      </div>
      <div className="ml-auto">
        <p
          className={cn("inline-flex items-center gap-1 font-semibold", {
            "text-red-600 dark:text-red-500": type === "credit",
            "text-green-600 dark:text-green-500": ["saving", "salary"].includes(
              type,
            ),
          })}
        >
          {type === "credit" && <OutgoingIcon />}
          <span>₹{balance}</span>
        </p>
        {/*<Button size="small">Remove</Button>*/}
      </div>
    </div>
  );
}
