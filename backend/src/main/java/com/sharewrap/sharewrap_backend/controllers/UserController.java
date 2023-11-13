package com.sharewrap.sharewrap_backend.controllers;

import com.sharewrap.sharewrap_backend.config.UserAuthProvider;
import com.sharewrap.sharewrap_backend.dtos.UserDto;
import com.sharewrap.sharewrap_backend.services.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RequiredArgsConstructor
@RestController
public class UserController {
    private final UserService userService;
    @GetMapping("/{userId}/friends")
    public ResponseEntity<Set<UserDto>> getFriends(@PathVariable String userId) {
        System.out.println("Try to get List of friends");
        return ResponseEntity.ok(userService.getFriends(userId));
    }

    @GetMapping("/search/users/{friendId}")
    public ResponseEntity <UserDto> getUser(@PathVariable String friendId) {
        System.out.println("Try to searching...");
        return ResponseEntity.ok(userService.getUser(friendId));
    }

    @PostMapping("/{userId}/add/friend/{friendId}")
    public ResponseEntity<String> addFriend(@PathVariable String userId, @PathVariable String friendId) {
        System.out.println("Try to add friend...");
        return ResponseEntity.ok(userService.addFriend(userId, friendId));
    }


}
