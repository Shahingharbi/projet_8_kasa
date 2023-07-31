import React from 'react'
import Banner from '../../components/banner'
import BanniereAbout from '../../assets/images/image_source2.png'
import Collapse from '../../components/collapse'
import data from '../../assets/data/about.json'

function About() {
  return (
    <main>
        <Banner 
        image={BanniereAbout}
        />
        
          {data.map((collapse , element) => (
          <Collapse 
          key={element} 
          titre = {collapse.title} 
          description={collapse.description}
          />
          ))}
        
        
    </main>
  )
}

export default About