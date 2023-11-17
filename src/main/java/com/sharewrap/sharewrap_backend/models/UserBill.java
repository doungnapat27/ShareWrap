package com.sharewrap.sharewrap_backend.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Blob;
import java.sql.Date;
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

    @Getter
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "bill_id")
    private Bill bill;

    @Column(name="share_total")
    private Double shareTotal;

    @Column(nullable = false)
    private Boolean isPaid;

    @Column
    private Boolean isApprove;

    @OneToMany(mappedBy = "userBill", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Item> items;

    @Lob
    @Column(name = "receipt", columnDefinition="LONGBLOB")
    private byte[] receipt;

    @Getter
    @Column
    private Date uploadedDate;

    public UserBill() {
        this.isPaid = false;
        this.isApprove = false;
        this.shareTotal = 0.0;
    }

    public UserBill(User user, Bill bill, Double shareTotal) {
        this.user = user;
        this.bill = bill;
        this.shareTotal = shareTotal;
        this.isPaid = false;
        this.isApprove = false;
    }

    public void setBill(Bill bill) {
        this.bill = bill;
    }

    public void setUploadedDate(Date uploadedDate) {
        this.uploadedDate = uploadedDate;
    }

}
