package com.sharewrap.sharewrap_backend.mappers;

import com.sharewrap.sharewrap_backend.dtos.BankAccountDto;
import com.sharewrap.sharewrap_backend.models.BankAccount;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BankAccountMapper {

    BankAccountDto toBankAccountDto(BankAccount bankAccount);
    BankAccount toBankAccount(BankAccountDto bankAccountDto);
}
