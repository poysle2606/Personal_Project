package com.codegym.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Long codeBook;
    private String translation;
    private String production;
    private Integer numberPages;
    private String size;
    private Double price;
    private LocalDate dateStart;
    private String national;
    private Long view;
    private String imgUrl;
    private String author;

    @Column(columnDefinition = "BIT(1) DEFAULT 0")
    private Boolean isDeleted;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;

    @OneToMany(mappedBy = "books")
    @JsonBackReference
    private Set<OrderBook> orderBook;

    public Book() {
    }

    public Book(Integer id, String name, Long codeBook, String translation, String production,
                Integer numberPages, String size, Double price, LocalDate dateStart,
                String national, Long view, String imgUrl, Boolean isDeleted, String author,
                Category category, Set<OrderBook> orderBook) {
        this.id = id;
        this.name = name;
        this.codeBook = codeBook;
        this.translation = translation;
        this.production = production;
        this.numberPages = numberPages;
        this.size = size;
        this.price = price;
        this.dateStart = dateStart;
        this.national = national;
        this.view = view;
        this.imgUrl = imgUrl;
        this.isDeleted = isDeleted;
        this.author = author;
        this.category = category;
        this.orderBook = orderBook;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getNational() {
        return national;
    }

    public void setNational(String national) {
        this.national = national;
    }

    public Long getView() {
        return view;
    }

    public void setView(Long view) {
        this.view = view;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Long getCodeBook() {
        return codeBook;
    }

    public void setCodeBook(Long codeBook) {
        this.codeBook = codeBook;
    }

    public String getTranslation() {
        return translation;
    }

    public void setTranslation(String translation) {
        this.translation = translation;
    }

    public String getProduction() {
        return production;
    }

    public void setProduction(String production) {
        this.production = production;
    }

    public Integer getNumberPages() {
        return numberPages;
    }

    public void setNumberPages(Integer numberPages) {
        this.numberPages = numberPages;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public LocalDate getDateStart() {
        return dateStart;
    }

    public void setDateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
    }

    public Boolean getDeleted() {
        return isDeleted;
    }

    public void setDeleted(Boolean deleted) {
        isDeleted = deleted;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Set<OrderBook> getOrderBook() {
        return orderBook;
    }

    public void setOrderBook(Set<OrderBook> orderBook) {
        this.orderBook = orderBook;
    }
}
