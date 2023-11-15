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
public class BillDto {

    private Long id;

    @NotNull
    private String name;

    private boolean isPaid;

    @NotNull
    private String userId;

    @NotNull
    private List<UserBillDto> userBills;

    private char paymentType;



}
