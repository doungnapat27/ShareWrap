package com.sharewrap.sharewrap_backend.dtos;

import com.sharewrap.sharewrap_backend.models.UserBill;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Getter
@Setter
public class ItemDto {

        private Long id;
        @NotNull
        private String name;

        @NotNull
        private Double price;

}
