import React from 'react'
import foto from '../assets/hombre-camisa-amarilla.webp'


const Portada = () => {
    return (
        <div className='h-[50vh] px-10 py-5 relative'>
            <img src={foto} className="h-[40vh] absolute bottom-0 left-1/2 transform -translate-x-1/2" />
            <div className='absolute top-1/3'>
                <h1 className=' text-white text-4xl font-light'>Hola</h1>
                <h1 className='text-white text-4xl font-semibold mb-5'>Soy Santiago</h1>
                <h2 className='text-lg font-semibold'>Desarrolador de aplicaciones <br /> Web y moviles</h2>
            </div>
        </div>
    )
}
export default Portada;