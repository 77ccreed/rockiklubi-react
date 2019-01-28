import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';
import PropTypes from 'prop-types';

import plakat1 from './../../Images/PlakatVarasem/01_05_2010.jpg';
import plakat3 from './../../Images/PlakatVarasem/01_10_2011.jpg';
import plakat4 from './../../Images/PlakatVarasem/01_11_2013.jpg';
import plakat5 from './../../Images/PlakatVarasem/02_03_2012.jpg';
import plakat6 from './../../Images/PlakatVarasem/02_04_2011.jpg';
import plakat7 from './../../Images/PlakatVarasem/02_09_2011.jpg';
import plakat8 from './../../Images/PlakatVarasem/02_10_2015.jpg';
import plakat9 from './../../Images/PlakatVarasem/02_12_2011.jpg';
import plakat10 from './../../Images/PlakatVarasem/02_23_2018.jpg';
import plakat11 from './../../Images/PlakatVarasem/03_03_2018.jpg';
import plakat12 from './../../Images/PlakatVarasem/03_09_2010.jpg';
import plakat13 from './../../Images/PlakatVarasem/04_01_2014.jpg';
import plakat14 from './../../Images/PlakatVarasem/04_03_2017.jpg';
import plakat15 from './../../Images/PlakatVarasem/04_06_2010.jpg';
import plakat16 from './../../Images/PlakatVarasem/04_12_2010.jpg';
import plakat17 from './../../Images/PlakatVarasem/05_02_10.jpg';
import plakat18 from './../../Images/PlakatVarasem/05_02_2011.jpg';
import plakat19 from './../../Images/PlakatVarasem/05_09_2015.jpg';
import plakat20 from './../../Images/PlakatVarasem/05_10_2012.jpg';
import plakat21 from './../../Images/PlakatVarasem/05_11_2010.jpg';
import plakat22 from './../../Images/PlakatVarasem/05_11_2016.jpg';
import plakat23 from './../../Images/PlakatVarasem/05_12_2015.jpg';
import plakat24 from './../../Images/PlakatVarasem/06_01_2012.jpg';
import plakat25 from './../../Images/PlakatVarasem/06_05_2016.jpg';
import plakat26 from './../../Images/PlakatVarasem/06_11_2015.jpg';
import plakat27 from './../../Images/PlakatVarasem/06_12_13.jpg';
import plakat28 from './../../Images/PlakatVarasem/06_12_2014.jpg';
import plakat29 from './../../Images/PlakatVarasem/07_02_09.jpg';
import plakat30 from './../../Images/PlakatVarasem/07_04_2018.jpg';
import plakat31 from './../../Images/PlakatVarasem/07_09_2018.jpg';
import plakat32 from './../../Images/PlakatVarasem/08_09_2017.jpg';
import plakat33 from './../../Images/PlakatVarasem/08_10_2011.jpg';
import plakat34 from './../../Images/PlakatVarasem/08_11_2014.jpg';
import plakat35 from './../../Images/PlakatVarasem/09.11.2018.jpg';
import plakat36 from './../../Images/PlakatVarasem/09_04_2010.jpg';
import plakat37 from './../../Images/PlakatVarasem/09_06_2012.jpg';
import plakat38 from './../../Images/PlakatVarasem/09_09_2016.jpg';
import plakat39 from './../../Images/PlakatVarasem/09_10_09.jpg';
import plakat40 from './../../Images/PlakatVarasem/11_04_09.jpg';
import plakat41 from './../../Images/PlakatVarasem/11_05_2018.jpg';
import plakat42 from './../../Images/PlakatVarasem/11_09_09.jpg';
import plakat43 from './../../Images/PlakatVarasem/12_03_10.jpg';
import plakat44 from './../../Images/PlakatVarasem/12_03_2011.jpg';
import plakat45 from './../../Images/PlakatVarasem/12_05_2012v.jpg';
import plakat46 from './../../Images/PlakatVarasem/12_05_2017.jpg';
import plakat47 from './../../Images/PlakatVarasem/13_04_2013.jpg';
import plakat48 from './../../Images/PlakatVarasem/13_10_2017.jpg';
import plakat49 from './../../Images/PlakatVarasem/13_11_09.jpg';
import plakat50 from './../../Images/PlakatVarasem/14_04_2017.jpg';
import plakat51 from './../../Images/PlakatVarasem/14_05_2010.jpg';
import plakat52 from './../../Images/PlakatVarasem/14_05_2011.jpg';
import plakat53 from './../../Images/PlakatVarasem/14_05_2016.jpg';
import plakat54 from './../../Images/PlakatVarasem/15_04_2016.jpg';
import plakat55 from './../../Images/PlakatVarasem/16_01_10.jpg';
import plakat56 from './../../Images/PlakatVarasem/16_05_09.jpg';
import plakat57 from './../../Images/PlakatVarasem/16_05_2014.jpg';
import plakat58 from './../../Images/PlakatVarasem/16_08_2013.jpg';
import plakat59 from './../../Images/PlakatVarasem/17_02_2017.jpg';
import plakat60 from './../../Images/PlakatVarasem/17_04_2015.jpg';
import plakat61 from './../../Images/PlakatVarasem/17_08_2012.jpg';
import plakat62 from './../../Images/PlakatVarasem/17_10_09.jpg';
import plakat63 from './../../Images/PlakatVarasem/18_03_2016.jpg';
import plakat64 from './../../Images/PlakatVarasem/18_09_2010.jpg';
import plakat65 from './../../Images/PlakatVarasem/19_02_10.jpg';
import plakat66 from './../../Images/PlakatVarasem/19_03_2011.jpg';
import plakat67 from './../../Images/PlakatVarasem/20_01_2017.jpg';
import plakat68 from './../../Images/PlakatVarasem/20_02_09.jpg';
import plakat69 from './../../Images/PlakatVarasem/20_03_09.jpg';
import plakat70 from './../../Images/PlakatVarasem/20_11_2010.jpg';
import plakat71 from './../../Images/PlakatVarasem/21_01_2011.jpg';
import plakat72 from './../../Images/PlakatVarasem/21_01_2012.jpg';
import plakat73 from './../../Images/PlakatVarasem/21_04_2012.jpg';
import plakat74 from './../../Images/PlakatVarasem/21_05_2011.jpg';
import plakat75 from './../../Images/PlakatVarasem/21_09_2013.jpg';
import plakat76 from './../../Images/PlakatVarasem/22_08_2014.jpg';
import plakat77 from './../../Images/PlakatVarasem/23_04_2011.jpg';
import plakat78 from './../../Images/PlakatVarasem/23_07_09.jpg';
import plakat79 from './../../Images/PlakatVarasem/23_09_2011.jpg';
import plakat80 from './../../Images/PlakatVarasem/24_05_2013.jpg';
import plakat81 from './../../Images/PlakatVarasem/25_04_09.jpg';
import plakat82 from './../../Images/PlakatVarasem/25_09_09.jpg';
import plakat83 from './../../Images/PlakatVarasem/26_02_10.jpg';
import plakat84 from './../../Images/PlakatVarasem/26_02_2011.jpg';
import plakat85 from './../../Images/PlakatVarasem/26_03_10.jpg';
import plakat86 from './../../Images/PlakatVarasem/26_03_2016.jpg';
import plakat87 from './../../Images/PlakatVarasem/26_04_2013.jpg';
import plakat88 from './../../Images/PlakatVarasem/26_04_2014.jpg';
import plakat89 from './../../Images/PlakatVarasem/26_11_2011.jpg';
import plakat90 from './../../Images/PlakatVarasem/26_11_2016.jpg';
import plakat93 from './../../Images/PlakatVarasem/27_11_2010.jpg';
import plakat94 from './../../Images/PlakatVarasem/28_03_09.jpg';
import plakat95 from './../../Images/PlakatVarasem/28_10_2011.jpg';
import plakat96 from './../../Images/PlakatVarasem/28_10_2017.jpg';
import plakat97 from './../../Images/PlakatVarasem/28_11_09.jpg';
import plakat98 from './../../Images/PlakatVarasem/29_05_09.jpg';
import plakat99 from './../../Images/PlakatVarasem/29_05_2010.jpg';
import plakat100 from './../../Images/PlakatVarasem/30_03_2018.jpg';
import plakat101 from './../../Images/PlakatVarasem/30_06_2012.jpg';
import plakat102 from './../../Images/PlakatVarasem/30_10_2010.jpg';
import plakat103 from './../../Images/PlakatVarasem/31_01_09.jpg';
import plakat104 from './../../Images/PlakatVarasem/6_12_09.jpg';
import plakat105 from './../../Images/PlakatVarasem/BAND_TOUR_2010.jpg';
import plakat106 from './../../Images/PlakatVarasem/BANDTOUR2011.jpg';
import plakat107 from './../../Images/PlakatVarasem/noor_rock.jpg';
import plakat108 from './../../Images/PlakatVarasem/noor_rock_2011.jpg';
import plakat109 from './../../Images/PlakatVarasem/tour2009.jpg';
import plakat110 from './../../Images/PlakatVarasem/tourmentandfun.jpg';

