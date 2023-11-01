package com.sharewrap.sharewrap_backend.repositories;

import com.sharewrap.sharewrap_backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findOneByEmailAndPassword(String email, String password);
    User findByEmail(String email);
    User findByUsername(String username);
}
