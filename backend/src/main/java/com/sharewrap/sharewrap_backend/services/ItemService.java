package com.sharewrap.sharewrap_backend.services;

import com.sharewrap.sharewrap_backend.dtos.ItemDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.mappers.ItemMapper;
import com.sharewrap.sharewrap_backend.models.Item;
import com.sharewrap.sharewrap_backend.models.UserBill;
import com.sharewrap.sharewrap_backend.repositories.ItemRepository;
import com.sharewrap.sharewrap_backend.repositories.UserBillRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ItemService {
    private final ItemRepository itemRepository;
    private final ItemMapper itemMapper;

    public List<ItemDto> allItems() {
        return itemMapper.toItemDtos(itemRepository.findAll());
    }

    @Transactional
    public List<ItemDto> addItems(List<ItemDto> itemDtos) {
        List<Item> items = itemMapper.toItems(itemDtos);
        List<Item> savedItems = itemRepository.saveAll(items);
        return itemMapper.toItemDtos(savedItems);
    }
//    public List<ItemDto> allItemsBill(Long billId) {
//        Bill bill = billRepository.findById(billId)
//                .orElseThrow(() -> new AppException("Unknown bill", HttpStatus.NOT_FOUND));
//        List<Item> items = new ArrayList<>();
//        items.addAll(bill.getItems());
//        return itemMapper.toItemDtos(items);
//    }

//    @Transactional
//    public Item createItem(ItemDto itemDto, UserBill userBill) {
//
//        Item item = itemMapper.toItem(itemDto);
//        item.setUserBill(userBill);
//
//        return itemRepository.save(item);
//    }

//    public ItemDto updateItem(Long id, ItemDto itemDto) {
//        Item item = itemRepository.findById(id)
//                .orElseThrow(() -> new AppException("Item not found", HttpStatus.NOT_FOUND));
//
//        itemMapper.updateItem(item, itemMapper.toItem(itemDto));
//
//        Item savedItem = itemRepository.save(item);
//
//        return itemMapper.toItemDto(savedItem);
//    }

    public ItemDto getItem(Long id) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new AppException("Item not found", HttpStatus.NOT_FOUND));

        return itemMapper.toItemDto(item);
    }

//    public ItemDto getItemBill(Long billId, Long id) {
//        Bill bill = billRepository.findById(billId)
//                .orElseThrow(() -> new AppException("Unknown bill", HttpStatus.NOT_FOUND));
//        Item item = itemRepository.findById(id)
//                .orElseThrow(() -> new AppException("Item not found", HttpStatus.NOT_FOUND));
//        if (!bill.getItems().contains(item)) {
//            throw new AppException("Item not found", HttpStatus.NOT_FOUND);
//        }
//        return itemMapper.toItemDto(item);
//    }

//    @Transactional
//    public ItemDto deleteItem(Long id) {
//        Item item = itemRepository.findById(id)
//                .orElseThrow(() -> new AppException("Item not found", HttpStatus.NOT_FOUND));
//        ItemDto itemDto = itemMapper.toItemDto(item);
//        itemRepository.deleteById(id);
//
//        return itemDto;
//    }
//
//    public Double shareItem(Long id) {
//        Item item = itemRepository.findById(id)
//                .orElseThrow(() -> new AppException("Item not found", HttpStatus.NOT_FOUND));
//        return item.getEqualShare();
//    }

}
