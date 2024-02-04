"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Languages, setLanguage } from "@/redux/slices/languageSlice";

interface IHeaderLanguage {
  id: Languages,
  name: Languages,
  description: string,
  href: string,
  active?: boolean,
}

export const LanguageOptions = (close: () => void) => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(state => state.language);

  const headerLanguages: IHeaderLanguage[] = [
    {
      id: "Armenian",
      name: "Armenian",
      description: "Armenia",
      href: "/",
      active: currentLanguage === "Armenian",
    },
    {
      id: "English",
      name: "English",
      description: "United State",
      href: "/", 
      active: currentLanguage === "English",
    },
    {
      id: "Russian",
      name: "Russian",
      description: "Russia",
      href: "/",
      active: currentLanguage === "Russian",
    },
  ];

  function changeLanguage(name: Languages, close: () => void) { 
    if(name !== currentLanguage) {
      dispatch(setLanguage(name)); 
    }
    close();
  }
  
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {headerLanguages.map(item => (
        <div
          key={item.id}
          onClick={() => changeLanguage(item.name, close)}
          className={`flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 cursor-pointer ${
            item.active ? "bg-gray-100 dark:bg-gray-700" : "opacity-80"
          }`}
        >
          <div className="">
            <p className="text-sm font-medium ">{item.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
