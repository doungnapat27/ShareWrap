package com.sharewrap.sharewrap_backend.mappers;

import com.sharewrap.sharewrap_backend.dtos.BankAccountDto;
import com.sharewrap.sharewrap_backend.models.BankAccount;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface BankAccountMapper {

    BankAccountDto toBankAccountDto(BankAccount bankAccount);
    BankAccount toBankAccount(BankAccountDto bankAccountDto);

    void updateBankAccount(@MappingTarget BankAccount target, BankAccount source);
}
