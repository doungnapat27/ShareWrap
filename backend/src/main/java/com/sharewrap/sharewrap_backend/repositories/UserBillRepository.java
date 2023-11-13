package com.sharewrap.sharewrap_backend.repositories;

import com.sharewrap.sharewrap_backend.models.UserBill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserBillRepository extends JpaRepository<UserBill, Long> {
}
