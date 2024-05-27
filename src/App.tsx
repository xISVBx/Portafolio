import AcercaDeMi from "./components/AcercaDeMi"
import Carrousel from "./components/Carrousel"
import Portada from "./components/Portada"
import SkillsCards from "./components/SkillsCards"
import flutterIcon from "./assets/flutterIcon.svg"

const skillsContent = [
  <SkillsCards
      key="flutter"
      name="Flutter"
      level="Intermedio"
      description="Este es un framework que sirve para papapa y hace papap y he usado para papam y yo que más."
      icon={flutterIcon}
  />,
  <SkillsCards
      key="react"
      name="React"
      level="Avanzado"
      description="Una biblioteca de JavaScript para construir interfaces de usuario."
      icon={flutterIcon}
  />,
  <SkillsCards
      key="nodejs"
      name="Node.js"
      level="Intermedio"
      description="Entorno de ejecución para JavaScript construido con el motor V8 de Chrome."
      icon={flutterIcon}
  />,
  <SkillsCards
      key="Kotlin"
      name="Node.js"
      level="Intermedio"
      description="Entorno de ejecución para JavaScript construido con el motor V8 de Chrome."
      icon={flutterIcon}
  />
];
function App() {


  return (
    <>
      {/* Completo, donde justifico*/}
      <div className='flex justify-center w-full bg-bg'>
        {/* Donde voy a tener todo mis absolutes*/}
        <div className='pl-16 pr-4 pt-4 relative w-full max-w-[1000px]'>
          {/* El body, sobre este trabajo todo*/}
          <div className="bg-primary rounded-2xl bg-clip-border backdrop-filter backdrop-blur-xl bg-opacity-100 relative z-20">
            <Portada />
            {/* El cuerpo del contenido*/}
            <div className='py-10 px-10 bg-bg-light'>
              <AcercaDeMi />
              {/* Habilidades y Servicios*/}
              <div className='w-full flex justify-center  flex-col'>
                <h2 className='font-bold text-2xl text-center m-1'>Habilidades y Servicios</h2>
                <p className='text-center text-sm text-gray-500 px-16'>Texto descriptivo de alguna mamada por ahora esto es solo una estructura, troste me siento obligado a escribir aca algo</p>
                {/* Aca van carrousel en tarjetas*/}
                <div className="flex mt-5">
                  {/* Aca debe de ir  mis tarjetas de contenido*/}
                  <Carrousel items={skillsContent} />
                  <div className="">
                    
                  </div>

                </div>
              </div>
            </div>
          </div>


          <div className='h-[calc(50vh - 2.5rem)] bg absolute bg-primary-light ml-10 mt-10 mr-16  inset-0 z-10 rounded-2xl bg-clip-border backdrop-filter backdrop-blur-xl bg-opacity-50'></div>
          <div className='h-[calc(50vh - 2.5rem)] bg absolute bg-primary-extraLight ml-4 mt-16 mr-16  inset-0 z-5 rounded-2xl bg-clip-border backdrop-filter backdrop-blur-xl bg-opacity-70'></div>
        </div>
      </div>
    </>
  )
}

export default App
