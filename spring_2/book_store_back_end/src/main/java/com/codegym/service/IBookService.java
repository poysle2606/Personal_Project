package com.codegym.service;

import com.codegym.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IBookService {
    Page<Book> getAllBook(Pageable pageable);
    Page<Book> getHotLiterary(Pageable Pageable);
}
