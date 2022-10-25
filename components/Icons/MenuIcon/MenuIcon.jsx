import menuIcon from '../../../assets/menu_icon.svg';
import React from 'react';
import Image from 'next/future/image';
import menuIconStyles from './menuiconstyles.module.css';


const MenuIcon = () => {

    return <Image src={menuIcon} alt="menu" className={menuIconStyles['icon-image']} />;
}

export default MenuIcon;