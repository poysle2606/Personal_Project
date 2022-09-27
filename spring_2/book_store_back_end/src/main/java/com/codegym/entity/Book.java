package com.codegym.entity;


import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Long codeBook;
    private String translation;
    private String production;
    private Integer numberPages;
    private String size;
    private Double price;
    private LocalDate dateStart;

    @Column(columnDefinition = "BIT(1) DEFAULT 0")
    private Boolean isDeleted;

    @ManyToOne
    @JoinColumn(name = "author_id", referencedColumnName = "id")
    private Author author;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;

    @OneToMany(mappedBy = "books")
    private Set<OrderBook> orderBook;
}
