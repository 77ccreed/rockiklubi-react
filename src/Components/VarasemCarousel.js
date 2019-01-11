import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl

} from 'reactstrap';

import plakat1 from './../Images/01_05_2010.jpg';
import plakat2 from './../Images/01_10_2011.jpg';
import plakat3 from './../Images/01_11_2013.jpg';
import plakat4 from './../Images/02_03_2012.jpg';
import plakat5 from './../Images/02_04_2011.jpg';
import plakat6 from './../Images/02_09_2011.jpg';
import plakat7 from './../Images/02_10_2015.jpg';
import plakat8 from './../Images/02_12_2011.jpg';
import plakat9 from './../Images/02_23_2018.jpg';
import plakat10 from './../Images/03_03_2018.jpg';
import plakat11 from './../Images/03_09_2010.jpg';
import plakat12 from './../Images/04_01_2014.jpg';
import plakat13 from './../Images/04_03_2017.jpg';
import plakat14 from './../Images/04_06_2010.jpg';
import plakat15 from './../Images/04_12_2010.jpg';
import plakat16 from './../Images/05_02_10.jpg';
import plakat17 from './../Images/05_02_2011.jpg';
import plakat18 from './../Images/05_09_2015.jpg';
import plakat19 from './../Images/05_10_2012.jpg';

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