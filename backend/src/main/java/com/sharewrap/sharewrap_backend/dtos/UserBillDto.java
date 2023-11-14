package com.sharewrap.sharewrap_backend.dtos;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Getter
@Setter
public class UserBillDto {
    private Long userId;
    private Long billId;
    private boolean isPaid;
    private List<ItemDto> items;
}
