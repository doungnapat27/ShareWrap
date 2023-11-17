package com.sharewrap.sharewrap_backend.mappers;

import com.sharewrap.sharewrap_backend.dtos.PaymentDto;
import com.sharewrap.sharewrap_backend.models.Payment;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PaymentMapper {

    Payment toPayment(PaymentDto paymentDto);
    PaymentDto toPaymentDto(Payment payment);
}
