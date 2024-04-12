import React from 'react'
import SideNav from './components/SideNav'
import Header from './components/Header'
import CategoryList from './components/CategoryList'
import Courses from './components/Courses'
import list from './Data'
// import Registration from './components/Registration'

const App = () => {
  return (
    <>
    <div className='s:h-32 lg:flex'>
      <SideNav/>
      <div className=''>  <Header/>
    
      <div className="">
        <CategoryList/>
      </div>
      <div>
   <Courses />
 
      </div>

      </div>
      
    </div>
    </>
  )
}

export default App