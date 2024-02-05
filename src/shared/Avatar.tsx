import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { UserIcon } from "@heroicons/react/16/solid";

export interface AvatarProps {
  containerClassName?: string;
  sizeClass?: string;
  radius?: string;
  imgUrl?: string | StaticImageData;
  userName?: string;
  hasChecked?: boolean;
  hasCheckedClass?: string;
}

export const Avatar: FC<AvatarProps> = ({
  containerClassName = "ring-1 ring-white dark:ring-neutral-900",
  sizeClass = "h-6 w-6 text-sm",
  radius = "rounded-full",
  imgUrl,
  userName = "User",
  hasChecked,
  hasCheckedClass = "w-4 h-4 -top-0.5 -right-0.5",
}) => {
  
  return (
    <div
      className={`wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner border-none bg-gray-300 dark:bg-gray-600  ${radius} ${sizeClass} ${containerClassName}`}>
      {imgUrl ? (
        <Image
          className={`absolute inset-0 w-full h-full object-cover ${radius}`}
          src={imgUrl}
          alt={userName}
        />
      ) 
        :
          <UserIcon color="white" />
      }
      
      {hasChecked && (
        <span
          className={` bg-teal-500 rounded-full text-white text-xs flex items-center justify-center absolute  ${hasCheckedClass}`}
        >
          <i className="las la-check"></i>
        </span>
      )}
    </div>
  );
};
