package com.codegym.controller;

import com.codegym.entity.Book;
import com.codegym.service.IBookService;
import com.codegym.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Sort;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/book-store")
public class BookController {

    @Autowired
    IBookService iBookService;

    @Autowired
    ICategoryService iCategoryService;

    @GetMapping("/literary-vn")
    public ResponseEntity<Page<Book>> getCategoryLiteraryVn(@RequestParam(name = "page", defaultValue = "0") int page){
        Sort sort = Sort.by("view").descending();
        Page<Book> getListLiterary = iBookService.getHotLiterary(PageRequest.of(page, 4, sort));
        if(getListLiterary.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(getListLiterary, HttpStatus.OK);
    }
}
