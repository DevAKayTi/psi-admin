import React, { useRef, useState } from 'react';

import Popper from '../Popper';
import UserPopup from './UserPopup';
import OutsideClickHandler from '../../../../../components/outsideclickhandler';

import { AiOutlineLogout } from 'react-icons/ai';

import avatar from '../../../../../assets/images/user/avatar-1.jpg';

const Profile = () => {

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
    <div className='relative ml-3'>
      <button
        ref={anchorRef}
        className='px-2 py-1 flex items-center rounded-lg cursor-pointer hover:bg-gray-100'
        onClick={toggleHandler}
      >
        <img src={avatar} alt="avatar-1" className='w-8 h-8 rounded-full mr-3'/>
        <h4 className='text-sm font-semibold tracking-wide'>Mary</h4>
      </button>
      {
        open && (
          <OutsideClickHandler onClickaway={closeHandle}>
            <Popper>
              <div className='main w-[240px]'>
                <div className='flex items-center justify-between p-4'>
                  <div className='flex items-center'>
                    <div>
                        <img src={avatar} alt="avatar" className='w-10 h-10 rounded-full'/>
                    </div>
                    <div className='ml-4'>
                      <h3 className='text-md tracking-wide'>Mary</h3>
                      <h5 className='text-sm text-gray-400'>Admin</h5>
                    </div>
                  </div>
                  <button className='p-3 rounded-full hover:bg-gray-100'> 
                    <AiOutlineLogout className='w-6 h-6 text-gray-500'/>
                  </button>
                </div>
                <UserPopup/>    
              </div>
            </Popper>
          </OutsideClickHandler>

        )
      }
      
    </div>
      

  )
}

export default Profile