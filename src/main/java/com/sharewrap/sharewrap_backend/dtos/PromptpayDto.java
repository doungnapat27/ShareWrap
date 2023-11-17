package com.sharewrap.sharewrap_backend.dtos;

import lombok.*;
import lombok.experimental.SuperBuilder;


@Getter
@Setter
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PromptpayDto {
    Long id;
    String name;
    String userId;
    private String phoneNumber;

}
