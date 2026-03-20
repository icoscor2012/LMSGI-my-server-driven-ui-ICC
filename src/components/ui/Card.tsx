import type { ICard } from "../../types/components.types";


export default function Card(card: ICard) {
    
    return (
        <div className="w-75 shadow-2xl/30 place-items-center rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl/50 duration-300 group">
            <div className="h-64 overflow-hidden">
                <img
                    className="w-100 h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={card.image || ''}
                    alt={card.title}
                />
            </div>

            <div className="p-4 leading-7 w-full">
                <h3 className="font-medium text-xl my-1">{card.title}</h3>
                {card.description ? <p className="text-gray-500">{card.description}</p> : ''}
            </div>
        </div>
    )
}