import React from "react";
import { IoNotificationsSharp } from "react-icons/io5";
import { PiMonitorPlayFill } from "react-icons/pi";
import { MdTask } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import Link from "next/Link";

const Header = () => {
  return (
    <>
      <nav
        class="flex flex-wrap items-center justify-between bg-teal-500 py-2 px-2 "
        style={{ backgroundColor: "rgba(27, 19, 42, 1)" }}
      >
        <div class=" relative text-gray-600">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            name="search"
            placeholder="Search here..."
            class="bg-white h-10 pl-10 pr-5 rounded-full text-sm focus:outline-none focus:ring focus:border-blue-300 border-gray-300"
            style={{ backgroundColor: "rgba(54,26,114,255)" }}
          />
        </div>
        <div
          className="text-sm font-bold "
          style={{ color: "rgba(113,22,128,255)", textDecoration: "underline" }}
        >
          <Link href={"./"}>OTHER MENUS</Link>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <div class="p-5">
              <strong class="relative inline-flex items-center text-xs font-medium">
                <span class="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-blue-500 flex justify-center items-center">
                  <span class="text-white">6</span>
                </span>
                <IoNotificationsSharp
                  className="h-8 w-8 text-black-500"
                  style={{ color: "rgba(138,121,235,255)" }}
                />
              </strong>
            </div>
          </div>

          <div>
            <div class="p-5">
              <strong class="relative inline-flex items-center text-xs font-medium">
                <span class="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-blue-600 flex justify-center items-center">
                  <span class="text-white">10</span>
                </span>
                <PiMonitorPlayFill
                  className="h-8 w-8 text-black-500"
                  style={{ color: "rgba(138,121,235,255)" }}
                />
              </strong>
            </div>
          </div>

          <div>
            <div class="p-5">
              <strong class="relative inline-flex items-center text-xs font-medium">
                <span class="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-blue-600 flex justify-center items-center">
                  <span class="text-white">5</span>
                </span>
                <MdTask
                  className="h-8 w-8 text-black-500"
                  style={{ color: "rgba(138,121,235,255)" }}
                />
              </strong>
            </div>
          </div>

          <div>
            <div class="p-5">
              <strong class="relative inline-flex items-center text-xs font-medium">
                <span class="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-600 flex justify-center items-center">
                  <span class="text-white">
                    <RiErrorWarningFill style={{ backgroundColor: "red" }} />
                  </span>
                </span>
                <AiFillCalendar
                  className="h-8 w-8 text-black-500"
                  style={{ color: "rgba(138,121,235,255)" }}
                />
              </strong>
            </div>
          </div>
        </div>
        <div className="relative">
          <select
            id="language"
            name="language"
            className="appearance-none border rounded-full pl-4 pr-10 py-2  focus:outline-none "
            style={{
              backgroundColor: "rgba(54,26,114,255)",
              color: "white",
              outline: "none",
            }}
          >
            <option
              value="en"
              style={{
                background: `url('/en.png') no-repeat 4px center`,
                color: "white",
              }}
            >
              English
            </option>
            <option
              value="es"
              style={{
                background: `url('path-to-flags/es-flag.png') no-repeat 4px center`,
                color: "white",
              }}
            >
              Español
            </option>
            <option
              value="fr"
              style={{
                background: `url('path-to-flags/fr-flag.png') no-repeat 4px center`,
                color: "white",
              }}
            >
              Français
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.293 5.293a1 1 0 011.414 0L12 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <div class="relative">
            <div class="w-8 h-8 rounded-full bg-gray-300"></div>
            <span class="absolute bottom-0 right-0 bg-green-400 w-2 h-2 rounded-full"></span>
          </div>
          <div class="text-sm">
            <div
              class="text-gray-700 font-semibold"
              style={{ color: " rgba(187,187,185,255)" }}
            >
              Instructor Day
            </div>
            <div class="text-gray-500">Super Admin</div>
          </div>
          <div class="relative group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-500 cursor-pointer group-hover:text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>

            <div class="absolute  right-0 hidden mt-2 space-y-2 w-48 py-2 bg-white border border-gray-200 rounded shadow-lg group-hover:block">
              <a
                href="./"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="./"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="./"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
