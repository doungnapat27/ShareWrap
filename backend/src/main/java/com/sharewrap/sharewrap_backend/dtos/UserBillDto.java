package com.sharewrap.sharewrap_backend.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Getter
@Setter
public class UserBillDto {

    private Long id;
    @NotNull
    private String userId;

    @NotNull
    private Long billId;

    @NotNull
    private Double shareTotal;

    private boolean isPaid;

    @NotNull
    private List<ItemDto> items;
}
