package com.codegym.service.impl;

import com.codegym.entity.Book;
import com.codegym.repository.IBookRepository;
import com.codegym.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService implements IBookService {

    @Autowired
    IBookRepository iBookRepository;

    @Override
    public Page<Book> getAllBook(Pageable pageable) {
        return iBookRepository.listAllBook(pageable);
    }

    @Override
    public Page<Book> getHotLiterary(Pageable pageable) {
        return iBookRepository.listLiterary(pageable);
    }
}
