

interface SkillsCardsProps {
    name: string,
    level: string,
    description: string;
    size?: number;
    icon:string
}``

const SkillsCards: React.FC<SkillsCardsProps> = ({ name, level, description, size = 'h-60', icon }) => {

    return (
        <div className={`bg-primary-cardsColor py-2 px-5 w-full ${size} h-60 rounded-lg shadow-md group  hover:bg-primary transition-colors duration-500`}>
            <img src={icon} />
            <div className="flex flex-col border-l-2 border-solid border-x-primary-light mb-1 group-hover:border-x-primary-extraLight transition-colors duration-500">
                <h4 className="font-semibold ml-2 group-hover:text-white transition-colors duration-500">{name}</h4>
                <h5 className="text-gray-500 text-xs ml-2 group-hover:text-gray-200 transition-colors duration-500">{level}</h5>
            </div>
            <p className="text-xs text-gray-500 overflow-hidden h-1/2 group-hover:text-gray-100 transition-colors duration-500" >
                {description}
            </p>
        </div>
    )
}
export default SkillsCards;