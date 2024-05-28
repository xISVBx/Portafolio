import React from 'react'
import Timeline, { TimelineItemProps } from './TimeLine';

const timelineData: TimelineItemProps[] = [
    {
        title: 'Universidad Pontificia Bolivariana.',
        date: '2019-01-01',
        content: 'Description for event one.'
    },
    {
        title: 'Grupo APL Ingeniera LTA.',
        date: '2022-02-15',
        content: 'Description for event two.'
    },

];

const AcercaDeMi = () => {
    return (
        <>
            <h2 className='text-primary font-semibold'>Acerca de mi ____</h2>
            <div className='grid grid-cols-2 gap-16 mt-6 mb-20'>
                <div>
                    <h3 className='font-bold text-lg mb-2'>Bienvenidos!, me llamo Jordan Prada y soy desarrollador web y movil.</h3>
                    <p className='text-gray-500'>Pues la verdad aca creo que deberia poner mi experiencia laboral, decir que desarrolo aplicaciones moviles y web que me ecnuentro constantemente aprendiendo tecnologias trabajo colaborativo y cuanta mas mamada</p>
                </div>
                <Timeline items={timelineData} />
            </div>
        </>
    )
}
export default AcercaDeMi;