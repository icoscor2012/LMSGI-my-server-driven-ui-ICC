import type { IHero } from "../../types/components.types";


export default function Hero(hero: IHero) {

    return (
        <div className="relative w-full h-100">
            <img
                src={hero.img}
                alt={hero.title}
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
                    {hero.title}
                </h1>
            </div>
        </div>
    )
}