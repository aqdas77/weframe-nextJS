import React from "react";
import Link from "next/Link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMail } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import { IoIosChatbubbles } from "react-icons/io";
import { RiApps2Fill } from "react-icons/ri";
import { RiContactsBook2Fill } from "react-icons/ri";
import { AiFillCalendar } from "react-icons/ai";
import { PiMonitorPlayFill } from "react-icons/pi";
import { FaBagShopping } from "react-icons/fa6";
import { FaFileInvoice } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-60 h-screen p-4 bg-blue-800 border-r-[1px] flex flex-col">
        <div className="flex items-center justify-between my-2">
          <Link href="/">
            <div className=" text-white  rounded-lg ml-9">weframetech</div>
          </Link>
          <Link href="/">
            <GiHamburgerMenu size={25} className="text-white" />
          </Link>
        </div>
        <div className="flex items-center justify-between mt-8 mb-2 mx-4 text-white text-base">
          MAIN MENU
        </div>

        <div className="flex items-center  my-2 mx-4">
          <div class="flex-none ">
            <AiFillDashboard size={20} />
          </div>

          <div class="flex-auto ml-3  ">
            <Link href="/">
              <div className=" text-white  rounded-lg text-sm  ">Dashboard</div>
            </Link>
          </div>
        </div>

        <div className="flex items-center my-2 mx-4">
          <div className="flex-none">
            <HiMail size={20} />
          </div>
          <div className="flex-auto ml-3">
            <Link href="/">
              <div className="text-white rounded-lg text-sm">Email</div>
            </Link>
          </div>
          <div className="flex-none ml-auto">
            <div className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
              3
            </div>
          </div>
          <div className="flex-none ml-2">
            <MdKeyboardArrowDown size={20} />
          </div>
        </div>
        <div className="flex items-center  my-2 mx-4">
          <div class="flex-none ">
            <IoIosChatbubbles size={20} />
          </div>

          <div class="flex-auto ml-3  ">
            <Link href="/">
              <div className=" text-white  rounded-lg text-sm ">Chat</div>
            </Link>
          </div>
        </div>

        <div className="flex items-center  my-2 mx-4">
          <div class="flex-none ">
            <RiApps2Fill size={20} />
          </div>

          <div class="flex-auto ml-3  ">
            <Link href="/">
              <div className=" text-white  rounded-lg text-sm ">Kanban</div>
            </Link>
          </div>
          <div className="flex-end ">
            <MdKeyboardArrowDown size={20} />
          </div>
        </div>

        <div className="flex items-center my-2 mx-4">
          <div className="flex-none">
            <RiContactsBook2Fill size={20} />
          </div>
          <div className="flex-auto ml-3">
            <Link href="/">
              <div className="text-white rounded-lg text-sm">Contact</div>
            </Link>
          </div>
          <div className="flex-none">
            <div className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
              New
            </div>
          </div>
        </div>

        <div className="flex items-center  my-2 mx-4">
          <div class="flex-none ">
            <AiFillCalendar size={20} />
          </div>

          <div class="flex-auto ml-3  ">
            <Link href="/">
              <div className=" text-white  rounded-lg text-sm ">Calender</div>
            </Link>
          </div>
        </div>

        <div className="flex items-center  my-2 mx-4">
          <div class="flex-none ">
            <PiMonitorPlayFill size={20} />
          </div>

          <div class="flex-auto ml-3  ">
            <Link href="/">
              <div className=" text-white  rounded-lg text-sm ">Courses</div>
            </Link>
          </div>
          <div className="flex-end ">
            <MdKeyboardArrowDown size={20} />
          </div>
        </div>

        <div className="flex items-center  my-2 mx-4">
          <div class="flex-none ">
            <FaBagShopping size={20} />
          </div>

          <div class="flex-auto ml-3  ">
            <Link href="/">
              <div className=" text-white  rounded-lg text-sm ">Shop</div>
            </Link>
          </div>
        </div>

        <div className="flex items-center  my-2 mx-4">
          <div class="flex-none ">
            <FaFileInvoice size={20} />
          </div>

          <div class="flex-auto ml-3  ">
            <Link href="/">
              <div className=" text-white  rounded-lg text-sm ">Invoices</div>
            </Link>
          </div>
          <div className="flex-end ">
            <MdKeyboardArrowDown size={20} />
          </div>
        </div>

        <div className="flex items-center  my-2 mx-4">
          <div class="flex-none ">
            <AiFillSetting size={20} />
          </div>

          <div class="flex-auto ml-3  ">
            <Link href="/">
              <div className=" text-white  rounded-lg text-sm ">Setting</div>
            </Link>
          </div>
        </div>
      </div>
      <main className="ml-60 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
