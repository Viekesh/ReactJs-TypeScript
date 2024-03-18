import React from 'react'
import Navigation from './Navigation';



const Header = ({active, setActive, user, setUser}) => {

  // const userId = user?.uid;
  // console.log("userId", userId);
  // console.log("name", user?.displayName);

  return (
    <>
        <Navigation active={active} setActive={setActive} user={user} setUser={setUser} />
    </>
  )
}

export default Header;