package com.sharewrap.sharewrap_backend.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Double price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userBill_id")
    private UserBill userBill;


//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "bill_id")
//    private Bill bill;


//    @ManyToMany(mappedBy = "sharedItems")
//    List<User> sharedUsers;

    public Item() {
        this.name = "My Item";
        this.price = 0.0;
    }

    public Item(String name, Double price) {
        this.name = name;
        this.price = price;
//        this.isShared = false;
//        this.isPaid = false;
    }

//    public void setBill(Bill bill) {
//        this.bill = bill;
//    }

    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public Long getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public void setName(String itemName) {
        this.name = itemName;
    }
    public void setId(Long id) {
        this.id = id;
    }

}
