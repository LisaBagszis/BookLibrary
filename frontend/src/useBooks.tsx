import {useEffect, useState} from "react";
import {Book} from "./Book";
import axios from "axios";
import {toast} from "react-toastify";

export default function useBooks () {
    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        loadAllBooks()
    }, [])

    function loadAllBooks() {
        axios.get("/api/books")
            .then((getAllBooksResponse) => {
                setBooks(getAllBooksResponse.data)})
            .catch((error) => {
                toast("Unkown Error, try again later!")})
    }

    function addBook(book: Book) {
        axios.post("api/books", book)
            .then((addBookResponse) => {
                setBooks([...books, addBookResponse.data])
            })
            .catch((error) => {
                toast("Unkown Error, try again later!")
            })
    }

    function deleteBook(isbn: string) {
        axios.delete('api/books/' + isbn)
            .then(() => {
                setBooks(books.filter((book) => book.isbn !== isbn))
            })
            .catch((error) => {
                toast("Unkown Error, try again later!")
            })
    }


    return {books, addBook, deleteBook }
}