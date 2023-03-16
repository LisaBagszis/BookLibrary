package com.example.booklibrary;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class Controller {

    private final BookService service;

    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return service.listBooks();
    }

    @GetMapping("/books/{isbn}")
    public Book getBookByIsbn(@PathVariable String isbn) {
        return service.getBook(isbn);
    }

    @PostMapping("/books")
    public Book saveBookWithRandomIsbn(@RequestBody Book book) {
        return service.addBook(book);
    }
    @PutMapping("/books/{isbn}")
    public Book putBook (@RequestBody Book book, @PathVariable String isbn) {
        return service.updateBook(book, isbn);
    }
    @DeleteMapping("books/{isbn}")
    public ResponseEntity deleteBook(@PathVariable String isbn) {
        service.deleteBook(isbn);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
