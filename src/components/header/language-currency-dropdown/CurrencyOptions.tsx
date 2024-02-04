"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Currency, setCurrency } from "@/redux/slices/currencySlice";
import { CurrencyDollarIcon, CurrencyEuroIcon, CurrencyYenIcon } from "@heroicons/react/24/outline";

interface IHeaderCurrency {
  id: Currency;
  name: Currency;
  href: string;
  icon: any;
  active?: boolean;
}

export const CurrencyOptions = (close: () => void) => {
  const dispatch = useAppDispatch();
  const currentCurrency = useAppSelector(state => state.currency)

  const headerCurrencies: IHeaderCurrency[] = [
    {
      id: "AMD",
      name: "AMD",
      href: "/",
      icon: CurrencyEuroIcon,
      active: currentCurrency === "AMD",
    },
    {
      id: "USD",
      name: "USD",
      href: "/",
      icon: CurrencyDollarIcon,
      active: currentCurrency === "USD",
    },
    {
      id: "RUB",
      name: "RUB",
      href: "/",
      icon: CurrencyYenIcon,
      active: currentCurrency === "RUB",
    }, 
  ];
  
  function changeCurrency(name: Currency, close: () => void) { 
    if(name !== currentCurrency) {
      dispatch(setCurrency(name)); 
    }
    close();
  }

  return (
    <div className="grid gap-7 lg:grid-cols-2">
      {headerCurrencies.map((item, index) => (
        <div
          key={index}
          onClick={() => changeCurrency(item.name, close)}
          className={`flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 cursor-pointer ${
            item.active ? "bg-gray-100 dark:bg-gray-700" : "opacity-80"
          }`}
        >
          <item.icon className="w-[18px] h-[18px] " />
          <p className="ml-2 text-sm font-medium ">{item.name}</p>
        </div>
      ))}
    </div>
  );
};
