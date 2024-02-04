"use client"
import { CurrencyDollarIcon, CurrencyEuroIcon, CurrencyYenIcon } from "@heroicons/react/24/outline";

type Currency = "AMD" | "USD" | "RUB";

interface IHeaderCurrency {
  id: Currency;
  name: Currency;
  href: string;
  icon: any;
  active?: boolean;
}

const headerCurrencies: IHeaderCurrency[] = [
  {
    id: "AMD",
    name: "AMD",
    href: "##",
    icon: CurrencyEuroIcon,
    active: true,
  },
  {
    id: "USD",
    name: "USD",
    href: "##",
    icon: CurrencyDollarIcon,
  },
  {
    id: "RUB",
    name: "RUB",
    href: "##",
    icon: CurrencyYenIcon,
  }, 
];


export const CurrencyOptions = (close: () => void) => {
  return (
    <div className="grid gap-7 lg:grid-cols-2">
      {headerCurrencies.map((item, index) => (
        <a
          key={index}
          href={item.href}
          onClick={() => close()}
          className={`flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${
            item.active ? "bg-gray-100 dark:bg-gray-700" : "opacity-80"
          }`}
        >
          <item.icon className="w-[18px] h-[18px] " />
          <p className="ml-2 text-sm font-medium ">{item.name}</p>
        </a>
      ))}
    </div>
  );
};
