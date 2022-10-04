package com.codegym.repository;

import com.codegym.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface IBookRepository extends JpaRepository<Book, Integer> {

    @Query(value = "select * from Book where is_deleted = 0", nativeQuery = true)
    List<Book> listAllBook();

    @Query(value = "select * from Book where is_deleted = 0 and category_id = 1 order by `view` desc limit 4", nativeQuery = true)
    List<Book> topFourLiterary();

    @Query(value = "select * from Book  where `category_id`= 1 and is_deleted = 0 order by `view` desc",nativeQuery = true)
    Page<Book> listLiterary(Pageable pageable);

    @Query(value = "select * from Book  where `category_id`= 2 and is_deleted = 0 order by `view` desc",nativeQuery = true)
    Page<Book> listLiteraryNational(Pageable pageable );

    @Query(value = "select * from Book  where `category_id`= 3 and is_deleted = 0 order by `view` desc",nativeQuery = true)
    Page<Book> listLiteraryChildren(Pageable pageable );

    @Query(value = "select * from Book where id=:id", nativeQuery = true)
    Book findByIdBook (@Param("id") Integer id);

}
