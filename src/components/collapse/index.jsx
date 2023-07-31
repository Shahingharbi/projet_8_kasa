import React, { useState } from 'react';
import chevronHaut from '../../assets/images/chevron_haut.png';
import chevronBas from '../../assets/images/chevron_bas.png';

function Collapse({ titre, description }) {
  const [estDeplie, CollapseDesplie] = useState(false);

  const basculerAffichage = () => {
    CollapseDesplie(!estDeplie);
  };

  return (
    <div className='collapse'>
      <div className='collapse__visible' >
        <h2 className='collapse__title'>{titre}</h2>
        <img className='collapse__image' src={estDeplie ? chevronBas : chevronHaut} alt="chevron" onClick={basculerAffichage}/>
      </div>
      {estDeplie && (
        <div className='collapse__cacher'>
          <p className='collapse__description'>{description}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
