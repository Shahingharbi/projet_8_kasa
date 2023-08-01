import React from 'react'
import chevronGauche from '../../assets/images/chevron_gauche.png'
import chevronDroite from '../../assets/images/chevron_droite.png'

function Carrousel() {
  return (
    <section>
        <img src={chevronGauche} alt="chevron gauche" />
        <img src={chevronDroite} alt="chevron droite" />
    </section>
  )
}

export default Carrousel