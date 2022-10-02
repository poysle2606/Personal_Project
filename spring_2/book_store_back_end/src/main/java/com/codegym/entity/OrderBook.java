package com.codegym.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
public class OrderBook {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private LocalDate orderDay;
    private Integer quality;

    @Column(columnDefinition = "BIT(1) DEFAULT 0")
    private Boolean isDeleted;

    @ManyToOne
    @JoinColumn(name = "book_id", referencedColumnName = "id")
    private Book books;

    @ManyToOne
    @JoinColumn(name = "app_user_id", referencedColumnName = "id")
    private AppUser appUser;

    @OneToMany(mappedBy = "orderBook")
    private Set<OrderDetails> orderDetails;

    public OrderBook() {
    }

    public OrderBook(Integer id, LocalDate orderDay, Integer quality, Boolean isDeleted,
                     Book books, AppUser appUser, Set<OrderDetails> orderDetails) {
        this.id = id;
        this.orderDay = orderDay;
        this.quality = quality;
        this.isDeleted = isDeleted;
        this.books = books;
        this.appUser = appUser;
        this.orderDetails = orderDetails;
    }

    public Integer getQuality() {
        return quality;
    }

    public void setQuality(Integer quality) {
        this.quality = quality;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDate getOrderDay() {
        return orderDay;
    }

    public void setOrderDay(LocalDate orderDay) {
        this.orderDay = orderDay;
    }

    public Boolean getDeleted() {
        return isDeleted;
    }

    public void setDeleted(Boolean deleted) {
        isDeleted = deleted;
    }

    public Book getBooks() {
        return books;
    }

    public void setBooks(Book books) {
        this.books = books;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }

    public Set<OrderDetails> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(Set<OrderDetails> orderDetails) {
        this.orderDetails = orderDetails;
    }
}
