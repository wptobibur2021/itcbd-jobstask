import Image from "next/image";
import React from "react";
import logo from "@/assets/img/logo/nifty.png";
import {
  MdOutlineDashboard,
  MdNotificationsNone,
  MdMenu,
} from "react-icons/md";
import { BiUser, BiDotsVerticalRounded } from "react-icons/bi";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import LeftSidebar from "../leftSidebar/LeftSidebar";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-2 px-5 bg-header-bg text-white">
        <div>
          <Image src={logo} alt="" width={80} height={40} />
        </div>
        <div className="flex gap-3">
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
  );
};

export default Header;
