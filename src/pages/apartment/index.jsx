import React from 'react'
import Carrousel from '../../components/carrousel'
import { useParams } from 'react-router-dom'
import Info from '../../components/info';
import data from "../../assets/data/logement.json"
import Tag from '../../components/tag';
import Collapse from '../../components/collapse';
import Host from '../../components/host';
import Rate from '../../components/rate';
import Error from '../../components/error';

function Apartment() {
  const { id } = useParams();
  const appartementCourant = data.find(appartement => appartement.id === id)

  if (!appartementCourant) {
    return (
      <Error />
    )
  }
  return (
    <main>
      <Carrousel logementId ={id}
       />
       <section className='info__content'>

        <div className='info__gauche'>
       <Info 
       titre = {appartementCourant.title}
       localisation = {appartementCourant.location}
       /> 

       <Tag 
       tags = {appartementCourant.tags}
       />
       </div>

        <div className='info__droite'>
       <Host
       nom={appartementCourant.host.name}
       photo={appartementCourant.host.picture}
       />

       <Rate 
       etoile ={appartementCourant.rating}
       />
       </div>

       </section>

        <section className='collapse__content'>
          <div className='collapse__gauche'>

       <Collapse 
       titre="Description"
       description= {appartementCourant.description}
       />
        </div>

        <div className='collapse__droite'>
       <Collapse 
      
       titre ="Équipements"
       description = {appartementCourant.equipments}
       />
       </div>
        </section>

    </main>
  )
}

export default Apartment