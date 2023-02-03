import React, { useState } from "react";
import { Outlet } from "react-router-dom"

import Drawer from './sideBar';
import Header from './header';
import { useDispatch, useSelector } from "react-redux";

import { openDrawer } from "../../store/reducer/menu";


export const MainLayot = () => {
    const dispatch = useDispatch();
    const { drawerOpen } = useSelector((state) => state.menu);

    // drawerhandle
    const [isOpen, setIsOpen] = useState(drawerOpen);
    const drawerHandler = () => {
        setIsOpen(!isOpen);
        dispatch(openDrawer({ drawerOpen: !isOpen }));
    }


    return (
        <div className="flex w-full">
            <Header open={isOpen} onDrawerHandler={drawerHandler} />
            <Drawer open={isOpen} onDrawerHandler={drawerHandler} />
            <div className={`w-full p-6 mt-[60px] transition-all duration-500 ${isOpen && 'md:ml-[260px]'}`}>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayot;
