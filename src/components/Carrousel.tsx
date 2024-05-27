import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



interface CarrouselProps {
    items: React.ReactNode[];
    className?: string;
}

const Carrousel: React.FC<CarrouselProps> = ({ items, className: size = 'h-60' }) => {
    const swiperRef = useRef<SwiperType>();
    return (
        <div className='w-full relative'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#339A7D',
                    '--swiper-pagination-color': '#339A7D',
                }}
                slidesPerView={3}
                loop={true}
                spaceBetween={10}
                pagination={{
                    clickable: false,
                }}
                lazy={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                centeredSlides={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-72">
                {items.map((item) => {
                    return (<SwiperSlide><div className={`${size}`}>{item}</div></SwiperSlide>)
                })}

            </Swiper>
            <button onClick={() => swiperRef.current?.slidePrev()} className='absolute top-28 z-50 left-0 -translate-x-1/2'>Prev</button>
            <button onClick={() => swiperRef.current?.slideNext()} className='absolute top-28 z-50 right-0 translate-x-1/2'>Next</button>
        </div>
    )
}
export default Carrousel;