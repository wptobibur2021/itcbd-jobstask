"use client";
import Header from "@/components/header/Header";
import LeftSidebar from "@/components/leftSidebar/LeftSidebar";
import RightSidebar from "@/components/rightsidebar/RightSidebar";
import Image from "next/image";
import { useState } from "react";
import userImg from "@/assets/img/logo/Md_Tobibur_Rohman_80x80.jpg";
import { MdDashboard } from "react-icons/md";
import { BsLayoutSidebar } from "react-icons/bs";
import { LiaElementor } from "react-icons/lia";
import { AiOutlineForm, AiOutlineTable } from "react-icons/ai";
export default function Home() {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <div>
      <div>
        <Header setIsCollapse={setIsCollapse} isCollapse={isCollapse} />
      </div>
      <div className="flex relative justify-between">
        <div
          className={`bg-white md:block duration-700 transition-all hidden ${
            isCollapse ? "w-16" : "w-52"
          } min-h-screen rounded-tr-2xl p-5 shadow-md overflow-hidden relative`}
        >
          {isCollapse ? (
            <div className="duration-700 transition-all">
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
                <MdDashboard className="text-lg cursor-pointer hover:text-black text-leftside-menu-text-color duration-700 transition-all" />
                <BsLayoutSidebar className="text-lg cursor-pointer hover:text-black text-leftside-menu-text-color duration-700 transition-all" />
                <LiaElementor className="text-lg cursor-pointer hover:text-black text-leftside-menu-text-color duration-700 transition-all" />
                <AiOutlineForm className="text-lg cursor-pointer hover:text-black text-leftside-menu-text-color duration-700 transition-all" />
                <AiOutlineTable className="text-lg cursor-pointer hover:text-black text-leftside-menu-text-color duration-700 transition-all" />
              </div>
            </div>
          ) : (
            <div>
              <LeftSidebar />
            </div>
          )}
        </div>
        <div className="flex-1 px-5 duration-700 transition-all">
          <RightSidebar />
        </div>
        <div className="bg-header-bg h-96 w-full absolute -z-10 rounded-br-[100px] md:rounded-br-[100px] md:rounded-bl-[100px]"></div>
      </div>
    </div>
  );
}
