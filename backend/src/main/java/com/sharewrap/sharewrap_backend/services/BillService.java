package com.sharewrap.sharewrap_backend.services;

import com.sharewrap.sharewrap_backend.dtos.BillDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.mappers.BillMapper;
import com.sharewrap.sharewrap_backend.models.Bill;
import com.sharewrap.sharewrap_backend.models.User;
import com.sharewrap.sharewrap_backend.repositories.BillRepository;
import com.sharewrap.sharewrap_backend.repositories.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class BillService {
    private final BillRepository billRepository;
    private final BillMapper billMapper;
    private final UserRepository userRepository;

    public List<BillDto> allBills() {
        return billMapper.toBillDtos(billRepository.findAll());
    }
    public List<BillDto> allBillsUser(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        List<Bill> bills = new ArrayList<>();
        bills.addAll(user.getBills());
        return billMapper.toBillDtos(bills);
    }

    public BillDto createBill(BillDto billDto) {
        Bill bill = billMapper.toBill(billDto);

        Bill savedBill = billRepository.save(bill);

        return billMapper.toBillDto(savedBill);
    }

    public BillDto updateBill(Long id, BillDto billDto) {
        Bill bill = billRepository.findById(id)
                .orElseThrow(() -> new AppException("Bill not found", HttpStatus.NOT_FOUND));

        billMapper.updateBill(bill, billMapper.toBill(billDto));

        Bill savedBill = billRepository.save(bill);

        return billMapper.toBillDto(savedBill);
    }

    public BillDto getBill(Long id) {
        Bill bill = billRepository.findById(id)
                .orElseThrow(() -> new AppException("Bill not found", HttpStatus.NOT_FOUND));

        return billMapper.toBillDto(bill);
    }

    public BillDto getBillUser(String userId, Long id) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        Bill bill = billRepository.findById(id)
                .orElseThrow(() -> new AppException("Bill not found", HttpStatus.NOT_FOUND));
        if (!user.getBills().contains(bill)) {
            throw new AppException("Bill not found", HttpStatus.NOT_FOUND);
        }
        return billMapper.toBillDto(bill);
    }

    @Transactional
    public BillDto deleteBill(Long id) {
        Bill bill = billRepository.findById(id)
                .orElseThrow(() -> new AppException("Bill not found", HttpStatus.NOT_FOUND));
        BillDto billDto = billMapper.toBillDto(bill);

        billRepository.deleteById(id);

        return billDto;
    }

//    public Double getBillTotal(Long id) {
//        Bill bill = billRepository.findById(id)
//                .orElseThrow(() -> new AppException("Bill not found", HttpStatus.NOT_FOUND));
//        return bill.getTotal();
//    }
//
//    public Double EqualShare(Long id) {
//        Bill bill = billRepository.findById(id)
//                .orElseThrow(() -> new AppException("Bill not found", HttpStatus.NOT_FOUND));
//        return bill.getEqualShare();
//    }

}
