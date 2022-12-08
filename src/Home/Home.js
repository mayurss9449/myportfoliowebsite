import React from 'react'
import './Home.css'
import Banner from './Banner';
import Collection from './Collection';
import Productone from './Productone';



function Home() {
    return (
        <div className='home' >
            <Banner />

            <div className='strip'>
                <div className='strip-list'>
                    <div className='strip-listOne'>
                        <img src="https://etimg.etb2bimg.com/photo/92700062.cms" alt="mayur" />
                    </div>
                    <div className='strip-listOne'>
                        <h3>Flat 10% Cashback Offer</h3>
                        <p>0% Interest | 3-12 Months EMI</p>
                        <p>No Credit Card Needed</p>
                    </div>
                    <div className='strip-listOne'>
                        <h3>Bajaj Finserv No Cost EMI</h3>
                        <p>0% Interest</p>
                        <p>3-12 Months EMI</p>
                    </div>
                    <div className='strip-listOne'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyscW6rpKyrCyR_M-NXDxGCOHs0nv5vWjkRZRLsmm&s" alt="" />
                    </div>
                </div>

            </div>
            <div className='add-container'>
                <div className='add-container-list'>
                    <a href=""><img src="https://www.titan.co.in/wps/wcm/connect/titanrt/7330d0b1-9c28-424b-a1f5-ddcf4810deb9/767x695_Home_Sqr_talk.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-7330d0b1-9c28-424b-a1f5-ddcf4810deb9-oipvTs7" alt="" /></a>
                </div>
                <div className='add-container-list'>
                    <a href=""><img src="https://www.titan.co.in/wps/wcm/connect/titanrt/31df8793-3713-4e9a-b414-efb7f63917e1/767x695_xylys.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-31df8793-3713-4e9a-b414-efb7f63917e1-oipvTs7" alt="" /></a>
                </div>
                <div className='add-container-list'>
                    <a href=""><img src="https://www.titan.co.in/wps/wcm/connect/titanrt/c4dd2176-3f52-4d15-a908-7f8ccf287e0c/767x695_hp.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-c4dd2176-3f52-4d15-a908-7f8ccf287e0c-oipvTs7" alt="" /></a>
                </div>
                <div className='add-container-list'>
                    <a href=""><img src="https://www.titan.co.in/wps/wcm/connect/titanrt/afdbd5bc-d69d-4339-ac1e-5dacc7f02707/767x695_reflextunes.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-afdbd5bc-d69d-4339-ac1e-5dacc7f02707-oipvTs7" alt="" /></a>
                </div>
            </div>
            <div className='banner-container'>
                <div className='banner-container-one'>
                    <a href=""><img src="https://www.titan.co.in/wps/wcm/connect/titanrt/02f47ae8-3ceb-4a53-8d9f-a5ce6a516c3f/desktop/1920x600_Clocks.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-02f47ae8-3ceb-4a53-8d9f-a5ce6a516c3f-desktop-oi9HmAq" alt="" /></a>
                </div>
            </div>
            
            <Collection />
            <Productone />
            
            <div className='bootom-add'>
                <a href=""><img className='bootom-add-img' src="https://www.titan.co.in/wps/wcm/connect/titanrt/c995674d-8eba-4fb9-8eaf-fd922fd09ea9/desktop/2500x1000.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-c995674d-8eba-4fb9-8eaf-fd922fd09ea9-desktop-o4ugOQD" alt="" /></a>
            </div>
            
            <div className='boottom-list'>
                <div className='boottom-list-items'>
                    <ul className='boottom-list-items-ul'>
                        <li className='boottom-list-items-li'>
                            <h4>100% Original</h4>
                            <p>All products are original and go through strict quality check.</p>
                        </li>

                        <li className='boottom-list-items-li'>
                            <h4>7 Day Return</h4>
                            <p>Use our hassle free method to return.</p>
                        </li>
                        <li className='boottom-list-items-li' >
                            <h4>Shipping</h4>
                            <p>Shipping in India is free. Shipping charges applicable for International locations.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
