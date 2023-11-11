package com.sharewrap.sharewrap_backend.controllers;

import com.sharewrap.sharewrap_backend.config.UserAuthProvider;
import com.sharewrap.sharewrap_backend.dtos.LoginDto;
import com.sharewrap.sharewrap_backend.dtos.RegisterDto;
import com.sharewrap.sharewrap_backend.dtos.UserDto;
import com.sharewrap.sharewrap_backend.services.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
@RequiredArgsConstructor
@RestController
public class AuthController {

    private final UserService userService;
    private final UserAuthProvider userAuthProvider;

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody @Valid LoginDto loginDto) {
        UserDto userDto = userService.login(loginDto);
        userDto.setToken(userAuthProvider.createToken(userDto.getEmail()));
        return ResponseEntity.ok(userDto);
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody @Valid RegisterDto user) {
        UserDto createdUser = userService.register(user);
        createdUser.setToken(userAuthProvider.createToken(user.getEmail()));
        return ResponseEntity.created(URI.create("/users/" + createdUser.getId())).body(createdUser);
    }
}
