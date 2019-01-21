import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';
import PropTypes from 'prop-types';

import plakat1 from './../Images/PlakatVarasem/01_05_2010.jpg';
import plakat2 from './../Images/PlakatVarasem/01_05_2011.jpg';
import plakat3 from './../Images/PlakatVarasem/01_10_2011.jpg';
import plakat4 from './../Images/PlakatVarasem/01_11_2013.jpg';
import plakat5 from './../Images/PlakatVarasem/02_03_2012.jpg';
import plakat6 from './../Images/PlakatVarasem/02_04_2011.jpg';
import plakat7 from './../Images/PlakatVarasem/02_09_2011.jpg';
import plakat8 from './../Images/PlakatVarasem/02_10_2015.jpg';
import plakat9 from './../Images/PlakatVarasem/02_12_2011.jpg';
import plakat10 from './../Images/PlakatVarasem/02_23_2018.jpg';
import plakat11 from './../Images/PlakatVarasem/03_03_2018.jpg';
import plakat12 from './../Images/PlakatVarasem/03_09_2010.jpg';
import plakat13 from './../Images/PlakatVarasem/04_01_2014.jpg';
import plakat14 from './../Images/PlakatVarasem/04_03_2017.jpg';
import plakat15 from './../Images/PlakatVarasem/04_06_2010.jpg';
import plakat16 from './../Images/PlakatVarasem/04_12_2010.jpg';
import plakat17 from './../Images/PlakatVarasem/05_02_10.jpg';
import plakat18 from './../Images/PlakatVarasem/05_02_2011.jpg';
import plakat19 from './../Images/PlakatVarasem/05_09_2015.jpg';
import plakat20 from './../Images/PlakatVarasem/05_10_2012.jpg';
import plakat21 from './../Images/PlakatVarasem/05_11_2010.jpg';
import plakat22 from './../Images/PlakatVarasem/05_11_2016.jpg';
import plakat23 from './../Images/PlakatVarasem/05_12_2015.jpg';
import plakat24 from './../Images/PlakatVarasem/06_01_2012.jpg';
import plakat25 from './../Images/PlakatVarasem/06_05_2016.jpg';
import plakat26 from './../Images/PlakatVarasem/06_11_2015.jpg';
import plakat27 from './../Images/PlakatVarasem/06_12_13.jpg';
import plakat28 from './../Images/PlakatVarasem/06_12_2014.jpg';
import plakat29 from './../Images/PlakatVarasem/07_02_09.jpg';
import plakat30 from './../Images/PlakatVarasem/07_04_2018.jpg';
import plakat31 from './../Images/PlakatVarasem/07_09_2018.jpg';
import plakat32 from './../Images/PlakatVarasem/08_09_2017.jpg';
import plakat33 from './../Images/PlakatVarasem/08_10_2011.jpg';
import plakat34 from './../Images/PlakatVarasem/08_11_2014.jpg';
import plakat35 from './../Images/PlakatVarasem/09.11.2018.jpg';
import plakat36 from './../Images/PlakatVarasem/09_04_2010.jpg';
import plakat37 from './../Images/PlakatVarasem/09_06_2012.jpg';
import plakat38 from './../Images/PlakatVarasem/09_09_2016.jpg';
import plakat39 from './../Images/PlakatVarasem/09_10_09.jpg';
import plakat40 from './../Images/PlakatVarasem/11_04_09.jpg';
import plakat41 from './../Images/PlakatVarasem/11_05_2018.jpg';
import plakat42 from './../Images/PlakatVarasem/11_09_09.jpg';
import plakat43 from './../Images/PlakatVarasem/12_03_10.jpg';
import plakat44 from './../Images/PlakatVarasem/12_03_2011.jpg';
import plakat45 from './../Images/PlakatVarasem/12_05_2012v.jpg';
import plakat46 from './../Images/PlakatVarasem/12_05_2017.jpg';
import plakat47 from './../Images/PlakatVarasem/13_04_2013.jpg';
import plakat48 from './../Images/PlakatVarasem/13_10_2017.jpg';
import plakat49 from './../Images/PlakatVarasem/13_11_09.jpg';
import plakat50 from './../Images/PlakatVarasem/14_04_2017.jpg';
import plakat51 from './../Images/PlakatVarasem/14_05_2010.jpg';
import plakat52 from './../Images/PlakatVarasem/14_05_2011.jpg';
import plakat53 from './../Images/PlakatVarasem/14_05_2016.jpg';
import plakat54 from './../Images/PlakatVarasem/15_04_2016.jpg';
import plakat55 from './../Images/PlakatVarasem/16_01_10.jpg';
import plakat56 from './../Images/PlakatVarasem/16_05_09.jpg';
import plakat57 from './../Images/PlakatVarasem/16_05_2014.jpg';
import plakat58 from './../Images/PlakatVarasem/16_08_2013.jpg';
import plakat59 from './../Images/PlakatVarasem/17_02_2017.jpg';
import plakat60 from './../Images/PlakatVarasem/17_04_2015.jpg';
import plakat61 from './../Images/PlakatVarasem/17_08_2012.jpg';
import plakat62 from './../Images/PlakatVarasem/17_10_09.jpg';
import plakat63 from './../Images/PlakatVarasem/18_03_2016.jpg';
import plakat64 from './../Images/PlakatVarasem/18_09_2010.jpg';
import plakat65 from './../Images/PlakatVarasem/19_02_10.jpg';
import plakat66 from './../Images/PlakatVarasem/19_03_2011.jpg';
import plakat67 from './../Images/PlakatVarasem/20_01_2017.jpg';
import plakat68 from './../Images/PlakatVarasem/20_02_09.jpg';
import plakat69 from './../Images/PlakatVarasem/20_03_09.jpg';
import plakat70 from './../Images/PlakatVarasem/20_11_2010.jpg';
import plakat71 from './../Images/PlakatVarasem/21_01_2011.jpg';
import plakat72 from './../Images/PlakatVarasem/21_01_2012.jpg';
import plakat73 from './../Images/PlakatVarasem/21_04_2012.jpg';
import plakat74 from './../Images/PlakatVarasem/21_05_2011.jpg';
import plakat75 from './../Images/PlakatVarasem/21_09_2013.jpg';
import plakat76 from './../Images/PlakatVarasem/22_08_2014.jpg';
import plakat77 from './../Images/PlakatVarasem/23_04_2011.jpg';
import plakat78 from './../Images/PlakatVarasem/23_07_09.jpg';
import plakat79 from './../Images/PlakatVarasem/23_09_2011.jpg';
import plakat80 from './../Images/PlakatVarasem/24_05_2013.jpg';
import plakat81 from './../Images/PlakatVarasem/25_04_09.jpg';
import plakat82 from './../Images/PlakatVarasem/25_09_09.jpg';
import plakat83 from './../Images/PlakatVarasem/26_02_10.jpg';
import plakat84 from './../Images/PlakatVarasem/26_02_2011.jpg';
import plakat85 from './../Images/PlakatVarasem/26_03_10.jpg';
import plakat86 from './../Images/PlakatVarasem/26_03_2016.jpg';
import plakat87 from './../Images/PlakatVarasem/26_04_2013.jpg';
import plakat88 from './../Images/PlakatVarasem/26_04_2014.jpg';
import plakat89 from './../Images/PlakatVarasem/26_11_2011.jpg';
import plakat90 from './../Images/PlakatVarasem/26_11_2016.jpg';
import plakat93 from './../Images/PlakatVarasem/27_11_2010.jpg';
import plakat94 from './../Images/PlakatVarasem/28_03_09.jpg';
import plakat95 from './../Images/PlakatVarasem/28_10_2011.jpg';
import plakat96 from './../Images/PlakatVarasem/28_10_2017.jpg';
import plakat97 from './../Images/PlakatVarasem/28_11_09.jpg';
import plakat98 from './../Images/PlakatVarasem/29_05_09.jpg';
import plakat99 from './../Images/PlakatVarasem/29_05_2010.jpg';
import plakat100 from './../Images/PlakatVarasem/30_03_2018.jpg';
import plakat101 from './../Images/PlakatVarasem/30_06_2012.jpg';
import plakat102 from './../Images/PlakatVarasem/30_10_2010.jpg';
import plakat103 from './../Images/PlakatVarasem/31_01_09.jpg';
import plakat104 from './../Images/PlakatVarasem/6_12_09.jpg';
import plakat105 from './../Images/PlakatVarasem/BAND_TOUR_2010.jpg';
import plakat106 from './../Images/PlakatVarasem/BANDTOUR2011.jpg';
import plakat107 from './../Images/PlakatVarasem/noor_rock.jpg';
import plakat108 from './../Images/PlakatVarasem/noor_rock_2011.jpg';
import plakat109 from './../Images/PlakatVarasem/tour2009.jpg';
import plakat110 from './../Images/PlakatVarasem/tourmentandfun.jpg';

