package com.codegym.service;

import com.codegym.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;


public interface IBookService {
    List<Book> getAllBook();

    Book findByIdBook(Integer id);

    List<Book> getFourLiterary();

    Page<Book> getHotLiterary(Pageable Pageable);

    Page<Book> getHotLiteraryNational(Pageable Pageable);

    Page<Book> getHotLiteraryChildren(Pageable Pageable);

}
