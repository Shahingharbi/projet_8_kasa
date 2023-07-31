import React from "react"
import Banner from "../../components/banner"
import Card from "../../components/card"
import banniere from '../../assets/images/Image_source.png';


function Home () {
  return (
    <main>
        <Banner 
        image={banniere}
        text='Chez vous, partout, et ailleurs'
        />
        <Card />
    </main>
  )
}

export default Home
