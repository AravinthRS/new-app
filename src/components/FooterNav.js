import React from 'react'
import {ImSpinner9} from 'react-icons/im'
import {MdPayment} from 'react-icons/md'
import {CiShop} from 'react-icons/ci'
import {RiCompassDiscoverLine} from 'react-icons/ri'
import {FiMessageSquare} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function FooterNav() {
    const navigate = useNavigate()
  return (
    <div className='footer'>
        <div className='footerIcons' onClick={() => navigate('/')}>
            <ImSpinner9 className='icon' />
            <p className='menu'>manage</p>
        </div>
        <div className='footerIcons' onClick={() => navigate('/pay')}>
            <MdPayment className='icon' />
            <p className='menu'>pay</p>
        </div>
        <div className='footerIcons' onClick={() => navigate('/shop')}>
            <CiShop className='icon'/>
            <p className='menu'>shop</p>
        </div>
        <div className='footerIcons' onClick={() => navigate('/discover')}>
            <RiCompassDiscoverLine className='icon'/>
            <p className='menu'>discover</p>
        </div>
        <div className='footerIcons' onClick={() => navigate('/help')}>
            <FiMessageSquare className='icon'/>
            <p className='menu'>help</p>
        </div>
    </div>
  )
}

export default FooterNav