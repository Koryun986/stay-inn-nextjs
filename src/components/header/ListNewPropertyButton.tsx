"use client"
import { Route } from "next"
import Link from "next/link"

export const ListNewPreopertyButton = () => {
  return (
  <Link href={"/add-listing" as Route<string>} className="self-center text-opacity-90 group px-4 py-2 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 rounded-full inline-flex items-center text-sm text-gray-700 dark:text-neutral-300 font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
    List your property
  </Link>
  )
}
