package com.sharewrap.sharewrap_backend.repositories;

import com.sharewrap.sharewrap_backend.models.Promptpay;
import com.sharewrap.sharewrap_backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PromptpayRepository extends JpaRepository<Promptpay, Long> {
    Optional<Promptpay> findByUser(User user);
}
