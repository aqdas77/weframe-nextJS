import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuActivitySquare } from "react-icons/lu";
import { FaUserPlus } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import Link from "next/Link";

const Tasks = () => {
  return (
    <>
      <div
        className="flex  my-5 mx-5 p-5"
        style={{ backgroundColor: "rgba(27, 19, 42, 1)" }}
      >
        <div class="flex-none " style={{ color: "rgba(165,165,163,255)" }}>
          <BsFillArrowLeftCircleFill size={30} />
        </div>
        <div class="grow mx-5 ">
          <div className="flex flex-col ">
            <div className="flex flex-row justify-between">
              <div>
                <div className="text-xl text-gray-100">
                  School November Tasks
                </div>
                <div className="text-xs text-gray-500">
                  Created By Instructor Day on November 31,2022
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col text-right px-3 ">
                  <div className="text-gray-100">Centered Martial Art</div>
                  <div className="text-gray-500">Sunnyvale,CA</div>
                </div>

                <div className="flex items-center justify-center">
                  <LuActivitySquare size={40} style={{ color: "white" }} />
                </div>

                <div className="flex items-center justify-center">
                  <Link href="./">
                    <BsThreeDotsVertical size={20} style={{ color: "white" }} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-row my-2  ">
              <div className="flex flex row">
                <div class="flex flex-row items-center justify-between">
                  <div class="relative  mr-20">
                    <div class="w-6 h-6 bg-gray-400 rounded-full border-2 "></div>
                    <div class="w-6 h-6 bg-gray-400 rounded-full border-2 absolute top-0 left-4"></div>
                    <div class="w-6 h-6 bg-gray-400 rounded-full border-2 absolute top-0 left-8"></div>
                    <div class="w-6 h-6 bg-gray-400 rounded-full border-2 absolute top-0 left-12"></div>
                    <div class="w-6 h-6  bg-pink-500 rounded-full border-2  absolute top-0 left-16 flex items-center justify-center">
                      <div
                        class="text-xs font-semibold "
                        style={{ color: "white" }}
                      >
                        5+
                      </div>
                    </div>
                  </div>

                  <div className="mx-1">
                    <button className="px-2 pb-1 h-6 bg-pink-500 text-white text-sm rounded-lg flex items-center">
                      <FaUserPlus className="text-white mr-2" />
                      Invite People
                    </button>
                  </div>
                  <div className="mx-1">
                    <button className="px-2 pb-1 h-6 border border-gray-500 text-gray-100 text-sm rounded-lg flex items-center">
                      Private
                    </button>
                  </div>
                  <div className="mx-1">
                    <button className="px-2 pb-1 h-6 bg-purple-700 text-white text-sm rounded-lg flex items-center">
                      Edit
                    </button>
                  </div>
                  <div className="mx-1">
                    <button className="px-1 pb-1 h-6 border border-gray-500 text-gray-100 text-sm rounded-lg flex items-center">
                      <BiMessageSquareDetail size={16} className="mx-1" />
                      45 Comments
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-auto flex-row justify-end text-gray-100">
                <div>Total progress 60%</div>
                <div className="flex items-center mx-3">
                  <div className="w-32 bg-gray-200 rounded-full  h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-pink-600 h-2.5 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
