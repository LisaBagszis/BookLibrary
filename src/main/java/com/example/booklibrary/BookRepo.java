package com.example.booklibrary;

import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class BookRepo {

    protected List<Book> books;

    public BookRepo() {
        books = new ArrayList<>();
        Book book1 = new Book("1023948493", "die unendliche Geschichte", "Michael Ende", BookType.HARD_COVER);
        Book book2 = new Book("1234323436", "unterm Rad", "Hermann Hesse", BookType.SOFT_COVER);
        Book book3 = new Book("0345391802", "der alte Mann und das Meer", "Ernest Hemmingway", BookType.SOFT_COVER);
        books.addAll(List.of(book1, book2, book3));
    }

    public List<Book> list() {
        return books;
    }

    public Book get(String isbn) {
        for (Book book : books) {
            if (book.isbn().equals(isbn)) {
                return book;
            }
        }
        return null;
    }

    public Book addBook(Book book) {
        books.add(book);
        return book;

    }

    public Book putOrder(Book book, String isbn) {
        Book newBook = new Book(isbn, book.titel(), book.autor(), book.bookType());
        books.add(newBook);
        return newBook;
    }

    public void deleteBook(String isbn) {
        for (int i = 0; i < books.size(); i++) {
            if (books.get(i).isbn().equals(isbn)) {
                books.remove(i);
            }
        }
      /*  for (Book book : books) {
            if (book.isbn().equals(isbn)) {
                books.remove(book);
                System.out.println(book.isbn());

            }
        }*/

    }
}

