import type { IBookRaw, IBookClean } from '../types/book.types';
import type { ICard, IScreen } from '../types/components.types';
import { RAW_BOOKS } from './mockBooks';

/**
 * Adapta los datos limpios al formato genérico ICard.
 */
function transformData(data: IBookRaw[]): IBookClean[] {

    return data.map((book) => ({
        id: book.id,
        titulo: book.title,
        autor: book.author,
        precioFinal: book.price + (book.price * 0.21),
        imagen: book.covers.large,
        categoria: book.genre
    }));
}

/**
 * Transforma IBookClean en componentes ICard[]
 */
export function adaptToComponents(books: IBookClean[]): ICard[] {

    return books.map((book) => ({
        id: book.id,
        title: book.titulo,
        image: book.imagen
    }));
}

/**
 * Función principal exportada para el componente App.
 */
export function getLibraryPage(): IScreen {

    const cleanBooks = transformData(RAW_BOOKS);
    //Adaptar libros a componentes ICard
    const cards = adaptToComponents(cleanBooks);
    return {
        id: "...",
        version: "...",
        title: "...",
        body: [
            {
                type: 'HERO',
                props: {
                    img: 'https://img.freepik.com/vector-premium/fondo-bandera-cintas-rojas-banderas-retro-decorativas-cintas-texto-etiquetas-precio-etiquetas-venta_300191-1049.jpg',
                    title: 'Ofertas de libros'
                }
            },
            {
                type: 'GRID',
                props: {
                    title: 'LIBROS',
                    space: 'md',
                    columns: 4,
                    elements: cards
                }
            },
            {
                type: 'CARD',
                props: cards[5]
            }
        ]
    };
}