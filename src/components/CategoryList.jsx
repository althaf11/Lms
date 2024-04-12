import React, { useState } from "react";

const CategoryList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const filterOptions = [
    {
      id: 1,
      name: "All",
      value: "all",
    },
    {
      id: 2,
      name: "Python",
      value: "python",
    },
    {
      id: 3,
      name: "Java",
      value: "java",
    },
    {
      id: 4,
      name: "React Js",
      value: "react",
    },
    {
      id: 5,
      name: "Css",
      value: "css",
    },
    {
      id: 6,
      name: "Html",
      value: "html",
    },
    {
      id: 7,
      name: "Javascript",
      value: "js",
    },
    {
      id: 8,
      name: "SQL",
      value: "sql",
    },
    {
      id: 9,
      name: "Django",
      value: "django",
    },
    {
      id: 10,
      name: "MongoDb",
      value: "mangodb",
    },
  ];
  return (
    <div className="flex gap-5 flex-wrap">
      {filterOptions.map((item, index) => (
        <button onClick={()=>setActiveIndex(index)}
          key={index}
          className={`border p-2 px-4 text-sm rounded-md hover:border-purple-800 font-semibold hover:bg-gray-50 lg:p-1 lg:px-2 ${
            activeIndex == index
              ? "border-purple-800 bg-purple-50 text-purple-800"
              : null
          }`}
        >
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
