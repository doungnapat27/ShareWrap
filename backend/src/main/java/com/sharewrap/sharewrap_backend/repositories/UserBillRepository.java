package com.sharewrap.sharewrap_backend.repositories;

import com.sharewrap.sharewrap_backend.models.User;
import com.sharewrap.sharewrap_backend.models.UserBill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserBillRepository extends JpaRepository<UserBill, Long> {
    Optional<UserBill> findByUser(User user);
}
