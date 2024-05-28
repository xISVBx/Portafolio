import { timelineData } from '../constants/FormacionList';
import Timeline from './TimeLine';

const AcercaDeMi = () => {
    return (
        <>
            
            <div className='grid sm:grid-cols-2 gap-16 mb-16'>
                <div>
                <h2 className='text-primary pb-4 font-bold'>Acerca de mi ___</h2>
                    <h3 className='font-bold text-lg mb-2'>Bienvenidos!, me llamo Jordan Prada y soy desarrollador web y movil.</h3>
                    <p className='text-gray-500'>Pues la verdad aca creo que deberia poner mi experiencia laboral, decir que desarrolo aplicaciones moviles y web que me ecnuentro constantemente aprendiendo tecnologias trabajo colaborativo y cuanta mas mamada</p>
                </div>
                <div>
                    <h2 className='tex-lg text-gray-300 px-3 pb-4 font-bold tracking-widest'>Formacion</h2>
                <Timeline items={timelineData} />
                </div>
            </div>
        </>
    )
}
export default AcercaDeMi;