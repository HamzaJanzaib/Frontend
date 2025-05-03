import React from 'react'
import TopStrip from '../Components/Header/TopStrip'
import CenterBar from '../Components/Header/CenterBar'
import BottumBar from '../Components/Header/BottumBar'

const Header = () => {
  return (
    <div>
      <TopStrip />
      <CenterBar />
      <BottumBar />
    </div>
  )
}

export default Header