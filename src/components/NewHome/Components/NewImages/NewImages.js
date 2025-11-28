import React from 'react'
import "./NewImages.css"
import medicine from "../../../../assets/medicines-category-greenrootspk.com_.jpg"
import health from "../../../../assets/Health and Beauty.png"
import hearbs from "../../../../assets/greenrootspk.com-herbs-spices-category-image.8976729bb4d9f5660063.jpg"
import ess from "../../../../assets/greenrootspk.com-essiential-oils-category-ad.160449a266289e3c8a85.jpg"
import nat from "../../../../assets/greenrootspk.com-natural-oils-category-ad.2b698b308efb29e44317.jpg"


import { Container } from 'react-bootstrap'
function NewImages() {
  return (
    <div>
        <Container>
      <main className='new_images'>
        <div className="one_image">
          <img src={medicine} alt="" />
        </div>
        <div className="four_image">
            <div className="two_images">
            <img src={health} alt="" />
            <img src={hearbs} alt="" />
            </div>
            <div className="two_images my-3">
            <img src={ess} alt="" />
            <img src={nat} alt="" />
            </div>
        </div>
      </main>
      </Container>
    </div>
  )
}

export default NewImages
