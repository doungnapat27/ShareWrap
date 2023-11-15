package com.sharewrap.sharewrap_backend.services;


import com.sharewrap.sharewrap_backend.dtos.BankAccountDto;
import com.sharewrap.sharewrap_backend.dtos.BillDto;
import com.sharewrap.sharewrap_backend.dtos.PromptpayDto;
import com.sharewrap.sharewrap_backend.dtos.UserBillDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.mappers.BankAccountMapper;
import com.sharewrap.sharewrap_backend.mappers.BillMapper;
import com.sharewrap.sharewrap_backend.mappers.PromptpayMapper;
import com.sharewrap.sharewrap_backend.mappers.UserBillMapper;
import com.sharewrap.sharewrap_backend.models.*;
import com.sharewrap.sharewrap_backend.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;


@RequiredArgsConstructor
@Service
public class UserBillService {

    private final UserRepository userRepository;
    private final UserBillMapper userBillMapper;
    private final BillRepository billRepository;
    private final PromptpayRepository promptpayRepository;
    private final PromptpayMapper promptpayMapper;
    private final BankAccountRepository bankAccountRepository;
    private final BankAccountMapper bankAccountMapper;
    private final BillMapper billMapper;

    public List<UserBillDto> getUserBills(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        List<UserBill> userBills = user.getUserBills();
        List<UserBillDto> userBillDtos = userBillMapper.toUserBillDtos(userBills);

        for(UserBillDto userBillDto: userBillDtos){
            Bill bill =  billRepository.findById(userBillDto.getBillId())
                    .orElseThrow(() -> new AppException("Unknown bill", HttpStatus.NOT_FOUND));
            userBillDto.setBillName(bill.getName());
            userBillDto.setPaymentType(bill.getPaymentType());
            User billOwner = bill.getUser();
            userBillDto.setBillOwnerName(billOwner.getUsername());
            userBillDto.setBillCreatedDate(bill.getCreatedDate());

            if(bill.getPaymentType() == 'P') {
                Promptpay promptpay = promptpayRepository.findByUser(billOwner)
                        .orElseThrow(() -> new AppException("Unknown promptpay", HttpStatus.NOT_FOUND));
                PromptpayDto promptpayDto = promptpayMapper.toPromptpayDto(promptpay);
                userBillDto.setPromptpayDto(promptpayDto);
            }
            else if(bill.getPaymentType() == 'B'){
                BankAccount bankAccount = bankAccountRepository.findByUser(billOwner)
                        .orElseThrow(() -> new AppException("Unknown bank account", HttpStatus.NOT_FOUND));
                BankAccountDto bankAccountDto = bankAccountMapper.toBankAccountDto(bankAccount);
                userBillDto.setBankAccountDto(bankAccountDto);
            }
        }
        return userBillMapper.toUserBillDtos(userBills);
    }

}
