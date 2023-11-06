package com.sharewrap.sharewrap_backend.mappers;

import com.sharewrap.sharewrap_backend.dtos.BillDto;
import com.sharewrap.sharewrap_backend.models.Bill;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BillMapper {
    Bill toBill(BillDto billDto);

    BillDto toBillDto(Bill bill);

    List<BillDto> toBillDtos(List<Bill> bills);

    void updateBill(@MappingTarget Bill target, Bill source);

}
