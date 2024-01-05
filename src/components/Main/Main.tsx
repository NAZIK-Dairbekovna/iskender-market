import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Current from "../Current/Current";
import { Carousel } from 'flowbite-react';


// products img
import bath from './../imgProducts/bath.svg';
import displacer from './../imgProducts/displacer.svg';
import kitchenHoods from './../imgProducts/kitchenHoods.svg';
import washing from './../imgProducts/washing.svg';
import others from './../imgProducts/others.svg';
import toilet from './../imgProducts/toilet.svg';
import washStand from './../imgProducts/washstand.svg';
import dryer from './../imgProducts/dryer.svg';
import waterHeat from './../imgProducts/waterHeater.svg';
import waterHeat2 from './../imgProducts/waterHeater2.svg';
import showers from './../imgProducts/showers.svg';
import holder from './../imgProducts/holder-product-card.svg';

import arrowDown from './../imgProducts/arrow-down.svg';
import arrowNext from './../imgProducts/arrow-next.svg';
import pagination from './../img/pagination.svg'

import newsBanner from './../imgProducts/newsBanner.svg';
import banner from './../imgProducts/banner.svg';

import saleProduct from './../imgProducts/saleProduct.svg';

import address1 from './../imgProducts/adress-card1.svg';
import address2 from './../imgProducts/adress-card2.svg';
import address3 from './../imgProducts/adress-card3.svg'
// products img end

const Main = () => {
    return (
        <div className='bg-gray-100'>
         <Header/>
            <Current/>
            {/* начало Категории  */}
            <div className='ml-20 mt-8 mr-20'>
                <h1 className='font-bold text-2xl mb-5'>Категории</h1>
                <div className='flex justify-between mb-5'>
                    <img src={bath} alt="" className='mr-1.5'/>
                    <img src={displacer} alt="" className='mr-1.5'/>
                    <img src={kitchenHoods} alt="" className='mr-1.5'/>
                    <img src={washing} alt="" className='mr-1.5'/>
                    <img src={others} alt="" className='mr-1.5'/>
                    <img src={toilet} alt="" className='mr-1.5'/>
                    <img src={kitchenHoods} alt=""/>
                </div>
                <div className='flex justify-between mb-5'>
                    <img src={washStand} alt="" className='mr-1.5'/>
                    <img src={dryer} alt="" className='mr-1.5'/>
                    <img src={waterHeat} alt="" className='mr-1.5'/>
                    <img src={showers} alt="" className='mr-1.5'/>
                    <img src={waterHeat2} alt="" className='mr-1.5'/>
                    <img src={waterHeat2} alt="" className='mr-1.5'/>
                    <img src={dryer} alt=""/>
                </div>
            </div>
            {/* конец Категории  */}

            {/* начало Хиты продаж  */}
            <div className='ml-20 mt-8 mr-20'>
                <div className='flex justify-between items-baseline'>
                    <h1 className='font-bold text-2xl mb-5'>Хиты продаж</h1>
                    <button className='text-sky-600'>перейти в каталог</button>
                </div>
            </div>
            <div className='flex justify-between ml-10'>
                <img src={arrowDown} alt=""/>
                <Carousel>
                    <img src={holder} alt="" className='mr-1.5'/>
                    <img src={holder} alt="" className='mr-1.5'/>
                    <img src={holder} alt="" className='mr-1.5'/>
                    <img src={holder} alt="" className='mr-1.5'/>
                    <img src={holder} alt="" className='mr-1.5'/>
                    <img src={holder} alt="" className='mr-1.5'/>
                    <img src={holder} alt=""/>
                </Carousel>
                <img src={arrowNext} alt=""/>
            </div>
            <div className='flex justify-center mb-8'>
                <img src={pagination}  alt=""/>
            </div>
            {/* конец Хиты продаж  */}

            {/* начало Новости  */}
            <div className='ml-20 mt-8 mr-20'>
                <div className='flex justify-between items-baseline'>
                    <h1 className='font-bold text-2xl mb-5'>Новости</h1>
                    <button className='text-sky-600'>все</button>
                </div>
            </div>
            <div className='flex justify-between ml-10'>
                <img src={arrowDown} alt=""/>
                <Carousel>
                    <img src={newsBanner} alt="" className='mr-8'/>
                    <img src={newsBanner} alt="" className='mr-8'/>
                    <img src={banner} alt="" className='mr-8'/>
                </Carousel>
                <img src={arrowNext} alt=""/>
            </div>
            <div className='flex justify-center mb-8'>
                <img src={pagination}  alt=""/>
            </div>
            {/* конец Новости */}

            {/* начало Аукционные товары */}
            <div className='ml-20 mt-8 mr-20'>
                <div className='flex justify-between items-baseline'>
                    <h1 className='font-bold text-2xl mb-5'>Аукционные товары</h1>
                    <button className='text-sky-600'>перейти в каталог</button>
                </div>
            </div>
            <div className='flex justify-between ml-10'>
                <img src={arrowDown} alt=""/>
                <Carousel>
                    <img src={saleProduct} alt="" className='mr-4'/>
                    <img src={saleProduct} alt="" className='mr-4'/>
                    <img src={saleProduct} alt="" className='mr-4'/>
                    <img src={saleProduct} alt="" className='mr-4'/>
                    <img src={saleProduct} alt="" className='mr-4'/>
                    <img src={saleProduct} alt="" className='mr-4'/>
                </Carousel>
                <img src={arrowNext} alt=""/>
            </div>
            <div className='flex justify-center mb-8'>
                <img src={pagination}  alt=""/>
            </div>
            {/* конец Аукционные товары */}

            {/* начало Адреса магазинов  */}
            <div className='ml-20 mt-8 mr-20'>
                <h1 className='font-bold text-2xl mb-5'>Адреса магазинов</h1>
            </div>
            <div className='flex justify-between ml-20 mr-20 mb-5'>
                    <img src={address1} alt="" className='mr-1.5'/>
                    <img src={address2} alt="" className='mr-1.5'/>
                    <img src={address3} alt=""/>
            </div>
            <div className='flex justify-center mb-8'>
                <img src={pagination}  alt=""/>
            </div>
            {/* конец Адреса магазинов  */}
         <Footer/>
        </div>
    );
};

export default Main;