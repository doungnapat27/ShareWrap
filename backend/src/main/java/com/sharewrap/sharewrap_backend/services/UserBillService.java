package com.sharewrap.sharewrap_backend.services;


import com.sharewrap.sharewrap_backend.dtos.BankAccountDto;
import com.sharewrap.sharewrap_backend.dtos.PromptpayDto;
import com.sharewrap.sharewrap_backend.dtos.UserBillDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.mappers.BankAccountMapper;
import com.sharewrap.sharewrap_backend.mappers.PromptpayMapper;
import com.sharewrap.sharewrap_backend.mappers.UserBillMapper;
import com.sharewrap.sharewrap_backend.models.*;
import com.sharewrap.sharewrap_backend.repositories.*;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import static com.sharewrap.sharewrap_backend.services.BlobService.convertBase64ToBlob;
import static com.sharewrap.sharewrap_backend.services.BlobService.convertToBase64;


@RequiredArgsConstructor
@Service
public class UserBillService {

    private final UserRepository userRepository;
    private final UserBillMapper userBillMapper;
    private final PromptpayRepository promptpayRepository;
    private final PromptpayMapper promptpayMapper;
    private final BankAccountRepository bankAccountRepository;
    private final BankAccountMapper bankAccountMapper;
    private final UserBillRepository userBillRepository;


    @Transactional
    public List<UserBillDto> getUserBills(String userId) {
        System.out.println("Start to get user bill");

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        List<UserBill> userBills = user.getUserBills();
        List<UserBillDto> userBillDtos = userBillMapper.toUserBillDtos(userBills);
        List<UserBillDto> onlyDebt = new ArrayList<>();

        for(UserBillDto userBillDto: userBillDtos){
            UserBill userBillMapped = userBillMapper.toUserBill(userBillDto);
            UserBill userBill = userBillRepository.findById(userBillMapped.getId())
                    .orElseThrow(() -> new AppException("Unknown user bill", HttpStatus.NOT_FOUND));


            Bill bill = userBill.getBill();
            User billOwner = bill.getUser();

            if(!billOwner.getId().equals(userId)) {
                userBillDto = addDetails(bill, userBillDto, userBill);
                onlyDebt.add(userBillDto);
            }
        }
        return onlyDebt;
    }

    public UserBillDto getUserBill(String userId,Long userBillId){
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        UserBill userBill = userBillRepository.findById(userBillId)
                .orElseThrow(() -> new AppException("Unknown user bill", HttpStatus.NOT_FOUND));
        if(!user.getId().equals(userBill.getUser().getId())) {
            throw new AppException("Don't peep at other bill", HttpStatus.NOT_FOUND);
        }

        UserBillDto userBillDto = userBillMapper.toUserBillDto(userBill);

        return addDetails(userBill.getBill(), userBillDto, userBill);
    }

    public UserBillDto addDetails(Bill bill, UserBillDto userBillDto, UserBill userBill) {
        User billOwner = bill.getUser();

        userBillDto.setBillId(bill.getId());
        userBillDto.setBillName(bill.getName());
        userBillDto.setPaymentType(bill.getPaymentType());
        userBillDto.setReceipt(convertToBase64(userBill.getReceipt()));

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

        return userBillDto;
    }

    public String updateIsPaid(Long id) {
        UserBill userBill = userBillRepository.findById(id)
                .orElseThrow(() -> new AppException("Unknown user bill", HttpStatus.NOT_FOUND));
        userBill.setIsPaid(true);
        userBillRepository.save(userBill);
        return "You paid for what you eat, Thank you na HAFFU~~!";
    }

    public String updateIsApprove(Long id) {
        UserBill userBill = userBillRepository.findById(id)
                .orElseThrow(() -> new AppException("Unknown user bill", HttpStatus.NOT_FOUND));
        userBill.setIsApprove(true);
        userBillRepository.save(userBill);
        return "Bill approved";
    }

    public String updateReceipt(Long id, String receipt) {
        UserBill userBill = userBillRepository.findById(id)
                .orElseThrow(() -> new AppException("UserBill not found", HttpStatus.NOT_FOUND));

        if (receipt.startsWith("data:image/png;base64,")) {
            userBill.setReceiptType("data:image/png;base64,");
        } else {
            userBill.setReceiptType("data:image/jpeg;base64,");
        }
        userBill.setReceipt(convertBase64ToBlob(receipt));
        if(userBill.getReceipt() == null){
            throw new AppException("Receipt is not uploaded", HttpStatus.NOT_FOUND);
        }
        userBill.setUploadedDate(new Date(System.currentTimeMillis()));
        userBill.setIsPaid(true);
        userBillRepository.save(userBill);
        return "Receipt uploaded successfully. You paid for what you eat, Thank you na HAFFU~~!";
    }

    public String getReceipt(Long id) {
        UserBill userBill = userBillRepository.findById(id)
                .orElseThrow(() -> new AppException("UserBill not found", HttpStatus.NOT_FOUND));
        byte[] receipt = userBill.getReceipt();
        if(receipt == null){
            throw new AppException("Receipt is not uploaded", HttpStatus.NOT_FOUND);
        }
        return userBill.getReceiptType()+convertToBase64(receipt);
    }
}
