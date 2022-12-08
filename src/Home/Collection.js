import React, { useState } from 'react'
import './Collection.css'
import Items,{Menu} from './Item';

function Collection() {

    const [item, setItem] = useState(Menu);

    
    const filteritems = (cateItem) => {
        const updatedItem = Items.filter((curElem) => {
            return curElem.category === cateItem;
        })
        setItem(updatedItem);
    }


    return (
        <div className='collection'>
            <div className='collection-top'>
                <div className='collection-top-head'>
                    <div className='collection-headline-ss'>
                    <h1 className='collection-headline'>Our Collections</h1>
                    </div>
                    <div className='collections-button'>
                        <ul>

                            <li><button onClick={() => filteritems('men')}>MEN</button></li>
                            <li><button onClick={() => filteritems('women')}>WOMEN</button></li>
                            <li><button onClick={() => filteritems('luxury')}>LUXURY</button></li>
                        </ul>
                    </div>


                    <div className='collection-images'>
                        <div className='collection-images-image'>

                            {
                                item.map((elem) => {
                                    const { id, image, category, description } = elem;

                                    return (

                                        <ul className='collection-ul-img'>
                                            <li className='collection-li-img' key={id}>
                                                <a className='collection-image-arr' href=""><img className='collection-img' src={image} alt="" /></a>
                                                <a className='collection-p'>{description}</a>
                                            </li>

                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Collection
