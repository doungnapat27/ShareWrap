package com.sharewrap.sharewrap_backend.services;

import com.sharewrap.sharewrap_backend.dtos.BillDto;
import com.sharewrap.sharewrap_backend.exceptions.AppException;
import com.sharewrap.sharewrap_backend.mappers.BillMapper;
import com.sharewrap.sharewrap_backend.mappers.ItemMapper;
import com.sharewrap.sharewrap_backend.mappers.UserBillMapper;
import com.sharewrap.sharewrap_backend.models.Bill;
import com.sharewrap.sharewrap_backend.repositories.BillRepository;
import com.sharewrap.sharewrap_backend.repositories.ItemRepository;
import com.sharewrap.sharewrap_backend.repositories.UserBillRepository;
import com.sharewrap.sharewrap_backend.repositories.UserRepository;
import org.junit.Test;
import org.mockito.Mockito;

import java.sql.SQLException;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class BillServiceTests {
    @Test
    public void test_returns_empty_list_no_bills() {
        BillRepository billRepository = mock(BillRepository.class);
        BillMapper billMapper = mock(BillMapper.class);
        UserRepository userRepository = mock(UserRepository.class);
        UserBillMapper userBillMapper = mock(UserBillMapper.class);
        ItemMapper itemMapper = mock(ItemMapper.class);
        UserBillRepository userBillRepository = mock(UserBillRepository.class);
        ItemRepository itemRepository = mock(ItemRepository.class);

        BillService billService = new BillService(billRepository, billMapper, userRepository, userBillMapper, itemMapper, userBillRepository, itemRepository);
        // Arrange
        List<Bill> bills = new ArrayList<>();
        when(billRepository.findAll()).thenReturn(bills);

        // Act
        List<BillDto> result = billService.allBills();

        // Assert
        assertTrue(result.isEmpty());
    }

    @Test
    public void test_returns_empty_list_repository_null() {
        BillRepository billRepository = mock(BillRepository.class);
        BillMapper billMapper = mock(BillMapper.class);
        UserRepository userRepository = mock(UserRepository.class);
        UserBillMapper userBillMapper = mock(UserBillMapper.class);
        ItemMapper itemMapper = mock(ItemMapper.class);
        UserBillRepository userBillRepository = mock(UserBillRepository.class);
        ItemRepository itemRepository = mock(ItemRepository.class);

        BillService billService = new BillService(billRepository, billMapper, userRepository, userBillMapper, itemMapper, userBillRepository, itemRepository);

        // Arrange
        when(billRepository.findAll()).thenReturn(null);

        // Act
        List<BillDto> result = billService.allBills();

        // Assert
        assertTrue(result.isEmpty());
    }

    @Test(expected = AppException.class)
    public void test_throws_app_exception_if_user_id_not_found() throws SQLException {
        BillRepository billRepository = mock(BillRepository.class);
        BillMapper billMapper = mock(BillMapper.class);
        UserRepository userRepository = mock(UserRepository.class);
        UserBillMapper userBillMapper = mock(UserBillMapper.class);
        ItemMapper itemMapper = mock(ItemMapper.class);
        UserBillRepository userBillRepository = mock(UserBillRepository.class);
        ItemRepository itemRepository = mock(ItemRepository.class);

        BillService billService = new BillService(billRepository, billMapper, userRepository, userBillMapper, itemMapper, userBillRepository, itemRepository);
        String userId = "unknownUser";

        // Act
        billService.allBillsUser(userId);
    }

    @Test(expected = AppException.class)
    public void test_throws_app_exception_if_bill_not_found() throws SQLException {
        BillRepository billRepository = mock(BillRepository.class);
        BillMapper billMapper = mock(BillMapper.class);
        UserRepository userRepository = mock(UserRepository.class);
        UserBillMapper userBillMapper = mock(UserBillMapper.class);
        ItemMapper itemMapper = mock(ItemMapper.class);
        UserBillRepository userBillRepository = mock(UserBillRepository.class);
        ItemRepository itemRepository = mock(ItemRepository.class);

        BillService billService = new BillService(billRepository, billMapper, userRepository, userBillMapper, itemMapper, userBillRepository, itemRepository);
        String userId = "user123";

        // Act
        billService.allBillsUser(userId);
    }

    @Test(expected = AppException.class)
    public void test_update_bill_invalid_id() {
        // Arrange
        Long id = 1L;
        BillDto billDto = new BillDto();
        BillRepository billRepository = mock(BillRepository.class);
        BillMapper billMapper = mock(BillMapper.class);
        UserRepository userRepository = mock(UserRepository.class);
        UserBillMapper userBillMapper = mock(UserBillMapper.class);
        ItemMapper itemMapper = mock(ItemMapper.class);
        UserBillRepository userBillRepository = mock(UserBillRepository.class);
        ItemRepository itemRepository = mock(ItemRepository.class);

        BillService billService = new BillService(billRepository, billMapper, userRepository, userBillMapper, itemMapper, userBillRepository, itemRepository);
        when(billRepository.findById(id)).thenReturn(Optional.empty());

        // Act
        billService.updateBill(id, billDto);
    }

    @Test
    public void test_return_bill_dto_valid_id() {
        BillRepository billRepository = mock(BillRepository.class);
        BillMapper billMapper = mock(BillMapper.class);
        UserRepository userRepository = mock(UserRepository.class);
        UserBillMapper userBillMapper = mock(UserBillMapper.class);
        ItemMapper itemMapper = mock(ItemMapper.class);
        UserBillRepository userBillRepository = mock(UserBillRepository.class);
        ItemRepository itemRepository = mock(ItemRepository.class);

        BillService billService = new BillService(billRepository, billMapper, userRepository, userBillMapper, itemMapper, userBillRepository, itemRepository);
        // Arrange
        Long id = 1L;
        Bill bill = new Bill();
        bill.setId(id);
        BillDto expectedBillDto = new BillDto();
        expectedBillDto.setId(id);

        Mockito.when(billRepository.findById(id)).thenReturn(Optional.of(bill));
        Mockito.when(billMapper.toBillDto(bill)).thenReturn(expectedBillDto);

        // Act
        BillDto actualBillDto = billService.getBill(id);

        // Assert
        assertEquals(expectedBillDto, actualBillDto);
        Mockito.verify(billRepository, times(1)).findById(id);
        Mockito.verify(billMapper, times(1)).toBillDto(bill);
    }

    @Test
    public void test_return_correct_bill_dto_valid_id() {
        BillRepository billRepository = mock(BillRepository.class);
        BillMapper billMapper = mock(BillMapper.class);
        UserRepository userRepository = mock(UserRepository.class);
        UserBillMapper userBillMapper = mock(UserBillMapper.class);
        ItemMapper itemMapper = mock(ItemMapper.class);
        UserBillRepository userBillRepository = mock(UserBillRepository.class);
        ItemRepository itemRepository = mock(ItemRepository.class);

        BillService billService = new BillService(billRepository, billMapper, userRepository, userBillMapper, itemMapper, userBillRepository, itemRepository);
        // Arrange
        Long id = 1L;
        Bill bill = new Bill();
        bill.setId(id);
        bill.setName("Test Bill");
        BillDto expectedBillDto = new BillDto();
        expectedBillDto.setId(id);
        expectedBillDto.setName("Test Bill");

        Mockito.when(billRepository.findById(id)).thenReturn(Optional.of(bill));
        Mockito.when(billMapper.toBillDto(bill)).thenReturn(expectedBillDto);

        // Act
        BillDto actualBillDto = billService.getBill(id);

        // Assert
        assertEquals(expectedBillDto, actualBillDto);
        Mockito.verify(billRepository, times(1)).findById(id);
        Mockito.verify(billMapper, times(1)).toBillDto(bill);
    }

//    @Test
//    public void test_handle_null_receipt_no_receipt() {
//        BillRepository billRepository = mock(BillRepository.class);
//        BillMapper billMapper = mock(BillMapper.class);
//        UserRepository userRepository = mock(UserRepository.class);
//        UserBillMapper userBillMapper = mock(UserBillMapper.class);
//        ItemMapper itemMapper = mock(ItemMapper.class);
//        UserBillRepository userBillRepository = mock(UserBillRepository.class);
//        ItemRepository itemRepository = mock(ItemRepository.class);
//
//        BillService billService = new BillService(billRepository, billMapper, userRepository, userBillMapper, itemMapper, userBillRepository, itemRepository);
//        // Arrange
//        Long id = 1L;
//        Bill bill = new Bill();
//        bill.setId(id);
//        bill.setReceipt(null);
//        BillDto expectedBillDto = new BillDto();
//        expectedBillDto.setId(id);
//        expectedBillDto.setReceipt(null);
//
//        Mockito.when(billRepository.findById(id)).thenReturn(Optional.of(bill));
//        Mockito.when(billMapper.toBillDto(bill)).thenReturn(expectedBillDto);
//
//        // Act
//        BillDto actualBillDto = billService.getBill(id);
//
//        // Assert
//        assertEquals(expectedBillDto, actualBillDto);
//        Mockito.verify(billRepository, times(1)).findById(id);
//        Mockito.verify(billMapper, times(1)).toBillDto(bill);
//    }
}