package com.sharewrap.sharewrap_backend.repositories;

import com.sharewrap.sharewrap_backend.models.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankAccountRepository extends JpaRepository<BankAccount, Long> {
}
