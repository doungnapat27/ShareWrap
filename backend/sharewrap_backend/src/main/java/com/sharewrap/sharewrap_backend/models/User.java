package com.sharewrap.sharewrap_backend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;

@Entity
@Table(name = "users")
public class User {
    @Id
    private String id;

    @Column(nullable = false, unique = true, length = 45)
    @Email(message = "Please provide a valid email")
    private String email;

    @Column(nullable = false, length = 64)
    private String password;

    @Column(name = "username", nullable = false, length = 20)
    private String username;

    public User() {

    }

//    public User(long id, String username, String email, String encode) {
//        this.id = id;
//        this.username = username;
//        this.email = email;
//        this.password = encode;
//    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
