package com.codegym.repository;

import com.codegym.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICategoryRepository extends JpaRepository<Category, Integer> {

    @Query(value = "select * from Category",nativeQuery = true)
    List<Category> listAllCategory();
}