const items = [
  {
    src: plakat1,
    altText: '01.05.2010',
  },
  {
    src: plakat3,
    altText: '01.10.2011',
  },
  {
    src: plakat4,
    altText: '01.11.2013',
  },
  {
    src: plakat5,
    altText: '02.03.2012',
  },
  {
    src: plakat6,
    altText: '02.04.2011',
  },
  {
    src: plakat7,
    altText: '02.09.2011',
  },
  {
    src: plakat8,
    altText: '02.10.2015',
  },
  {
    src: plakat9,
    altText: '02.12.2011',
  },
  {
    src: plakat10,
    altText: '02.23.2018',
  },
  {
    src: plakat11,
    altText: '03.03.2018',
  },
  {
    src: plakat12,
    altText: '03.09.2010',
  },
  {
    src: plakat13,
    altText: '04.01.2014',
  },
  {
    src: plakat14,
    altText: '04.03.2017',
  },
  {
    src: plakat15,
    altText: '04.06.2010',
  },
  {
    src: plakat16,
    altText: '04.12.2010',
  },
  {
    src: plakat17,
    altText: '04.12.2010',
  },
  {
    src: plakat18,
    altText: '05.02.2010',
  },
  {
    src: plakat19,
    altText: '05.02.2011',
  },
  {
    src: plakat20,
    altText: '05.09.2015',
  },
  {
    src: plakat21,
    altText: '05.10.2012',
  },
  {
    src: plakat22,
    altText: '05.11.2010',
  },
  {
    src: plakat23,
    altText: '05.11.2016',
  },
  {
    src: plakat24,
    altText: '05.12.2015',
  },
  {
    src: plakat25,
    altText: '06.01.2012',
  },
  {
    src: plakat26,
    altText: '06.05.2016',
  },
  {
    src: plakat27,
    altText: '06.11.2015',
  },
  {
    src: plakat28,
    altText: '06.12.2009',
  },
  {
    src: plakat29,
    altText: '06.12.2013',
  },
  {
    src: plakat30,
    altText: '06.12.2014',
  },
  {
    src: plakat31,
    altText: '07.02.2009',
  },
  {
    src: plakat32,
    altText: '07.04.2018',
  },
  {
    src: plakat33,
    altText: '07.09.2018',
  },
  {
    src: plakat34,
    altText: '08.09.2017',
  },
  {
    src: plakat35,
    altText: '08.10.2011',
  },
  {
    src: plakat36,
    altText: '08.11.2014',
  },
  {
    src: plakat37,
    altText: '09.04.2010',
  },
  {
    src: plakat38,
    altText: '09.06.2012',
  },
  {
    src: plakat39,
    altText: '09.09.2016',
  },
  {
    src: plakat40,
    altText: '09.10.2009',
  },
  {
    src: plakat41,
    altText: '09.11.2018',
  },
  {
    src: plakat42,
    altText: '11.04.2009',
  },
  {
    src: plakat43,
    altText: '11.05.2018',
  },
  {
    src: plakat44,
    altText: '11.09.2009',
  },
  {
    src: plakat45,
    altText: '12.03.2010',
  },
  {
    src: plakat46,
    altText: '12.03.2011',
  },
  {
    src: plakat47,
    altText: '12.05.2012',
  },
  {
    src: plakat48,
    altText: '12.05.2017',
  },
  {
    src: plakat49,
    altText: '13.04.2013',
  },
  {
    src: plakat50,
    altText: '13.10.2017',
  },
  {
    src: plakat51,
    altText: '13.11.2009',
  },
  {
    src: plakat52,
    altText: '14.04.2017',
  },
  {
    src: plakat53,
    altText: '14.05.2010',
  },
  {
    src: plakat54,
    altText: '14.05.2011',
  },
  {
    src: plakat55,
    altText: '14.05.2016',
  },
  {
    src: plakat56,
    altText: '15.04.2016',
  },
  {
    src: plakat57,
    altText: '16.01.2010',
  },
  {
    src: plakat58,
    altText: '16.05.2009',
  },
  {
    src: plakat59,
    altText: '16.05.2014',
  },
  {
    src: plakat60,
    altText: '16.08.2013',
  },
  {
    src: plakat61,
    altText: '17.02.2017',
  },
  {
    src: plakat62,
    altText: '17.04.2015',
  },
  {
    src: plakat63,
    altText: '17.08.2012',
  },
  {
    src: plakat64,
    altText: '17.10.2009',
  },
  {
    src: plakat65,
    altText: '18.03.2016',
  },
  {
    src: plakat66,
    altText: '18.09.2010',
  },
  {
    src: plakat67,
    altText: '19.02.2010',
  },
  {
    src: plakat68,
    altText: '19.03.2011',
  },
  {
    src: plakat69,
    altText: '20.01.2017',
  },
  {
    src: plakat70,
    altText: '20.02.2009',
  },
  {
    src: plakat71,
    altText: '20.03.2009',
  },
  {
    src: plakat72,
    altText: '20.11.2010',
  },
  {
    src: plakat73,
    altText: '21.01.2011',
  },
  {
    src: plakat74,
    altText: '21.01.2012',
  },
  {
    src: plakat75,
    altText: '21.04.2012',
  },
  {
    src: plakat76,
    altText: '21.05.2011',
  },
  {
    src: plakat77,
    altText: '21.09.2013',
  },
  {
    src: plakat78,
    altText: '22.08.2014',
  },
  {
    src: plakat79,
    altText: '23.04.2011',
  },
  {
    src: plakat80,
    altText: '23.07.2009',
  },
  {
    src: plakat81,
    altText: '23.09.2011',
  },
  {
    src: plakat82,
    altText: '24.05.2013',
  },
  {
    src: plakat83,
    altText: '05.04.2009',
  },
  {
    src: plakat84,
    altText: '25.09.2009',
  },
  {
    src: plakat85,
    altText: '26.02.2010',
  },
  {
    src: plakat86,
    altText: '26.02.2011',
  },
  {
    src: plakat87,
    altText: '26.03.2010',
  },
  {
    src: plakat88,
    altText: '26.03.2016',
  },
  {
    src: plakat89,
    altText: '27.11.2010',
  },
  {
    src: plakat90,
    altText: '28.03.2009',
  },
  {
    src: plakat93,
    altText: '28.10.2011',
  },
  {
    src: plakat94,
    altText: '28.10.2017',
  },
  {
    src: plakat95,
    altText: '28.11.2009',
  },
  {
    src: plakat96,
    altText: '29.05.2009',
  },
  {
    src: plakat97,
    altText: '29.05.2010',
  },
  {
    src: plakat98,
    altText: '30.03.2018',
  },
  {
    src: plakat99,
    altText: '30.06.2012',
  },
  {
    src: plakat100,
    altText: '30.10.2010',
  },
  {
    src: plakat101,
    altText: '31.01.2009',
  },
  {
    src: plakat102,
    altText: 'Band Tour 2010',
  },
  {
    src: plakat103,
    altText: 'Band Tour 2011',
  },
  {
    src: plakat104,
    altText: 'Noor-rock 2011',
  },
  {
    src: plakat105,
    altText: 'Noor-rock',
  },
  {
    src: plakat106,
    altText: 'Band Tour 2009',
  },
  {
    src: plakat107,
    altText: 'Tournament & Fun',
  },
  {
    src: plakat108,
    altText: 'Plakat 108',
  },
  {
    src: plakat109,
    altText: 'Plakat 109',
  },
  {
    src: plakat110,
    altText: 'Plakat 110',
  }
];

class VarasemUritused extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default VarasemUritused;

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: PropTypes.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: PropTypes.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: PropTypes.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: PropTypes.bool,
  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: PropTypes.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: PropTypes.oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  children: PropTypes.array,
  // called when the mouse enters the Carousel
  mouseEnter: PropTypes.func,
  // called when the mouse exits the Carousel
  mouseLeave: PropTypes.func,
  // controls whether the slide animation on the Carousel works or not
  slide: PropTypes.bool,
  cssModule: PropTypes.object,
};

CarouselItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  in: PropTypes.bool,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  slide: PropTypes.bool,
};

CarouselControl.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  cssModule: PropTypes.object,
  directionText: PropTypes.string
};