import {Book} from "./Book";
import {Typography} from "@mui/material";
import BookCard from "./BookCard";

export type BookGalleryProps = {
    books: Book[],
    deleteBook: (isbn: string) => void
}

export default function bookGallery(props: BookGalleryProps) {
    const hardcoverBooks: Book[] = props.books.filter((book) => book.bookType === 'HARD_COVER')
    const softcoverBooks: Book[] = props.books.filter((book) => book.bookType === 'SOFT_COVER')
    const hoerbuchBooks: Book[] = props.books.filter((book) => book.bookType === 'HOERBUCH')
    const ebookBooks: Book[] = props.books.filter((book) => book.bookType === 'E_BOOK')

    return (
        <div className='book-gallery'>
            <div className='book-gallery-column'>
                <Typography variant="h4" color="black">Hardcover</Typography>
                <div className='book-gallery-container'>
                    {
                        hardcoverBooks.map((book) => <BookCard key={book.isbn}
                                                               book={book}
                                                               deleteBook={props.deleteBook}/>)
                    }
                </div>
            </div>
            <hr/>
            <div className='book-gallery-column'>
                <Typography variant="h4" color="black">Softcover</Typography>
                <div className='book-gallery-container'>
                    {
                        softcoverBooks.map((book) => <BookCard key={book.isbn}
                                                               book={book}
                                                               deleteBook={props.deleteBook}/>)
                    }
                </div>
            </div>
            <hr/>
            <div className='book-gallery-column'>
                <Typography variant="h4" color="black">Hoerbuch</Typography>
                <div className='book-gallery-container'>
                    {
                        hoerbuchBooks.map((book) => <BookCard key={book.isbn}
                                                              book={book}
                                                              deleteBook={props.deleteBook}/>)
                    }
                </div>
            </div>
            <hr/>
            <div className='book-gallery-column'>
                <Typography variant="h4" color="black">E-Book</Typography>
                <div className='book-gallery-container'>
                    {
                        ebookBooks.map((book) => <BookCard key={book.isbn}
                                                           book={book}
                                                           deleteBook={props.deleteBook}/>)
                    }
                </div>
            </div>


        </div>
    )
}