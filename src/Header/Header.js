import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header-nav'>
        <div className='header-top'>
            <div className='header-top-nav'>
                <div className='header-top-nav-list'>
                    <div className='header-top-left'>
                        <a className='header-left-one' href="">BRANDS</a>
                    </div>
                    <div className='header-top-right'>
                        <a className='header-right-one' href="">CART(<span>0</span>)</a>
                        <a className='header-right-one' href="">WISHLIST</a>
                        <a className='header-right-one' href="">ENCIRCLE</a>
                        <a className='header-right-one' href="">LOGIN</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='header-bottom'>
            <div className='header-bottom-nav'>
                <div className='header-bottom-nav-list'>
                    <div className='header-bottom-left-list'>
                        <div className='header-bottom-left-list-parent'><a className='header-bottom-left-listarr' href="">WATCHES</a></div>
                        <div className='header-bottom-left-list-parent'><a className='header-bottom-left-listarr' href="">PREMIUM WATCHES</a></div>
                        <div className='header-bottom-left-list-parent'><a className='header-bottom-left-listarr' href="">NEW ARRIVALS</a></div>
                        <div className='header-bottom-left-list-parent'><a className='header-bottom-left-listarr' href="">SMART</a></div>
                    </div>
                    <div className='header-bottom-center'>
                        <div className='header-bottom-center-logo'>
                            <a className='header-bottom-center-logo-img' href="">
                                <img className='header-bottom-center-logo-img-one' src="https://logos-download.com/wp-content/uploads/2016/06/Titan_Watches_logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className='header-bottom-right-list'>
                        <div className='header-bottom-right-list-parent'><a href="">CLOCKS</a></div>
                        <div className='header-bottom-right-list-parent'><a href="">ACCESSORIES</a></div>
                        <div className='header-bottom-right-list-parent'><a href="">OUR BRANDS</a></div>
                        <div className='header-bottom-right-list-parent'><a href="">WEDDING GIFTS</a></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
