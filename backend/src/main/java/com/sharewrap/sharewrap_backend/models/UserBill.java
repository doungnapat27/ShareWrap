package com.sharewrap.sharewrap_backend.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "user_bills")
@Getter
@Setter
public class UserBill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "bill_id")
    private Bill bill;

    @Column(name="share_total")
    private Double shareTotal;

    @Column(nullable = false)
    private Boolean isPaid;

    @OneToMany(mappedBy = "userBill", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Item> items;

    public UserBill() {
        this.isPaid = false;
        this.shareTotal = 0.0;
    }

    public UserBill(User user, Bill bill, Double shareTotal) {
        this.user = user;
        this.bill = bill;
        this.shareTotal = shareTotal;
        this.isPaid = false;
    }

}
