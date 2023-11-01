package com.sharewrap.sharewrap_backend.services;

import com.sharewrap.sharewrap_backend.models.User;
import com.sharewrap.sharewrap_backend.repositories.UserRepository;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User addUser(User user) {
        String userId = generateUniqueUserId();
        user.setId(userId);
//        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        return userRepository.save(user);
    }

    public String generateUniqueUserId() {
        String userId;
        do {
            userId = generateUserId();
        } while (userRepository.existsById(userId));
        return userId;
    }

    public String generateUserId() {
        String wordPart = RandomStringUtils.randomAlphabetic(5).toLowerCase();
        String numberPart = RandomStringUtils.randomNumeric(5);
        return wordPart + "#" + numberPart;
    }
}
