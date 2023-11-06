package com.sharewrap.sharewrap_backend.repository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.sharewrap.sharewrap_backend.models.User;
import com.sharewrap.sharewrap_backend.repositories.UserRepository;
import com.sharewrap.sharewrap_backend.services.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class UserRepositoryTests {
    @Autowired
    private TestEntityManager entityManager;

//    @Autowired
//    private UserRepository userRepo;

//    @MockBean
//    private UserRepository userRepository;
//
//    @Autowired
//    private UserService userService;
//
//    @Test
//    public void testCreateUser() {
//        User user = new User();
//        user.setEmail("oatza@gmail.com");
//        user.setPassword("Oatzanarak007");
//        user.setUsername("Oatzanarak");
//        User savedUser = userService.addUser(user);
////        String userId = userService.generateUniqueUserId();
////        user.setId(userId);
////
////        User savedUser = userRepo.save(user);
//
//        User existUser = entityManager.find(User.class, savedUser.getId());
//
//        assertNotNull(savedUser);
//        assertNotNull(savedUser.getId());
//        assertThat(user.getEmail()).isEqualTo(existUser.getEmail());
//
//    }
}
