import {Book} from "./Book";
import {ChangeEvent, FormEvent, useState} from "react";
import {Button, TextField} from "@mui/material";

type AddBookProps = {
    addBook: (book: Book) => void
}

export default function AddBook (props: AddBookProps) {
    const [book, setBook] = useState<Book>({titel: "", autor: "", isbn: "", bookType: "E_BOOK"})

    function onSaveBook(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        props.addBook(book)
    }
    function onChange (event: ChangeEvent<HTMLInputElement>) {
        const name = event.target.name
        const value = event.target.value
        setBook({...book, [name]:value})
    }

    function onSelect (event: ChangeEvent<HTMLSelectElement>) {
        const name = event.target.name
        const value = event.target.value
        setBook({...book, [name]:value})
    }


return (
    <div className = "addBook">
        <form onSubmit={onSaveBook}>
            <TextField id="standard-basic" label="Titel:" variant="standard" name="titel" value={book.titel} onChange={onChange}/>
            <TextField id="standard-basic" label="Autor:" variant="standard" name="autor" value={book.autor} onChange={onChange}/>
            <select name="bookType" value={book.bookType} onChange={onSelect}>
                <option value="SOFT_COVER">Softcover</option>
                <option value="HOERBUCH">Hoerbuch</option>
                <option value="E_BOOK">EBook</option>
                <option value="HARD_COVER">Hardcover</option>
            </select>
            <Button type='submit' variant = "contained" color = "success">Save</Button>
        </form>
    </div>
)
}