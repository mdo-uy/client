import React from 'react';
import LogoWhite from '../../../../assets/img/png/logo-white.png';
import SocialLinks from '../../SocialLinks';

import './MyInfo.scss';

export default function MyInfo() {
    return (
        <div className='my-info'>
            <img src={LogoWhite} alt='logo' />
            <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu convallis tellus, at pulvinar est. Cras mauris tellus, varius vel laoreet eu, convallis consectetur ipsum. Curabitur nec dui ac sapien tincidunt maximus.
            </h4>
            <SocialLinks />
        </div>
    )
}
