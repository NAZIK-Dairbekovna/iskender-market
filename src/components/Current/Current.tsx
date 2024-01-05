import React from 'react';
import discount from './../imgProducts/discount.svg'
import promotion from './../imgProducts/promotion.svg'
import sale from './../imgProducts/sale.svg'
import gifts1 from './../imgProducts/gifts1.svg'
import gifts2 from './../imgProducts/gifts2.svg'
import stories from './../imgProducts/stories.svg'


const Current = () => {
    return (
        <div className='ml-20 mt-8 mr-10 mb-16 flex justify-evenly'>
            <img src={discount} className='mr-6' alt=""/>
            <img src={promotion} className='mr-6' alt=""/>
            <img src={sale} className='mr-6' alt=""/>
            <img src={gifts1} className='mr-6' alt=""/>
            <img src={gifts2} className='mr-6' alt=""/>
            <img src={stories} className='mr-6' alt=""/>
            <img src={stories} className='mr-6' alt=""/>
            <img src={stories} className='mr-6' alt=""/>
            <img src={stories} className='mr-6' alt=""/>
            <img src={stories} className='mr-6' alt=""/>
            <img src={stories} className='mr-6' alt=""/>
            <img src={stories} className='mr-6' alt=""/>
            <img src={stories} className='mr-6' alt=""/>
            <img src={stories} alt=""/>
        </div>
    );
};

export default Current;