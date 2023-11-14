package com.sharewrap.sharewrap_backend.repositories;

import com.sharewrap.sharewrap_backend.models.Promptpay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PromptpayRepository extends JpaRepository<Promptpay, Long> {
}
