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

    @GetMapping("/{billId}/items")
    public ResponseEntity<List<ItemDto>> allItems(@PathVariable Long billId) {
        return ResponseEntity.ok(itemService.allItemsBill(billId));
    }

    @GetMapping("/items/{id}")
    public ResponseEntity<ItemDto> getItem(@PathVariable Long id) {
        return ResponseEntity.ok(itemService.getItem(id));
    }

    @GetMapping("/{billId}/items/{id}")
    public ResponseEntity<ItemDto> getItem( @PathVariable Long billId, @PathVariable Long id) {
        return ResponseEntity.ok(itemService.getItemBill(billId,id));
    }

    @PostMapping("/items")
    public ResponseEntity<ItemDto> createItem(@Valid @RequestBody ItemDto itemDto) {
        ItemDto createdItem = itemService.createItem(itemDto);
        return ResponseEntity.created(URI.create("/items/" + itemDto.getId())).body(createdItem);
    }


    @PutMapping("/items/{id}")
    public ResponseEntity<ItemDto> updateItem(@PathVariable Long id, @Valid @RequestBody ItemDto itemDto) {
        return ResponseEntity.ok(itemService.updateItem(id, itemDto));
    }

    @DeleteMapping("/items/{id}")
    public ResponseEntity<ItemDto> deleteItem(@PathVariable Long id) {
        return ResponseEntity.ok(itemService.deleteItem(id));
    }
}
