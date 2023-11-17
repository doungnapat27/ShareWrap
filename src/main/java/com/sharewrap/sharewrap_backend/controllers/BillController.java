package com.sharewrap.sharewrap_backend.controllers;

import com.sharewrap.sharewrap_backend.dtos.BillDto;
import com.sharewrap.sharewrap_backend.services.BillService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.sql.SQLException;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class BillController {

    private final BillService billService;

    @GetMapping("/bills")
    public ResponseEntity<List<BillDto>> allBills() {
        return ResponseEntity.ok(billService.allBills());
    }

    @GetMapping("/{userId}/bills")
    public ResponseEntity<List<BillDto>> allBills(@PathVariable String userId) throws SQLException {
        return ResponseEntity.ok(billService.allBillsUser(userId));
    }

    @GetMapping("/bills/{id}")
    public ResponseEntity<BillDto> getBill(@PathVariable Long id) {
        return ResponseEntity.ok(billService.getBill(id));
    }

    @GetMapping("/{userId}/bills/{id}")
    public ResponseEntity<BillDto> getBill( @PathVariable String userId, @PathVariable Long id) {
        return ResponseEntity.ok(billService.getBillUser(userId,id));
    }

    @PostMapping("/bills")
    public ResponseEntity<BillDto> createBill(@Valid @RequestBody BillDto billDto) {
        System.out.println("BillDto: " + billDto);
        BillDto createdBill = billService.createBill(billDto);
        return ResponseEntity.created(URI.create("/bills/" + billDto.getId())).body(createdBill);
    }


    @PutMapping("/bills/{id}")
    public ResponseEntity<BillDto> updateBill(@PathVariable Long id, @Valid @RequestBody BillDto billDto) {
        return ResponseEntity.ok(billService.updateBill(id, billDto));
    }

    @DeleteMapping("/bills/{id}")
    public ResponseEntity<BillDto> deleteBill(@PathVariable Long id) {
        return ResponseEntity.ok(billService.deleteBill(id));
    }

    @PutMapping("/isPaid/bill/{id}")
    public ResponseEntity<String> updateIsPaidBill(@PathVariable Long id) {
        return ResponseEntity.ok(billService.updateIsPaid(id));
    }

    @PutMapping("/receipt/bill/{id}")
    public ResponseEntity<String> updateReceiptBill(@PathVariable Long id, @Valid @RequestBody String receipt) {
        return ResponseEntity.ok(billService.updateReceipt(id, receipt));
    }

}
