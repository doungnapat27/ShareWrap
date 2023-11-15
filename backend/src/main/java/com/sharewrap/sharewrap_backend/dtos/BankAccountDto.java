package com.sharewrap.sharewrap_backend.dtos;

import lombok.*;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@Builder
@AllArgsConstructor
@Data
@NoArgsConstructor
public class BankAccountDto {
    Long id;
    String name;
    String userId;
    private String bankName;
    private String accountNumber;

}
