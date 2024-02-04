import { ApartmentOptionsDropDown } from "./ApartmentOptionsDropDown"
import { ListNewPreopertyButton } from "./ListNewPropertyButton"
import { LanguageCurrencyDropDown } from "./language-currency-dropdown/LanguageCurrencyDropDown"

export const HeaderNav = () => {
  return (
    <div className="flex justify-end text-opacity-80 space-x-6">
      <ApartmentOptionsDropDown /> 
      <LanguageCurrencyDropDown />
      <ListNewPreopertyButton />
    </div>
  )
}
