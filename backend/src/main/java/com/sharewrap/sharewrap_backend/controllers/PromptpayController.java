package com.sharewrap.sharewrap_backend.controllers;

import com.sharewrap.sharewrap_backend.dtos.PaymentDto;
import com.sharewrap.sharewrap_backend.dtos.PromptpayDto;
import com.sharewrap.sharewrap_backend.services.PromptpayService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RequiredArgsConstructor
@RestController
public class PromptpayController {

    final private PromptpayService promptpayService;

    @PostMapping("/add/promptpay")
    public ResponseEntity<PromptpayDto> addPromptpay(@RequestBody @Valid PromptpayDto promptpayDto) {
        System.out.println("Adding promptpay...");
        System.out.println("PromptpayDto: " + promptpayDto);
        PromptpayDto createdPromptpay = promptpayService.createPromptpay(promptpayDto);
        return ResponseEntity.created(URI.create("/promptpays/" + createdPromptpay.getId())).body(createdPromptpay);
    }

    @GetMapping("/{userId}/promptpay")
    public ResponseEntity<PromptpayDto> getPromptpay(@PathVariable String userId) {
        System.out.println("Getting promptpay...");
        PromptpayDto promptpayDto = promptpayService.getPromptpay(userId);
        return ResponseEntity.ok(promptpayDto);
    }

    @PutMapping("/update/promptpay")
    public ResponseEntity<PromptpayDto> updatePromptpay(@RequestBody @Valid PromptpayDto promptpayDto) {
        System.out.println("Updating promptpay...");
        PromptpayDto updatedPromptpay = promptpayService.updatePromptpay(promptpayDto);
        return ResponseEntity.ok(updatedPromptpay);
    }
}
