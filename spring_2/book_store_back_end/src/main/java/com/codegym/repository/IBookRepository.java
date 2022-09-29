package com.codegym.repository;

import com.codegym.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface IBookRepository extends JpaRepository<Book, Integer> {

    @Query(value = "select * from Book where is_deleted = 0", nativeQuery = true)
    Page<Book> listAllBook(Pageable pageable);

    @Query(value = "select * from Book  where `category_id`= 1",nativeQuery = true)
    Page<Book> listLiterary(Pageable pageable );
}
