import React, { useState } from 'react';
import chevronHaut from '../../assets/images/chevron_haut.png';
import chevronBas from '../../assets/images/chevron_bas.png';
import { useLocation } from 'react-router-dom';

function Collapse({ titre, description }) {
  const [estDeplie, CollapseDesplie] = useState(false);
  const location = useLocation();

  const basculerAffichage = () => {
    CollapseDesplie(!estDeplie);
  };

  // Vérifier si la page est celle du logement
  const LogementPage = location.pathname.includes('/logement/');

  return (
    <div className= "collapse">
      <div className={`${LogementPage ? 'collapse__logementvisible' : 'collapse__visible'}`} >
        <h2 className='collapse__title'>{titre}</h2>
        <img className='collapse__image' src={estDeplie ? chevronBas : chevronHaut} alt="chevron" onClick={basculerAffichage}/>
      </div>
      {estDeplie && (
        <div className={` ${LogementPage ? 'collapse__logementcacher' : 'collapse__cacher'}`}>
          {Array.isArray(description) ? (
            <ul>
              {description.map((equipments, index) => (
                <li key={`${index}-${equipments}`} className='collapse__liste'>{equipments}</li>
              ))}
            </ul>
          ) : (
            <p className='collapse__description'>{description}</p>
          )}
          
        </div>
      )}
    </div>
  );
}

export default Collapse;
