import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';
import PropTypes from 'prop-types';


const items = [
  {
    src: require('./../../Images/PlakatVarasem/01_05_2010.jpg'),
    altText: '01.05.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/01_10_2011.jpg'),
    altText: '01.10.2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/01_11_2013.jpg'),
    altText: '01.11.2013',
  },
  {
    src: require('./../../Images/PlakatVarasem/02_03_2012.jpg'),
    altText: '02.03.2012',
  },
  {
    src: require('./../../Images/PlakatVarasem/02_04_2011.jpg'),
    altText: '02.04.2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/02_09_2011.jpg'),
    altText: '02.09.2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/02_10_2015.jpg'),
    altText: '02.10.2015',
  },
  {
    src: require('./../../Images/PlakatVarasem/02_12_2011.jpg'),
    altText: '02.12.2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/02_23_2018.jpg'),
    altText: '02.23.2018',
  },
  {
    src: require('./../../Images/PlakatVarasem/03_03_2018.jpg'),
    altText: '03.03.2018',
  },
  {
    src: require('./../../Images/PlakatVarasem/03_09_2010.jpg'),
    altText: '03.09.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/04_01_2014.jpg'),
    altText: '04.01.2014',
  },
  {
    src: require('./../../Images/PlakatVarasem/04_03_2017.jpg'),
    altText: '04.03.2017',
  },
  {
    src: require('./../../Images/PlakatVarasem/04_06_2010.jpg'),
    altText: '04.06.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/04_12_2010.jpg'),
    altText: '04.12.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/05_02_10.jpg'),
    altText: '05.02.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/05_02_2011.jpg'),
    altText: '05.02.2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/05_09_2015.jpg'),
    altText: '05.09.2015',
  },
  {
    src: require('./../../Images/PlakatVarasem/05_10_2012.jpg'),
    altText: '05.10.2012',
  },
  {
    src: require('./../../Images/PlakatVarasem/05_11_2010.jpg'),
    altText: '05.11.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/05_11_2016.jpg'),
    altText: '05.11.2016',
  },
  {
    src: require('./../../Images/PlakatVarasem/05_12_2015.jpg'),
    altText: '05.12.2015',
  },
  {
    src: require('./../../Images/PlakatVarasem/06_01_2012.jpg'),
    altText: '06.01.2012',
  },
  {
    src: require('./../../Images/PlakatVarasem/06_05_2016.jpg'),
    altText: '06.05.2016',
  },
  {
    src: require('./../../Images/PlakatVarasem/06_11_2015.jpg'),
    altText: '06.11.2015',
  },
  {
    src: require('./../../Images/PlakatVarasem/06_12_13.jpg'),
    altText: '06.12,2013',
  },
  {
    src: require('./../../Images/PlakatVarasem/06_12_2014.jpg'),
    altText: '06.12.2014',
  },
  {
    src: require('./../../Images/PlakatVarasem/07_02_09.jpg'),
    altText: '07.02.2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/07_04_2018.jpg'),
    altText: '07.04.2018',
  },
  {
    src: require('./../../Images/PlakatVarasem/07_09_2018.jpg'),
    altText: '07.09.2018',
  },
  {
    src: require('./../../Images/PlakatVarasem/08_09_2017.jpg'),
    altText: '08.09.2017',
  },
  {
    src: require('./../../Images/PlakatVarasem/08_10_2011.jpg'),
    altText: '08.10.2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/08_11_2014.jpg'),
    altText: '08.11.2014',
  },
  {
    src: require('./../../Images/PlakatVarasem/09.11.2018.jpg'),
    altText: '09.11.2018',
  },
  {
    src: require('./../../Images/PlakatVarasem/09_04_2010.jpg'),
    altText: '09.04.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/09_06_2012.jpg'),
    altText: '09.06.2012',
  },
  {
    src: require('./../../Images/PlakatVarasem/09_09_2016.jpg'),
    altText: '09.09.2016',
  },
  {
    src: require('./../../Images/PlakatVarasem/09_10_09.jpg'),
    altText: '09.10.2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/11_04_09.jpg'),
    altText: '11.04.2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/11_05_2018.jpg'),
    altText: '11.05.2018',
  },
  {
    src: require('./../../Images/PlakatVarasem/11_09_09.jpg'),
    altText: '11.09.2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/12_03_10.jpg'),
    altText: '12.03.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/12_03_2011.jpg'),
    altText: '12.03.2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/12_05_2012v.jpg'),
    altText: '12.05.2012',
  },
  {
    src: require('./../../Images/PlakatVarasem/12_05_2017.jpg'),
    altText: '12.05.2017',
  },
  {
    src: require('./../../Images/PlakatVarasem/13_04_2013.jpg'),
    altText: '13.04.2013',
  },
  {
    src: require('./../../Images/PlakatVarasem/13_10_2017.jpg'),
    altText: '13.10.2017',
  },
  {
    src: require('./../../Images/PlakatVarasem/13_11_09.jpg'),
    altText: '13.11.2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/14_04_2017.jpg'),
    altText: '14.04.2017',
  },
  {
    src: require('./../../Images/PlakatVarasem/14_05_2010.jpg'),
    altText: '14.05.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/14_05_2011.jpg'),
    altText: '14.05.2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/14_05_2016.jpg'),
    altText: '14.05.2016',
  },
  {
    src: require('./../../Images/PlakatVarasem/15_04_2016.jpg'),
    altText: '15.04.2016',
  },
  {
    src: require('./../../Images/PlakatVarasem/16_01_10.jpg'),
    altText: '16.01.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/16_05_09.jpg'),
    altText: '16.05.2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/16_05_2014.jpg'),
    altText: '16.05.2014',
  },
  {
    src: require('./../../Images/PlakatVarasem/16_08_2013.jpg'),
    altText: '16.08.2013',
  },
  {
    src: require('./../../Images/PlakatVarasem/17_02_2017.jpg'),
    altText: '17.02.2017',
  },
  {
    src: require('./../../Images/PlakatVarasem/17_04_2015.jpg'),
    altText: '17.04.2015',
  },
  {
    src: require('./../../Images/PlakatVarasem/17_08_2012.jpg'),
    altText: '17.08.2012',
  },
  {
    src: require('./../../Images/PlakatVarasem/17_10_09.jpg'),
    altText: '17.10.2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/18_03_2016.jpg'),
    altText: '18.03.2016',
  },
  {
    src: require('./../../Images/PlakatVarasem/18_09_2010.jpg'),
    altText: '18.09.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/19_02_10.jpg'),
    altText: '19.02.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/19_03_2011.jpg'),
    altText: '19.03.2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/20_01_2017.jpg'),
    altText: '20.01.2017',
  },
  {
    src: require('./../../Images/PlakatVarasem/20_02_09.jpg'),
    altText: '20.02.2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/20_03_09.jpg'),
    altText: '20.03.2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/20_11_2010.jpg'),
    altText: '20.11.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/21_01_2011.jpg'),
    altText: '21.01.2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/21_01_2012.jpg'),
    altText: '21.01.2012',
  },
  {
    src: require('./../../Images/PlakatVarasem/21_04_2012.jpg'),
    altText: '21.04.2012',
  },
  {
    src: require('./../../Images/PlakatVarasem/21_05_2011.jpg'),
    altText: '21.05.2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/22_08_2014.jpg'),
    altText: '22.08.2014',
  },
  {
    src: require('./../../Images/PlakatVarasem/23_04_2011.jpg'),
    altText: '23.04.2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/23_07_09.jpg'),
    altText: '23.07,2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/23_09_2011.jpg'),
    altText: '23.09.2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/24_05_2013.jpg'),
    altText: '24.05.2013',
  },
  {
    src: require('./../../Images/PlakatVarasem/25_04_09.jpg'),
    altText: '25.04.2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/25_09_09.jpg'),
    altText: '25.09.2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/26_02_10.jpg'),
    altText: '26.02.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/26_02_2011.jpg'),
    altText: '26.02.2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/26_03_10.jpg'),
    altText: '26.03.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/26_03_2016.jpg'),
    altText: '26.03.2016',
  },
  {
    src: require('./../../Images/PlakatVarasem/26_04_2013.jpg'),
    altText: '26.04.2013',
  },
  {
    src: require('./../../Images/PlakatVarasem/26_04_2014.jpg'),
    altText: '26.04.2014',
  },
  {
    src: require('./../../Images/PlakatVarasem/26_11_2011.jpg'),
    altText: '26.11.2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/26_11_2016.jpg'),
    altText: '26.11.2016',
  },
  {
    src: require('./../../Images/PlakatVarasem/27_11_2010.jpg'),
    altText: '27.11.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/28_03_09.jpg'),
    altText: '28.03.2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/28_10_2011.jpg'),
    altText: '28.10.2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/28_10_2017.jpg'),
    altText: '28.10.2017',
  },
  {
    src: require('./../../Images/PlakatVarasem/28_11_09.jpg'),
    altText: '28.11.2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/29_05_09.jpg'),
    altText: '29.05.2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/29_05_2010.jpg'),
    altText: '29.05.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/30_03_2018.jpg'),
    altText: '30.03.2018',
  },
  {
    src: require('./../../Images/PlakatVarasem/30_06_2012.jpg'),
    altText: '30.06.2012',
  },
  {
    src: require('./../../Images/PlakatVarasem/30_10_2010.jpg'),
    altText: '30.10.2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/31_01_09.jpg'),
    altText: '31.01.2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/6_12_09.jpg'),
    altText: '06.12.2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/BAND_TOUR_2010.jpg'),
    altText: 'Band Tour 2010',
  },
  {
    src: require('./../../Images/PlakatVarasem/BANDTOUR2011.jpg'),
    altText: 'Band Tour 2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/noor_rock.jpg'),
    altText: 'Noor Rock',
  },
  {
    src: require('./../../Images/PlakatVarasem/noor_rock_2011.jpg'),
    altText: 'Noor Rock 2011',
  },
  {
    src: require('./../../Images/PlakatVarasem/tour2009.jpg'),
    altText: 'Tour 2009',
  },
  {
    src: require('./../../Images/PlakatVarasem/tourmentandfun.jpg'),
    altText: 'Tour & Fun',
  }
  ,
  {
    src: require('./../../Images/PlakatVarasem/07_15_2018.jpg'),
    altText: '07.15.2018',
  },
  {
    src: require('./../../Images/PlakatVarasem/12_01_2019.jpg'),
    altText: '12.01.2019',
  },
  {
    src: require('./../../Images/PlakatVarasem/01_02_2019.jpg'),
    altText: '01.02.2019',
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