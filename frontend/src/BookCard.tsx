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
            <Typography variant="subtitle1" color="black"> {props.book.titel}</Typography>
            <Typography variant="subtitle1" color="black"> {props.book.autor}</Typography>
            <Typography variant="subtitle1" color="black"> {props.book.isbn}</Typography>
            <Typography variant="subtitle1" color="black"> {props.book.bookType}</Typography>
            <Button variant="outlined" color="secondary" onClick={onDeleteClick}>Delete</Button>

        </Card>
    )
}