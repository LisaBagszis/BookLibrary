import {Book} from "./Book";
import {Button, Card, Typography} from "@mui/material";

type BookCardProps = {
    book : Book,
    deleteBook: (isbn: string) => void
}

export default function BookCard(props: BookCardProps) {
    const cover : {HARD_COVER: "HARD_COVER", SOFT_COVER: "SOFT_COVER", HOERBUCH: "HOERBUCH", E_BOOK: "E_BOOK"} = {
        "HARD_COVER": "HARD_COVER",
        "SOFT_COVER": "SOFT_COVER",
        "HOERBUCH": "HOERBUCH",
        "E_BOOK": "E_BOOK"
    }

    function onDeleteClick() {
        props.deleteBook(props.book.isbn)
    }
    return (
        <Card variant="outlined" className="todoCard">
            <Typography variant="subtitle1" color="black" > Titel: {props.book.titel}</Typography>
            <Typography variant="subtitle1" color="black"> Autor: {props.book.autor}</Typography>
            <Typography variant="subtitle1" color="black"> ISBN: {props.book.isbn}</Typography>
            <Button variant="outlined" color="secondary" onClick={onDeleteClick}>Delete</Button>

        </Card>
    )
}