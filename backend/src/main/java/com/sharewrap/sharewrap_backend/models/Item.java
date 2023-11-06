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

    @Column
    private Double equalShare;

    @Column(nullable = false)
    private Boolean isShared;

    @Column(nullable = false)
    private Boolean isPaid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bill_id")
    private Bill bill;


    @ManyToMany(mappedBy = "sharedItems")
    List<User> sharedUsers;

    public Item() {
        this.name = "My Item";
        this.price = 0.0;
    }

    public Item(String name, Double price) {
        this.name = name;
        this.price = price;
        this.isShared = false;
        this.isPaid = false;
    }

    public void setBill(Bill bill) {
        this.bill = bill;
    }

    public Double getPrice() {
        return price;
    }

    public List getSharedUsers() {
        return sharedUsers;
    }

    public Double getEqualShare() {
        Double share = price / (sharedUsers.size());
        this.equalShare = (double) Math.round(share * 100) / 100;
        return equalShare;
    }
}
