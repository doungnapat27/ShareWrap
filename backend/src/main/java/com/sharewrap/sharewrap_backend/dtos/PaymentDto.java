package com.sharewrap.sharewrap_backend.dtos;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class PaymentDto {
    String Id;
    String name;
    String userId;

}
