package com.sharewrap.sharewrap_backend.services;

import com.sharewrap.sharewrap_backend.dtos.LoginDto;
import com.sharewrap.sharewrap_backend.dtos.RegisterDto;
import com.sharewrap.sharewrap_backend.dtos.UserDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.mappers.UserMapper;
import com.sharewrap.sharewrap_backend.models.User;
import com.sharewrap.sharewrap_backend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;


    public UserDto login(LoginDto loginDto) {
        User user = userRepository.findByEmail(loginDto.getEmail())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(loginDto.getPassword()),user.getPassword())) {
            return userMapper.toUserDto(user);
        }
        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }
    public UserDto register(RegisterDto userDto) {
        System.out.println("userDto: " + userDto);
        Optional<User> optionalUser = userRepository.findByEmail(userDto.getEmail());

        if (optionalUser.isPresent()) {
            throw new AppException("Email already exists", HttpStatus.BAD_REQUEST);
        }

        User user = userMapper.registerToUser(userDto);
        user.setId(generateUniqueUserId(userDto.getUsername()));
        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(userDto.getPassword())));
        User savedUser = userRepository.save(user);

        return userMapper.toUserDto(savedUser);
    }

    public String generateUniqueUserId(String username) {
        String userId;
        do {
            userId = generateUserId(username);
        } while (userRepository.existsById(userId));
        return userId;
    }

    public String generateUserId(String username) {
        String wordPart = username;
        String numberPart = RandomStringUtils.randomNumeric(5);
        return wordPart + "#" + numberPart;
    }

    public UserDto findByUsername(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return userMapper.toUserDto(user);
    }

    public UserDto findByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return userMapper.toUserDto(user);
    }

}
