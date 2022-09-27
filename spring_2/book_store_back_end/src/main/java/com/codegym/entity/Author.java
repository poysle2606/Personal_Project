package com.codegym.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private LocalDate birthDay;
    private String address;

    @OneToMany(mappedBy = "author")
    private List<Book> book;

    public Author() {
    }

    public Author(Integer id, String name, LocalDate birthDay, String address, List<Book> book) {
        this.id = id;
        this.name = name;
        this.birthDay = birthDay;
        this.address = address;
        this.book = book;
    }

    public List<Book> getBook() {
        return book;
    }

    public void setBook(List<Book> book) {
        this.book = book;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getBirthDay() {
        return birthDay;
    }

    public void setBirthDay(LocalDate birthDay) {
        this.birthDay = birthDay;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
