package com.sharewrap.sharewrap_backend.services;

import com.sharewrap.sharewrap_backend.dtos.ItemDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.mappers.ItemMapper;
import com.sharewrap.sharewrap_backend.models.Item;
import com.sharewrap.sharewrap_backend.models.Bill;
import com.sharewrap.sharewrap_backend.repositories.BillRepository;
import com.sharewrap.sharewrap_backend.repositories.ItemRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ItemService {
    private final ItemRepository itemRepository;
    private final ItemMapper itemMapper;
    private final BillRepository billRepository;

    public List<ItemDto> allItems() {
        return itemMapper.toItemDtos(itemRepository.findAll());
    }
    public List<ItemDto> allItemsBill(Long billId) {
        Bill bill = billRepository.findById(billId)
                .orElseThrow(() -> new AppException("Unknown bill", HttpStatus.NOT_FOUND));
        List<Item> items = new ArrayList<>();
        items.addAll(bill.getItems());
        return itemMapper.toItemDtos(items);
    }

    public ItemDto createItem(ItemDto itemDto) {
        Item item = itemMapper.toItem(itemDto);

        Item savedItem = itemRepository.save(item);

        return itemMapper.toItemDto(savedItem);
    }

    public ItemDto updateItem(Long id, ItemDto itemDto) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new AppException("Item not found", HttpStatus.NOT_FOUND));

        itemMapper.updateItem(item, itemMapper.toItem(itemDto));

        Item savedItem = itemRepository.save(item);

        return itemMapper.toItemDto(savedItem);
    }

    public ItemDto getItem(Long id) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new AppException("Item not found", HttpStatus.NOT_FOUND));

        return itemMapper.toItemDto(item);
    }

    public ItemDto getItemBill(Long billId, Long id) {
        Bill bill = billRepository.findById(billId)
                .orElseThrow(() -> new AppException("Unknown bill", HttpStatus.NOT_FOUND));
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new AppException("Item not found", HttpStatus.NOT_FOUND));
        if (!bill.getItems().contains(item)) {
            throw new AppException("Item not found", HttpStatus.NOT_FOUND);
        }
        return itemMapper.toItemDto(item);
    }

    @Transactional
    public ItemDto deleteItem(Long id) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new AppException("Item not found", HttpStatus.NOT_FOUND));
        ItemDto itemDto = itemMapper.toItemDto(item);
        itemRepository.deleteById(id);

        return itemDto;
    }

    public Double shareItem(Long id) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new AppException("Item not found", HttpStatus.NOT_FOUND));
        return item.getEqualShare();
    }

}
