import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';
import PropTypes from 'prop-types';

import plakat1 from './../../Images/PlakatVarasem/01_05_2010.jpg';
import plakat2 from './../../Images/PlakatVarasem/01_10_2011.jpg';
import plakat3 from './../../Images/PlakatVarasem/01_11_2013.jpg';
import plakat4 from './../../Images/PlakatVarasem/02_03_2012.jpg';
import plakat5 from './../../Images/PlakatVarasem/02_04_2011.jpg';
import plakat6 from './../../Images/PlakatVarasem/02_09_2011.jpg';
import plakat7 from './../../Images/PlakatVarasem/02_10_2015.jpg';
import plakat8 from './../../Images/PlakatVarasem/02_12_2011.jpg';
import plakat9 from './../../Images/PlakatVarasem/02_23_2018.jpg';
import plakat10 from './../../Images/PlakatVarasem/03_03_2018.jpg';
import plakat11 from './../../Images/PlakatVarasem/03_09_2010.jpg';
import plakat12 from './../../Images/PlakatVarasem/04_01_2014.jpg';
import plakat13 from './../../Images/PlakatVarasem/04_03_2017.jpg';
import plakat14 from './../../Images/PlakatVarasem/04_06_2010.jpg';
import plakat15 from './../../Images/PlakatVarasem/04_12_2010.jpg';
import plakat16 from './../../Images/PlakatVarasem/05_02_10.jpg';
import plakat17 from './../../Images/PlakatVarasem/05_02_2011.jpg';
import plakat18 from './../../Images/PlakatVarasem/05_09_2015.jpg';
import plakat19 from './../../Images/PlakatVarasem/05_10_2012.jpg';
import plakat20 from './../../Images/PlakatVarasem/05_11_2010.jpg';
import plakat21 from './../../Images/PlakatVarasem/05_11_2016.jpg';
import plakat22 from './../../Images/PlakatVarasem/05_12_2015.jpg';
import plakat23 from './../../Images/PlakatVarasem/06_01_2012.jpg';
import plakat24 from './../../Images/PlakatVarasem/06_05_2016.jpg';
import plakat25 from './../../Images/PlakatVarasem/06_11_2015.jpg';
import plakat26 from './../../Images/PlakatVarasem/06_12_13.jpg';
import plakat27 from './../../Images/PlakatVarasem/06_12_2014.jpg';
import plakat28 from './../../Images/PlakatVarasem/07_02_09.jpg';
import plakat29 from './../../Images/PlakatVarasem/07_04_2018.jpg';
import plakat30 from './../../Images/PlakatVarasem/07_09_2018.jpg';



const items = [
  {
    src: plakat1,
    altText: '01.05.2010',
  },
  {
    src: plakat2,
    altText: '01.10.2011',
  },
  {
    src: plakat3,
    altText: '01.11.2013',
  },
    {
    src: plakat4,
      altText: '02.03.2012',
  },
  {
    src: plakat5,
    altText: '02.04.2011',
  },
  {
    src: plakat6,
    altText: '02.09.2011',
  },
  {
    src: plakat7,
    altText: '02.10.2015',
  },
  {
    src: plakat8,
    altText: '02.12.2011',
  },
  {
    src: plakat9,
    altText: '02.23.2018',
  },
  {
    src: plakat10,
    altText: '03.03.2018',
  },
  {
    src: plakat11,
    altText: '03.09.2010',
  },
  {
    src: plakat12,
    altText: '04.01.2014',
  },
  {
    src: plakat13,
    altText: '04.03.2017',
  },
  {
    src: plakat14,
    altText: '04.06.2010',
  },
  {
    src: plakat15,
    altText: '04.12.2010',
  },
  {
    src: plakat16,
    altText: '05.02.2010',
  },
  {
    src: plakat17,
    altText: '05.02.2011',
  },
  {
    src: plakat18,
    altText: '05.12.2015',
  },
  {
    src: plakat19,
    altText: '05.10.2012',
  },
  {
    src: plakat20,
    altText: '05.11.2010',
  },
  {
    src: plakat21,
    altText: '05.11.2016',
  },
  {
    src: plakat22,
    altText: '05.12.2015',
  },
  {
    src: plakat23,
    altText: '06.01.2012',
  },
  {
    src: plakat24,
    altText: '06.05.2016',
  },
  {
    src: plakat25,
    altText: '06.11.2015',
  },
  {
    src: plakat26,
    altText: '06.12.2009',
  },
  {
    src: plakat27,
    altText: '06.12.2013',
  },
  {
    src: plakat28,
    altText: '06.12.2014',
  },
  {
    src: plakat29,
    altText: '07.02.2009',
  },
  {
    src: plakat30,
    altText: '07.04.2018',
  },

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