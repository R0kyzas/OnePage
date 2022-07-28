import React from 'react';
import HeroServiceBoxes from './HeroServiceBoxes';

const HeroServices = () => {
    return (
         <div className='row service-boxes'>
            <HeroServiceBoxes 
                iconText='ri:stack-line' 
                titleText='Lorem Ipsum'
                descriptionText='Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
            />
            <HeroServiceBoxes 
                iconText='ri:palette-line'
                titleText='Sed ut perspiciatis'
                descriptionText='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
            />
            <HeroServiceBoxes 
                iconText='ri:command-line' 
                titleText='Magni Dolores'
                descriptionText='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
            />
            <HeroServiceBoxes 
                iconText='ri:fingerprint-line'
                titleText='Nemo Enim'
                descriptionText='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
            />
         </div>
    );
  }
  
  export default HeroServices;