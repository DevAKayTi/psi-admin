import React,{useRef,useState} from 'react'

import {IoMdNotificationsOutline} from 'react-icons/io';

import HeaderButton from '../HeaderButton';
import Popper from '../Popper';
import Badge from '../../../../../components/Badge';
import OutsideClickHandler from '../../../../../components/outsideclickhandler';

const Notification = () => {

    const anchorRef = useRef(null);
    const [open,setOpen] = useState(false);

    const toggleHandler = () => {
        setOpen(prev => !prev);
    }

    const closeHandle = (event) => {
        console.log(event.target,anchorRef.current);
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };


  return (
    <div className='md:relative'>
            <HeaderButton
            ref={anchorRef}
            onToggleHandler={toggleHandler}
            >
                <IoMdNotificationsOutline/>
                <Badge/>
            </HeaderButton>
            {open && (
                <OutsideClickHandler onClickaway={closeHandle}>
                    <Popper>
                        <div className='w-[300px]'>
                            <div className='px-4 pt-6 pb-6 border-1 border-gray-100'>
                                <h3 className='text-sm font-semibold tracking-wide'>Notification</h3>
                            </div>
                            <div></div>
                            <div>
                                <button className='w-full h-12 text-blue-400 tracking-wide hover:bg-gray-100'>View All</button>
                            </div>
                        </div>
                    </Popper>
                </OutsideClickHandler>
            )}
        
        
    </div>
    
    
  )
}

export default Notification