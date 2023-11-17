package com.sharewrap.sharewrap_backend.dtos;

import lombok.*;
import lombok.experimental.SuperBuilder;

@Data
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentDto {

    String name;
    String userId;

}
