"use client"
import Link from "next/link"
import LogoSvg from "./LogoSvg"

export const Logo = () => {
  return (
    <Link className="flex items-end ttnc-logo text-current inline-block focus:outline-none focus:ring-0" href="/">
      <LogoSvg />
      <span className="ml-2 text-xl">StayInn</span> 
    </Link>
  )
}
