package com.sharewrap.sharewrap_backend.controllers;

import com.sharewrap.sharewrap_backend.dtos.PromptpayDto;
import com.sharewrap.sharewrap_backend.models.Promptpay;
import com.sharewrap.sharewrap_backend.services.PromptpayService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RequiredArgsConstructor
@Service
public class PromptpayController {

    final private PromptpayService promptpayService;

    @PostMapping("/add/promptpay")
    public ResponseEntity<PromptpayDto> addPromptpay(@RequestBody @Valid PromptpayDto promptpayDto) {
        PromptpayDto createdPromptpay = promptpayService.createPromptpay(promptpayDto);
        return ResponseEntity.ok(createdPromptpay);
    }
}
