import React from 'react'
import {FiMenu, FiX} from 'react-icons/fi'

const MenuButton = ({menuOpen, toogleMenu}) => {
  return (
    <>
    <button className='text-primary md:hidden z-101 text-3xl'
    style={{zIndex: "1000"}}
    onClick={toogleMenu}>
    {menuOpen ? <FiX /> : <FiMenu />}
    </button>
    </>
  )
}

export default MenuButton