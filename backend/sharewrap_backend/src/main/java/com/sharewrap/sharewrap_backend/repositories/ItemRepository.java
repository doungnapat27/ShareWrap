package com.sharewrap.sharewrap_backend.repositories;

import com.sharewrap.sharewrap_backend.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    Optional<Item> findById(Long id);
    Optional<Item> findByName(String name);

}
