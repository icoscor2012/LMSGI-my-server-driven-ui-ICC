import type { IGrid } from "../../types/components.types";
import Card from "./card";



export default function Grid(grid: IGrid) {

    const gap = grid.space === 'sm' ? 4 : (grid.space === 'md') ? 6 : 8

    return (
        <section>
            <h2 className="w-full text-center text-5xl m-10">{grid.title}</h2>
            <div className={`mb-10 grid grid-cols-${grid.columns} justify-items-center gap-${gap}`}>
                {grid.elements.map((card) =>
                    <Card key={card.id} {...card} />
                )}
            </div>
        </section>
    )
}