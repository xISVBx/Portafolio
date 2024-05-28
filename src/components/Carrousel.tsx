import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import flechaDerecha from '../assets/flecha_derecha.svg';
import flechaIzquierda from '../assets/flecha_izquierda.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



interface CarrouselProps {
    items: React.ReactNode[];
    className?: string;
}

const Carrousel: React.FC<CarrouselProps> = ({ items, className: size = 'h-60' }) => {
    // @ts-expect-error: Esta variable si es valida y funciona mas no se reconoce y no piedo usar any ni nada
    const swiperRef = useRef<SwiperType>();
    const [numVistas, setNumVistas] = useState(3); // Valor inicial
    const breakpointXs = 640; // Ancho de pantalla para el breakpoint SM
    const breakpointSm = 750; // Ancho de pantalla para el breakpoint SM
    const breakpointMd = 1000; // Ancho de pantalla para el breakpoint MD

    useEffect(() => {
        const actualizarNumVistas = () => {
            const anchoPantalla = window.innerWidth;
            if(anchoPantalla <= breakpointXs){
                setNumVistas(1);
            }
            else if (anchoPantalla <= breakpointSm) {
                setNumVistas(1.5);
            } else if (anchoPantalla <= breakpointMd) {
                setNumVistas(2);
            } else {
                setNumVistas(3); // Por ejemplo, 4 vistas en pantallas grandes
            }
        };

        actualizarNumVistas(); // Llama a la función una vez al principio
        window.addEventListener('resize', actualizarNumVistas); // Agrega un listener para cambios de tamaño de pantalla

        return () => {
            window.removeEventListener('resize', actualizarNumVistas); // Limpia el listener cuando el componente se desmonta
        };
    }, []);
    return (
        <div className='w-full relative'>
            <Swiper
                style={{
                    // @ts-expect-error: La clase css si existe, esta en la docimentacion mas no me deja usarla
                    '--swiper-navigation-color': '#339A7D',
                    '--swiper-pagination-color': '#339A7D',
                }}
                slidesPerView={numVistas}
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
                    return (<SwiperSlide>
                        <div className={`${size}`}>
                            {item}
                        </div>
                    </SwiperSlide>)
                })}

            </Swiper>
            <button onClick={() => swiperRef.current?.slidePrev()} className='absolute top-28 z-50 left-0 -translate-x-1/2 w-8 h-8 bg-primary-extraLight 
            rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-500'>
                <img src={flechaIzquierda} alt="Anterior" className="w-4 h-4" />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()} className='absolute top-28 z-50 right-0 translate-x-1/2 w-8 h-8 bg-primary-extraLight 
            rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-500'>
                <img src={flechaDerecha} alt="Siguiente" className="w-4 h-4" />
            </button>
        </div>
    )
}
export default Carrousel;