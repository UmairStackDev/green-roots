import React from 'react'
import "./NewHome.css"
import NewHeader from './Components/NewHeader/NewHeader'
import NewBanner from './Components/NewBanner/NewBanner'
import NewQuickShop from './Components/NewQuickShop/NewQuickShop'
import NewImages from './Components/NewImages/NewImages'
import NewCards from './Components/NewCards/NewCards'
import Footer from '../Footer'
import PopupComponent from "../../Modal/PopupComponent";
function NewHome() {
  return (
    <div>
          <PopupComponent />
      <NewHeader/>
      <NewBanner/>
      <NewQuickShop/>
      <NewImages/>
      <NewCards/>
      <Footer/>
    </div>
  )
}

export default NewHome
