import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import homeImg1 from '../assets/images/home-bg-slider-img1.jpg'; 
import homeImg2 from '../assets/images/home-bg-slider-img2.jpg'; 
import { Link } from 'react-router-dom';

SwiperCore.use([]);

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const images = [homeImg1, homeImg2];

  return (
    <div>
      <section className="relative" id="home">
        <Swiper>
          <SwiperSlide style={{ height: '100vh' }}>
            <div className="relative bg-cover bg-fixed" style={{ backgroundImage: `url(${images[currentImageIndex]})`, height: '100%' }}>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50">
                <div>
                  <h3 className="animate-bounce mb-9 font-serif italic text-[24px] font-bold" style={{ animationDelay: '0.9s' }}>
                    Hello! You are welcome to
                  </h3>
                  <h1 className="animate-fadeInUp font-semibold text-[45px] leading-[65px] uppercase tracking-[10px] mb-20" style={{ animationDelay: '1.6s' }}>
                    Professional
                    <br />
                    Fitness Club
                  </h1>
                  <Link
                    href="#overview"
                    className="animate-fadeInUp smooth-scroll btn btn-default bg-[#26253a] text-[#999] font-bold text-[20px]  px-14 py-5 hover:bg-white hover:text-[[#26253a] "
                    style={{ animationDelay: '2s',letterSpacing:'5px' }}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default HeroSection;
