import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './ImageSlider.scss';
import { ImageSliderPropsType } from '../../types/ImageSliderPropsType';

const ImageSlider = ({ productImages }: ImageSliderPropsType) => {
  return (
    <div className="image-slider">
      <Swiper
        className="swiper"
        modules={[Navigation, EffectFade]}
        navigation
        effect="slide"
        speed={800}
        slidesPerView={1}
        loop
      >
        {productImages.map(image => (
          <SwiperSlide className="swiperslide" key={image}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
