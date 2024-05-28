

interface SkillsCardsProps {
    name: string,
    level: string,
    description: string;
    size?: number;
    frameWorkIcon: string
    lenguajesIcons?: string[]
}``

const SkillsCards: React.FC<SkillsCardsProps> = ({ name, level, description, size = 'h-60', frameWorkIcon, lenguajesIcons }) => {

    return (
        <div className={`bg-primary-cardsColor pb-2 pt-5 px-6 w-full ${size} h-60 rounded-lg shadow-md group  hover:bg-primary transition-colors duration-500 relative`}>
            <img src={frameWorkIcon} className="h-10" />
            <div className="flex flex-col border-l-2 border-solid border-x-primary-light mb-1 group-hover:border-x-primary-extraLight transition-colors duration-500">
                <h4 className="font-semibold ml-2 group-hover:text-white transition-colors duration-500">{name}</h4>
                <h5 className="text-gray-500 text-xs ml-2 group-hover:text-gray-200 transition-colors duration-500">{level}</h5>
            </div>
            <p className="text-xs text-gray-500 overflow-hidden h-1/2 group-hover:text-gray-100 transition-colors duration-500" >
                {description}
            </p>
            <div className="abosolute bottom-0 transform -translate-y-1/2 flex flex-row">
            {lenguajesIcons?.map((icon, index) => (
                    <img key={index} src={icon} alt={`Icono de ${name}`} className="h-8" />
                ))}
            </div>
        </div>
    )
}
export default SkillsCards;