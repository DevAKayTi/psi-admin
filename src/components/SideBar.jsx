import React from 'react'

const SideBar = ({sideBarActive}) => {
    
    return (
        <>
            <div className={`${sideBarActive ? 'w-72' : 'w-0'} h-screen fixed bg-red-500 transition-all duration-75`}>
                SideBar
            </div>
        </>
  )
}

export default SideBar