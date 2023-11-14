package com.sharewrap.sharewrap_backend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;



@Entity
@Table(name = "promptpays")
@Getter
@Setter
public class Promptpay extends Payment{

    private String phoneNumber;

    public Promptpay() {
        super();
    }
    public Promptpay(String name, String phoneNumber) {
        super(name);
        this.phoneNumber = phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }
}
