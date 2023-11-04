package com.sharewrap.sharewrap_backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@AllArgsConstructor
@Data
@Builder
public class ErrorDto {
    String message;
}
