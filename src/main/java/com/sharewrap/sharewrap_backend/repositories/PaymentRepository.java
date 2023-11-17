package com.sharewrap.sharewrap_backend.repositories;

import com.sharewrap.sharewrap_backend.models.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
