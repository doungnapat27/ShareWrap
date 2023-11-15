package com.sharewrap.sharewrap_backend.repositories;

import com.sharewrap.sharewrap_backend.models.BankAccount;
import com.sharewrap.sharewrap_backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BankAccountRepository extends JpaRepository<BankAccount, Long> {
    Optional<BankAccount> findByUser(User user);
}
