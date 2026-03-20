import type { IScreen } from "../types/components.types"
import Card from "./ui/card"
import Grid from "./ui/Grid"
import Hero from "./ui/Hero"

interface IScreenData {
    screenData: IScreen
}

export default function RenderScreen({ screenData }: IScreenData) {

    return (
        <>
            {screenData.body.map((element) => {
                switch (element.type) {
                    case 'CARD':
                        return <Card {...element.props} />
                    case 'GRID':
                        return <Grid {...element.props} />
                    case 'HERO':
                        return <Hero {...element.props} />
                    default:
                        return <h1>Error! Recarga la página</h1>
                }
            })}
        </>
    )
}