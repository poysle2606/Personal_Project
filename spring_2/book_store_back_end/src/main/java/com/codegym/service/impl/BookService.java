package com.codegym.service.impl;

import com.codegym.entity.Book;
import com.codegym.repository.IBookRepository;
import com.codegym.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService implements IBookService {

    @Autowired
    IBookRepository iBookRepository;

    @Override
    public List<Book> getAllBook() {
        return iBookRepository.listAllBook();
    }

    @Override
    public Book findByIdBook(Integer id) {
        return iBookRepository.findByIdBook(id);
    }

    @Override
    public List<Book> getFourLiterary() {
        return iBookRepository.topFourLiterary();
    }

    @Override
    public Page<Book> getHotLiterary(Pageable pageable) {
        return iBookRepository.listLiterary(pageable);
    }

    @Override
    public Page<Book> getHotLiteraryNational(Pageable Pageable) {
        return iBookRepository.listLiteraryNational(Pageable);
    }

    @Override
    public Page<Book> getHotLiteraryChildren(Pageable Pageable) {
        return iBookRepository.listLiteraryChildren(Pageable);
    }

}
