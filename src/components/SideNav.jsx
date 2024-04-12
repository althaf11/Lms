import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "LMS Logo",
      path: "/browse",
    },
    {
      id: 2,
      name: "Browse",
      icon: <CiSearch />,
      path: "/browse",
    },
    {
      id: 3,
      name: "Dashboard",
      icon: <MdOutlineSpaceDashboard />,
      path: "/dashboard",
    },
    {
      id: 4,
      name: "contact",
      icon:<RiContactsLine />,
      path: "/contact",
    }
  ];
  const [activeIndex,setActiveIndex]=useState(1);
  return (
    // <div className="left w-45 h-screen bg-slate-300 text-red-600">
    //   <div className="p-4">
    //     <div className="flex gap-2 ">
    //       <CiSearch /> <h2>Browse</h2>
    //     </div>
    //     <div className="flex gap-2">  overflow-y-auto
    //       <MdOutlineSpaceDashboard />
    //       <h2>Dashboard</h2>
    //     </div>
    //   </div>
    // </div>
    <div className="h-screen bg-white border-r flex flex-col s:fle-row w-80 s:h-32 s:w-full lg:h-screen lg:border-r  lg:w-80 shadow-md ">
      <div className="flex flex-col s:flex-row s:h-32 s:w-screen s:border-b sm:flex-row sm:h-32 sm:w-screen sm:border-b lg:flex-col lg:w-80">
        {menuList.map((item, index) => (
          <div
            key={index}
            className={` flex gap-2 items-center p-4 px-6 text-gray-500 s:p-2 s:px-1  sm:p-4 sm:px-6 s1:p-4 s1:px-6 hover:bg-gray-100 cursor-pointer ${activeIndex==index?'bg-purple-50 text-purple-500':null}`}
         onClick={()=>setActiveIndex(index)} >
            {item.icon}
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
