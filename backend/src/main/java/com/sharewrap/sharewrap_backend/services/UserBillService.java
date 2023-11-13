package com.sharewrap.sharewrap_backend.services;


import com.sharewrap.sharewrap_backend.mappers.BillMapper;
import com.sharewrap.sharewrap_backend.mappers.UserBillMapper;
import com.sharewrap.sharewrap_backend.repositories.BillRepository;
import com.sharewrap.sharewrap_backend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service
public class UserBillService {
    private final BillRepository billRepository;
    private final UserBillMapper userBillMapper;
    private final UserRepository userRepository;
}
