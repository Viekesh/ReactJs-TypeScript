import React from 'react'
import Navigation from './Navigation';

const Header = ({active, setActive}) => {
  return (
    <>
        <Navigation active={active} setActive={setActive} />
    </>
  )
}

export default Header;