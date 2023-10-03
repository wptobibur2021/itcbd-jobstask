"use client";
import Header from "@/components/header/Header";
import LeftSidebar from "@/components/leftSidebar/LeftSidebar";
import RightSidebar from "@/components/rightsidebar/RightSidebar";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { useState } from "react";
import userImg from "@/assets/img/logo/Md_Tobibur_Rohman_80x80.jpg";
import { MdDashboard } from "react-icons/md";
import { BsLayoutSidebar } from "react-icons/bs";
import { LiaElementor } from "react-icons/lia";
import { AiOutlineForm, AiOutlineTable } from "react-icons/ai";
export default function Home() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <div>
        <Header setIsCollapse={setIsCollapse} isCollapse={isCollapse} />
      </div>
      <div className="flex relative justify-between duration-700 transition-all">
        {isCollapse ? (
          <div className="bg-white md:block hidden min-h-screen rounded-tr-2xl p-5 shadow-md relative">
            <div className="flex flex-col space-y-1 mb-5">
              <Image
                src={userImg}
                alt=""
                width={30}
                height={30}
                className="rounded-full object-cover bg-slate-500 p-[2px]"
              />
            </div>
            <div className="space-y-5 relative">
              <MdDashboard
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="text-lg cursor-pointer hover:text-black text-leftside-menu-text-color duration-700 transition-all"
              />
              <BsLayoutSidebar
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="text-lg cursor-pointer hover:text-black text-leftside-menu-text-color duration-700 transition-all"
              />
              <LiaElementor
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="text-lg cursor-pointer hover:text-black text-leftside-menu-text-color duration-700 transition-all"
              />
              <AiOutlineForm
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="text-lg cursor-pointer hover:text-black text-leftside-menu-text-color duration-700 transition-all"
              />
              <AiOutlineTable
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="text-lg cursor-pointer hover:text-black text-leftside-menu-text-color duration-700 transition-all"
              />
            </div>
          </div>
        ) : (
          <div
            className={`bg-white md:block hidden w-52 min-h-screen rounded-tr-2xl p-5 shadow-md overflow-hidden relative`}
          >
            <div>
              <LeftSidebar isCollapse={isCollapse} />
            </div>
          </div>
        )}
        <div className="flex-1 px-5">
          <RightSidebar />
        </div>
        <div className="bg-header-bg h-96 w-full absolute -z-10 rounded-br-[100px] md:rounded-br-[100px] md:rounded-bl-[100px]"></div>
      </div>
    </div>
  );
}
