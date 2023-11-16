package com.sharewrap.sharewrap_backend.models;

import jakarta.persistence.*;
import lombok.Getter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.sql.Date;
import java.util.*;

@Entity
@Table(name = "bills")
public class Bill {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Getter
    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Boolean isPaid;

    @Getter
    @Column
    private Date createdDate;

    @Getter
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;

    @Getter
    @Column
    private char paymentType;

    @Getter
    @OneToMany(mappedBy = "bill", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserBill> userBills;

    public Bill() {
        this.name = "My Bill";
        this.isPaid = false;
        this.createdDate = new Date(System.currentTimeMillis());
    }

    public Bill(String name) {
        this.name = name;
        this.isPaid = false;
        this.createdDate = new Date(System.currentTimeMillis());
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void setIsPaid(Boolean isPaid) {
        this.isPaid = isPaid;
    }
    public Boolean getIsPaid(Boolean isPaid) {
        return isPaid;
    }

    public void setPaymentType(char paymentType) {
        this.paymentType = paymentType;
    }
    public void setId(Long id) {
        this.id = id;
    }

}
