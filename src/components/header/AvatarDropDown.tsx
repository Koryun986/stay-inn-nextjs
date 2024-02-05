"use client"
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Avatar } from "@/shared/Avatar";
import { ThemeSwitcher } from "@/shared/ThemeSwithcher";
import Link from "next/link";
import { AccountSVG } from "@/svg/AccountSVG";
import { CheckListSVG } from "@/svg/CheckListSVG";
import { HeartSVG } from "@/svg/HeartSVG";
import { LampSVG } from "@/svg/LampSVG";
import { LifebuoySVG } from "@/svg/LifebuoySVG";
import { LogoutSVG } from "@/svg/LogoutSVG";
import { useAppSelector } from "@/redux/hooks";
import { IUser } from "@/redux/slices/userSlice";

interface Props {
  className?: string;
}

export default function AvatarDropdown({ className = "" }: Props) {
  const user: IUser = useAppSelector(state => state.user)
  
  return (
    <>
      <Popover className={`AvatarDropdown relative flex ${className}`}>
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`self-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none flex items-center justify-center`}
            >
              <Avatar sizeClass="w-8 h-8 sm:w-9 sm:h-9" imgUrl={user.avatar_url}/>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-[260px] px-4 top-full -right-10 sm:right-0 sm:px-0">
                <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid grid-cols-1 gap-6 bg-white dark:bg-neutral-800 py-7 px-6">
                    <div className="flex items-center space-x-3">
                      <Avatar sizeClass="w-12 h-12" />

                      <div className="flex-grow">
                        <h4 className="font-semibold">{user.name}</h4>
                        <p className="text-xs mt-0.5">{user.email}</p>
                      </div>
                    </div>

                    <div className="w-full border-b border-neutral-200 dark:border-neutral-700" />

                    <Link
                      href={"/account"}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      onClick={() => close()}
                    >
                      <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                        <AccountSVG /> 
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium ">{"My Account"}</p>
                      </div>
                    </Link>

                    <Link
                      href={"/author"}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      onClick={() => close()}
                    >
                      <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                        <CheckListSVG />  
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium ">{"My bookings"}</p>
                      </div>
                    </Link>

                    <Link
                      href={"/account-savelists"}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      onClick={() => close()}
                    >
                      <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                        <HeartSVG /> 
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium ">{"Wishlist"}</p>
                      </div>
                    </Link>

                    <div className="w-full border-b border-neutral-200 dark:border-neutral-700" />

                    <div className="flex items-center justify-between p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                          <LampSVG /> 
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium ">{"Dark theme"}</p>
                        </div>
                      </div>
                      <ThemeSwitcher />
                    </div>

                    <Link
                      href={"/#"}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      onClick={() => close()}
                    >
                      <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                        <LifebuoySVG /> 
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium ">{"Help"}</p>
                      </div>
                    </Link>

                    {
                      user.email !== "user@anonymous.com"
                      &&
                    <Link
                      href={"/#"}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      onClick={() => close()}
                    >
                      <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                        <LogoutSVG />  
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium ">{"Log out"}</p>
                      </div>
                    </Link>
                    }
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}
