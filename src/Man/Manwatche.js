import React from 'react'
import './Manwatche.css'
import Itemone from './Menu'

function Manwatche() {
    return (
        <div className='manwatche'>
            <div className='manwatche-home'>
                <div className='manwatche-home-add'>

                    <img className='manwatche-image' src="https://www.titan.co.in/wps/wcm/connect/titanrt/f54ed80e-ffee-4333-bd6f-864b07b7a716/desktop/2500x500.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-f54ed80e-ffee-4333-bd6f-864b07b7a716-desktop-oi62cX0" alt="" />
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
                        Itemone.map((cuurel) => {
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
                <img className='manwatch-bottom-addimage-one' src="https://www.titan.co.in/wps/wcm/connect/titan/26d5cd95-e1a5-4f77-b43a-220566325da9/desktop/1000X200.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OO8010QKMQAAEP2004-26d5cd95-e1a5-4f77-b43a-220566325da9-desktop-o09OrkN" alt="" />

            </div>


            <div className='manwatch-items'>
                <div className='manwtsch-items-list'>

                    {
                        Itemone.map((cuurel) => {
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

export default Manwatche
