import React, { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { MdDashboard } from "react-icons/md";
import { BsLayoutSidebar } from "react-icons/bs";
import { LiaElementor } from "react-icons/lia";
import { AiOutlineForm, AiOutlineTable } from "react-icons/ai";
import Image from "next/image";
import userImg from "@/assets/img/logo/Md_Tobibur_Rohman_80x80.jpg";
interface LeftsitebarProbs {
  isCollapse?: boolean;
}
const LeftSidebar: FC<LeftsitebarProbs> = ({ isCollapse }) => {
  return (
    <div className="mt-[10px]">
      <div
        className={`flex flex-col space-y-4 mb-5 justify-center items-center`}
      >
        <Image
          src={userImg}
          alt=""
          width={50}
          height={50}
          className="rounded-full object-cover bg-slate-500 p-[1px]"
        />
        <>
          <h2 className="text-sm">Md Tobibur Rohman</h2>
        </>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm">
              <div className="flex items-center gap-3 text-leftside-menu-text-color hover:text-black duration-700 transition-all">
                <MdDashboard className="text-lg text-leftsideicon-color" />
                <p>Dashboard</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="border-l pl-3 ml-2 border-leftside-menu-text-color border-dashed">
                <ul className="space-y-5 text-leftside-menu-text-color">
                  <li>Dashboard -1</li>
                  <li>Dashboard -1</li>
                  <li>Dashboard -1</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm">
              <div className="flex items-center gap-3 hover:text-black text-leftside-menu-text-color duration-700 transition-all">
                <BsLayoutSidebar className="text-leftsideicon-color text-lg" />
                <p>Layouts</p>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className="border-l pl-3 ml-2 border-leftside-menu-text-color border-dashed">
                <ul className="space-y-5 text-leftside-menu-text-color">
                  <li>Mini Navigation</li>
                  <li>Push Navigation</li>
                  <li>Slide Navigation</li>
                  <li>Reveal Navigation</li>
                  <li>Stuck Sidebar</li>
                  <li>Pinned Sidebar</li>
                  <li>Unite Sidebar</li>
                  <li>Sticky Header</li>
                  <li>Sticky Navigation</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-sm">
              <div className="flex items-center gap-3 hover:text-black text-leftside-menu-text-color duration-700 transition-all">
                <LiaElementor className="text-leftsideicon-color text-lg" />
                <p>UI Elements</p>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className="border-l pl-3 ml-2 border-leftside-menu-text-color border-dashed">
                <ul className="space-y-5 text-leftside-menu-text-color">
                  <li>Buttons</li>
                  <li>Cards</li>
                  <li>Dropdowns</li>
                  <li>Tabs & Accordions</li>
                  <li>Components</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-sm">
              <div className="flex items-center gap-3 hover:text-black text-leftside-menu-text-color duration-700 transition-all">
                <AiOutlineForm className="text-leftsideicon-color text-lg" />
                <p>Forms</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="border-l pl-3 ml-2 border-leftside-menu-text-color border-dashed">
                <ul className="space-y-5 text-leftside-menu-text-color">
                  <li>General</li>
                  <li>Tags</li>
                  <li>Date Time Picker</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className=" text-sm">
              <div className="flex items-center gap-3 hover:text-black text-leftside-menu-text-color duration-700 transition-all">
                <AiOutlineTable className="text-leftsideicon-color text-lg" />
                <p>Tables</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="border-l pl-3 ml-2 border-leftside-menu-text-color border-dashed">
                <ul className="space-y-5 text-leftside-menu-text-color">
                  <li>Static Tables</li>
                  <li>Gridjs</li>
                  <li>Tabulator</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default LeftSidebar;
