"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/img/logo/logo.svg";
import smallLogo from "@/assets/img/logo/small-logo.png";
import { MdMenu, MdSearch, MdDashboard } from "react-icons/md";
import { BiUser, BiDotsVerticalRounded } from "react-icons/bi";
import { IoNotificationsSharp } from "react-icons/io5";
import { ImMenu } from "react-icons/im";
import { FaUser } from "react-icons/fa6";
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
    <div className="flex py-[7px] gap-5 items-center px-5 overflow-hidden bg-header-bg text-white">
      <div
        className={`${
          isCollapse ? "w-[32px]" : "w-[192px]"
        } flex gap-2 duration-300 overflow-hidden transition-all cursor-pointer origin-center zoom-in-0 hover:zoom-in-50`}
      >
        <Image src={logo} alt="" width={28} height={15} />
        <div
          className={`${isCollapse && "opacity-0"} duration-300 transition-all`}
        >
          <span className="md:text-[20px] text-base md:font-medium">Nifty</span>
        </div>
      </div>
      <div className="flex flex-1 justify-between duration-300 transition-all">
        <div className="md:flex hidden items-center">
          <div className="p-[10px] rounded-[15px] hover:bg-hover-bg duration-300 ease-in-out cursor-pointer mr-5">
            <ImMenu
              onClick={() => setIsCollapse(!isCollapse)}
              className="text-base"
            />
          </div>
          <div className="flex items-center relative">
            <input
              placeholder="Type for search..."
              className="bg-transparent py-1 text-leftside-menu-text-color text-base overflow-hidden focus:shadow-none shadow-none border-0 px-[15px] rounded-[12px] focus:bg-search-box-bg w-[300px] focus:w-[600px] duration-700 transition-all focus:border-none focus-visible:outline-none focus-visible:border-none"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {isFocused && (
              <div className="right-2 absolute px-1 bg-hover-bg cursor-pointer">
                <MdSearch className="text-lg text-leftsideicon-color " />
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <div className="p-[10px] hidden md:block rounded-[15px] cursor-pointer hover:bg-hover-bg duration-300 ease-in-out">
            <MdDashboard className="text-[18px]" />
          </div>
          <div className="p-2 block md:hidden rounded-xl cursor-pointer hover:bg-hover-bg duration-300 ease-in-out">
            <Sheet>
              <SheetTrigger>
                <ImMenu className="text-base" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px]">
                <LeftSidebar />
              </SheetContent>
            </Sheet>
          </div>
          <div className="p-[10px] rounded-[15px] cursor-pointer hover:bg-hover-bg duration-300 ease-in-out">
            <IoNotificationsSharp className="text-[18px]" />
          </div>
          <div className="p-[10px] rounded-[15px] cursor-pointer hover:bg-hover-bg duration-300 ease-in-out">
            <FaUser className="text-base" />
          </div>
          <div className="p-[10px] rounded-[15px] cursor-pointer hover:bg-hover-bg duration-300 ease-in-out">
            <BiDotsVerticalRounded className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
