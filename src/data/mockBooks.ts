import { type IBookRaw } from "../types/book.types";

// 1. Datos brutos (Lista de 50 objetos)
export const RAW_BOOKS: IBookRaw[] = [
  { id: 1, title: "Cien años de soledad", author: "Gabriel García Márquez", genre: "Realismo Mágico", price: 20, stock: 15, rating: 4.8, covers: { small: "url1", large: "url2" }, details: "Publicado en 1967..." },
  { id: 2, title: "1984", author: "George Orwell", genre: "Distopía", price: 15, stock: 10, rating: 4.5, covers: { small: "url3", large: "url4" }, details: "Gran Hermano te vigila..." },
  // ... (Repetir hasta 50 libros con estructura similar)
  ...Array.from({ length: 48 }, (_, i) => ({
    id: i + 3,
    title: `Libro de Ejemplo ${i + 3}`,
    author: "Autor Desconocido",
    genre: i % 2 === 0 ? "Fantasía" : "Ciencia Ficción",
    price: Math.floor(Math.random() * 30) + 10,
    stock: 5,
    rating: 4.0,
    covers: { small: "https://via.placeholder.com/150", large: "https://via.placeholder.com/300" },
    details: "Descripción extendida del libro..."
  }))
];