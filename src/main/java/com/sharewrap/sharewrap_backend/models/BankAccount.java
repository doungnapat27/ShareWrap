package com.sharewrap.sharewrap_backend.models;

import jakarta.persistence.*;
import lombok.Builder;
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

        public String getBankName() {
            return bankName;
        }

        public void setBankName(String bankName) {
            this.bankName = bankName;
        }

        public String getAccountNumber() {
            return accountNumber;
        }
        public void setAccountNumber(String accountNumber) {
            this.accountNumber = accountNumber;
        }

        public String getName() {
            return super.getName();
        }
        public void setName(String name) {
            super.setName(name);
        }
        public Long getId() {
            return super.getId();
        }
        public void setId(Long id) {
            super.setId(id);
        }

    @Override
    public void setUser(User user) {
        super.setUser(user);
    }
}
