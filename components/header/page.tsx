'use client';
import React from 'react'
import "./index.scss";
import Image from 'next/image';
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className='menu-header'>
                    <div className="header-left">
                        <div className="logo">
                            <Image width={100} height={100} src={'../../images/logo.svg'} alt="logo" />
                        </div>
                        <div className="select">
                            <div className='select-logo'>
                                <Image width={100} height={100} src={"../../images/icon-word.png"} alt="logo-word" />
                            </div>
                            <select className='select-provider' name="provider" id="provider" value="1" onChange={() => { }}>
                                <option value="1">Provider</option>
                            </select>
                        </div>
                    </div>

                    <div className='header-right'>
                        <div className='icon-bell'>
                            <Image width={100} height={100} src={"../../images/bell.svg"} alt="bell" />
                        </div>
                        <div className='account'>
                            <Image width={100} height={100} src={"../../images/account.svg "} alt="account-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header