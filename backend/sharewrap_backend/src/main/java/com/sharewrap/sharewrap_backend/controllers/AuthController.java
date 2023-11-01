package com.sharewrap.sharewrap_backend.controllers;

import com.sharewrap.sharewrap_backend.models.User;
import com.sharewrap.sharewrap_backend.services.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    private ResponseEntity<?>  register(@Valid @RequestBody Map<String,Object> body, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            List<String> errors = bindingResult.getAllErrors()
                    .stream()
                    .map(err -> err.getDefaultMessage())
                    .collect(Collectors.toList());
            return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
        }
        User user = new User();
        user.setEmail(body.get("email").toString());
        user.setPassword(body.get("password").toString());
        user.setUsername(body.get("username").toString());
        userService.addUser(user);
        return new ResponseEntity<>("Successfully registered", HttpStatus.OK);
    }
//    @PostMapping(path = "/login")
//    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
//    {
//        LoginMessage loginMessage = userService.loginUser(loginDTO);
//        return ResponseEntity.ok(loginMessage);
//    }
}
