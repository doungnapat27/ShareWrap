package com.sharewrap.sharewrap_backend.controllers;

import com.sharewrap.sharewrap_backend.dtos.ItemDto;
import com.sharewrap.sharewrap_backend.services.ItemService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class ItemController {
    private final ItemService itemService;

    @GetMapping("/items")
    public ResponseEntity<List<ItemDto>> allItems() {
        return ResponseEntity.ok(itemService.allItems());
    }


    @GetMapping("/items/{id}")
    public ResponseEntity<ItemDto> getItem(@PathVariable Long id) {
        return ResponseEntity.ok(itemService.getItem(id));
    }

//    @GetMapping("/{userBillId}/items/{id}")
//    public ResponseEntity<ItemDto> getItem( @PathVariable Long billId, @PathVariable Long id) {
//        return ResponseEntity.ok(itemService.getItemBill(billId,id));
//    }

}
