import React from 'react';



import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import './Carousel.css';

const slider = [
  {
    title: 'Item 1',
    description:
      'Households across Bangladesh eat Bhortas as a starter. Bhortas are mashed vegetables.',
    url: 'https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-07-735x490.jpg.webp',
  },
  {
    title: 'Item 2',
    description:
      'A common rainy-day staple, Bhuna Khichuri is a wholesome rice dish and popular comfort food in Bengali cuisine.',
    url: 'https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-02-735x490.jpg.webp',
  },
  {
    title: 'Item 3',
    description:
      'I’m willing to bet that if you asked a hundred Bengalis to name their favorite street-food, the majority would say ‘fuchka.',
    url: 'https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-08-735x490.jpg.webp',
  },

  {
    title: 'Item 4',
    description:
      'Shingara is a common finger-food in Bangladesh. This popular snack looks like a deep-fried pouch.',
    url: 'https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-09-735x490.jpg.webp',
  },
  {
    title: 'Item 5',
    description:
      'Rice is the staple food of Bangladesh, so it should come as no surprise natives have found ways to incorporate it in every type of meal.',
    url: 'https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-14-735x490.jpg.webp',
  },
  {
    title: 'Item 6',
    description:
      'The preparation of this delicious Bangladeshi dessert is similar to roshogolla. However, chomchom is cooked for a longer period of time.',
    url: 'https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-12-scaled-735x490.jpg.webp',
  },
];

const Carousel = () => {
  return (
    <div className='flex flex-col md:flex-row carousel'>
      <div>
        <div className='carousel-content'>
          <span>FOODS</span>
          <h1>Best Food Collection</h1>
          <hr />
          <p>
            Rice is the main Bangladeshi food. Rice, fish curry, and lentil is
            the most common traditional Bangladeshi food for the general people.
            Bangladesh is also famous for its desserts.
          </p>
          <a href='' className='slider-btn'>
            Order
          </a>
        </div>
      </div>

      <Swiper
        className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
      >
        {slider.map(data => (
          <SwiperSlide
            style={{ backgroundImage: `url(${data.url})` }}
            className='myswiper-slider'
          >
            <div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <a href={`${data.url}`} target='_blank' className='slider-btn'>
                explore
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
