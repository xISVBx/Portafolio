import AcercaDeMi from "./components/AcercaDeMi"
import Carrousel from "./components/Carrousel"
import Portada from "./components/Portada"
import { ListSkills } from "./constants/ListSkills"
import textura from './assets/textura.png';

function App() {


  return (
    <>
      <div className='flex justify-center w-full bg-bg'>
        <div className='sm:pl-16 sm:pr-4 sm:pt-4 relative w-full max-w-[1000px]'>
          {/* El body, sobre este trabajo todo*/}
          <div className="bg-primary sm:rounded-2xl bg-clip-border backdrop-filter backdrop-blur-xl bg-opacity-100 relative z-20" style={{ backgroundImage: `url(${textura})` }}>
            <Portada />
            {/* El cuerpo del contenido*/}
            <div className='pt-10 sm:mb-5 px-10 bg-bg-light sm:rounded-b-2xl'>
              <AcercaDeMi />
              {/* Habilidades y Servicios*/}
              <div className='w-full flex justify-center  flex-col'>
                <h2 className='font-bold text-2xl text-center m-1'>
                  Habilidades y Servicios
                </h2>
                <p className='text-center text-sm text-gray-500 px-16'>
                  Texto descriptivo de alguna mamada por ahora esto es solo una estructura, troste me siento obligado a escribir aca algo
                </p>
                <div className="flex mt-5">
                  <Carrousel items={ListSkills} />
                </div>
              </div>
            </div>
          </div>


          <div className='sm:h-[calc(50vh - 2.5rem)] bg absolute bg-primary-light ml-10 mt-10 mr-16  inset-0 z-10 rounded-2xl bg-clip-border backdrop-filter backdrop-blur-xl bg-opacity-50'></div>
          <div className='sm:h-[calc(50vh - 2.5rem)] bg absolute bg-primary-extraLight ml-4 mt-16 mr-16  inset-0 z-5 rounded-2xl bg-clip-border backdrop-filter backdrop-blur-xl bg-opacity-70'></div>
        </div>
      </div>
    </>
  )
}

export default App
