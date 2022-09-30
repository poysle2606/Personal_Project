package com.codegym.controller;

import com.codegym.entity.Book;
import com.codegym.entity.Category;
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

    @GetMapping("/book")
    public ResponseEntity<List<Book>> getAllBook(){
        List<Book> getListLiterary = iBookService.getAllBook();
        if(getListLiterary.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(getListLiterary, HttpStatus.OK);
    }

    @GetMapping("/literary-vn")
    public ResponseEntity<Page<Book>> getCategoryLiteraryVn(@RequestParam(name = "page", defaultValue = "0") int page){
        Sort sort = Sort.by("view").descending();
        Page<Book> getListLiterary = iBookService.getHotLiterary(PageRequest.of(page, 4, sort));
        if(getListLiterary.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(getListLiterary, HttpStatus.OK);
    }

    @GetMapping("/literary-national")
    public ResponseEntity<Page<Book>> getCategoryLiteraryNational(@RequestParam(name = "page", defaultValue = "0") int page){
        Sort sort = Sort.by("view").descending();
        Page<Book> getListLiteraryNational = iBookService.getHotLiteraryNational(PageRequest.of(page, 4, sort));
        if(getListLiteraryNational.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(getListLiteraryNational, HttpStatus.OK);
    }

    @GetMapping("/literary-children")
    public ResponseEntity<Page<Book>> getCategoryLiteraryChildren(@RequestParam(name = "page", defaultValue = "0") int page){
        Sort sort = Sort.by("view").descending();
        Page<Book> getListLiteraryChildren = iBookService.getHotLiteraryChildren(PageRequest.of(page, 4, sort));
        if(getListLiteraryChildren.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(getListLiteraryChildren, HttpStatus.OK);
    }

    @GetMapping("/category")
    public ResponseEntity<List<Category>> getCategory(){
        List<Category> getListCategory = iCategoryService.listAll();
        if(getListCategory.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(getListCategory, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Book> findByIdBook(@PathVariable Integer id) {
        Book idBook = iBookService.findByIdBook(id);
        if (idBook == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(idBook, HttpStatus.OK);
    }
}
