import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ListItem from './ListItem'

import { activeItem } from '../../../../store/reducer/menu';

import './NavItem.css';

const NavItem = ({item}) => {

  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  const {openItem} = menu;

  const Icon = item.icon;
  const itemIcon = item.icon ? <Icon style={{ fontSize: '1.3rem'}} /> : false;

  const isSelected = openItem.findIndex((id) => id === item.id) > -1;

  useEffect(()=>{
    const currentIndex = document.location.pathname
            .toString()
            .split('/')
            .findIndex((id) => id === item.id);
        if (currentIndex > -1) {
            dispatch(activeItem({ openItem: [item.id] }));
        }
  },[]);


  const itemHandler = (id) => {
    dispatch(activeItem({openItem : [id]}));
  }

  return (
    <Link to={item.url} onClick={()=>itemHandler(item.id)}>
        <div className={`py-3 flex items-center pl-6 nav-item ${isSelected && 'active'}`}>
          {itemIcon && (
            <div className='mr-3'>{itemIcon}</div>
          )}
          {item.title}
        </div> 
    </Link>
  )
}

export default NavItem