package com.sharewrap.sharewrap_backend.dtos;

import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PromptpayDto extends PaymentDto{

    private String phoneNumber;
}
