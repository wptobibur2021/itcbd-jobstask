"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/img/logo/logo.svg";
import smallLogo from "@/assets/img/logo/small-logo.png";
import {
  MdOutlineDashboard,
  MdNotificationsNone,
  MdMenu,
  MdSearch,
} from "react-icons/md";
import { BiUser, BiDotsVerticalRounded } from "react-icons/bi";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import LeftSidebar from "../leftSidebar/LeftSidebar";
const Header = ({
  setIsCollapse,
  isCollapse,
}: {
  setIsCollapse: (setIsCollapse: boolean) => void;
  isCollapse: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Event handler for input focus
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Event handler for input blur (focus lost)
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div>
      <div className="py-2 flex items-center px-5 h-14 overflow-hidden bg-header-bg text-white">
        <div
          className={`${
            isCollapse ? "w-[5rem]" : "w-52"
          } flex gap-2 duration-300 overflow-hidden transition-all cursor-pointer origin-center zoom-in-0 hover:zoom-in-50`}
        >
          <Image
            src={logo}
            alt=""
            className="object-cover duration-700 transition-all"
            width={30}
            height={30}
          />
          <div
            className={`${
              isCollapse && "opacity-0"
            } duration-300 transition-all`}
          >
            <span className="text-xl font-bold">Nifty</span>
          </div>
        </div>
        <div className="flex flex-1 justify-between duration-300 transition-all">
          <div className="md:flex hidden items-center">
            <div className="cursor-pointer mr-5">
              <MdMenu
                onClick={() => setIsCollapse(!isCollapse)}
                className="text-xl"
              />
            </div>
            <div className="flex items-center relative">
              <input
                placeholder="Type for search..."
                className="bg-transparent py-1 focus:shadow-none shadow-none border-0 px-3 rounded-[12px] focus:bg-search-box-bg focus:w-[600px] duration-500 ease-in-out focus:border-none focus-visible:outline-none focus-visible:border-none"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              {isFocused && (
                <MdSearch className="right-5 absolute cursor-pointer" />
              )}
            </div>
          </div>
          <div className="flex">
            <div className="p-2 hidden md:block rounded-2xl cursor-pointer hover:bg-hover-bg duration-300 ease-in-out">
              <MdOutlineDashboard className="text-xl" />
            </div>
            <div className="p-2 block md:hidden rounded-2xl cursor-pointer hover:bg-hover-bg duration-300 ease-in-out">
              <Sheet>
                <SheetTrigger>
                  <MdMenu className="text-xl" />
                </SheetTrigger>
                <SheetContent side="left" className="w-[200px] sm:w-[200px]">
                  <LeftSidebar />
                </SheetContent>
              </Sheet>
            </div>
            <div className="p-2 rounded-2xl cursor-pointer hover:bg-hover-bg duration-300 ease-in-out">
              <MdNotificationsNone className="text-xl" />
            </div>
            <div className="p-2 rounded-2xl cursor-pointer hover:bg-hover-bg duration-300 ease-in-out">
              <BiUser className="text-xl" />
            </div>
            <div className="p-2 rounded-2xl cursor-pointer hover:bg-hover-bg duration-300 ease-in-out">
              <BiDotsVerticalRounded className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
