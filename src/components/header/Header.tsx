import { Logo } from "../logo/Logo";
import { HeaderNav } from "./HeaderNav";

export const Header = () => {
  return (
    <div className="flex items-center justify-between h-20">
      <Logo /> 
      <div className="w-[50%]">
        <HeaderNav />
      </div>
    </div>
  ) 
}
