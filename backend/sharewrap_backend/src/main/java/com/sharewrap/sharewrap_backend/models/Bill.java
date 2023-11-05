package com.sharewrap.sharewrap_backend.models;

import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.sql.Date;
import java.util.*;

@Entity
@Table(name = "bills")
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Double amount;

    @Column
    private Double equalShare;

    @Column
    private Date dueDate;

    @Column(nullable = false)
    private Boolean isPaid;

    @Column(nullable = false)
    private Date createdDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;

    @OneToMany(mappedBy = "bill", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Item> items;


    public Bill() {
        this.name = "My Bill";
        this.amount = 0.0;
        this.isPaid = false;
        this.createdDate = new Date(System.currentTimeMillis());
    }

    public void setUser(User user) {
        this.user = user;
    }

    // Add utility methods to add and remove items
    public void addItem(Item item) {
        item.setBill(this);
        items.add(item);
    }

    public void addItems(List<Item> itemList) {
        for (Item item : itemList){
            this.addItem(item);
        }
    }

    public void removeItem(Item item) {
        items.remove(item);
        item.setBill(null);
    }

    public List<Item> getItems() {
        return items;
    }

    public Double getAmount() {
        return amount;
    }

    public Double getTotal() {
        for(Item item : items) {
            amount += item.getPrice();
        }
        return amount;
    }
    public Double getEqualShare() {
        Set<User> sharedUsers = new HashSet<>();
        for(Item item : items) {
            sharedUsers.addAll(item.getSharedUsers());
        }
        Double share = getTotal() / (sharedUsers.size());
        this.equalShare = (double) Math.round(share * 100) / 100;
        return equalShare;
    }
}