const items = [
  {
    src: plakat1,
    altText: 'Slide 1',
  },
  {
    src: plakat2,
    altText: 'Slide 2',
  },
  {
    src: plakat3,
    altText: 'Slide 3',
  },
    {
    src: plakat4,
    altText: 'Slide 1',
  },
  {
    src: plakat5,
    altText: 'Slide 1',
  },
  {
    src: plakat6,
    altText: 'Slide 1',
  },
  {
    src: plakat7,
    altText: 'Slide 1',
  },
  {
    src: plakat8,
    altText: 'Slide 1',
  },
  {
    src: plakat9,
    altText: 'Slide 1',
  },
  {
    src: plakat10,
    altText: 'Slide 1',
  },
  {
    src: plakat11,
    altText: 'Slide 1',
  },
  {
    src: plakat12,
    altText: 'Slide 1',
  },
  {
    src: plakat13,
    altText: 'Slide 1',
  },
  {
    src: plakat14,
    altText: 'Slide 1',
  },
  {
    src: plakat15,
    altText: 'Slide 1',
  },
  {
    src: plakat16,
    altText: 'Slide 1',
  },
  {
    src: plakat17,
    altText: 'Slide 1',
  },
  {
    src: plakat18,
    altText: 'Slide 1',
  },
  {
    src: plakat19,
    altText: 'Slide 1',
  },
  {
    src: plakat20,
    altText: 'Slide 2',
  },
  {
    src: plakat21,
    altText: 'Slide 2',
  },
  {
    src: plakat22,
    altText: 'Slide 2',
  },
  {
    src: plakat23,
    altText: 'Slide 2',
  },
  {
    src: plakat24,
    altText: 'Slide 2',
  },
  {
    src: plakat25,
    altText: 'Slide 2',
  },
  {
    src: plakat26,
    altText: 'Slide 2',
  },
  {
    src: plakat27,
    altText: 'Slide 2',
  },
  {
    src: plakat28,
    altText: 'Slide 2',
  },
  {
    src: plakat29,
    altText: 'Slide 2',
  },
  {
    src: plakat30,
    altText: 'Slide 3',
  },
  {
    src: plakat31,
    altText: 'Slide 3',
  },
  {
    src: plakat32,
    altText: 'Slide 3',
  },
  {
    src: plakat33,
    altText: 'Slide 3',
  },
  {
    src: plakat34,
    altText: 'Slide 3',
  },
  {
    src: plakat35,
    altText: 'Slide 3',
  },
  {
    src: plakat36,
    altText: 'Slide 3',
  },
  {
    src: plakat37,
    altText: 'Slide 3',
  },
  {
    src: plakat38,
    altText: 'Slide 3',
  },
  {
    src: plakat39,
    altText: 'Slide 3',
  },
  {
    src: plakat40,
    altText: 'Slide 1',
  },
  {
    src: plakat41,
    altText: 'Slide 1',
  },
  {
    src: plakat42,
    altText: 'Slide 1',
  },
  {
    src: plakat43,
    altText: 'Slide 1',
  },
  {
    src: plakat44,
    altText: 'Slide 1',
  },
  {
    src: plakat45,
    altText: 'Slide 1',
  },
  {
    src: plakat46,
    altText: 'Slide 1',
  },
  {
    src: plakat47,
    altText: 'Slide 1',
  },
  {
    src: plakat48,
    altText: 'Slide 1',
  },
  {
    src: plakat49,
    altText: 'Slide 1',
  },
  {
    src: plakat50,
    altText: 'Slide 1',
  },
  {
    src: plakat51,
    altText: 'Slide 1',
  },
  {
    src: plakat52,
    altText: 'Slide 1',
  },
  {
    src: plakat53,
    altText: 'Slide 1',
  },
  {
    src: plakat54,
    altText: 'Slide 1',
  },
  {
    src: plakat55,
    altText: 'Slide 1',
  },
  {
    src: plakat56,
    altText: 'Slide 1',
  },
  {
    src: plakat57,
    altText: 'Slide 1',
  },
  {
    src: plakat58,
    altText: 'Slide 1',
  },
  {
    src: plakat59,
    altText: 'Slide 1',
  },
  {
    src: plakat60,
    altText: 'Slide 1',
  },
  {
    src: plakat61,
    altText: 'Slide 1',
  },
  {
    src: plakat62,
    altText: 'Slide 1',
  },
  {
    src: plakat63,
    altText: 'Slide 1',
  },
  {
    src: plakat64,
    altText: 'Slide 1',
  },
  {
    src: plakat65,
    altText: 'Slide 1',
  },
  {
    src: plakat66,
    altText: 'Slide 1',
  },
  {
    src: plakat67,
    altText: 'Slide 1',
  },
  {
    src: plakat68,
    altText: 'Slide 1',
  },
  {
    src: plakat69,
    altText: 'Slide 1',
  },
  {
    src: plakat70,
    altText: 'Slide 1',
  },
  {
    src: plakat71,
    altText: 'Slide 1',
  },
  {
    src: plakat72,
    altText: 'Slide 1',
  },
  {
    src: plakat73,
    altText: 'Slide 1',
  },
  {
    src: plakat74,
    altText: 'Slide 1',
  },
  {
    src: plakat75,
    altText: 'Slide 1',
  },
  {
    src: plakat76,
    altText: 'Slide 1',
  },
  {
    src: plakat77,
    altText: 'Slide 1',
  },
  {
    src: plakat78,
    altText: 'Slide 1',
  },
  {
    src: plakat79,
    altText: 'Slide 1',
  },
  {
    src: plakat80,
    altText: 'Slide 1',
  },
  {
    src: plakat81,
    altText: 'Slide 1',
  },
  {
    src: plakat82,
    altText: 'Slide 1',
  },
  {
    src: plakat83,
    altText: 'Slide 1',
  },
  {
    src: plakat84,
    altText: 'Slide 1',
  },
  {
    src: plakat85,
    altText: 'Slide 1',
  },
  {
    src: plakat86,
    altText: 'Slide 1',
  },
  {
    src: plakat87,
    altText: 'Slide 1',
  },
  {
    src: plakat88,
    altText: 'Slide 1',
  },
  {
    src: plakat89,
    altText: 'Slide 1',
  },
  {
    src: plakat90,
    altText: 'Slide 1',
  },
  {
    src: plakat93,
    altText: 'Slide 1',
  },
  {
    src: plakat94,
    altText: 'Slide 1',
  },
  {
    src: plakat95,
    altText: 'Slide 1',
  },
  {
    src: plakat96,
    altText: 'Slide 1',
  },
  {
    src: plakat97,
    altText: 'Slide 1',
  },
  {
    src: plakat98,
    altText: 'Slide 1',
  },
  {
    src: plakat99,
    altText: 'Slide 1',
  },
  {
    src: plakat100,
    altText: 'Slide 1',
  },
  {
    src: plakat101,
    altText: 'Slide 1',
  },
  {
    src: plakat102,
    altText: 'Slide 1',
  },
  {
    src: plakat103,
    altText: 'Slide 1',
  },
  {
    src: plakat104,
    altText: 'Slide 1',
  },
  {
    src: plakat105,
    altText: 'Slide 1',
  },
  {
    src: plakat106,
    altText: 'Slide 1',
  },
  {
    src: plakat107,
    altText: 'Slide 1',
  },
  {
    src: plakat108,
    altText: 'Slide 1',
  },
  {
    src: plakat109,
    altText: 'Slide 1',
  },
  {
    src: plakat110,
    altText: 'Slide 1',
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