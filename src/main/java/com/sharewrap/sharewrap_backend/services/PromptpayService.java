package com.sharewrap.sharewrap_backend.services;

import com.sharewrap.sharewrap_backend.dtos.BillDto;
import com.sharewrap.sharewrap_backend.dtos.PromptpayDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.mappers.PromptpayMapper;
import com.sharewrap.sharewrap_backend.models.Bill;
import com.sharewrap.sharewrap_backend.models.Promptpay;
import com.sharewrap.sharewrap_backend.models.User;
import com.sharewrap.sharewrap_backend.repositories.PromptpayRepository;
import com.sharewrap.sharewrap_backend.repositories.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PromptpayService {
    final private PromptpayRepository promptpayRepository;
    final private PromptpayMapper promptpayMapper;
    final private UserRepository userRepository;

    @Transactional
    public PromptpayDto createPromptpay(PromptpayDto promptpayDto) {
        Promptpay promptpay = promptpayMapper.toPromptpay(promptpayDto);
        User user = userRepository.findById(promptpayDto.getUserId())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        promptpay.setUser(user);
        user.getPayments().add(promptpay);
        Promptpay savedPromptpay = promptpayRepository.save(promptpay);
        return promptpayMapper.toPromptpayDto(savedPromptpay);
    }

    public PromptpayDto getPromptpay(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        Promptpay promptpay = promptpayRepository.findByUser(user)
                .orElseThrow(() -> new AppException("Promptpay not found", HttpStatus.NOT_FOUND));
        return promptpayMapper.toPromptpayDto(promptpay);
    }

    public PromptpayDto updatePromptpay(PromptpayDto PromptpayDto) {
        User user = userRepository.findById(PromptpayDto.getUserId())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        Promptpay promptpay = promptpayRepository.findById(PromptpayDto.getId())
                .orElseThrow(() -> new AppException("Promptpay not found", HttpStatus.NOT_FOUND));
        promptpayMapper.updatePromptpay(promptpay, promptpayMapper.toPromptpay(PromptpayDto));
        promptpay.setUser(user);
        Promptpay savedPromptpay = promptpayRepository.save(promptpay);
        return promptpayMapper.toPromptpayDto(savedPromptpay);
    }
}
