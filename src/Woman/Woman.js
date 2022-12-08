import React from 'react'
import './Woman.css'
import Womanitem,{Pseconde} from './Pone'

function Woman() {
    return (
        <div className='womanwatche'>
            <div className='manwatche-home'>
                <div className='manwatche-home-add'>

                    <img className='manwatche-image' src="https://www.titan.co.in/wps/wcm/connect/titan/ad088f15-e24a-4a3c-b430-cd06d8aadd99/desktop/2500x500.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OO8010QKMQAAEP2004-ad088f15-e24a-4a3c-b430-cd06d8aadd99-desktop-ogq19ol" alt="" />
                </div>
            </div>
            <div className='manwatche-found'>
                <h3 className='manwatche-found-name'>FOUND 8 Watches</h3>
            </div>
            <div className='manwatche-top-button'>
                <div className='manwatche-top-button-first'>
                    <button className='manwatche-top-button-first-btn'><img className='manwatche-top-button-first-img' src="https://www.titan.co.in/wps/wcm/connect/titan/3b52b964-af6c-44a0-b555-7bf2082eeafd/img%252Ficon%252FCompare_Icon.svg?MOD=AJPERES&CVID=" alt="" />COMPARE</button>
                </div>
                <div className='manwatche-top-button-seconde'>
                    <button className='manwatche-top-button-first-btn'>SORT BY</button>
                </div>
            </div>




            <div className='manwatch-items'>
                <div className='manwtsch-items-list'>

                    {
                        Pseconde.map((cuurel) => {
                            const { id, url, names, price } = cuurel;
                            return (
                                <div className='manwatche-item-list-main'>
                                    <div className='manwatche-item-list-top'>
                                        <img className='manwatche-item-list-img' src={url} alt="" />
                                    </div>
                                    <a className='manwatche-item-list-arr' href="">{names}</a>
                                    <div className='manwatche-item-list-center-price'>

                                        <span> ₹ </span>
                                        <span>{price}</span>

                                    </div>
                                    <div className='manwatche-item-list-top-buttton'>
                                        <button className='manwatche-item-list-top-buttton-boo'>Most Viewed</button>
                                        <button className='manwatche-item-list-top-buttton-boo'>No Cost EMI</button>
                                    </div>
                                    <div className='menwatch-buutton-bottom'>
                                        <div className='menwatch-buutton-bottom-div'>
                                            ADD TO CART
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='manwatch-bottom-addimage'>
                <img className='manwatch-bottom-addimage-one' src="https://www.titan.co.in/wps/wcm/connect/titan/1e07f78f-e69c-4fd7-b7f7-a6c7302d8970/desktop/1000x200_nebula.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OO8010QKMQAAEP2004-1e07f78f-e69c-4fd7-b7f7-a6c7302d8970-desktop-nZVhGvO" alt="" />

            </div>


            <div className='manwatch-items'>
                <div className='manwtsch-items-list'>

                    {
                        Womanitem.map((cuurel) => {
                            const { id, url, names, price } = cuurel;
                            return (
                                <div className='manwatche-item-list-main'>
                                    <div className='manwatche-item-list-top'>
                                        <img className='manwatche-item-list-img' src={url} alt="" />
                                    </div>
                                    <a className='manwatche-item-list-arr' href="">{names}</a>
                                    <div className='manwatche-item-list-center-price'>

                                        <span> ₹ </span>
                                        <span>{price}</span>

                                    </div>
                                    <div className='manwatche-item-list-top-buttton'>
                                        <button className='manwatche-item-list-top-buttton-boo'>Most Viewed</button>
                                        <button className='manwatche-item-list-top-buttton-boo'>No Cost EMI</button>
                                    </div>
                                    <div className='menwatch-buutton-bottom'>
                                        <div className='menwatch-buutton-bottom-div'>
                                            ADD TO CART
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>





        </div >
    )
}

export default Woman

