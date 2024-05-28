import React from 'react'
import foto from '../assets/hombre-camisa-amarilla.webp'
import WhatsappBlack from '../assets/whatsapp-black.svg'


const Portada = () => {
    const phoneNumber = "573144201857";
    return (
        <div className='h-[50vh] px-10 py-5 relative'>
            <img src={foto} className="h-[40vh] absolute bottom-0 left-1/2 transform -translate-x-1/2" />
            {/* Bloque izquierdo */}
            <div className='absolute top-1/3'>
                <h1 className=' text-white text-4xl font-light'>Hola,</h1>
                <h1 className='text-white text-4xl font-semibold mb-2 '>Soy Santiago</h1>
                <h2 className='text-xs font-semibold mb-5'>Desarrolador de aplicaciones <br /> Web y moviles.</h2>
                <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                    <div className='bg-primary-highlighted py-1.5 px-3 rounded-full flex flex-row justify-center items-center space-x-2 w-1/2'>
                        <img src={WhatsappBlack} alt="WhatsApp Icon" className='h-3' />
                        <span className='text-xs'>Escríbeme</span>
                    </div>
                </a>
            </div>
            {/* Bloque arriba a la derecha */}
            <div className='absolute top-5 right-0 pr-10'>
                <p className='text-white text-xs font-semibold'>
                    Contactame aqui
                </p>
                <p className='text-xs font-semibold'>ivansantiagovb@gmail.com</p>
            </div>
        </div>
    )
}
export default Portada;