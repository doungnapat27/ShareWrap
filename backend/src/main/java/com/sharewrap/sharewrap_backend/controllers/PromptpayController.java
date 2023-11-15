package com.sharewrap.sharewrap_backend.controllers;

import com.sharewrap.sharewrap_backend.dtos.PaymentDto;
import com.sharewrap.sharewrap_backend.dtos.PromptpayDto;
import com.sharewrap.sharewrap_backend.services.PromptpayService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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

    @PostMapping("/pay")
    public String testPromptpay(@RequestBody @Valid PromptpayDto promptpayDto){
        System.out.println("Test promptpay...");
        System.out.println("PromptpayDto: " + promptpayDto);
        return promptpayDto.getPhoneNumber();
    }
}
