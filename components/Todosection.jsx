import React from "react";
import { GoDotFill } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";

const Todosection = () => {
  return (
    <>
      <div className="flex flex-row flex-end mx-5">
        <div className="w-1/4 mr-2">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <div className="font-bold ml-3 text-white">Todo List(24)</div>
              <div flex justify-center>
                <button class="flex items-center justify-center px-3 py-1 mx-1 my-1 bg-pink-500 text-white rounded-lg hover:bg-pink-600 text-2xl">
                  +
                </button>
              </div>
            </div>
            <div>
              <div
                class="max-w-md my-2 bg-white border border-black rounded-lg overflow-hidden"
                style={{ backgroundColor: "rgba(54,26,115,255)" }}
              >
                <div className="flex flex-row justify-between mx-2 px-2 pt-2">
                  <div className="flex flex-row items-center  ">
                    <GoDotFill className="text-yellow-500" />
                    <div className="size-xs text-yellow-500">Bug Fixing</div>
                  </div>
                  <div className="flex items-center">
                    <button>
                      <HiOutlineDotsHorizontal
                        className="text-white"
                        size={20}
                      />
                    </button>
                  </div>
                </div>

                <div class="flex flex-col p-4  ">
                  <div class="flex items-center text-sm mb-1 text-white">
                    Create signup sheet for holiday student/parent conferences.
                  </div>

                  <div class="flex items-center  mb-2">
                    <div className="flex flex-auto flex-row justify-end ">
                      <div className="flex items-center my-2 ml-auto">
                        <div className="w-72 bg-gray-200 rounded-full  h-2.5 dark:bg-gray-700 ">
                          <div
                            className="bg-yellow-500 h-2.5 rounded-full"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center mb-2">
                    <div>
                      <div class="relative  mr-20">
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-4"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-8"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-12"></div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <AiOutlineClockCircle className="text-gray-500 mx-1" />
                      <div className="text-gray-500 text-sm">Due in 4 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                class="max-w-md my-2 bg-white border border-black rounded-lg overflow-hidden"
                style={{ backgroundColor: "rgba(54,26,115,255)" }}
              >
                <div className="flex flex-row justify-between mx-2 px-2 pt-2">
                  <div className="flex flex-row items-center  ">
                    <GoDotFill
                      className="text-yellow-500"
                      style={{ color: "rgba(214,34,129,255)" }}
                    />
                    <div
                      className="size-xs "
                      style={{ color: "rgba(214,34,129,255)" }}
                    >
                      Important
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button>
                      <HiOutlineDotsHorizontal
                        className="text-white"
                        size={20}
                      />
                    </button>
                  </div>
                </div>

                <div class="flex flex-col p-4  ">
                  <div class="flex items-center text-sm mb-1 text-white">
                    Create signup sheet for holiday student/parent conferences.
                  </div>

                  <div class="flex items-center  mb-2">
                    <div className="flex flex-auto flex-row justify-end ">
                      <div className="flex items-center my-2 ml-auto">
                        <div className="w-72 bg-gray-200 rounded-full  h-2.5 dark:bg-gray-700 ">
                          <div
                            className="bg-pink-500 h-2.5 rounded-full"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center mb-2">
                    <div>
                      <div class="relative  mr-20">
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-4"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-8"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-12"></div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <AiOutlineClockCircle className="text-gray-500 mx-1" />
                      <div className="text-gray-500 text-sm">Due in 4 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                class="max-w-md my-2 bg-white border border-black rounded-lg overflow-hidden"
                style={{ backgroundColor: "rgba(54,26,115,255)" }}
              >
                <div className="flex flex-row justify-between mx-2 px-2 pt-2">
                  <div className="flex flex-row items-center  ">
                    <GoDotFill className="text-blue-500" />
                    <div className="size-xs text-blue-500">Database</div>
                  </div>
                  <div className="flex items-center">
                    <button>
                      <HiOutlineDotsHorizontal
                        className="text-white"
                        size={20}
                      />
                    </button>
                  </div>
                </div>

                <div class="flex flex-col p-4  ">
                  <div class="flex items-center text-sm mb-1 text-white">
                    Create signup sheet for holiday student/parent conferences.
                  </div>

                  <div class="flex items-center  mb-2">
                    <div className="flex flex-auto flex-row justify-end ">
                      <div className="flex items-center my-2 ml-auto">
                        <div className="w-72 bg-gray-200 rounded-full  h-2.5 dark:bg-gray-700 ">
                          <div
                            className="bg-blue-500 h-2.5 rounded-full"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center mb-2">
                    <div>
                      <div class="relative  mr-20">
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-4"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-8"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-12"></div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <AiOutlineClockCircle className="text-gray-500 mx-1" />
                      <div className="text-gray-500 text-sm">Due in 4 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 mr-2">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <div className="font-bold ml-3 text-white">InProgress(2)</div>
              <div flex justify-center>
                <button
                  class="flex items-center justify-center px-3 py-1 mx-1 my-1 bg-pink-500  rounded-lg  text-2xl"
                  style={{
                    color: "rgba(166,24,180,255)",
                    backgroundColor: "rgba(54,26,115,255)",
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <div
                class="max-w-md my-2 bg-white border border-black rounded-lg overflow-hidden"
                style={{ backgroundColor: "rgba(54,26,115,255)" }}
              >
                <div className="flex flex-row justify-between mx-2 px-2 pt-2">
                  <div className="flex flex-row items-center  ">
                    <GoDotFill className="text-blue-500" />
                    <div className="size-xs text-blue-500">Bug Fixing</div>
                  </div>
                  <div className="flex items-center">
                    <button>
                      <HiOutlineDotsHorizontal
                        className="text-white"
                        size={20}
                      />
                    </button>
                  </div>
                </div>

                <div class="flex flex-col p-4  ">
                  <div class="flex items-center text-sm mb-1 text-white">
                    Create signup sheet for holiday student/parent conferences.
                  </div>

                  <div class="flex items-center  mb-2">
                    <div className="flex flex-auto flex-row justify-end ">
                      <div className="flex items-center my-2 ml-auto">
                        <div className="w-72 bg-gray-200 rounded-full  h-2.5 dark:bg-gray-700 ">
                          <div
                            className="bg-blue-500 h-2.5 rounded-full"
                            style={{ width: "55%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center mb-2">
                    <div>
                      <div class="relative  mr-20">
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-4"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-8"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-12"></div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <AiOutlineClockCircle className="text-gray-500 mx-1" />
                      <div className="text-gray-500 text-sm">Due in 4 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                class="max-w-md my-2 bg-white border border-black rounded-lg overflow-hidden"
                style={{ backgroundColor: "rgba(54,26,115,255)" }}
              >
                <div className="flex flex-row justify-between mx-2 px-2 pt-2">
                  <div className="flex flex-row items-center  ">
                    <GoDotFill className="text-red-500" />
                    <div className="size-xs text-red-500">Instructor Meeting</div>
                  </div>
                  <div className="flex items-center">
                    <button>
                      <HiOutlineDotsHorizontal
                        className="text-white"
                        size={20}
                      />
                    </button>
                  </div>
                </div>

                <div class="flex flex-col p-4  ">
                  <div class="flex items-center text-sm mb-1 text-white">
                    Create signup sheet for holiday student/parent conferences.
                  </div>

                  <div class="flex items-center  mb-2">
                    <div className="flex flex-auto flex-row justify-end ">
                      <div className="flex items-center my-2 ml-auto">
                        <div className="w-72 bg-gray-200 rounded-full  h-2.5 dark:bg-gray-700 ">
                          <div
                            className="bg-red-500 h-2.5 rounded-full"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center mb-2">
                    <div>
                      <div class="relative  mr-20">
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-4"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-8"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-12"></div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <AiOutlineClockCircle className="text-gray-500 mx-1" />
                      <div className="text-gray-500 text-sm">Due in 4 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 mr-2">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <div className="font-bold ml-3 text-white">Done(3)</div>
              <div flex justify-center>
                <button
                  class="flex items-center justify-center px-3 py-1 mx-1 my-1  rounded-lg  text-2xl"
                  style={{
                    color: "rgba(166,24,180,255)",
                    backgroundColor: "rgba(54,26,115,255)",
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <div
                class="max-w-md my-2 bg-white border border-black rounded-lg overflow-hidden"
                style={{ backgroundColor: "rgba(54,26,115,255)" }}
              >
                <div className="flex flex-row justify-between mx-2 px-2 pt-2">
                  <div className="flex flex-row items-center  ">
                    <GoDotFill className="text-red-500" />
                    <div className="size-xs text-red-500">Database</div>
                  </div>
                  <div className="flex items-center">
                    <button>
                      <HiOutlineDotsHorizontal
                        className="text-white"
                        size={20}
                      />
                    </button>
                  </div>
                </div>

                <div class="flex flex-col p-4  ">
                  <div class="flex items-center text-sm mb-1 text-white">
                    Create signup sheet for holiday student/parent conferences.
                  </div>

                  <div class="flex items-center  mb-2">
                    <div className="flex flex-auto flex-row justify-end ">
                      <div className="flex items-center my-2 ml-auto">
                        <div className="w-72 bg-gray-200 rounded-full  h-2.5 dark:bg-gray-700 ">
                          <div
                            className="bg-red-500 h-2.5 rounded-full"
                            style={{ width: "65%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center mb-2">
                    <div>
                      <div class="relative  mr-20">
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-4"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-8"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-12"></div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <AiOutlineClockCircle className="text-gray-500 mx-1" />
                      <div className="text-gray-500 text-sm">Due in 4 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                class="max-w-md my-2 bg-white border border-black rounded-lg overflow-hidden"
                style={{ backgroundColor: "rgba(54,26,115,255)" }}
              >
                <div className="flex flex-row justify-between mx-2 px-2 pt-2">
                  <div className="flex flex-row items-center  ">
                    <GoDotFill className="text-blue-500" />
                    <div className="size-xs text-blue-500">Instructor Meeting</div>
                  </div>
                  <div className="flex items-center">
                    <button>
                      <HiOutlineDotsHorizontal
                        className="text-white"
                        size={20}
                      />
                    </button>
                  </div>
                </div>

                <div class="flex flex-col p-4  ">
                  <div class="flex items-center text-sm mb-1 text-white">
                    Create signup sheet for holiday student/parent conferences.
                  </div>

                  <div class="flex items-center  mb-2">
                    <div className="flex flex-auto flex-row justify-end ">
                      <div className="flex items-center my-2 ml-auto">
                        <div className="w-72 bg-gray-200 rounded-full  h-2.5 dark:bg-gray-700 ">
                          <div
                            className="bg-blue-500 h-2.5 rounded-full"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center mb-2">
                    <div>
                      <div class="relative  mr-20">
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-4"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-8"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-12"></div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <AiOutlineClockCircle className="text-gray-500 mx-1" />
                      <div className="text-gray-500 text-sm">Due in 4 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                class="max-w-md my-2 bg-white border border-black rounded-lg overflow-hidden"
                style={{ backgroundColor: "rgba(54,26,115,255)" }}
              >
                <div className="flex flex-row justify-between mx-2 px-2 pt-2">
                  <div className="flex flex-row items-center  ">
                    <GoDotFill className="text-pink-500" />
                    <div className="size-xs text-pink-500">Bug Fixing</div>
                  </div>
                  <div className="flex items-center">
                    <button>
                      <HiOutlineDotsHorizontal
                        className="text-white"
                        size={20}
                      />
                    </button>
                  </div>
                </div>

                <div class="flex flex-col p-4  ">
                  <div class="flex items-center text-sm mb-1 text-white">
                    Create signup sheet for holiday student/parent conferences.
                  </div>

                  <div class="flex items-center  mb-2">
                    <div className="flex flex-auto flex-row justify-end ">
                      <div className="flex items-center my-2 ml-auto">
                        <div className="w-72 bg-gray-200 rounded-full  h-2.5 dark:bg-gray-700 ">
                          <div
                            className="bg-pink-500 h-2.5 rounded-full"
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center mb-2">
                    <div>
                      <div class="relative  mr-20">
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-4"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-8"></div>
                        <div class="w-6 h-6 bg-gray-500 rounded-full border-2 border-white absolute top-0 left-12"></div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <AiOutlineClockCircle className="text-gray-500 mx-1" />
                      <div className="text-gray-500 text-sm">Due in 4 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 mr-2">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <div className="font-bold ml-3 text-white">Revised(0)</div>
              <div flex justify-center>
                <button
                  class="flex items-center justify-center px-3 py-1 mx-1 my-1  rounded-lg  text-2xl"
                  style={{
                    color: "rgba(166,24,180,255)",
                    backgroundColor: "rgba(54,26,115,255)",
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div
              class="max-w-md my-2  text-white border border-black rounded-lg overflow-hidden"
              style={{ backgroundColor: "rgba(54,26,115,255)" }}
            >
              <div
                class="m-4 border  rounded-lg bg-black text-center"
                style={{
                  border: "1px dotted white",
                  backgroundColor: "rgba(27,19,42,255)",
                }}
              >
                <p class="text-gray-100">Move Card Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todosection;
