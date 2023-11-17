package com.sharewrap.sharewrap_backend.mappers;

import com.sharewrap.sharewrap_backend.dtos.PaymentDto;
import com.sharewrap.sharewrap_backend.dtos.PromptpayDto;
import com.sharewrap.sharewrap_backend.models.Payment;
import com.sharewrap.sharewrap_backend.models.Promptpay;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface PromptpayMapper {

    PromptpayDto toPromptpayDto(Promptpay promptpay);
    Promptpay toPromptpay(PromptpayDto promptpayDto);

    void updatePromptpay(@MappingTarget Promptpay target, Promptpay source);
}
