package com.sharewrap.sharewrap_backend.controllers;

import com.sharewrap.sharewrap_backend.dtos.UserBillDto;
import com.sharewrap.sharewrap_backend.repositories.UserRepository;
import com.sharewrap.sharewrap_backend.services.UserBillService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class UserBillController {

    private final UserBillService userBillService;
    private final UserRepository userRepository;

    @GetMapping("/{userId}/userBills")
    public ResponseEntity<List<UserBillDto>> getUserBills(@PathVariable String userId) {
        return ResponseEntity.ok(userBillService.getUserBills(userId));
    }

    @GetMapping("{userId}/userBills/{id}")
    public ResponseEntity<UserBillDto> getUserBill(@PathVariable String userId, @PathVariable Long id) {
        return ResponseEntity.ok(userBillService.getUserBill(userId, id));
    }
    @PutMapping("/isPaid/userBill/{id}")
    public ResponseEntity<String> updateIsPaidUserBill(@PathVariable Long id) {
        return ResponseEntity.ok(userBillService.updateIsPaid(id));
    }

    @PutMapping("/isApprove/userBill/{id}")
    public ResponseEntity<String> updateIsApproveUserBill(@PathVariable Long id) {
        return ResponseEntity.ok(userBillService.updateIsApprove(id));
    }

    @PutMapping("/receipt/userBill/{id}")
    public ResponseEntity<String> updateReceiptUserBill(@PathVariable Long id, @RequestBody String receipt) {
        return ResponseEntity.ok(userBillService.updateReceipt(id, receipt));
    }

    @GetMapping("/receipt/userBill/{id}")
    public ResponseEntity<String> getReceiptUserBill(@PathVariable Long id) {
        return ResponseEntity.ok(userBillService.getReceipt(id));
    }

}
