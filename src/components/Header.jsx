import React, { useEffect } from 'react'
import SearchBar from './SearchBar'
const Header = () => {
  
  return (
    <div className='ml-64 p-5 border-b flex items-center justify-between lg:justify-start xl:justify-evenly s:justify-end s1:justify-between '>
        <SearchBar/>
        <button className={'border p-2 px-4 text-sm rounded-md hover:border-purple-800 font-semibold hover:bg-gray-50 active:text-purple-500 active:bg-purple-50  '}>Login</button>
        </div>
  )
}

export default Header