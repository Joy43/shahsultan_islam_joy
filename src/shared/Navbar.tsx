'use client'
import React, {useState} from "react";

// --------------react icons-----------------
import {IoIosArrowDown, IoIosSearch} from "react-icons/io";
import {FaDiscord} from "react-icons/fa";
import {TbBrandGithubFilled} from "react-icons/tb";
import {CiMenuFries} from "react-icons/ci";
import {
    MdDashboardCustomize,
    MdKeyboardArrowDown,
} from "react-icons/md";
import {BsArrowRight} from "react-icons/bs";
import {CgIfDesign} from "react-icons/cg";
import {FaCubesStacked} from "react-icons/fa6";
import Image from "next/image";
const Navbar = () => {
    const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false)
    const [mobileServiceOpen, setMobileServiceOpen] = useState(false)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

    return (
        <nav className="flex bg-black text-white sticky top-0 z-50 items-center justify-between w-full  h-full p-4">

            {/*---------------- logo -------------------*/}
           <div className="flex-shrink-0 px-4">
            <a href="#" className="text-2xl font-bold ">
                <span className="px-1 bg-[#1c03a8]   rounded-full animate-[ping_1.9s_linear_infinite]">S</span>
                <span className="px-1 bg-[#1c03a8]  rounded-full animate-[ping_2s_linear_infinite]">S</span>
                <span className="px-1 bg-[#1c03a8]   rounded-full animate-[ping_2.1s_linear_infinite]">J</span>
                <span className="px-1 bg-[#1c03a8]  rounded-full animate-[ping_2.2s_linear_infinite]">O</span>
                <span className="px-1 bg-[#1c03a8]   rounded-full animate-[ping_2.3s_linear_infinite]">Y</span>
              
            </a>
        </div>

            {/* ------------- nav links -----------------*/}
            <ul className="items-center gap-[20px] text-[1rem]  md:flex hidden">
                <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">home</li>

                {/* about us mega menu */}
                <li className=" transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize flex items-center gap-[3px] group relative">
                    about us
                    <MdKeyboardArrowDown
                        className="text-[1.5rem]  group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]"/>

                    <article
                        className="p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">

                        <div className="grid grid-cols-2">
                            <ul className="flex flex-col gap-[7px] ">
                                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[0.9rem]"/> Intoduice
                                    Details
                                </li>
                                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className=" text-[0.9rem]"/>Education
                                </li>
                                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className=" text-[0.9rem]"/>Team Project
                                </li>
                                
                            </ul>

                            <div
                                className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]">
                                <div
                                    className="flex items-center gap-[10px] text-[1rem]">
                                    <MdDashboardCustomize
                                        className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]"/>
                                    All Project
                                </div>

                                <div
                                    className="flex items-center gap-[10px] text-[1rem] ">
                                    <CgIfDesign
                                        className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]"/>
                                   Android Project
                                </div>

                                <div
                                    className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                    <FaCubesStacked
                                        className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]"/>
                                    Well Design
                                </div>
                            </div>
                        </div>

                         <Image
             
              src="/banner.gif"
              width={150}
              height={150}
              alt="Shahsultan Islam Joy"
              priority
                             className="w-full object-cover mt-4 rounded-sm h-[150px]"/>
                    </article>
                </li>

                {/* Blog mega menu */}
                <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize group relative flex items-center gap-[3px]">
                    Blog
                    <MdKeyboardArrowDown
                        className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]"/>


                    <article
                        className="p-6 bg-white rounded-md w-[500px] absolute top-[40px] z-[-1] left-[-150px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">

                        <div className="grid grid-cols-2">
                            <ul className="flex flex-col gap-[7px] text-[#424242]">
                                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Company
                                    Details
                                </li>
                                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/>Company
                                    Location
                                </li>
                                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/>Team
                                    Members
                                </li>
                                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Office
                                    Tour
                                </li>
                            </ul>

                            <div
                                className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]">
                                <div
                                    className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                    <MdDashboardCustomize
                                        className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]"/>
                                    Full Customize
                                </div>

                                <div
                                    className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                    <CgIfDesign
                                        className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]"/>
                                    Modern Design
                                </div>

                                <div
                                    className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                    <FaCubesStacked
                                        className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]"/>
                                    Well Stacktured
                                </div>
                            </div>
                        </div>

                        <img src="https://i.ibb.co/XJJ4mNY/AD21-03.png" alt="image"
                             className="w-full object-cover mt-4 rounded-sm h-[150px]"/>
                    </article>
                </li>
            </ul>

            <div className="flex items-center gap-[10px]">
                {/* ----------------search option----------------- */}
                <div className="relative md:flex hidden">
                    <input
                        className="py-1.5 pr-4 border border-[#fff] pl-10 rounded-full outline-none focus:border-[#3B9DF8]"
                        placeholder="Search blog..."/>
                    <IoIosSearch
                        className="absolute top-[9px] left-3 text-[#424242] text-[1.3rem]"/>
                </div>

                <FaDiscord
                    className="text-[1.6rem]  cursor-pointer hover:text-[#3B9DF8] transition-all duration-500 "/>
                <TbBrandGithubFilled
                    className="text-[1.6rem]  cursor-pointer hover:text-[#3B9DF8] transition-all duration-500"/>

                <CiMenuFries
                    className="text-[1.6rem]  cursor-pointer md:hidden flex"
                    onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}/>
            </div>

            {/* mobile sidebar */}
            <aside
                className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} md:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}>
                <ul className="items-start gap-[20px] text-[1rem]  flex flex-col">

                    <li className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
                        Home
                    </li>

                    <li onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
                        className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
                        About Us
                        <IoIosArrowDown
                            className={`${mobileAboutUsOpen ? "rotate-[180deg]" : "rotate-0"} text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}/>
                    </li>

                    {/* about us mega menu */}
                    <div className={`${mobileAboutUsOpen ? "block" : "hidden"} group font-[500] ml-6`}>

                        <ul className="flex flex-col gap-[7px] ">
                            <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                <BsArrowRight className="text-[0.9rem]"/> Company
                                Details
                            </li>
                            <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/>Company
                                Location
                            </li>
                            <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/>Team Members
                            </li>
                            <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Office Tour
                            </li>
                        </ul>

                        <div
                            className="flex flex-col gap-[10px] mt-4">
                            <div
                                className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                <MdDashboardCustomize
                                    className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]"/>
                                Full Customize
                            </div>

                            <div
                                className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                <CgIfDesign
                                    className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]"/>
                                Modern Design
                            </div>

                            <div
                                className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                <FaCubesStacked
                                    className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]"/>
                                Well Stacktured
                            </div>
                        </div>
                    </div>


                    <li onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                        className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
                        Service
                        <IoIosArrowDown
                            className={`${mobileServiceOpen ? "rotate-0" : "rotate-[180deg]"} text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}/>
                    </li>

                    {/* service mega menu */}
                    <div className={`${mobileServiceOpen ? "hidden" : "block"} font-[500] ml-6`}>

                        <ul className="flex flex-col gap-[7px] text-[#424242]">
                            <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Company
                                Details
                            </li>
                            <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/>Company
                                Location
                            </li>
                            <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/>Team Members
                            </li>
                            <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Office Tour
                            </li>
                        </ul>

                        <div
                            className="flex flex-col gap-[10px] mt-4">
                            <div
                                className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                <MdDashboardCustomize
                                    className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]"/>
                                Full Customize
                            </div>

                            <div
                                className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                <CgIfDesign
                                    className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]"/>
                                Modern Design
                            </div>

                            <div
                                className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                <FaCubesStacked
                                    className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]"/>
                                Well Stacktured
                            </div>
                        </div>
                    </div>
                </ul>
            </aside>
        </nav>
    );
};

export default Navbar;
          