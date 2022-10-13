import React from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './ImageSlider.scss';

const ImageSlider = () => {
  return (
    <div className="image-slider">
      <Swiper
        className="swiper"
        modules={[Navigation, EffectFade]}
        navigation
        effect="fade"
        speed={800}
        slidesPerView={1}
        loop
      >
        <SwiperSlide className="swiperslide">
          <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/26957f977ecf4119879caa7600ff0f1b_9366/OZWEEGO_Shoes_White_EE6464_01_standard.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/86dbbccdb3db4f5f846eaa7600ee8b42_9366/OZWEEGO_Shoes_Black_EE6999_01_standard.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/1a36afabaab94df1abfeadf000a42efe_9366/OZWEEGO_Shoes_Beige_GW8059_01_standard.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
