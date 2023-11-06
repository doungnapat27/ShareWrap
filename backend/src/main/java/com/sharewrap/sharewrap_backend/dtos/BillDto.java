package com.sharewrap.sharewrap_backend.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.Date;

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

    @NotNull
    private Double amount;

    private Date dueDate;

    @NotNull
    private Date createdDate;

    @NotNull
    private boolean isPaid;


    private String userId;


}