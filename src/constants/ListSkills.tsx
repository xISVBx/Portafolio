import flutterIcon from "../assets/flutterIcon.svg"
import NodeJs from "../assets/nodejs.svg";
import React from "../assets/react.svg";
import Kotlin from "../assets/kotlin.svg";
import NetCore from "../assets/net-core.svg"
import Dart from "../assets/dart.svg"
import TypeScript from "../assets/typescript.svg"
import JavaScript from "../assets/javascript.svg"
import Android from "../assets/android.svg"
import CSharp from "../assets/csharp.svg"
import Tailwind from "../assets/tailwind.svg"
import Vite from "../assets/vite.svg"
import SkillsCards from '../components/SkillsCards';

export const ListSkills = [
  <SkillsCards
      key="flutter"
      name="Flutter"
      level="Intermedio"
      description="Flutter es un framework para el desarrollo móvil que utiliza Dart, un lenguaje de programación de Google y 
      me permite crear aplicaciones móviles multiplataforma con una sola base de código."
      frameWorkIcon={flutterIcon}
      lenguajesIcons={[Dart]}
  />,
  <SkillsCards
      key="react"
      name="React"
      level="Avanzado"
      description="Principalmente desarrollo aplicaciones web con React y TypeScript, 
      usando Vite para la construcción y Tailwind CSS para estilos y como gestor de estados prefiero Zustand."
      frameWorkIcon={React}
      lenguajesIcons={[TypeScript, JavaScript, Tailwind, Vite]}
  />,
  <SkillsCards
      key="Kotlin"
      name="Kotlin"
      level="Intermedio"
      description="Entorno de ejecución para JavaScript construido con el motor V8 de Chrome."
      frameWorkIcon={Kotlin}
      lenguajesIcons={[Android]}
  />,
  <SkillsCards
      key=".Net"
      name=".Net Core"
      level="Intermedio"
      description="Entorno de ejecución para JavaScript construido con el motor V8 de Chrome."
      frameWorkIcon={NetCore}
      lenguajesIcons={[CSharp]}
  />,
  <SkillsCards
      key="nodejs"
      name="Node.js"
      level="Intermedio"
      description="He utilizado Node.js para construir APIs en el backend, principalmente con TypeScript 
      ya con su tipado estático ha mejorado la estructura y la facilidad para mantener y modificar mis proyectos."
      frameWorkIcon={NodeJs}
      lenguajesIcons={[TypeScript, JavaScript]}
  />,
];