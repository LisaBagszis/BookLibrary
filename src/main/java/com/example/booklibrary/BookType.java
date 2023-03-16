package com.example.booklibrary;


public enum BookType {
            SOFT_COVER("Softcover"),

            E_BOOK("EBook"),

            HARD_COVER("Hardcover"),

            HOERBUCH("Hoerbuch");

    String name;
    BookType(String name) {
        this.name = name;
    }
}


