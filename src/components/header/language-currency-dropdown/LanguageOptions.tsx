"use client"
type Languages = "Armenian" | "English" | "Russian";

interface IHeaderLanguage {
  id: Languages,
  name: Languages,
  description: string,
  href: string,
  active?: boolean,
}

const headerLanguages: IHeaderLanguage[] = [
  {
    id: "Armenian",
    name: "Armenian",
    description: "Armenia",
    href: "##",
  },
  {
    id: "English",
    name: "English",
    description: "United State",
    href: "##",
    active: true,
  },
  {
    id: "Russian",
    name: "Russian",
    description: "Russia",
    href: "##",
  },
];

export const LanguageOptions = (close: () => void) => {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {headerLanguages.map(item => (
        <a
          key={item.id}
          href={item.href}
          onClick={() => close()}
          className={`flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${
            item.active ? "bg-gray-100 dark:bg-gray-700" : "opacity-80"
          }`}
        >
          <div className="">
            <p className="text-sm font-medium ">{item.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};
