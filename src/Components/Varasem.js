import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import plakat from './../Css/Images/09.11.2018.jpg';

console.log(plakat);

const items = [
  {
    src: { plakat },
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  }
];

const VarasemUritused = () => <UncontrolledCarousel items={items} />;

export default VarasemUritused;