package com.sharewrap.sharewrap_backend.repositories;

import com.sharewrap.sharewrap_backend.models.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BillRepository extends JpaRepository<Bill, Long> {
    Optional<Bill> findById(Long id);
    Optional<Bill> findByName(String name);

}
