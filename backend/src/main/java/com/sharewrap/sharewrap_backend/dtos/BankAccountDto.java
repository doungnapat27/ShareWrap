package com.sharewrap.sharewrap_backend.dtos;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BankAccountDto extends PaymentDto{
    private String bankName;
    private String accountNumber;
}
