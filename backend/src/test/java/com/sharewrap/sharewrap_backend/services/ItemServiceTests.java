package com.sharewrap.sharewrap_backend.services;

import com.sharewrap.sharewrap_backend.dtos.ItemDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.mappers.ItemMapper;
import com.sharewrap.sharewrap_backend.models.Item;
import com.sharewrap.sharewrap_backend.repositories.ItemRepository;
import org.junit.Test;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class ItemServiceTests {
    @Test
    public void test_empty_list() {
        ItemRepository itemRepository = mock(ItemRepository.class);
        ItemMapper itemMapper = mock(ItemMapper.class);

        // Creating a new instance of ItemService with MOCKED repositories and mapper
        ItemService itemService = new ItemService(itemRepository, itemMapper);

        when(itemRepository.findAll()).thenReturn(Collections.emptyList());

        List<ItemDto> result = itemService.allItems();

        assertTrue(result.isEmpty());
    }
//    @Test
//    public void test_non_null_fields_list() {
//        ItemRepository itemRepository = Mockito.mock(ItemRepository.class);
//        ItemMapper itemMapper = Mockito.mock(ItemMapper.class);
//
//        // Creating a new instance of ItemService with MOCKED repositories and mapper
//        ItemService itemService = new ItemService(itemRepository, itemMapper);
//
//        List<Item> itemList = new ArrayList<>();
//        Item item = new Item();
//        item.setName("Item 1");
//        item.setPrice(10.0);
//        itemList.add(item);
//        when(itemRepository.findAll()).thenReturn(itemList);
//
//        List<ItemDto> result = itemService.allItems();
//
//        assertEquals(1, result.size());
//        assertEquals("Item 1", result.get(0).getName());
//        assertEquals(10.0, result.get(0).getPrice(), 0.001);
//    }
//    @Test
//    public void test_not_empty_list() {
//        ItemRepository itemRepository = mock(ItemRepository.class);
//        ItemMapper itemMapper = mock(ItemMapper.class);
//
//        // Creating a new instance of ItemService with MOCKED repositories and mapper
//        ItemService itemService = new ItemService(itemRepository, itemMapper);
//
//        List<Item> itemList = new ArrayList<>();
//        itemList.add(new Item());
//        when(itemRepository.findAll()).thenReturn(itemList);
//
//        List<ItemDto> result = itemService.allItems();
//
//        assertEquals(1, result.size());
//    }
    @Test
    public void test_returns_correct_item_with_correct_id() {
        ItemRepository itemRepository = mock(ItemRepository.class);
        ItemMapper itemMapper = mock(ItemMapper.class);

        // Creating a new instance of ItemService with MOCKED repositories and mapper
        ItemService itemService = new ItemService(itemRepository, itemMapper);
        // Arrange
        Long itemId = 1L;
        Item item = new Item("Test Item", 10.0);
        item.setId(itemId);
        ItemDto expectedItemDto = new ItemDto();
        expectedItemDto.setId(itemId);
        expectedItemDto.setName("Test Item");
        expectedItemDto.setPrice(10.0);

        when(itemRepository.findById(itemId)).thenReturn(Optional.of(item));
        when(itemMapper.toItemDto(item)).thenReturn(expectedItemDto);

        // Act
        ItemDto result = itemService.getItem(itemId);

        // Assert
        assertEquals(expectedItemDto.getId(), result.getId());
        verify(itemRepository, times(1)).findById(itemId);
        verify(itemMapper, times(1)).toItemDto(item);
    }
    @Test
    public void test_throws_app_exception_with_status_not_found_if_item_not_exists() {
        ItemRepository itemRepository = mock(ItemRepository.class);
        ItemMapper itemMapper = mock(ItemMapper.class);

        // Creating a new instance of ItemService with MOCKED repositories and mapper
        ItemService itemService = new ItemService(itemRepository, itemMapper);
        // Arrange
        Long itemId = 1L;

        Mockito.when(itemRepository.findById(itemId)).thenReturn(Optional.empty());

        // Act and Assert
        assertThrows(AppException.class, () -> itemService.getItem(itemId));
        Mockito.verify(itemRepository, Mockito.times(1)).findById(itemId);
    }
    @Test
    public void test_throws_app_exception_with_status_not_found_if_id_parameter_is_null() {
        ItemRepository itemRepository = mock(ItemRepository.class);
        ItemMapper itemMapper = mock(ItemMapper.class);

        // Creating a new instance of ItemService with MOCKED repositories and mapper
        ItemService itemService = new ItemService(itemRepository, itemMapper);
        // Arrange
        Long itemId = null;

        // Act and Assert
        assertThrows(AppException.class, () -> itemService.getItem(itemId));
        Mockito.verify(itemRepository, Mockito.never()).findById(Mockito.anyLong());
    }
}
