import React, { useState, useEffect } from 'react';
import chevronGauche from '../../assets/images/chevron_gauche.png';
import chevronDroite from '../../assets/images/chevron_droite.png';
import data from '../../assets/data/logement.json';

function Carrousel(props) {
  const [premiereImage, setPremiereImage] = useState(0);
  const [logement, setLogement] = useState(null);

  const logementId = props.logementId;

  useEffect(() => {
    const logementCourant = data.find((appartement) => appartement.id === logementId);

    if (logementCourant) {
      setLogement(logementCourant);
      setPremiereImage(0);
    }
  }, [logementId]);

  const imagePrecedente = () => {
    if (premiereImage === 0) {
      setPremiereImage(logement.pictures.length - 1);
    } else {
      setPremiereImage(premiereImage - 1);
    }
  };

  const imageSuivante = () => {
    if (premiereImage === logement.pictures.length - 1) {
      setPremiereImage(0);
    } else {
      setPremiereImage(premiereImage + 1);
    }
  };

  if (!logement) {
    return <div>Loading...</div>;
  }

  return (
    <section className='carrousel'>
      <img 
        className='carrousel__flechegauche'
        src={chevronGauche} 
        alt="chevron gauche" 
        onClick={imagePrecedente} 
      />
      <img 
        className='carrousel__flechedroite'
        src={chevronDroite} 
        alt="chevron droite" 
        onClick={imageSuivante} 
      />
      <div className='carrousel__container'>
        <img 
        className='carrousel__image'
        src={logement.pictures[premiereImage]} 
        alt={logement.title} 
        />
        <p className='carrousel__numero'>
        {premiereImage + 1}/{logement.pictures.length}
        </p>
      </div>
    </section>
  );
}

export default Carrousel;
