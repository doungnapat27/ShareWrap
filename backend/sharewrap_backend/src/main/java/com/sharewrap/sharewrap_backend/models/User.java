package com.sharewrap.sharewrap_backend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {
    @Id
    private String id;

    @Column(nullable = false, unique = true, length = 45)
    @Email(message = "Please provide a valid email")
    private String email;

    @Column(nullable = false, length = 64)
    private String password;

    @Column(name = "username", nullable = false, length = 20)
    private String username;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Bill> bills;

    @ManyToMany
    @JoinTable(
            name = "item_share",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "item_id"))
    List<Item> sharedItems;

    @ManyToMany
    @JoinTable(
            name = "friendships",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "friend_id")
    )
    private Set<User> friends;

    public User() {

    }
    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return this.id;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return this.email;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    public String getUsername() {
        return this.username;
    }

    public void setPassword(String encode) {
        this.password = encode;
    }

    public String getPassword() {
        return this.password;
    }


    public void addBill(Bill bill) {
        bill.setUser(this);
        bills.add(bill);
    }

    public void addBills(List<Bill> billList) {
        for (Bill bill : billList){
            this.addBill(bill);
        }
    }


    public List<Bill> getBills() {
        return bills;
    }

    public Set<User> getFriends() {
        return friends;
    }

}
