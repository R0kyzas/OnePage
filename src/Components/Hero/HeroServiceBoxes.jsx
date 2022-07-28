import React from 'react';
import { Icon } from '@iconify/react';

const HeroServiceBoxes = (props) => {
    return (
        <div className='col-md-6 col-lg-3 d-flex mb-5 mb-lg-0'>
            <div className='service-box'>
                <div className='icon'>
                            <Icon icon={props.iconText} />
                        </div>
                        <h4 className='title'>
                            <a href='#'>{props.titleText}</a>
                        </h4>
                        <p className='description'>
                            {props.descriptionText}
                        </p>
                </div>
        </div>
    );
  }
  
  export default HeroServiceBoxes;