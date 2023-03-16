package com.example.booklibrary;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepo bookRepo;
    private final IdService idService;

    public List<Book> listBooks() {
        return bookRepo.list();

    }

    public Book getBook(String isbn) {
        return bookRepo.get(isbn);
    }

    public Book addBook(Book book) {
        return bookRepo.addBook(new Book(idService.generateId(), book.titel(), book.autor(), book.bookType()));
    }

    public Book updateBook(Book book, String isbn) {
        return bookRepo.putOrder(book, isbn);
    }

    public void deleteBook(String isbn) {
        bookRepo.deleteBook(isbn);
    }
}
