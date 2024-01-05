import React from 'react';
import logo from './../img/Group.svg';
import user from './../img/user.svg';
import basket from './../img/basket.svg'
import {TfiMenu, TfiSearch} from "react-icons/tfi";

const Header = () => {
    return (
        <div className='flex justify-evenly bg-sky-500 h-25 p-5'>
            <img src={logo} alt=""/>
            <div className='w-32 h-11 ml-5 flex justify-evenly items-center bg-sky-600 rounded-3xl text-white'>
                <TfiMenu/>
                Каталог
            </div>
            <div className='w-6/12 h-11 flex justify-items-start items-center bg-white rounded-3xl text-gray-500'>
                <TfiSearch className='w-12'/> <input type="text" placeholder='Поиск'/>
            </div>
            <div className='flex justify-evenly items-baseline'>
                <img src={user} alt=""/>
                <div  className='w-0.5 h-7 ml-2 mr-2 bg-gray-300'></div>
                <img src={basket} alt=""/>
            </div>
        </div>
    );
};

export default Header;