package com.sharewrap.sharewrap_backend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.Getter;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {
    @Getter
    @Id
    private String id;

    @Getter
    @Column(nullable = false, unique = true, length = 45)
    @Email(message = "Please provide a valid email")
    private String email;

    @Getter
    @Column(nullable = false, length = 64)
    private String password;

    @Getter
    @Column(name = "username", nullable = false, length = 20)
    private String username;


    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Bill> ownedBills;

    @Getter
    @ManyToMany
    @JoinTable(
            name = "friendships",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "friend_id")
    )
    private Set<User> friends;

//    @ManyToMany
//    @JoinTable(
//            name = "bill_participants",
//            joinColumns = @JoinColumn(name = "bill_id"),
//            inverseJoinColumns = @JoinColumn(name = "user_id")
//    )
//    private List<Bill> bills;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserBill> userBills;

    public User(String email, String username) {
        this.email = email;
        this.username = username;
    }
    public User() {
    }
    public void setId(String id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String encode) {
        this.password = encode;
    }


    public void addBill(Bill bill) {
        bill.setUser(this);
        ownedBills.add(bill);
    }

    public void addBills(List<Bill> billList) {
        for (Bill bill : billList){
            this.addBill(bill);
        }
    }


    public List<Bill> getBills() {
        return ownedBills;
    }

}
