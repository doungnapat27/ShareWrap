package com.sharewrap.sharewrap_backend.services;


import com.sharewrap.sharewrap_backend.dtos.ItemDto;
import com.sharewrap.sharewrap_backend.dtos.UserBillDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.models.Bill;
import com.sharewrap.sharewrap_backend.models.User;
import com.sharewrap.sharewrap_backend.models.UserBill;
import com.sharewrap.sharewrap_backend.repositories.UserBillRepository;
import com.sharewrap.sharewrap_backend.repositories.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service
public class UserBillService {

    private final UserRepository userRepository;
    private  final UserBillRepository userBillRepository;
    private final ItemService itemService;

//    @Transactional
//    public UserBill createUserBill(UserBillDto userBillDto, Bill bill) {
//        User user = userRepository.findById(userBillDto.getUserId())
//                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
//        UserBill userBill = new UserBill(user, bill, userBillDto.getShareTotal());
//        for(ItemDto itemDto: userBillDto.getItems()){
//            userBill.getItems().add(itemService.createItem(itemDto, userBill));
//        }
//
//        return userBillRepository.save(userBill);
//    }

}
