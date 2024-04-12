import React  from "react";
import list from "../Data";
// import useHistory from "react-router-dom"
// import CoursePage from "./CoursePage";

const Courses = () => {
  console.log({ list });
  
  return (
    
    <div className="flex flex-wrap" > 

      {list.map((item, index) => {
        return (
       
          <div 
            className="w-[300px] h-[300px] border rounded-sm mx-5 my-5"
            key={index}
          >
            <div >
             <img src="{item.img}" alt="Not Found" className="w-[300px] h-[200px] border object-cover overflow-hidden"/> 
            </div>
            <div className="w-[300px] h-[50px]  text-purple-500 text-center">

              {item.title}
            </div>
            <button className="mx-[7rem] border p-2 px-4 text-sm rounded-md hover:border-purple-800 font-semibold hover:bg-gray-50  active:text-purple-500 active:bg-purple-50  ">
             {item.button}
            </button>
          </div>
         
        );
      })}
      
    </div> 
  
  );
};

export default Courses;
