package com.sharewrap.sharewrap_backend.services;

import com.sharewrap.sharewrap_backend.dtos.BillDto;
import com.sharewrap.sharewrap_backend.dtos.ItemDto;
import com.sharewrap.sharewrap_backend.dtos.UserBillDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.mappers.BillMapper;
import com.sharewrap.sharewrap_backend.mappers.ItemMapper;
import com.sharewrap.sharewrap_backend.mappers.UserBillMapper;
import com.sharewrap.sharewrap_backend.models.Bill;
import com.sharewrap.sharewrap_backend.models.Item;
import com.sharewrap.sharewrap_backend.models.User;
import com.sharewrap.sharewrap_backend.models.UserBill;
import com.sharewrap.sharewrap_backend.repositories.BillRepository;
import com.sharewrap.sharewrap_backend.repositories.ItemRepository;
import com.sharewrap.sharewrap_backend.repositories.UserBillRepository;
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
    private final UserBillMapper userBillMapper;
    private final ItemMapper itemMapper;
    private final UserBillRepository userBillRepository;
    private final ItemRepository itemRepository;

    public List<BillDto> allBills() {
        return billMapper.toBillDtos(billRepository.findAll());
    }
    public List<BillDto> allBillsUser(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        List<Bill> bills = user.getBills();
        return billMapper.toBillDtos(bills);
    }

    @Transactional
    public BillDto createBill(BillDto billDto) {
        Bill bill = billMapper.toBill(billDto);
        User owner = userRepository.findById(billDto.getUserId())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        owner.addBill(bill);
        for(UserBillDto userBillDto: billDto.getUserBills()){
            UserBill userBill = userBillMapper.toUserBill(userBillDto);
            userBill.setBill(bill);
            User shareUser = userRepository.findById(userBillDto.getUserId())
                    .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
            userBill.setUser(shareUser);
            userBillRepository.save(userBill);
            for(ItemDto itemDto: userBillDto.getItems()){
                Item item = itemMapper.toItem(itemDto);
                item.setUserBill(userBill);
                itemRepository.save(item);
            }
        }
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


}
