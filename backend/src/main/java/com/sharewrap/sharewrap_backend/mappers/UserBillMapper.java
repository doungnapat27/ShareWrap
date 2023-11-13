package com.sharewrap.sharewrap_backend.mappers;

import com.sharewrap.sharewrap_backend.dtos.UserBillDto;
import com.sharewrap.sharewrap_backend.models.UserBill;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserBillMapper {
    UserBill toUserBill(UserBillDto userBillDto);

    UserBillDto toUserBillDto(UserBill userbill);

    List<UserBillDto> toUserBillDtos(List<UserBill> userBills);
    List<UserBill> toUserBills(List<UserBillDto> userBills);

    void updateUserBill(@MappingTarget UserBill target, UserBill source);
}
