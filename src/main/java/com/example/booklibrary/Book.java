package com.example.booklibrary;

public record Book(
        String isbn,
        String titel,
        String autor,
        BookType bookType
) {
}
