import React from 'react';
import logo from "../img/Group.svg";
import googlePlay from './../img/googlePlay.svg';
import appStore from './../img/appStore.svg';
import whatsApp from './../img/whatsApp.svg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='bg-sky-500 w-full h-75 p-10 text-white'>
            <div className='flex justify-evenly'>
                <div>
                    <div className='w-60'>
                        <img className='w-40' src={logo} alt=""/>
                        <h2 className='text-white mb-10 mt-10' >
                            Первый отечественный бренд Iskender на рынке сантехники от компании ОсОО «Стройдом.кг»
                        </h2>
                    </div>
                    <div className='flex justify-evenly'>
                        <img src={googlePlay} alt="" className='mr-5'/>
                        <img src={appStore} alt=""/>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold mb-10'>Адреса</h1>
                    <h2>ЭлитСтрой</h2>
                    <h2>ул. Ден-Сяопина 18/1</h2>
                    <h2 className='mt-6'>Баткен</h2>
                    <h2>ул. Льва-Толстого 19</h2>
                    <h2 className='mt-6'>Таатан</h2>
                    <h2>ул. Лермонтова 6</h2>
                </div>
                <div>
                    <h1 className='font-bold mb-10'>Компания</h1>
                    <h2>Каталог</h2>
                    <h2 className='mt-3'>Избранное</h2>
                    <h2 className='mt-3'>Личный кабинет</h2>
                </div>
                <div >
                    <h1 className='font-bold mb-10'>Контакты</h1>
                    <h2>Email:</h2>
                    <h2>iskender.kg@gmail.com</h2>
                    <h2 className='mt-6'>Телефон:</h2>
                    <h2>+996 (500) 000-104</h2>
                    <h2>+996 (997) 000-104</h2>
                    <h2>+996 (222) 000-104</h2>
                    <img src={whatsApp} alt="" className='mt-10'/>
                </div>
            </div>
            <div className='w-full h-0.5 m-5 bg-gray-300'></div>
            <div className='flex justify-between items-baseline'>
                <div className="text-start p-4 text-gray-300">
                    © 2023 Iskender.kg -
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> Отечественный бренд сантехники</a>
                </div>
                <div className='flex justify-around text-gray-300'>
                    <FaInstagram className='mr-2' />
                    <FaFacebook />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

