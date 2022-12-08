import React, { useState } from 'react'
import './Productone.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Slider } from './Item';


const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items:4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


function Productone() {

  const [mainItem, setMainItem] = useState(Slider)

  return (
    <div className='productone'>
      <div className='productone-top'>
        <div className='productone-headline'>
          
            <h2 className='productone-hhh'>Top Sellers</h2>
          
        </div>
        <div className='productone-center'>
          <div className='productone-center-list'>
        <Carousel
           responsive={responsive}
           slidesToSlide={1}
           dotListClass="custom-dot-list-style"
           
           containerClass='carousel-container'
          //  infinite={true}
          > 

       
          
              {
                mainItem.map((elem) => {
                  const { id, images, descriptions, price } = elem;
                  return (
                    <ul className='productone-ul'>
                      <li className='productone-li' key={id}>
                        <a className='productone-first-arr' href=""><img className='productone-first-images' src={images} alt="" /></a>
                      </li>
                      <li className='productone-li'>  
                        <a className='productone-first-descrip' href="">{descriptions}</a>
                        </li>
                      <li className='productone-li'>
                        <a className='productone-first-price' href="">₹{price}</a>
                      </li>
                      </ul>
                  )
                })
              }
              
           
         </Carousel>
         </div>
          </div>
      </div>
    </div>
  )
}

export default Productone
