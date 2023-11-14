package com.sharewrap.sharewrap_backend.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "bank_accounts")
@Getter
@Setter
public class BankAccount  extends Payment{

        private String bankName;

        private String accountNumber;

        public BankAccount() {
            super();
        }

        public BankAccount(String bankName, String accountNumber, String name) {
            super(name);
            this.bankName = bankName;
            this.accountNumber = accountNumber;
        }

}
